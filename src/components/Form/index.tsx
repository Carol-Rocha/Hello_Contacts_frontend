import { ReactNode } from 'react'
import loginImage from '../../assets/images/Frame.svg'
import { StyledFormContainer } from './style'

type TFormContainer = {
  title: string
  paragraph: string
  registration_question: string
  submitButton: string
  children: ReactNode
}

export const FormContainer = ({
  title,
  paragraph,
  registration_question,
  submitButton,
  children
}: TFormContainer) => {
  return (
    <StyledFormContainer>
      <section>
        <div className='form-information'>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
        {children}
        <div className='form-buttons'>
          <span>{registration_question}</span>
          <span id='submit-button'>{submitButton}</span>
        </div>
      </section>
      <img src={loginImage} alt='illustration image' />
    </StyledFormContainer>
  )
}
