import { UseFormRegisterReturn } from 'react-hook-form'

export type TInput = {
  type: React.HTMLInputTypeAttribute | undefined
  placeholder: string | undefined
  register: UseFormRegisterReturn<string>
}
