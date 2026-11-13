import { z } from 'zod'

export const serviceDescriptionSchema = z.object({
  description: z.string().trim().min(10, 'Please add a little more detail about the work.').max(3000),
})

export const serviceRecommendationSchema = z.object({
  service: z.enum(['Electrical', 'Plumbing', 'Welding', 'Building']),
  summary: z.string().trim().min(10).max(900),
})

export type ServiceRecommendation = z.infer<typeof serviceRecommendationSchema>
export type RecommendationResult =
  | { success: true; recommendation: ServiceRecommendation }
  | { success: false; message: string }