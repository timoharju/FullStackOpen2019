import React from 'react'


const PersonForm = ({submitPerson, nameValue, nameChange, numberValue, numberChange}) => {
    
	return (
    
        <form onSubmit={submitPerson}>
        <div>name:<input value={nameValue} onChange={nameChange} /></div>
        <div>number:<input value={numberValue} onChange={numberChange} /></div>
        <button type="submit">add</button>
    </form>
	)
}

export default PersonForm 