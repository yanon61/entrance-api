import request from 'supertest'
import App from '../src/app'

describe('GET /noImpl', () => {
  it('return 501', async (done: jest.DoneCallback) => {
    const server: App = new App()
    const response = await request(server.app).get('/noImpl')
    expect(response.status).toBe(501)
    expect(response.body.message).toEqual('Not Implemented.')
    done()
  })
})

describe('POST /sample', () => {
  it('return 200', async (done: jest.DoneCallback) => {
    const server: App = new App()
    const reqBody = { hoge: 'hoge' }
    const response = await request(server.app)
      .post('/sample')
      .send(reqBody)
    expect(response.status).toBe(200)
    expect(response.body.hoge).toEqual('hoge')
    expect(response.body.method).toEqual('POST')
    done()
  })
})
