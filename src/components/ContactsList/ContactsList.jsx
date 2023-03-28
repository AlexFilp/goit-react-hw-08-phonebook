import { ListContainer, List, LoaderContainer } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/Contacts/selectors';
import { selectIsLoading, selectError } from 'redux/Contacts/selectors';
import { RotatingLines } from 'react-loader-spinner';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ListContainer>
      {isLoading && !error && (
        <LoaderContainer>
          <RotatingLines height="35" width="35" strokeColor="blue" />
        </LoaderContainer>
      )}
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactsItem key={id} id={id} name={name} phone={number} />;
        })}
      </List>
    </ListContainer>
  );
};
