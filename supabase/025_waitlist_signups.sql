-- ============================================================================
-- 025_waitlist_signups.sql
-- Public landing-page waitlist capture for Live.
--
-- RLS model:
-- - anon/authenticated clients can insert signups from the landing page
-- - no public SELECT/UPDATE/DELETE policies are defined, so reads stay private
-- - service role/admin access is still available for exports and Beehiiv syncs
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  normalized_email text GENERATED ALWAYS AS (lower(trim(email))) STORED,
  city text,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  referral_code text,
  beehiiv_subscriber_id text,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'synced_to_beehiiv', 'unsubscribed', 'bounced')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT waitlist_signups_email_format
    CHECK (normalized_email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);

CREATE UNIQUE INDEX IF NOT EXISTS waitlist_signups_normalized_email_key
  ON public.waitlist_signups(normalized_email);

CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at
  ON public.waitlist_signups(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_waitlist_signups_source
  ON public.waitlist_signups(source);

CREATE INDEX IF NOT EXISTS idx_waitlist_signups_utm_campaign
  ON public.waitlist_signups(utm_campaign);

DROP TRIGGER IF EXISTS waitlist_signups_updated_at ON public.waitlist_signups;
CREATE TRIGGER waitlist_signups_updated_at
  BEFORE UPDATE ON public.waitlist_signups
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.waitlist_signups FROM PUBLIC;
GRANT INSERT ON public.waitlist_signups TO anon;
GRANT INSERT ON public.waitlist_signups TO authenticated;

DROP POLICY IF EXISTS "Anyone can join the waitlist" ON public.waitlist_signups;
CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND char_length(normalized_email) BETWEEN 5 AND 254
  );

