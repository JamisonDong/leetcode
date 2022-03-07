(function mysetinterval(){
  let t = setTimeout(()=>{
    console.log(1);
    clearTimeout(t)
    mysetinterval()
  },1000)
})()