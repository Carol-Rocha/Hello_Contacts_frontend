import { ReactNode } from 'react'
import { StyledModalBackground } from './style'

interface IModalProps {
  children: ReactNode
}

export const Modal = ({ children }: IModalProps) => {
  return <StyledModalBackground>{children}</StyledModalBackground>
}
