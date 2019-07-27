import React from 'react'
import blogService from '../services/blogs'
import propTypes from 'prop-types'
import useField from '../hooks'

const BlogForm = ({ blogs, setBlogs, visibilityToggleRef }) => {
  const title = useField({ type: 'text', name: 'title' })
  const author = useField({ type: 'text', name: 'author' })
  const blogURL = useField({ type: 'text', name: 'blogURL' })

  const handleNewBlogSubmit = async (event) => {
    event.preventDefault()
    visibilityToggleRef.current.toggleVisibility()
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
  }

  return (
        <>
            <h2>blogs</h2>
            <form onSubmit={handleNewBlogSubmit}>
                title <input {...title} /><br />
                author <input {...author} /><br />
                url: <input {...blogURL}  /><br />
              <input type="submit" value="Create new" />
            </form>
        </>
  )
}

BlogForm.propTypes = {
  blogs: propTypes.array.isRequired,
  setBlogs: propTypes.func.isRequired,

  visibilityToggleRef: propTypes.object.isRequired,
}

export default BlogForm