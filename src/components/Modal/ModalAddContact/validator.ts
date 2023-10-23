import { z } from 'zod'

export const createContactSchema = z.object({
  full_name: z.string().nonempty('Name is required'),
  email: z.string().email('Must be a valid email'),
  telephone: z
    .string()
    .nonempty('Telephone is required')
    .length(15, 'Requires at least 11 characters')
})

export type TCreateContact = z.infer<typeof createContactSchema>
