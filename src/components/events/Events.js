import React, { useEffect, useState } from "react";
import Header from '../header/Header.js';
import googleService from '../../services/googleService';
import { useLocation, withRouter } from "react-router-dom";
import moment from 'moment';
import checkEvents from '../../utils/checkEvents';

const Events = withRouter(({ history }) => {
  const location = useLocation();
  if (!location.state) return history.push("/calender-list");
  const { id } = location.state;
  const [calenderId, setCalenderId] = useState(id);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsList()
  }, []);

  const eventsList = async () => {
    try {
      const result = await googleService.getEventsList(calenderId);
      setEvents(result.items);
      let eventArray = [];
      result.items.map((item) => (
        eventArray.push({
          summary: item.summary,
          status: item.status,
          start_time: item.start.dateTime,
          end_time: item.end.dateTime,
          hangoutLink: item.hangoutLink || null
        })
      ));
      localStorage.setItem("events", JSON.stringify(eventArray));
      checkEvents();
    } catch (err) {
      console.log("err in events component", err);
    }
  }

  const openMeet = async (e) => {
    console.log("open meet")
    if (e.hangoutLink) return window.open(e.hangoutLink, '_blank');
    return console.log("meet link not found");
  }

  return (
    <div>
      <Header title='Events' back={true} />
      {
        events && events.length > 0 ?
        events.map((e, i) => (
          <div onClick={() => openMeet(e)} key={i}>
            creator: { e.creator.email } <br/>
            summary: { e.summary } <br />
            status: { e.status } <br />
            start time: { moment(e.start.dateTime).format('MMMM DD - YYYY, h:mm:ss a') } <br />
            end time: { moment(e.end.dateTime).format('MMMM DD - YYYY, h:mm:ss a') } <br />
            hangoutLink: { e.hangoutLink || 'N/A' } <br />
            attendees: {
              e.attendees.map((a, key) => (
                <div key={key}>
                  email: { a.email } <br />
                  responseStatus: { a.responseStatus }
                </div>
              ))
            }
            <hr />
          </div>
        )) : <p>Events list not found</p>
      }
    </div>
  )
});

export default Events;
