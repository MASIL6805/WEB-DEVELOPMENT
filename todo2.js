let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=inp.value;    
    //creating delete button for each item
    
    let delbtn= document.createElement("button");
    delbtn.innerText="DELETE";   
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
//using event delegation for nwly created buttons
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem= event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    };
});

    // let delbtns= document.querySelectorAll(".delete");// not applyiing on the newly created buttons
    // for(delbtn of delbtns){
    //     delbtn.addEventListener("click",function(){
    //         let par=this.parentElement;
    //         console.log(par);
    //         par.remove();
    //        item.remove();
    //     });
   // };