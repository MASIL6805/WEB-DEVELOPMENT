let todo=[];
let msg=prompt("enter what do you want?");
while(true){
    if(msg=="quit"){
        console.log("you quit");
        break;
    }
    if(msg=="list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    }else if(msg=="add"){
        let task=prompt("enter what task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(msg=="delete"){
        let ind=prompt("enter which index you want to delete");
        todo.splice(ind,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }
    msg=prompt("enter what do you want?");

}