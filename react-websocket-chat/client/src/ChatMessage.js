import React from 'react'

const d = new Date();
const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
export default ({ name, message, uname, chatime }) =>
  <p className={"chat-bubble " + (uname === name? "current-user" : "")}>
    <strong>{name}</strong> <em>{message}</em>
    <strong className="float-right">{(uname === name? <b>{time}</b> : <b>{chatime}</b>)}</strong>
    
  </p>
