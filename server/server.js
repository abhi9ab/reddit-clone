import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "reddit",
    password: "AbhipostgreSQL@2024",
    port: 5432, 
  });
  db.connect();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async(req, res) => {
    try {
        const result = await db.query("SELECT * from post"); 
        res.send(result.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const result = await db.query("SELECT * from post WHERE id = $1",[id]);
        res.send(result.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/posts", async(req, res) => {
    try {
        const { community, title, description } = req.body;
        const newPost = await db.query("INSERT INTO post (community, title, description) VALUES ($1, $2, $3) RETURNING *", [community, title, description]);
        res.send(newPost.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/posts/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const { community, title, description } = req.body;
        const updatePost = await db.query("UPDATE post SET community=$1, title = $2, description = $3 WHERE id = $4 RETURNING *", [community, title, description, id])
        res.send(updatePost.rows);
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/posts/:id", async(req, res) => {
    try {
        const id = req.params.id;
        await db.query("DELETE FROM post WHERE id = $1",[id]);
        res.redirect("/");
    } catch(err) {
        console.error(err.message);
    }

});

app.listen(port, () => { 
    console.log("Server on localhost:4000");
});