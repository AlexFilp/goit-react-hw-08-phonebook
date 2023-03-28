import { Filter } from '../../components/Filter/Filter';
import { Form } from '../../components/Form/Form';
import { ContactsList } from '../..//components/ContactsList/ContactsList';
import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Contacts.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <GlobalContainer>
      <Container>
        <Form />
        <Filter />
        <ContactsList />
      </Container>
    </GlobalContainer>
  );
}
