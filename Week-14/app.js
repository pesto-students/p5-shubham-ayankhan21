const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoutes");
const multer = require("multer");
const path = require("path");
const app = express();

const dbURI =
  "mongodb+srv://ayankhan21:Dellinspiron7588@cluster0.sfa1ovo.mongodb.net/wealth-app?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // for connection of DB; second arg not compulsory(only to avoid a warning)
  .then((result) => {
    console.log("server is running on 3000");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limit:{fileSize:1000000}
}).single("myImage"); // myImage is the field in the form where user uploads the images

app.post("/api/postdata/file/:userid", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      if (req.file == undefined) {
        res.send("No file selected!");
      } else {
        res.send("File uploaded!");
      }
    }
  });
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", authRoute);
