import { ReactNode } from 'react'
import { StyledFormContainer } from './style'
import { handleButtonClick } from '../../utils/navigation'

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
          <span onClick={handleButtonClick} id='submit-button'>
            {submitButton}
          </span>
        </div>
      </section>
    </StyledFormContainer>
  )
}
