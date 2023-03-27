import { ListContainer, List, LoaderContainer } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/selectors';
import { selectIsLoading, selectError } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ListContainer>
      {isLoading && !error && (
        <LoaderContainer>
          <RotatingLines height="35" width="35" strokeColor="grey" />
          <p>Loading</p>
        </LoaderContainer>
      )}
      <List>
        {filteredContacts.map(({ id, name, phone }) => {
          return <ContactsItem key={id} id={id} name={name} phone={phone} />;
        })}
      </List>
    </ListContainer>
  );
};
