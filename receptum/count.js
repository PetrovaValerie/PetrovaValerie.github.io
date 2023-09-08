const buttons = document.querySelectorAll('.countBtn');

buttons.forEach((el) => {

   el.addEventListener("click", function (event) {

      event.preventDefault();

      buttons.forEach((button) => {

         if (button === event.target) {
            button.classList.add('active');
         } else {
            button.classList.remove('active');
         }

         const lastDay = document.getElementById("lastDay");
         lastDay.value = '';

         const elem = document.querySelector('input[name="firstDay"]');
         elem.value = '';

      })
   })
})
