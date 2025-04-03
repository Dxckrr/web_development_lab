import express from "express";
import cors from "cors";
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "all",
    credentials: true,
  })
);

app.post("/login", (req, res) => {
  const { email, content } = req.body;
  console.log("email: " + email, "content: " + content);
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-DQvkBjpPgn7RC31MCQoOeC9TI2kdqa4+BSgNMNj8v77fdC77Kj5zpWFTJaaAoMbC"
      crossorigin="anonymous"
    />
  </head>
  <body
    style="
      height: 100vh;
      background-image: url('https://i.pinimg.com/736x/e5/ea/c5/e5eac5989ba4a33c77d6a38f821faf0e.jpg');
      background-color: rgba(0, 0, 0, 0.5);
    "
    class="d-flex align-items-center justify-content-center text-white"
  >
    <div class="alert alert-success" role="alert">${email} was logged successfully!</div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YUe2LzesAfftltw+PEaao2tjU/QATaW/rOitAq67e0CT0Zi2VVRL0oC4+gAaeBKu"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
