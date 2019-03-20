import React from "react";

const getFormattedDate = () => {
  const todayTime = new Date();
  const month = todayTime.getMonth();
  const day = todayTime.getDate();
  const year = todayTime.getFullYear();
  return day + "/" + month + "/" + year;
};

export default ({ name }) => (
  <div className="certificate">
    <img width="200" src="/static/logo.png" />
    <h1>This is to certify that</h1>
    <h2>{name}</h2>
    <h1>Has achieved the</h1>
    <h1>eXtreme GoHorse Process Certificate</h1>
    <p>Effective from</p>
    <p>{getFormattedDate()}</p>
    <p>Candidate Number</p>
    <p>123456789</p>
    <p>Certificate Number</p>
    <p>123456789</p>
    <p>goHorse</p>
    <style jsx>
      {`
        @import url("https://fonts.googleapis.com/css?family=Tangerine");
        img {
          background-color: white;
          border-style: outset;
          border-color: gold;
        }
        .certificate {
          border: 1px solid gray;
          width: 595px;
          height: 842px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #c5b15669;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23edf0dd' fill-opacity='0.54'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
        }
        h1 {
          font-family: "Tangerine", cursive;
        }
      `}
    </style>
  </div>
);
