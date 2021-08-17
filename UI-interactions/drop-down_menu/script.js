const mainLi = document.querySelectorAll('.mainLi');

mainLi.forEach(li => {
  li.addEventListener('click', openMenu);
});

function openMenu(e){
  //console.log(e.target.firstChild.nextSibling)

  if(e.target.firstChild.nextSibling){
    e.target.firstChild.nextSibling.classList.toggle('active');
  }
}
