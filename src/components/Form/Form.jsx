import {
  FormTitle,
  ContactForm,
  Label,
  Input,
  Span,
  ErrorMessageContainer,
  ErrorText,
  Btn,
} from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/Contacts/selectors';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onHandleSubmit = data => {
    if (allContacts.find(contact => contact.name === data.name)) {
      return toast.error(`${data.name} is already in contacts!`);
    }
    dispatch(addContact({ name: data.name, number: data.number }));
    reset();
  };

  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm onSubmit={handleSubmit(onHandleSubmit)} autoComplete="off">
        <Label>
          <Span>Name</Span>
          <Input
            {...register('name', {
              required: 'The field is required',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols',
              },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  'Name may contain only letters, apostrophe, dash and spaces.',
              },
            })}
          />
        </Label>
        <ErrorMessageContainer>
          {errors?.name && (
            <ErrorText>{errors?.name?.message || 'Error!'}</ErrorText>
          )}
        </ErrorMessageContainer>
        <Label>
          <Span>Number</Span>
          <Input
            {...register('number', {
              required: 'The field is required',
              minLength: {
                value: 7,
                message: 'Minimum 7 symbols',
              },
              pattern: {
                value:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
            })}
          />
        </Label>
        <ErrorMessageContainer>
          {errors?.number && (
            <ErrorText>{errors?.number?.message || 'Error!'}</ErrorText>
          )}
        </ErrorMessageContainer>
        <Btn type="submit" disabled={!isValid}>
          Add contact
        </Btn>
      </ContactForm>
    </>
  );
};

// type = 'text';
// name = 'name';
// pattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
// title =
//   "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
// required;

//  type = 'tel';
//  name = 'number';
//  pattern = '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';
//  title =
//    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
//  required;

// export class OldForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = evt => {
//     this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
//   };

// handleSubmit = evt => {
//   evt.preventDefault();
//   this.props.onSubmit({
//     ...this.state,
//     id: nanoid(10),
//   });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <ContactForm onSubmit={this.handleSubmit} autoComplete="off">
//         <Label>
//           <Span>Name</Span>
//           <Input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           <Span>Number</Span>
//           <Input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Btn type="submit">Add contact</Btn>
//       </ContactForm>
//     );
//   }
// }
