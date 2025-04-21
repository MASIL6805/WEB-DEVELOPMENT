console.log("masil farooq");
let sharpneprice=30;
let eraserprice=15;
let output= (sharpneprice + eraserprice);
console.log("TOTAL PRICE=",output,"RUPEES.");

let pencilprice=35;
let scaleprice=25;
let total=`TOTAL PRICE: ${pencilprice+scaleprice} RUPEEES.`;
console.log(total);

let color="red";
if(color=="red"){
    console.log("stop");
}
if(color=="yellow"){
    console.log("slow down");
}
if(color=="green"){
    console.log("go");
}

let str="aUBBLE";
if(str[0]==="a" && str.length>3){
    console.log("GOOD STRING");
}else{
    console.log("BAD STRING");
}

let num=40
if(num%10==0){
    console.log("good")
}else{
    console.log("not a good num")
}
let name=prompt("PLEASE ENTER YOUR NAME");
let age=prompt("PLEASE ENTER YOUR AGE");
let info=(name+" "+"is"+" "+age+" "+"year old");
console.log(info)

let a=2;
let b=5;
let c=4;
if(a>b){
    if(a>c){
        console.log("a is greater");
    }
}
if(c>a){
    if(c>b){
        console.log("c is greater");
    }
}
if(b>a){
    if(b>c){
        console.log("b is greater");
    }
    
}
let num1=30;
let num2=43562;
if((num1%10)==(num2%10)){
    console.log("number is same which is",num1%10);
}else{
    console.log("number is not same");
}
let msg=" help     ";
msg.trim().toUpperCase();
console.log(msg.trim().toUpperCase());
let arr=[2,3,4,6,3,1,4,2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);
let arr1=[2,3,4,6,3,1,4,2];
let n1=3;
let ans1=arr.slice(arr.length-n);
console.log(ans1);

