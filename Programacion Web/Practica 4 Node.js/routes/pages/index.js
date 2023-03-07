const html = `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Site Personal</title>

          <link rel="stylesheet" href="style.css" />

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

            nav ul li a {
              display: inline-block;
              text-decoration: none;
              color: aliceblue;
              font-weight: bold;
              font-size: 25px;
              margin-top: 30px;
            }

            ul li {
              list-style-type: none;
            }

            ul li a:hover {
              color: blue;
            }

            ul {
              display: flex;
              gap: 50px;
              justify-content: center;
              background-color: grey;
            }

            main {
              display: flex;
              align-text: center;
              justify-content: center;
            }

            main p {
              padding: 100px;
              line-height: 1.5;
              font-weight: bold;
              font-size: 40px;
              text-align: center;
            }

          </style>
          </head>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href="/second-page">SECOND PAGE</a></li>
                <li><a href="/third-page">THIRD PAGE</a></li>
                <li><a href="/fourth-page">FOURTH PAGE</a></li>
                <li><a href="/fifth-page">FIFTH PAGE</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <p>
              Mi nombre es Carlos Wilmer Arias Almanzar, tengo 18 años y soy
              estudiante del ITLA, estudio Desarrollo de Software y estoy en mi cuarto
              cuatrimestre.
            </p>
          </main>
          <footer></footer>
        </body>
      </html>
`;

module.exports = html;
