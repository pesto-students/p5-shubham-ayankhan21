const User = require("../model/Schema");
const Finance = require("../model/finances");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "hotmail",
  auth: {
    user: "wealthapp2023@outlook.com",
    pass: "Wealthapp",
  },
});

/////////////////////////////////////////////////////////////////
const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: "user added" });
      })
      .catch((error) => {
        res.json({ message: "error" });
      });
  });
};

const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.status(500).json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "secretToken", {
              expiresIn: "2h",
            });
            const options = {
              from: "wealthapp2023@outlook.com",
              to: `${username}`,
              subject: "LOGGED IN TO WEALTH APP",
              text: "WELCOME",
            };
            transporter.sendMail(options, function (err, info) {
              if (err) {
                console.log(err);
                return;
              }
              console.log("Sent: " + info.response);
            });
            res.status(200).json({ message: "successful login", token: token });
          } else {
            res.status(200).json({ message: "password doesn't match" });
          }
        });
      } else {
        res.status(200).json({
          message: "user not found",
        });
      }
    }
  );
};

const getUserInfo = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .sort({ createdAt: -1 })
    .then((data) => {
      Finance.findOne({ id }).then((result) => {
        const { name, phone } = data;
        res.json({ name: name, phone: phone, finance: result });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserSavings = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      Finance.findOne({ id }).then((result) => {
        const { name, phone } = data;
        const savings = result.SAL - result.EXP;
        console.log(savings);
        const { SAL, EXP, FILE } = result;
        res.json({
          name: name,
          phone: phone,
          Savings: savings,
          Income: { Salary: SAL, Expenses: EXP },
          Pay_slips: { FILE },
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUserInfo = (req, res) => {
  const id = req.params.id;
  const { FD, MF, SAL, EXP } = req.body;
  Finance.findOneAndUpdate({ id }, { FD, MF, SAL, EXP })
    .then((result) => {
      res.json({ message: "User details have been updated" });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong" });
    });
};

const deleteUserInfo = (req, res) => {
  const id = req.params.id;
  Finance.findOneAndDelete({ id })
    .then(() => {
      res.json({ message: "User details have been deleted" });
    })
    .catch(() => {
      res.json({ message: "There was some error" });
    });
};

const postUserInfo = (req, res, next) => {
  console.log(req.body);
  let userFinance = new Finance({
    userid: req.params.userid,
    SAL: req.body.SAL,
    EXP: req.body.EXP,
    FD: req.body.FD,
    MF: req.body.MF,
    FILE: req.body.FILE,
  })
    .save()
    .then((result) => {
      res.json({ message: "User info added" });
      const options = {
        from: "wealthapp2023@outlook.com",
        to: `${username}`,
        subject: "USER DETAILS ADDED",
        text: "WELCOME",
      };
      transporter.sendMail(options, function (err, info) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Sent: " + info.response);
      });
    })
    .catch(() => {
      res.json({ message: "some error happened" });
    });
};

module.exports = {
  register,
  login,
  getUserInfo,
  updateUserInfo,
  postUserInfo,
  deleteUserInfo,
  getUserSavings,
};
