// calendar.js

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      locale: 'ko', // 한글로 표시되게 설정
  
      events: [
        {
          title: '중간고사',
          start: '2025-07-01',
          end: '2025-07-04'
        },
        {
          title: '방학식',
          start: '2025-07-19',
          allDay: true
        },
        {
          title: '동아리 발표회',
          start: '2025-07-10',
          allDay: true
        }
      ],
  
      dateClick: function (info) {
        alert(`클릭한 날짜: ${info.dateStr}`);
      }
    });
  
    calendar.render();
  });
  