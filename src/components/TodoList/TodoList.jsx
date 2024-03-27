import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'

import React from 'react'


export const TodoList = () => {
	return (
		<section>
			<ContactForm />
			<Filter />
			<ContactList />
		</section>
	)
}