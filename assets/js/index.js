let dropdownContent = document.getElementById('menu-dropdown-content');
dropdownContent.style.display = "none";
function toogleMenuBar() {
  console.log(dropdownContent);
  console.log(dropdownContent.style.display);
  if (dropdownContent.style.display == "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }

}

function redirectToWhatsapp(id) {
  document.getElementById(id).addEventListener('click',e=> 
  {
    e.preventDefault();
    window.location.replace('https://wa.me/+917206077872')
  })
}


let telephone_btn = document.querySelector('.btn-telephone')

telephone_btn.addEventListener('click', e => {
  window.location.replace('tel:+917206077872')
})
document.getElementById('home_logo').addEventListener('click',e => {
  window.location.replace('index.html')
})