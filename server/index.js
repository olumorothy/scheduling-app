import express from "express";
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array of data
const database = [];
//generates a random string as ID
const generateId = () => Math.random().toString(36).substring(2, 10);

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  //verify if user doesn not exist
  let result = database.filter(
    (user) => user.email === email || user.username === username
  );

  if (result.length === 0) {
    database.push({
      id: generateId(),
      username,
      password,
      email,
      timezone: {},
      schedule: [],
    });
    return res.json({ message: "Account created successfully" });
  }

  res.json({ error_message: "User already exist!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
