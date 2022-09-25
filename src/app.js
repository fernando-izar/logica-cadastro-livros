import express from "express";
import userRouter from "./routes/users.routes";
import bookRouter from "./routes/books.routes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", userRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
