let store="";
let pressed=(value)=>{
    let show=document.querySelector("#display");
    store=store+value;
    show.innerHTML=store;
}
let equal=()=>{
    let show=document.querySelector("#display");
    show.innerHTML=eval(store);
    store=eval(store);
    store.toString;
}
let ac=()=>{
    let show=document.querySelector("#display");
    store="";
    show.innerHTML="0";
}
let del=()=>{
    let show=document.querySelector("#display");
    store=store.slice(0,-1);
    show.innerHTML=store;
}

let square=()=>{
    let show=document.querySelector("#display");
    store=store*store;
    show.innerHTML=store;
}