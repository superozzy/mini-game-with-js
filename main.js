// set var
const No= document.querySelector('.center');
const left =document.querySelector('.left');
const right=document.querySelector('.right');
// const top=document.querySelector('.top');
const yes=document.querySelector('.yes');
const yesMessage=document.querySelector('.message')


No.addEventListener('click',function(){
    No.classList.add(".left");
    No.style.display = 'none';
    left.style.display='block';
    
})
left.addEventListener('click',function(){
    left.classList.add(".right");
    left.style.display = 'none';
    right.style.display='block';
    
})
right.addEventListener('click',function(){
    right.classList.add(".left");
    right.style.display = 'none';
    left.style.display='block';
    
})


yes.addEventListener('click',function(){
    yesMessage.style.display  = 'block';
  
})