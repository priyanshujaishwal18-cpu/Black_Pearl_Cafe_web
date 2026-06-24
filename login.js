const signinTab = document.getElementById("signinTab");
const signupTab = document.getElementById("signupTab");

const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

signupTab.addEventListener("click", () => {

  signupTab.classList.add("active");
  signinTab.classList.remove("active");

  signupForm.classList.add("active");
  signinForm.classList.add("hide");

});

signinTab.addEventListener("click", () => {

  signinTab.classList.add("active");
  signupTab.classList.remove("active");

  signupForm.classList.remove("active");
  signinForm.classList.remove("hide");

});

function togglePassword(id, icon){

  const input = document.getElementById(id);

  if(input.type === "password"){

    input.type = "text";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");

  }

  else{

    input.type = "password";

    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");

  }

}