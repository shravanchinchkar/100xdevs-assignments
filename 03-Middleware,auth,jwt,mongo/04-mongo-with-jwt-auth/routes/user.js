const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const createUserResponse = await User.create({
    username: username,
    password: password,
  });
  if (createUserResponse) {
    return res.json({
      message: "User created successfully",
    });
  } else {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username: username,
    password: password,
  });

  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    return res.json({ token });
  } else {
    return res.status(411).json({
      message: "Incorrect email and password!",
    });
  }
});
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNocmF2YW5jaGluY2hrYXIyNkBnbWFpbC5jb20iLCJpYXQiOjE3MzYyMzgyNDR9.FXSVCa0i0Di0cZxpcugp3N7p5ZHS0jRAIW7xXPKToLY
*/

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courseResponse = await Course.find({});
  res.json({
    courses: courseResponse,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  console.log("courseId:",courseId)
  console.log("username:",req.username)
  try{
    const response=await User.updateOne(
      {
        username: req.username,
      },
      {
        "$push": {
          purchasedCourses: courseId,
        },
      }
    );
    console.log("update response:",response)
  }catch(err){
    console.log(err)
  }
 
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
