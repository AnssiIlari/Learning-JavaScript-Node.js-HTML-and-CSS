const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
})

// Routing
app.get("/home", (req, res) => {
    res.send("Welcome to our page");
  })
  // Routing
  app.get("/about", (req, res) => {
    res.send("About us...");
  })

  // Route parameters
//   app.get("/home/:name", (req, res) => {
//     res.send("Welcome " + req.params.name);
//   })

  // Route parameters, multiple parameters
  app.get("/home/user/:firstname/:lastname", (req, res) => {
    res.send(`Welcome ${req.params.firstname} ${req.params.lastname}`);
  })

  app.get("/home/user/", (req, res) => {
    res.json({username: 'John'});
  })


  // Handle 404 Not Found
app.use((req, res) => {
    res.status(404).end();
    // or
    //res.sendStatus(404);
});



  

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});