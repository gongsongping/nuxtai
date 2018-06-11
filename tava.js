import test from 'ava';
const request = require('supertest');
// const app = require('./server.js');


test('checkout/napi/url', async t => {
  const url = 'https://www.zhihu.com/question/29775447'

  //   const response = await request(app)
  const response = await request("http://localhost:3000")
    .post('/napi/url')
    .send({
      url
    });

  t.is(response.status, 200);
  //   t.is(response.body.d, `username is missing`);
})

// test('check status', async t => {
//   const response = await request(app)
//     .get('/status');
//   t.is(response.status, 200);
//   t.deepEqual(response.body, {
//     status: 'Ok'
//   });
// })

// test('greet', async t => {
//   const name = 'Nitish';
//   const food = 'Pizza';
//   const response = await request(app)
//     .get('/greet')
//     .query({
//       name,
//       food
//     });

//   t.is(response.status, 200);
//   t.is(response.body.message, `hello ${name} would you like a ${food}`);
// })


// function sum(a, b) {
//   return a + b;
// }
// test('foo is being tested', t => {
//   t.pass();
// })
// test('bar is being tested', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });
// test('sum of 2 numbers', t => {
//   t.plan(2);
//   t.pass('this assertion passed');
//   t.is(sum(1, 2), 3);
// })
