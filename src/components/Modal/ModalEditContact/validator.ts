import { string, z } from 'zod'

export const updateContactSchema = z.object({
  full_name: z.optional(string().nullable()),
  email: z.optional(string().email().nullable()),
  telephone: z.optional(string())
})

export type TUpdateContact = z.infer<typeof updateContactSchema>
