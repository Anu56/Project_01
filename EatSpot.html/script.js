 const wrapper = document.querySelector('.wrapper');
  const loginlink = document.querySelector('.login-link');
 const registerlink =  document.querySelector('.register-link')
  const loginbutton = document.querySelector('.btn')

 registerlink.addEventListener("click" ,()=> {
  wrapper.classList.add("active");
    });

  loginlink.addEventListener("click" ,()=> {
    wrapper.classList.remove("active");
     });
     loginbutton.addEventListener("click" ,()=> {
      wrapper.classList.add("active-popup");
       });