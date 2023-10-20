import { ReactNode } from 'react'

export type TModalContainer = {
  title?: string
  paragraph: string
  children: ReactNode
  toggleModal: () => void
}
