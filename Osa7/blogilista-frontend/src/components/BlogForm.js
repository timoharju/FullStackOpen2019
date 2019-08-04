import React from 'react'
import blogService from '../services/blogs'
import propTypes from 'prop-types'
import useField from '../hooks'
import { Form } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom'

let BlogForm = ({ blogs, setBlogs, history, }) => {
  const title = useField({ type: 'text', name: 'title' })
  const author = useField({ type: 'text', name: 'author' })
  const blogURL = useField({ type: 'text', name: 'blogURL' })

  const handleNewBlogSubmit = async (event) => {
    event.preventDefault()
    const blogObject = {
      title: title.value,
      author: author.value,
      url: blogURL.value,
    }

    const addedBlog = await blogService.create(blogObject)
    if (addedBlog) {
      const newBlogs = blogs.concat(addedBlog)
      setBlogs(newBlogs)
      title.reset()
      author.reset()
      blogURL.reset()
    }
    history.push('/')
  }

  return (
    <>
      <form onSubmit={handleNewBlogSubmit}>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control {...title} /><br />
          <Form.Label>author</Form.Label>
          <Form.Control {...author} /><br />
          <Form.Label>url</Form.Label>
          <Form.Control {...blogURL} /><br />
          <Form.Control type="submit" value="Create new" />
        </Form.Group>
      </form>
    </>
  )
}
BlogForm = withRouter(BlogForm)

BlogForm.propTypes = {
  blogs: propTypes.array.isRequired,
  setBlogs: propTypes.func.isRequired,

  visibilityToggleRef: propTypes.object.isRequired,
}

export default BlogForm