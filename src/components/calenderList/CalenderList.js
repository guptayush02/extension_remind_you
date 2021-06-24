import React, { useEffect, useState } from "react";
import Header from '../header/Header.js';
import googleService from '../../services/googleService';
import { withRouter } from "react-router-dom";

const CalenderList = withRouter(({ history }) => {

  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const result = await googleService.getCalenderList();
      setList(result.items);
    } catch (err) {
      console.log("err in calender list", err);
    }
  }

  const enterCalender = async (id) => {
    console.log("enter calender", id)
    history.push("/events", { id });
  }

  return (
    <div>
      <Header title="CalenderList" back={false} />
      {
        list && list.length > 0 ?
        list.map((l, i) => (
          <div onClick={() => enterCalender(l.id)} key={i}>
            id: {l.id} <br />
            Role: {l.accessRole} <br />
            Description: {l.description} <br />
            Summary: {l.summary}
            <hr />
          </div>
        )) : <p>Calender list not found</p>
      }
    </div>
  )
});

export default CalenderList;
