let mainLi = document.querySelectorAll('.mainLi');

mainLi.forEach(li => {
  li.addEventListener('click', openMenu);
});

function openMenu(e){
  //console.log(e.target.firstChild.nextSibling)

  if(e.target.firstChild.nextSibling){
    e.target.firstChild.nextSibling.classList.toggle('active');
  }
}



const large = window.matchMedia('(min-width: 1800px)');
const medium = window.matchMedia('(max-width: 950px)');
const small = window.matchMedia('(max-width: 768px)');




function largeSize(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "green";



    let allHide = document.querySelectorAll('.hide');
    while(allHide.length){
      allHide[0].classList.remove('hide');
    }


  } else{

  }
}


function mediumSize(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";

    //remove last three lis and make a 'more' li containing them
    mainLi = document.querySelectorAll('.mainLi');

    let lastLi3 = mainLi.item(6);
    let lastLi2 = mainLi.item(7);
    let lastLi1 = mainLi.item(8);

    lastLi3.classList.add('hide');
    lastLi2.classList.add('hide');
    lastLi1.classList.add('hide');


  } else {
    document.body.style.backgroundColor = "green";
  }
}

function smallSize(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}


large.addEventListener("change", () => {
  this.largeSize(large);
  //this.smallSize(x);
});

medium.addEventListener("change", () => {
  this.mediumSize(medium);
  //this.smallSize(x);
});

small.addEventListener("change", () => {
  this.smallSize(small);
  //this.smallSize(x);
});


largeSize(large) // Call listener function at run time