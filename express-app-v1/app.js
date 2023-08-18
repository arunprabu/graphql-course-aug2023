const express = require('express');
const app = express();

// let's have the routes
// handling get request on '/'
app.get('/', (req, res) => {
  res.send(
    `<html>
      <head>
        <title>Home Page</title>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/users'>Users (JSON)</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <h1>Welcome to Home Page</h1>
          </main>
        </body>
    </html>`
  );
});

// handling get request on '/about'
app.get('/about', (req, res) => {
  res.write(
    `<html>
      <head>
        <title>Home Page</title>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/users'>Users (JSON)</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <h1>Welcome to About Page</h1>
          </main>
        </body>
    </html>`
  );

  res.end();
});

// handling get request on '/contact'
app.get('/contact', (req, res) => {
  // TODO: learn about using sendFile
  // res.sendFile()
  res.send(
    `<html>
      <head>
        <title>Home Page</title>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/users'>Users (JSON)</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <h1>Welcome to Contact Page</h1>
          </main>
        </body>
    </html>`
  );
});

// handling get request on '/users'
// REST API Endpoint
app.get('/users', (req, res) => {
  // Let's send JSON Response
  const userList = [
    {
      id: 1,
      name: "John",
      phone: 435670987,
      email: "j@k.com",
    },
    {
      id: 2,
      name: "Steve",
      phone: 908675432,
      email: "s@t.com",
    }
  ];
  res.json(userList);
});

// handling post requet on '/users'
app.post('/users', (req, res) => {
  console.log('RECEIVING POST REQ');
  console.log(req.body); // this needs body-parser 
  res.json({
    message: 'Saved Successfully'
  });
});

app.listen(3002, () => {
  console.log(`The app is running on http://localhost:3002. Open it in browser or REST API Client`)
});