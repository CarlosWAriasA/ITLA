const html = `
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Fifth Page</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Verdana, Geneva, Tahoma, sans-serif;

          justify-content: center;
          text-align: center;
        }

        nav {
          height: 100px;
          background-color: grey;
          justify-content: center;
          text-align: center;
          grid-column: 1 / -1;
          grid-row: 1 / -1;
        }

        nav ul li a {
          text-decoration: none;
          font-size: 40px;
          color: white;
          display: inline-block;
          margin-top: 20px;
        }

        nav ul li a:hover {
          color: blue;
        }

        h1 {
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home page</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Formulario Enviado</h1>
      </main>
      <footer></footer>
    </body>
  </html>
`;

module.exports = html;
