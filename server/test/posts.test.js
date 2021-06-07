/* const { TestWatcher } = require("@jest/core");

TestWatcher('Should') */

const axios = require('axios') //biblioteca emula clientes, faz requisições



test('Should get posts', async function () {
    const response = await axios({
        url: 'http://localhost:3001/posts',
        method: 'get'
    })
    const posts = response.data
    expect(posts).toHaveLength(3)
    const [firstPost] = posts
    expect(firstPost.id)
    
})