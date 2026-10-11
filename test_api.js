// Automated API test script to demonstrate registration, login, JWT verification, and protected route access
const http = require('http');

function request(method, path, data = null, token = null) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : '';
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const req = http.request({
      hostname: 'localhost',
      port: 5001,
      path,
      method,
      headers
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- TEST 1: User Registration ---');
  const regRes = await request('POST', '/api/auth/register', {
    name: 'Ghoniya Dhyey',
    email: '24cs024@charusat.edu.in',
    password: 'SecurePassword123'
  });
  console.log('HTTP', regRes.status, JSON.stringify(regRes.body, null, 2));

  console.log('\n--- TEST 2: User Login & JWT Generation ---');
  const loginRes = await request('POST', '/api/auth/login', {
    email: '24cs024@charusat.edu.in',
    password: 'SecurePassword123'
  });
  console.log('HTTP', loginRes.status, JSON.stringify(loginRes.body, null, 2));
  const token = loginRes.body.token;

  console.log('\n--- TEST 3: Access Protected Route Without Token (Expect 401) ---');
  const unauthRes = await request('GET', '/api/tasks');
  console.log('HTTP', unauthRes.status, JSON.stringify(unauthRes.body, null, 2));

  console.log('\n--- TEST 4: Access Protected Route With Valid JWT (Expect 200) ---');
  const authRes = await request('GET', '/api/tasks', null, token);
  console.log('HTTP', authRes.status, JSON.stringify(authRes.body, null, 2));

  console.log('\n--- TEST 5: Create Protected Task with JWT Token (Expect 201) ---');
  const createRes = await request('POST', '/api/tasks', { title: 'Implement Redis Caching in Practical 9' }, token);
  console.log('HTTP', createRes.status, JSON.stringify(createRes.body, null, 2));
}

runTests().catch(console.error);