import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const newAnecdote = async (event) => {
		event.preventDefault()
		const anecdote = event.target.content.value
		event.target.content.value = ""
		props.createAnecdote(anecdote)
		props.newNotification(`Added '${anecdote}'`, 5)
	}

	return (
		<>
			<h2>Add a new anecdote</h2>
			<form onSubmit={newAnecdote}>
				<div><input name="content" /></div>
				<button type="submit">create</button>
			</form>
		</>
	)
}

export default connect(null, { createAnecdote, newNotification }
)(AnecdoteForm) 