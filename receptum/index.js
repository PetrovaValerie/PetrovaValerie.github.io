const elem = document.querySelector('input[name="firstDay"]');

const datepicker = new Datepicker(elem, {
   language: 'ru',
   autohide: true,
});

Date.prototype.addDays = function (days) {
   var date = new Date(this.valueOf());
   date.setDate(date.getDate() + days);
   return date;
}

let date;

const showDate = () => {
   if (!date) {
      return;
   }
   const active = document.querySelector(".active");
   const days = parseInt(active.getAttribute('data-days'));
   const finalDate = date.addDays(days);
   const formattedDate = finalDate.toLocaleString('ru', { day: 'numeric', month: 'numeric', year: 'numeric' });
   const lastDay = document.getElementById("lastDay");
   lastDay.value = formattedDate;
};

elem.addEventListener('changeDate', (ev) => { // event from API
   date = ev.detail.date;
   showDate();
});

elem.addEventListener('hide', showDate);
