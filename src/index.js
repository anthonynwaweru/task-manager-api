const app = require("./app");

const port = process.env.PORT;

// LISTEN TO PORT
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
