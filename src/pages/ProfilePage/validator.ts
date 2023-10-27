import { string, z } from 'zod'

export const updateUserSchema = z.object({
  full_name: z.optional(string().nullable()),
  email: z.optional(string().email().nullable()),
  telephone: z.optional(string().length(15, 'Requires at least 11 characters'))
})

export type TUpdateUser = z.infer<typeof updateUserSchema>
