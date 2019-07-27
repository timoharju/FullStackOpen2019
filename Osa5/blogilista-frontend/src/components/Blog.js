import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => (
  <div>
    {blog.author} {blog.title}
  </div>
)

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog