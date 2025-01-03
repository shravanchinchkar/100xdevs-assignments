const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

//defining inputvalidation schema
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

//jwt encoding
function jwtSign(email, password) {
  const userEmail = emailSchema.safeParse(email);
  const userPassword = passwordSchema.safeParse(password);

  if (userEmail.success && userPassword.success) {
    const userToken = jwt.sign({ email }, jwtPassword);
    return userToken;
  } else {
    return null;
  }
}

function decodeJWT(token) {
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}


function verifyJWT(token){
    // const verify=jwt.verify(token,jwtPassword);
    // if(verify){
    //     return true
    // }
    // else{
    //     return false;
    // }
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }catch(err){
        return false;
    }
}

const jwtToken = jwtSign("abc@gmail.com", "shravan");
console.log("Answer is:-",jwtToken);


const ans2=decodeJWT(jwtToken);
console.log("Decodede ans:-",ans2)


const ans3=verifyJWT(jwtToken);
console.log("Verify:-",ans3)

