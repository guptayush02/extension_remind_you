import moment from 'moment';

const checkEvents = () => {
  let events = localStorage.getItem('events');
  events = JSON.parse(events);
  if (!!events) {
    events.map((event, index) => {
      const startTime = moment(event.start_time).format("DD-MM-YYYY");
      const currentTime = moment().format("DD-MM-YYYY");
      console.log("same date", startTime === currentTime)
      if (startTime === currentTime) {
        console.log("date match")
        const current_time = moment().format("hh:mm:ss a");
        const start_time = moment(event.start_time).format("hh:mm:ss a");
        if (start_time >= current_time) {
          console.log("start time is greater and equal to current time")
          const duration = moment(start_time).diff(current_time, 'milliseconds');
          console.log("===>", start_time - current_time)
        }
        console.log("start time", start_time);
        console.log("current time", current_time);
      }
    });
  }
}

export default checkEvents;
