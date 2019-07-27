import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'


const blog = {
  title: 'Testblog',
  author: 'Tester',
  likes: 5,
}
test('Comoponent is rendering title, author and likes', () => {

  const component = render(
    <SimpleBlog blog={blog} />
  )

  component.debug()

  expect(component.container).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(component.container).toHaveTextContent(`blog has ${blog.likes} likes`)
})

test('The EventHandler function is called when when the like button is pressed twice', () => {
  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})