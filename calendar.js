const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  locale: 'ko',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  events: [
    {
      title: '중간고사 시작',
      start: '2025-07-05'
    },
    {
      title: '방과후 활동',
      start: '2025-07-08T16:00:00'
    },
    {
      title: '야외 체험학습',
      start: '2025-07-11',
      end: '2025-07-13'
    },
    {
      title: '회의',
      start: '2025-07-15T10:30:00'
    }
  ]
});
const calendarEl = document.getElementById('calendar');
calendar.render();