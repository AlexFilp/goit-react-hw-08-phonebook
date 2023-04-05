import { Item, Text, Btn, TelLink } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text>
        {name}: <TelLink href={'tel:' + phone}>{phone}</TelLink>
      </Text>
      <Btn onClick={handleDelete}>Delete</Btn>
    </Item>
  );
};
