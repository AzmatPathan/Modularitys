/* magicTimer function and setTimeout function are not blocking any code because no matter what the 2 console log below function
are going to display, the message will display after 4 seconds*/
setTimeout(magicTimer, 4000);
function magicTimer() {
    console.log("Hey after 4 seconds, I am not blocking any code!")
}

console.log("Not Blocked Message"); 
/*This message is blocking the below line of code because it will always display first*/

console.log("Blocked Message");


