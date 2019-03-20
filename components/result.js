import React from "react";

export default ({ name, result }) => (
  <section>
    <h1>Congratulations</h1>
    <h2>{name}</h2>
    <h2>Your score is</h2>
    <p>{parseInt(result, 10) * 100}%</p>
    <img width="200" src="/static/genius-meme.jpg" />
    <button>Print your certificate</button>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </section>
);
