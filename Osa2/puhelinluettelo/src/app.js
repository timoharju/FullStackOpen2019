import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
            name: newName,
            number: newNumber,
            id: newName,
            button: deleteThisPerson
        }

        if (persons.filter(person => person.name === personObject.name).length > 0) {
            window.alert(personObject.name + ' is already added to phonebook')
            return
        }

        personService
            .create(personObject)
            .then(data => {

                setMessage(`Added '${personObject.name}'`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
                setPersons(persons.concat(data))
                setNewName('')
                setNewNumber('')
            })

    }

    const deleteThisPerson = (id) => {
        const person = persons.find(n => n.id === id)
        if (window.confirm(`Delete ${person.name}?`)) {
            personService
                .deletePerson(id)
                .then(response => {
                    setMessage(`Deleted '${person.name}'`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.id !== id))
                })
        }
    }


    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)

    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <PersonForm
                submitPerson={addPerson}
                nameValue={newName}
                nameChange={handleNameChange}
                numberValue={newNumber}
                numberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} deletePerson={deleteThisPerson} />
        </div>
    )


}


export default App