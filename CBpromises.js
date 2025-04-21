// let h1=document.querySelector("h1");
// function changeColor(color,delay,nextcolorchange){
//     setTimeout(()=>{
//         h1.style.color= color;
//         console.log("color changed to",color);
//     },delay);
//     if(nextcolorchange){
//         nextcolorchange();
//     }
// }

// //  calllback hell.......very bad code!
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("yelow",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("purple",1000,()=>{
//                         changeColor("black",1000,()=>{
//                             changeColor("orange",1000,()=>{
//                                 changeColor("pink",1000);
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });








//saving data in database using callback (hell)!
// function savedata(data,success,faliure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
// }else{
//         faliure();
//     }
// }
// let data="";
// savedata(
//     data="massgraphy",
//     ()=>{
//         console.log(data);
//         console.log("success:data1 saved successfully");
//         savedata(
//             data="massgraphy2",
//             ()=>{
//                 console.log(data);
//                 console.log("success:data2 saved successfully");
//                 savedata(
//                     data="massgraphy3",
//                     ()=>{
//                         console.log(data);
//                         console.log("success:data3 saved successfully");
//                     },
//                     ()=>{
//                         console.log("faliure:data3 not saved successfully");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("faliure:data2 not saved successfully");
//             }
//         );
//     },
//     ()=>{
//         console.log("faliure:data1 not saved successfully");
//     }

// );





//using promises to save data in database.....avoiding callback hell!
// function savetodb(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//         if(internetspeed>4){
//             resolve("success:data saved successfully");
//         }else{
//             reject("faliure:data not saved");
//         }

//     }
//)}
// let request1=savetodb("massgraphy");
// request
// savetodb("massgraphy")
// .then(()=>{
//     console.log("massgraphy");
//     console.log("success:data saved successfully,promise resolved");
//     return savetodb("massgraphy2");
// })
// .then(()=>{
//     console.log("massgraphy2");
//     console.log("success:data saved successfully,promise resolved");
//     return savetodb("massgraphy3");
// })
// .then(()=>{
//     console.log("massgraphy3");
//     console.log("success:data saved successfully,promise resolved");
// })
// .catch(()=>{
//     console.log("faliure:data not saved successfully,promise rejected");
// })


//another method...........................tried but not working!
// savetodb("massgraphy")
// .then(()=>{
//     console.log("massgraphy");
//     console.log("success:data saved successfully,promise resolved");

//     savetodb("massgraphy2").then(()=>{
//         console.log("massgraphy2");
//         console.log("success:data saved successfully,promise resolved");

//         savetodb("massgraphy3").then(()=>{
//             console.log("massgraphy3");
//             console.log("success:data saved successfully,promise resolved");
//         });
//     })
// })
// .catch(()=>{
//     console.log("faliure:data not saved successfully,promise rejected");
// })





//using promises to change color of h1 tag!
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color= color;
//             resolve("color changed to",color);
//         },delay);
//     });
// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("color changed to red");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("color changed to green");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("color changed to blue");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("color changed to yellow");
//     return changeColor("pink",1000);
// })
// .then(()=>{
//     console.log("color changed to pink");
// })





//using async that automatically returns a promise
// async function greet() {
//     return "hello";
// }
// greet()
// .then((result) => {
//     console.log("promise resolved");
//     console.log("result was",result); // Output: hello
    
// })
// .catch((error) => {
//     console.log("promise rejected");
//     console.log("error was",error);
// })





//using async and await to change color of h1 tag!
// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 h1.style.color= color;
//                 console.log(`color changed to"${color}`);
//                 resolve("color changed!");
//             },delay);
//         });
//     }
//     //using loop to change color of h1 tag!
//     // async function demo() {
//     //     const colors = ["red", "green", "blue", "yellow"];
//     //     for (let color of colors) {
//     //         await changeColor(color, 1000);
//     //     }
//     // }
// async function demo(){
// await changeColor("red",1000);
// await changeColor("green",1000);
// await changeColor("blue",1000);
// await changeColor("yellow",1000);
// }
// demo();
// let h1=document.querySelector("h1");



//using async and await to generate random number
// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log("number generated",num);
//             resolve();
//     },1000);
// })
// }
// async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     getnum();
// }
// demo();


//using async and await to change color of h1 tag with error handling using try catch method!
let h1=document.querySelector("h1");
function changeColor(color,delay){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let num=Math.floor(Math.random()*5)+1;
                if(num<3){
                   reject("faliure:color not changed");
                }
                h1.style.color= color;
                console.log(`color changed to"${color}`);
                resolve("color changed!");
            },delay);
        });
    }
async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
    }catch(error){
        console.log("promise rejected,error caught");
        console.log(error);
    }
    let a=5;
    console.log("value of a is",a);
    console.log(`value of NEW NUM is ${a+3}`);
}
demo();

//using first api to get data from server using fetch method and promises!
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data1)=>{
//     console.log("data 1=",data1.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data 2=",data2.fact);
// })
// .catch((error)=>{
//     console.log("error was",error);
// })






//using async and await to get data from server using fetch method and APIS!
//  let url="https://catfact.ninja/fact";
//  async function getfacts(){
//     try{
//         let response=await fetch(url);
//         let data=await response.json();
//         console.log("data=",data.fact);

//         let response2=await fetch(url);
//         let data2=await response2.json();
//         console.log("data=",data2.fact);

//     }
//     catch(error){
//         console.log("error was",error);
//     }
//  }
//     getfacts();




//using async and await and AXIOS to get data from server using fetch method and APIS!
// async function getfacts(){
//         try{
//             let response=await axios.get(url);
//             //let data=await response.json();.......not using this,using axios to get data from server!
//             console.log("data=",response.data.fact);
// }
//             catch(error){
//                 console.log("error was",error);
//             }
//         }
//         getfacts();






//now connect the html and js file using script tag and get data from server using button click!
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact=await getfacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// });
// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let response=await axios.get(url);
//         //let data=await response.json();.......not using this,using axios to get data from server!
//         return response.data.fact;
// }
//         catch(error){
//             console.log("error was",error);
//             return "no facts found!";
//         }
//     }







//passing headers with axios to get data from server using fetch method and APIS!
// const url="https://icanhazdadjoke.com/";
// async function getjokes(){
//     try{
//         const config={
//             headers:{
//                 Accept:"application/json",
//             },
//         };
//         let response=await axios.get(url,config);
//         console.log(response.data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }







//adding qurey strings to the url to get data from server using fetch method and APIS!

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let country="nepal";
btn.addEventListener("click",async ()=>{
    let list=document.querySelector("#list");
    list.innerText="";
    let country=document.querySelector("input").value;
    console.log(country);

    let uniArr=await getuniversity(country);
    // console.log(uniArr);
    
    show(uniArr);
});

function show(uniArr){
    for (uni of uniArr){
        console.log(uni.name);

        let li=document.createElement("li");
        li.innerText=uni.name;
        list.appendChild(li);
    }
}
async function getuniversity(country){
    try{
        let response=await axios.get(url+country);
        return response.data;
    }
    catch(error){
        console.log(error);
        return "no university found!";
    }
}
