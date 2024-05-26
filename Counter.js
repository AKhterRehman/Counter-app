// const count=document.querySelector(".count");
// const plusbtn=document.getElementById("plus");
// const minusbtn=document.getElementById("minus");
// plusbtn.addEventListener('click',function(){
//     const newcount=parseInt(count.innerText);
//     count.innerText=newcount + 1;
// })
const count = document.querySelector(".count");
const plusbtn = document.getElementById("plus");
const minusbtn = document.getElementById("minus");

// Event listener for the plus button
plusbtn.addEventListener('click', function() {
    const newcount = parseInt(count.innerText);
    count.innerText = newcount + 1;
});

// Event listener for the minus button
minusbtn.addEventListener('click', function() {
    const newcount = parseInt(count.innerText);
    if (newcount > 0) {
        count.innerText = newcount - 1;
    }
});

