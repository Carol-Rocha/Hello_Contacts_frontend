import { UseFormRegisterReturn } from 'react-hook-form'

export type TProfilePageInput = {
  type: React.HTMLInputTypeAttribute | undefined
  placeholder: string | undefined
  register: UseFormRegisterReturn<string>
  icon: string
  alt: string
}
