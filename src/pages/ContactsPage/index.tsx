import { PagesTemplate } from '../../components/PagesTemplate'
import { StyledLoading } from '../../styles/components/animation/loadingAnimation'
import loadingImage from '../../assets/images/carregando.png'
import { useEffect, useState } from 'react'
import { CardsList } from '../../components/CardsList'

export const ContactsPage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {loading ? (
        <StyledLoading>
          <img src={loadingImage} alt='loading' />
        </StyledLoading>
      ) : (
        <PagesTemplate>
          <CardsList />
        </PagesTemplate>
      )}
    </>
  )
}
