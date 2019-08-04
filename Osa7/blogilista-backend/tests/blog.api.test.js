const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('Blog app returns the right amount of JSON-styled blogs', async () => {
  const blogs = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(blogs.body.length).toBe(helper.initialBlogs.length)
})

test('Blog can be posted', async () => {

  await api
    .post('/api/blogs')
    .send(helper.testBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAfter = await helper.blogsInDb()

  expect(blogsAfter.length).toBe(helper.initialBlogs.length + 1)

  const titles = blogsAfter.map(blog => blog.title)
  expect(titles).toContain(helper.testBlog.title)
})


afterAll(() => {
  mongoose.connection.close()
})

