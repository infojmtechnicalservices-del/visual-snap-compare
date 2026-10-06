import { z } from 'zod'
export const quoteSchema = z.object({
 full_name: z.string().trim().min(2, 'Please enter your full name.').max(100),
 phone: z.string().trim().min(7, 'Please enter a valid phone number.').max(25).regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number.'),
 email: z.string().trim().email('Please enter a valid email address.').max(254),
 service: z.enum(['Electrical', 'Plumbing', 'Welding', 'Building', 'Multiple']),
 area: z.string().trim().min(2, 'Please enter your suburb.').max(100),
 description: z.string().trim().min(10, 'Please give us a little more detail about the job.').max(3000),
 contact_method: z.enum(['WhatsApp', 'Phone', 'Email']),
 source: z.enum(['quote', 'contact']),
 website: z.string().max(0),
})
export type QuoteInput = z.infer<typeof quoteSchema>