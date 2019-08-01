
export const newNotification = (notification, time) => {
    return async dispatch => {
      dispatch({
        type: 'NEW',
        data: { content: notification }
      })
      await setTimeout(() => {
        dispatch({
          type: 'REMOVE'
        })
      }, (time * 1000))
    }
  }

  export const removeNotification = () => {
    return {
      type: 'REMOVE'
    }
  } 
  
const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NEW':
            return action.data.content
        case 'REMOVE':
            return null
        default: return state
    }
}

export default notificationReducer

