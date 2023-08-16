const http = require('http'); // importing http package

http.createServer((req, res) => {
  console.log('Request Received!');
  console.log(req.url); // from what url the req comes
  console.log(req.method); // identifying http method

  // algorithm to handle http calls
  /*
    1. understand the url
    2. understand the http method (GET, POST, PUT, PATCH, DELETE)
    3. construct the res and send
  */
  const headerTemplate = `<header>
              <nav>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/contact'>Contact</a></li>
                  <li><a href='/users'>Users (JSON)</a></li>
                </ul>
              </nav>
            </header>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  switch (req.url) {
    case "/":
      res.write(`
        <html>
          <head>
            <title>Welcome to Home Page!</title>
          </head>
          <body>
            ${headerTemplate}
            <main>
              <h1>Welcome to Home Page!</h1>
            </main>
          </body>
        </html>
      `);
      break;

    case "/about":
      res.write(`
        <html>
          <head>
            <title>Welcome to About Page!</title>
          </head>
          <body>
            ${headerTemplate}
            <main>
              <h1>Welcome to About Page!</h1>
            </main>
          </body>
        </html>
      `);
      break;

    case "/contact":
      res.write(`
        <html>
          <head>
            <title>Welcome to Contact Page!</title>
          </head>
          <body>
             ${headerTemplate}
            <main>
              <h1>Welcome to Contact Page!</h1>
            </main>
          </body>
        </html>
      `);
      break;
    
    case '/users':
      res.writeHead(200, { "Content-Type": "application/json" });
      const userList = [
        {
          id: 1,
          name: "John",
          phone: 3245678,
          email: "j@k.com",
        },
        {
          id: 2,
          name: "Steve",
          phone: 867543564,
          email: "s@t.com",
        }
      ];
      res.write(JSON.stringify(userList));
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`
        <html>
          <head>
            <title>404 - Page Not Found!</title>
          </head>
          <body>
            <h1>404 - Page Not Found!</h1>
          </body>
        </html>
      `);
  }
  res.end();
  
}).listen(3005, () => {
  console.log('The server is launched on port number 3005. Open the URL http://localhost:3005');
});