const html = `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Third page</title>

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
              height: 100px;
              background-color: gray;
              justify-content: center;
              text-align: center;
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

            h1 {
              margin: 20px;
            }

            .table {
              display: flex;
              justify-content: center;
              gap: 20px;
            }

            thead tr th {
              padding: 20px;
              /* text-align: left; */
            }

            thead th {
              background-color: green;
              color: white;
            }

            td,
            th {
              padding: 8px 20px;
              text-align: left;
            }

            tbody tr:nth-child(odd) {
              background-color: #f8f9fa;
            }

            tbody tr:nth-child(even) {
              background-color: #e9ecef;
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
            <h1>Skills</h1>
            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Valoracion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>JavaScript</th>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th>Java</th>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th>C#</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>Python</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>BD Oracle</th>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th>HTML</th>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th>CSS</th>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <footer></footer>
        </body>
      </html>
    `;

module.exports = html;
