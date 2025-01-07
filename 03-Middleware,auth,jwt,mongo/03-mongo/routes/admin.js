const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const zod = require("zod");

//Schema for validation
const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  image: zod.string(),
});

// Admin Routes
//Following is the signup endpoint for the admin
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

//Following is the courses endpoint to create the courses
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
        courseId:createResponse._id
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


//Following is the courses end for to get all the created courses
router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const courseResponse=await Course.find({})
  res.json({
    courses:courseResponse
  })
});

module.exports = router;
