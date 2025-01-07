const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courseResponse = await Course.find({});
  res.json({
    courses: courseResponse,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  console.log("username:-", username);
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchaseCourses: courseId,
      },
    }
  );
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
      $in: user.purchaseCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
