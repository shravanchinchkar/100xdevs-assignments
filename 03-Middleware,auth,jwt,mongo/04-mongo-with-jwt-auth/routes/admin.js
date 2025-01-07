const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const zod = require("zod");

//Schema for validation
const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  image: zod.string(),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const response = await Admin.create({
    username: username,
    password: password,
  });
  if (response) {
    console.log("response:-", response);
    res.json({
      message: "Admin created successfully",
    });
  } else {
    return res.status(400).json({
      msg: "Something went wrong!",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.find({
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = req.body;
  const courseResponse = courseSchema.safeParse(course);

  //checks whether all the course input are right or not if yes then only create the new course
  if (courseResponse.success) {
    const createResponse = await Course.create({
      title: course.title,
      description: course.description,
      price: course.price,
      image: course.image,
    });
    if (createResponse) {
      return res.json({
        msg: "Course created successfully",
        courseId: createResponse._id,
      });
    } else {
      return res.status(400).json({
        msg: "Something went wrong!",
      });
    }
  } else {
    return res.status(422).json({
      msg: "Invalid Input",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courseResponse = await Course.find({});
  res.json({
    courses: courseResponse, 
  });
});

module.exports = router;
