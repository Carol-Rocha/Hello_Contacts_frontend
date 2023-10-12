import { z } from 'zod'

export const registerSchema = z.object({
  full_name: z.string().nonempty('Name is required'),
  email: z.string().email('Must be a valid email'),
  telephone: z.string().nonempty('Telephone is required'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'At least six characters are required.')
    .regex(/(?=.*?[A-Z])/, 'At least one capital letter is required.')
    .regex(/(?=.*?[a-z])/, 'At least one lowercase letter is required.')
    .regex(/(?=.*?[0-9])/, 'At least one number is required.')
  // confirm_password: z.string().nonempty('password confirmation is required')
})
// .refine(({ password, confirm_password }) => password === confirm_password, {
//   message: 'Passwords do not match',
//   path: ['confirm_password']
// })

export type TRegisterData = z.infer<typeof registerSchema>
