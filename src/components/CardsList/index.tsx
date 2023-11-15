import { StyledCardsList } from './style'
import { useContactsContext } from '../../hooks/useContacts'
import { useEffect } from 'react'
import { Card } from './Card'
import searchIcon from '../../assets/icons/search.svg'

export const CardsList = () => {
  const {
    contacts,
    getContacts,
    reloadList,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter
  } = useContactsContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getContacts(searchTerm, 1, filter)
      } catch (error) {
        console.error('Erro ao buscar contatos:', error)
      }
    }

    fetchData()
  }, [reloadList, searchTerm, filter])

  const handleFilterchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  return (
    <StyledCardsList>
      <div className='container'>
        <h1>My Contacts:</h1>
        <div className='filter-container'>
          <div className='select-container'>
            <select
              name='filter'
              id='filter'
              onChange={handleFilterchange}
              value={filter}
            >
              <option value='Filter'>Filter</option>
              <option value='a-z'>a-z</option>
              <option value='z-a'>z-a</option>
            </select>
          </div>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Atualize o estado do termo de pesquisa
            />
            <img src={searchIcon} alt='search icon' />
          </div>
        </div>
      </div>
      <ul className='contacts-list'>
        {contacts &&
          contacts.map((contact) => (
            <Card contact={contact} key={contact.id} />
          ))}
      </ul>
    </StyledCardsList>
  )
}
