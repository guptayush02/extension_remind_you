function getCalenderList() {
  let me = localStorage.getItem('me');
  return new Promise((resolve, reject) => {
    me = JSON.parse(me);
    if (!!me) {
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${me.g.tokenObj.access_token}` }
      fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', { headers }).then((res, err) => {
        if (err) return reject(err);
        return resolve(res.json());
      });
    }
  });
};

function getEventsList(id) {
  let me = localStorage.getItem('me');
  return new Promise((resolve, reject) => {
    me = JSON.parse(me);
    if (!!me) {
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${me.g.tokenObj.access_token}` }
      let timeMax = new Date();
      timeMax.setDate(timeMax.getDate() + parseInt(2));
      timeMax = timeMax.toISOString();
      let timeMin = new Date().toISOString();
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${id}/events?alwaysIncludeEmail=${true}&showDeleted=${false}&singleEvents=${true}&timeMax=${timeMax}&timeMin=${timeMin}&alt=json&showHiddenInvitations=${true}&orderBy=startTime`, { headers }).then((res, err) => {
        if (err) return reject(err);
        return resolve(res.json());
      });
    }
  });
}

module.exports = {
  getCalenderList,
  getEventsList
}