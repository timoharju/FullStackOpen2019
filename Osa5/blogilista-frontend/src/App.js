import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogsService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import useField from './hooks/'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const username = useField({ type: 'text', name: 'username' })
  const password = useField({ type: 'password', name: 'password' })
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogsService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogsService.setToken(user.token)
      setUser(user)
      username.reset()
      password.reset()

    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const rows = () => blogs.map(blog =>
    <Blog
      key={blog.id} blog={blog}
    />
  )

  const newBlogFormRef = React.createRef()

  const newBlogForm = () => {
    return (
      <Togglable buttonLabel='New blog' ref={newBlogFormRef}>
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          visibilityToggleRef={newBlogFormRef} />
      </Togglable>
    )
  }

  let reset, usernameForm, passwordForm

  ({ reset, ...usernameForm } = username);
  ({ reset, ...passwordForm } = password)


  return (
    <div>
      <h1>Blogs</h1>
      {user === null ?
        <form onSubmit={handleLogin}>
          Username <input {...usernameForm} /><br />
          Password <input {...passwordForm} /><br />
          <button type="submit">Log in</button>
        </form> :
        <div>

          <p>Logged as {user.name} <button type="submit" onClick={handleLogout}>log out</button></p>

          {newBlogForm()}

          {rows()}

        </div>
      }


    </div>
  )
}

export default App
