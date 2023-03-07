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

          main {
            display: inline-block;
            margin: 30px 10px;
          }

          h1 {
            padding: 20px;
          }

          .form {
            width: 500px;
            display: flex;
            flex-direction: column;
            gap: 10px;
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
          <form method="POST" action="/fifth-page">
            <div class="form">
              <h2>Formulario</h2>
              <input type="text" name="nombre" placeholder="nombre" required />
              <input type="text" name="apellido" placeholder="apellido" required />
              <input type="text" name="correo" placeholder="correo" required />
              <textarea
                name="descripcion"
                id=""
                cols="30"
                rows="10"
                placeholder="Descripcion de los servicios o servicio"
              ></textarea>
              <button type="submit" id"btn-enviar" >Enviar</button>
            </div>
          </form>
        </main>
        <footer></footer>
      </body>
    </html>
`;

module.exports = html;
