/*
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second heyyyy
*/
let n=1;
function counter(){
    console.log(n)
    n++
    if(n>10){
        clearInterval(countDown)
        console.log("Counter Finished!")
    }
}
const countDown=setInterval(counter,1000)