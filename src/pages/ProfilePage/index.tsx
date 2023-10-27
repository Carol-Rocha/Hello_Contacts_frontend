import { useForm } from 'react-hook-form'
import { PagesTemplate } from '../../components/PagesTemplate'
import { TUpdateUser, updateUserSchema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserContext } from '../../hooks/useUser'
import { useEffect, useState } from 'react'
import { IUser } from '../../providers/userProvider/types'
import { formatPhoneNumber } from '../../utils/format'
import { StyledProfileComponent } from './style'
import { ProfilePageInput } from '../components/ProfilePageInput'
import profileIcon from '../../assets/icons/profile.svg'
import emailIcon from '../../assets/icons/email.svg'
import telIcon from '../../assets/icons/telephone.svg'

export const ProfilePage = () => {
  const { updateUser, getUser } = useUserContext()

  const [user, setUser] = useState<IUser>()

  const userId = localStorage.getItem('hello-contacts:id')

  useEffect(() => {
    if (userId) {
      getUser(userId).then(setUser)
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUpdateUser>({
    resolver: zodResolver(updateUserSchema)
  })

  return (
    <PagesTemplate>
      <StyledProfileComponent>
        <h1>My profile:</h1>
        <div className='form-info'>
          <h4>Update your profile</h4>
          {user ? (
            <form
              onSubmit={handleSubmit(
                async (formData) => await updateUser(formData, user.id)
              )}
            >
              <ProfilePageInput
                type='text'
                placeholder={user.full_name}
                icon={profileIcon}
                alt='Icon profile'
                register={register('full_name', {
                  value: user.full_name
                })}
              />
              {errors.full_name ? (
                <p className='error-message'>{errors.full_name.message}</p>
              ) : null}
              <ProfilePageInput
                type='email'
                icon={emailIcon}
                alt='Icon profile'
                placeholder={user.email}
                register={register('email', { value: user.email })}
              />
              {errors.email ? (
                <p className='error-message'>{errors.email.message}</p>
              ) : null}
              <ProfilePageInput
                type='tel'
                icon={telIcon}
                alt='Icon profile'
                placeholder={user.telephone}
                register={register('telephone', {
                  value: user.telephone,
                  valueAsNumber: false,
                  onChange: (e) => {
                    const input = e.target
                    formatPhoneNumber(input)
                  }
                })}
              />
              {errors.telephone ? (
                <p className='error-message'>{errors.telephone.message}</p>
              ) : null}

              <button type='submit' id='submit-button'>
                Save
              </button>
            </form>
          ) : null}
        </div>
      </StyledProfileComponent>
    </PagesTemplate>
  )
}
