import React from 'react'
import Person from './Person'

const Persons = ({ persons, deletePerson }) => {

    const rows = () => persons.map(person =>
        
        <Person key={person.name} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
    )
    return (
        <ul>
        { rows() }
        </ul>
    )
}
export default Persons