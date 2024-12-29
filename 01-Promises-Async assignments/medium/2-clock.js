/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function updateClock(){
    const currentDate=new Date();

    //Using following method we get current hour,minute and second
    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();

    // Following logic helps to decide whether it is am or pm
    let ampm=hours>12?"PM":"AM";

    // Following logic helps to implement 12 hours logic
    hours=hours%12;

    //To display "0" as "12"
    hours=hours ? hours :12;
    minutes=minutes<10 ? "0" +minutes:minutes

    console.clear();
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`)
}
setInterval(updateClock,1000)