import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { quoteSchema } from './quote-schema'

export const submitQuote = createServerFn({ method: 'POST' })
 .inputValidator((input: unknown) => quoteSchema.parse(input))
 .handler(async ({ data }) => {
  const request = getRequest()
  const ip = request.headers.get('cf-connecting-ip') ?? 'local-preview'
  const salt = process.env['SUPABASE_SERVICE_ROLE_KEY']
  if (!salt) throw new Error('Enquiries are temporarily unavailable. Please call or WhatsApp us.')
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${ip}`))
  const ipHash = Array.from(new Uint8Array(hash)).map(v => v.toString(16).padStart(2, '0')).join('')
  // Public lead submission is intentionally allowed; input, CSRF, honeypot and atomic rate limit gate this narrow write.
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
  const { data: id, error } = await supabaseAdmin.rpc('save_quote_submission', { p_full_name: data.full_name, p_phone: data.phone, p_email: data.email, p_service: data.service, p_area: data.area, p_description: data.description, p_contact_method: data.contact_method, p_source: data.source, p_ip_hash: ipHash })
  if (error) return { success: false as const, message: error.message.includes('Please wait') ? 'Please wait before sending another enquiry, or call us directly.' : 'Your enquiry could not be saved. Please try again or contact us directly.' }
  return { success: true as const, id }
 })