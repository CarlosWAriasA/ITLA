const html = `
 <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Second page</title>

          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: Verdana, Geneva, Tahoma, sans-serif;
            }

            nav {
              background-color: gray;
              margin-bottom: 10px;
              height: 100px;
              justify-content: center;
              text-align: center;
            }

            ol li {
              line-height: 1.8;
              font-size: 30px;
              list-style-type: circle;
            }

            h1 {
              margin-bottom: 30px;
            }

            main {
              justify-content: center;
              text-align: center;
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
            <h1>Valores que me definen</h1>
            <ol>
              <li>Respeto</li>
              <li>Honestidad</li>
              <li>Perseverancia</li>
              <li>Sinceridad</li>
              <li>Esfuerzo</li>
            </ol>
          </main>
          <footer></footer>
        </body>
      </html>
`;

module.exports = html;
