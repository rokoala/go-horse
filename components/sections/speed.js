export default ({ refProp }) => (
  <>
    <section ref={refProp} className="speed-container">
      <h3 className="section-title">Benchmark</h3>
      <div className="speed-comparison">
        <div className="finish">FINISH</div>
        <div className="running-track">
          <marquee className="grass">🐎 ITIL</marquee>
          <marquee className="grass" scrolldelay="55" truespeed="55">
            🐎 SCRUM
          </marquee>
          <marquee className="xgh-horse grass" scrolldelay="15" truespeed="15">
            🎠 EXTREME GOHORSE
          </marquee>
          <marquee className="grass">🐎COBIT</marquee>
          <marquee scrollamount="2" direction="right">
            PMBOK 🐎
          </marquee>
        </div>
      </div>
    </section>
    <style jsx>{`
      .speed-container {
        width: 100%;
        background-color: #fffefb;
      }
      .speed-comparison {
        width: 100%;
        display: flex;
        background-color: burlywood;
      }
      .speed-comparison .finish {
        display: block;
        z-index: 2;
        width: 0px;
        color: black;
        padding-top: 5px;
        padding-right: 20px;
        padding-left: 20px;
        background-color: #ffffff;
        word-break: break-all;
        box-shadow: 2px 3px 5px lightslategrey;
      }
      .speed-comparison .running-track {
        flex: 1;
      }
      .grass {
        border-bottom: 1px solid green;
      }
    `}</style>
  </>
);
