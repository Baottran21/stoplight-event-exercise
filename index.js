(function() {
  'use strict';
  //Query Select all the buttons
  const allButtons = document.querySelectorAll(".button");
  //iterate over the NodeList
  allButtons.forEach(btn => {
    btn.addEventListener('click', switched)
    //Create a mouseEnter event listener
    btn.addEventListener('mouseenter', (event) => {
      console.log(`Entered ${event.target.id.slice(0, -6)} button`)
    })
  });


  //Utilizing the target id of each button to allow 
  //better functionality of knowing which button is pushed
  function switched(btn) {
    if (btn.target.id === "stopButton") {
      changeColor("stop", "stopLight")
      // mouseMovement(btn.target.id.slice(0, -6))
    } else if (btn.target.id === "slowButton") {
      changeColor("slow", "slowLight")
      // mouseMovement(btn.target.id.slice(0, -6))
    } else if (btn.target.id === "goButton") {
      changeColor("go", "goLight")
      // mouseMovement(btn.target.id.slice(0, -6))
    }
    console.log(btn)
  }
  
  //Create a function that changes the color 
  function changeColor(color, element) {
    let current = document.getElementById(element);
    current.classList.toggle(color)
  }

})();