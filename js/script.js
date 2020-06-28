const themeswitch = document.getElementById("themetoggler");
const svgs = document.querySelectorAll('svg')
const navbar = document.querySelector('.navbar')

themeswitch.addEventListener('change', (e) => {
  if(e.target.checked){
    svgs.forEach(svg => {
      svg.style.color = "white"
    }
    )
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    if (
      navbar.classList.contains("navbar-light") &&
      navbar.classList.contains("bg-light")
    ) {
      navbar.classList.remove("navbar-light");
      navbar.classList.remove("bg-light");
    }
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");

  }else{
    svgs.forEach(svg => {
      svg.style.color = "black"
    })
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    if (
      navbar.classList.contains("navbar-dark") &&
      navbar.classList.contains("bg-dark")
    ) {
      navbar.classList.remove("navbar-dark");
      navbar.classList.remove("bg-dark");
    }
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
  }
})