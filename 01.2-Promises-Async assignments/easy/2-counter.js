/*
Without using setInterval, try to code a counter in Javascript. 
*/
let n=1;
function counter(){
    console.log("value:-",n);
    n++;
    if(n<=10){
        setTimeout(counter,1000)
    }
}
counter()
