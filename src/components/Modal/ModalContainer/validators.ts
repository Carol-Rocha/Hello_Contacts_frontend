import { z } from 'zod'

export const createContactSchema = z.object({
  full_name: z.string().nonempty('Name is required'),
  email: z.string().email('Must be a valid email'),
  telephone: z.string().nonempty('Telephone is required')
})

export const updateContactSchema = createContactSchema.partial()

export type TCreateContact = z.infer<typeof createContactSchema>
export type TUpdateContact = z.infer<typeof updateContactSchema>
