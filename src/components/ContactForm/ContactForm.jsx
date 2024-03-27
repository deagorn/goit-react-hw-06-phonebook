import s from "./ContactForm.module.css"

import React from 'react'
import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addContacts } from "../../redux/Contacts/action"

export const ContactForm = () => {

  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  
	const submit = ({ name, number }) => {
		const newContact = { name, number, id: nanoid(), favorite: false }
		dispatch(addContacts(newContact))
		reset()
  }

  return (
    <form className={s.formContainer} onSubmit={handleSubmit(submit)}>
      <label className={s.label}>   Name
        <input {...register('name')} type="text" name="name" required className={s.inputField} /> </label>
      <label className={s.label}>  Number
        <input {...register('number')} type="tel" name="number"  required className={s.inputField} />
      </label>

      <button className={s.submitButton}>Add contact</button>
    </form>
  )
}


// export const ContactForm2 = ({onSubmit}) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChanheValue = e => {
//     const { name, value } = e.target;
//      if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
// };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(name, number);
//   };

//       return ( 
//           <form onSubmit={handleSubmit} className={s.formContainer}>
//               <label className={s.label}>   Name
//                   <input type="text" name="name" value={name} onChange={handleChanheValue} required className={s.inputField}/> </label>
//             <label className={s.label}>  Number
//           <input type="tel" name="number" value={number} onChange={handleChanheValue} required className={s.inputField}/>
//               </label>
              
              
//         </form>
//   );
// }