const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")

function userMiddleware(req, res, next) {
    const token=req.headers.authorization;
    const mainString=token.split(" ");
    const jwtToken=mainString[1]
    const jwtVerify=jwt.verify(jwtToken,JWT_SECRET);

    console.log("verify",jwtVerify)

    if(jwtVerify.username){
        req.username=jwtVerify.username;
        next();
    }else{
        return res.status(403).json({
            message:"You are not authenticated"
        })
    }
}

module.exports = userMiddleware;