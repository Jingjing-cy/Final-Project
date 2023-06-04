
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





let form = document.querySelector('#signupform');

function submitForm(event) {
  event.preventDefault();
  
  let nameInput = document.querySelector('#name');
  
  let errorContainer = document.querySelector('#first-name-error');
  if (nameInput.value.length < 1) {
    errorContainer.textContent = 'First name must not be empty';
  } else {
    errorContainer.textContent = '';
  }
}

form.addEventListener('signupbtn', submitForm);