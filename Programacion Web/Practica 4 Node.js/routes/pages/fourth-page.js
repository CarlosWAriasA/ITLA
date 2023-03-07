const html = `
     <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fourth page</title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        ></script>

        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;

            display: grid;
            grid-template-rows: 100px 1fr;
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

          main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
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
          <article>
            <h2>Pagina que deriva con HTML,CSS Y JAVASCRIPT</h2>
            <p>
              Esta pagina se encarga de encontrar la derivada, los numeros criticos,
              los puntos relativos y absolutos de la funcion \(x^ne^{ax-b}\)
            </p>
          </article>
          <article>
            <h2>Agenda en Java</h2>
            <p>
              Esta aplicacion en java es basicamente un CRUD, permite agregar,
              eliminar y modificar contactos tambien tiene un buscador para buscar
              contactos por nombre,correo,apellido y telefono1.
            </p>
          </article>
        </main>
        <footer></footer>
      </body>
    </html>
    `;

module.exports = html;
