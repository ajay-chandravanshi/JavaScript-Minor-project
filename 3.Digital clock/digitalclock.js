setInterval(() => {
  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let ampm=document.querySelector("#ampm");
  let time=new Date()
  
  let hour=time.getHours();
  hours.innerHTML=hour;
  minutes.innerHTML=time.getMinutes();
  seconds.innerHTML=time.getSeconds();

  if(hour<12)
  {
    ampm.innerHTML="AM";
  }
  else{
    ampm.innerHTML="PM";
  }
   
}, 1000);
