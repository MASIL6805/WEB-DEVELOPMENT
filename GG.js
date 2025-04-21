let max=prompt("enter the max number");

const random= Math.floor(Math.random()*max)+1;

let guess=prompt("guess a number");

while(true){
    if(guess=="quit"){
        console.log("you quit");
        break;
    }
    if(guess==random){
        console.log("you are right,congrats!");
        break
    }else{
        guess=prompt("your guess was wrong.Please try again.");
    }

}