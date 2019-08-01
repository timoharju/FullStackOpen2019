import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case "VOTE": {
			return state.map(anecdote =>
				anecdote.id !== action.data.id ? anecdote : action.data
			)
    }
    case 'INIT_ANECDOTES':
      return action.data
    default: {
      return state
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/

export const increaseVote = anecdote => {
	return async dispatch => {
		anecdote.votes += 1
		await anecdoteService.update(anecdote.id, anecdote)
		dispatch({
			type: "VOTE",
			data: anecdote
		})
	}
}

export const createAnecdote = anecdotes => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdotes)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export default anecdoteReducer