// import { UseFormHandleSubmit } from 'react-hook-form'

import { UseFormRegister } from 'react-hook-form'
import { TContactResponse } from '../../../providers/ContactsProvider/types'
import { FormEventHandler } from 'react'

export type TFormValues = TContactResponse

export type TModalContainer = {
  title: string
  paragraph: string
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined
  submitButton: string
  register: UseFormRegister<TContactResponse>
  toggleModal: () => void
}
