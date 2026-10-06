CREATE TABLE public.quote_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL,
 phone text NOT NULL,
 email text NOT NULL,
 service text NOT NULL,
 area text NOT NULL,
 description text NOT NULL,
 contact_method text NOT NULL,
 source text NOT NULL,
 request_ip_hash text NOT NULL
);
GRANT ALL ON public.quote_submissions TO service_role;
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX quote_submissions_rate_idx ON public.quote_submissions (request_ip_hash, created_at);
CREATE FUNCTION public.save_quote_submission(p_full_name text, p_phone text, p_email text, p_service text, p_area text, p_description text, p_contact_method text, p_source text, p_ip_hash text)
RETURNS uuid LANGUAGE plpgsql SET search_path = public AS $$
DECLARE result_id uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(p_ip_hash));
 IF (SELECT count(*) FROM public.quote_submissions WHERE request_ip_hash = p_ip_hash AND created_at > now() - interval '15 minutes') >= 5 THEN
 RAISE EXCEPTION 'Please wait before sending another enquiry.';
 END IF;
 INSERT INTO public.quote_submissions(full_name,phone,email,service,area,description,contact_method,source,request_ip_hash) VALUES(p_full_name,p_phone,p_email,p_service,p_area,p_description,p_contact_method,p_source,p_ip_hash) RETURNING id INTO result_id;
 RETURN result_id;
END;
$$;
REVOKE ALL ON FUNCTION public.save_quote_submission(text,text,text,text,text,text,text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.save_quote_submission(text,text,text,text,text,text,text,text,text) TO service_role;