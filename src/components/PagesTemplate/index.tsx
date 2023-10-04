import { ReactNode } from 'react'
import { Header } from '../Header'
import { StyledMainContainer } from '../../styles/components/MainContainer'

interface PagesTemplateProps {
  children: ReactNode
}

export const PagesTemplate = ({ children }: PagesTemplateProps) => {
  return (
    <>
      <Header />
      <StyledMainContainer>{children}</StyledMainContainer>
    </>
  )
}
