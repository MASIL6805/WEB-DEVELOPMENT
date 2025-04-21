let gamesqu = [];
let usersqu = [];

let col=["yellow","purple","red","green"];

let started=false;
let level=0;
let Hscore=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started"); 
        started=true;

        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelup(){
    usersqu=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=col[randomindex];
    let randombtn=document.querySelector(`.${randomcolor}`);

    console.log(randomindex);
    console.log(randomcolor);
    console.log(randombtn);

    gamesqu.push(randomcolor);
    console.log(gamesqu);

    btnflash(randombtn);

    // let Hscore=0;
    if(level>Hscore){
        Hscore=level;
        console.log(Hscore);
    }
};

function checkans(idx){
    // let idx= level-1;
    if(usersqu[idx] === gamesqu[idx]){
       if(usersqu.length===gamesqu.length){
        setTimeout(levelup,1000);   
        }
    }else{
        console.log("game over!");
        h2.innerHTML=`Game over! your score was<b>${level}</b> <br> press any key to restart.<br> Highestscore: <b>${Hscore}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
    
        reset();
    }
};
function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    console.log(usercolor);
    usersqu.push(usercolor);
    console.log(usersqu);

    checkans(usersqu.length-1); 
};

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
    };
function reset(){
    gamesqu=[];
    usersqu=[];
    level=0;
    started=false;
    // h2.innerText="press any key to start";
}
// function highscore(){
//     let Hscore=0;
//     if(level>Hscore){
//         Hscore=level;
//         console.log(Hscore);
// }
// }