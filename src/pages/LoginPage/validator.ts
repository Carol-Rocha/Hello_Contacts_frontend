import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Must be a valid email'),
  password: z.string().nonempty('Password is required')
})

export type TLoginData = z.infer<typeof loginSchema>
