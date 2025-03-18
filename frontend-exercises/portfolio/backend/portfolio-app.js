import express, { response } from "express";
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

app.post("/", (req, res) => {
  const { email, content } = req.body;
  console.log("email: " + email, "content: " + content);
  res.json({
    email: email,
    content: content,
    response: {
      statusCode: 200,
      actionType: "POST",
    },
  });
});

app.get("/get", (req, res) => {
  const { email, content } = req.query;
  console.log("email: " + email, "content: " + content);
  res.json({
    email: email,
    content: content,
    response: {
      statusCode: 200,
      actionType: "GET",
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
