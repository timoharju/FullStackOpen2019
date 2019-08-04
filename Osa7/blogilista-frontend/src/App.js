import React, { useState, useEffect } from 'react'
import blogsService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import useField from './hooks/'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

import { Table, Form, Button, Nav, Navbar } from 'react-bootstrap'

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

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const Blog = ({ blog }) => (
    <div>
      {blog.title} by {blog.author}
    </div>
  )

  const BlogList = () => (
    <Table striped>
      <tbody>
        {blogs.map(blog =>
          <tr key={blog.id}>
            <td>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </td>
            <td>
              {blog.author}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )

  const blogById = (id) =>
    blogs.find(a => a.id === id)

  let reset, usernameForm, passwordForm

  ({ reset, ...usernameForm } = username);
  ({ reset, ...passwordForm } = password)

  const padding = {
    paddingRight: 5
  }

  return (
    <div>
      <Router>
        {user === null ?
          <Form.Group>
            <h1>Blogs</h1>
            <form onSubmit={handleLogin}>
              <Form.Label> username </Form.Label>
              <Form.Control {...usernameForm} /><br />
              <Form.Label> password </Form.Label>
              <Form.Control {...passwordForm} /><br />
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </form>
          </Form.Group> :

          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#" as="span">
                    <Link style={padding} to="/">blogs</Link>
                  </Nav.Link>
                  <Nav.Link href="#" as="span">
                    <Link style={padding} to="/create">New blog</Link>
                  </Nav.Link>
                </Nav>
                <p>Logged as {user.name} <Button type="submit" onClick={handleLogout}>log out</Button></p>
              </Navbar.Collapse>
            </Navbar>
            <h1>Blogs</h1>
            <Route exact path="/" render={() => <BlogList blogs={blogs} />} />
            <Route path="/create" render={() => <BlogForm blogs={blogs} setBlogs={setBlogs} />} />
            <Route exact path="/blogs/:id" render={({ match }) =>
              <Blog blog={blogById(match.params.id)} />
            } />

          </div>
        }
      </Router>
    </div>
  )
}

export default App
