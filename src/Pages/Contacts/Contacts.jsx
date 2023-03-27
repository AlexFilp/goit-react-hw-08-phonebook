import { Filter } from '../../components/Filter/Filter';
import { Form } from '../../components/Form/Form';
import { ContactsList } from '../..//components/ContactsList/ContactsList';
import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Contacts.styled';

export default function Contacts() {
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
