import React from 'react'
import { increaseVote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const vote = id => {
        const votedAnecdote = props.anecdotes.find(a => a.id === id)
        props.increaseVote(votedAnecdote)
        props.newNotification(`You voted '${votedAnecdote.content}'`, 5)
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <li key={anecdote.id}>
                    {anecdote.content}
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </li>
            )}

        </div>
    )
}
const mapDispatchToProps = {
    increaseVote, newNotification
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
    }
}

const ConnectedAnectodes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnectodes