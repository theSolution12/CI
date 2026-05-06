import e from "express";

const app = e();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

app.listen(5000, () => {
  console.log("On 5000");
});
