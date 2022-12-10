import React from "react";
import "./Card.css";

export default function App() {
    const arr = [
        {id: 1, name: "Beef", cal:60, time:20, port:2, img:'./beef.png'},
        {id: 1, name: "Salmon", cal:70, time:30, port:2,img:'./Salmon.png '},
        {id: 1, name: "Salad", cal:80, time:60, port:2  ,img:'./beef.png '},
      ]
  return (
    <div className="container">
    {arr.map(row =>
      <div className="box">
        <div className="image">
          <img src={row.img} width="70%" height="100%" />
        </div>
        <h3>{row.name}</h3>
        <p>{row.cal} calories</p>
        <div className="cardfooter">
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>Time</div>
            <div>{row.time} mins</div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              textAlign:"end",
            }}
          >
            <div>Portain</div>
            <div>5 person</div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
