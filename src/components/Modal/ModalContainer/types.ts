import {
  TContactRequest,
  // TContactResponse,
  TUpdateContactRequest
} from '../../../providers/ContactsProvider/types'
import { ReactNode } from 'react'

export type TCreateFormValues = TContactRequest
export type TUpdateFormValues = TUpdateContactRequest

export type TModalContainer = {
  title?: string
  paragraph: string
  children: ReactNode
  toggleModal: () => void
}
