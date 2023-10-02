import { ReactNode } from 'react'
import { Header } from '../Header'

interface PagesTemplateProps {
  children: ReactNode
}

export const PagesTemplate = ({ children }: PagesTemplateProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
