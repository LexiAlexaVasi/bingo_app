const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const users = require("./users.js");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "User sau parolă greșită" });
    }

    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) {
        return res.status(401).json({ message: "User sau parolă greșită" });
    }

    res.json({ success: true, username });
});

app.listen(3000, () => {
    console.log("✅ Server pornit pe http://localhost:3000");
});
