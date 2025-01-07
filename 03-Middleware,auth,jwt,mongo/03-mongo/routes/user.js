const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password
    const createUserResponse=await User.create({
        username:username,
        password:password
    })
    if(createUserResponse){
        return res.json({
            message:"User created successfully"
        })
    }else{
        return res.status(400).json({
            message:"Something went wrong"
        })
    }
});

router.get('/courses',async(req, res) => {
    // Implement listing all courses logic
    const coursesResponse=await Course.find({})
    if(coursesResponse){
        return res.json({
            courses:coursesResponse
        })
    }else{
        return res.status(400).json({
            message:"Something went wrong"
        })
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;//Indicates the id of the course that you need to by
    const username=req.headers.username;
    //following code Updates the userdata when he purchase an course 
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware,async(req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({
        username:req.headers.username
    })
    const courses=await Course.find({
        _id:{
            "$in":user.purchaseCourses
        }
    })
    res.json({
        courses:courses
    })

});

module.exports = router