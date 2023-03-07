const requestHandler = function (request, response) {
  const url = request.url;
  const method = request.method;
  const index = require("./pages/index");
  const secondPage = require("./pages/second-page");
  const thirdPage = require("./pages/third-page");
  const fourthPage = require("./pages/fourth-page");
  const fifthPage = require("./pages/fifth-page");
  const fifthPagePost = require("./pages/fifth-page-post");
  const pageNotFound = require("./pages/page-not-found");

  if (url == "/") {
    response.setHeader("Content-type", "text/html");
    response.write(index);
    response.statusCode = 200;
    response.end();
  } else if (url === "/second-page" && method === "GET") {
    response.setHeader("Content-type", "text/html");
    response.write(secondPage);
    response.statusCode = 200;
    response.end();
  } else if (url === "/third-page" && method === "GET") {
    response.setHeader("Content-type", "text/html");
    response.write(thirdPage);
    response.statusCode = 200;
    response.end();
  } else if (url === "/fourth-page" && method === "GET") {
    response.setHeader("Content-type", "text/html");
    response.write(fourthPage);
    response.statusCode = 200;
    response.end();
  } else if (url === "/fifth-page" && method === "GET") {
    response.setHeader("Content-type", "text/html");
    response.write(fifthPage);
    response.statusCode = 200;
    response.end();
  } else if (url === "/fifth-page" && method === "POST") {
    response.setHeader("Content-type", "text/html");
    response.write(fifthPagePost);
    response.statusCode = 200;
    response.end();
  } else {
    response.setHeader("Content-type", "text/html");
    response.write(pageNotFound);
    response.statusCode = 404;
    response.end();
  }
};

module.exports = requestHandler;
