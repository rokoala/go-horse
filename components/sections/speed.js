import Fade from "react-reveal/Fade";

export default ({ refProp }) => (
  <>
    <Fade>
      <section ref={refProp} className="speed-container">
        <h3 className="section-title">Benchmark</h3>
        <div className="speed-comparison">
          <div className="finish">FINISH</div>
          <div className="running-track">
            ``
            <marquee className="grass">🐎 ITIL</marquee>
            <marquee className="grass" scrolldelay="55" truespeed="55">
              🐎 SCRUM
            </marquee>
            <marquee
              className="xgh-horse grass"
              scrolldelay="15"
              truespeed="15"
            >
              🎠 EXTREME GOHORSE
            </marquee>
            <marquee className="grass">🐎COBIT</marquee>
            <marquee scrollamount="2" direction="right">
              PMBOK 🐎
            </marquee>
          </div>
        </div>
      </section>
    </Fade>
    <style jsx>{`
      .speed-container {
        width: 100%;
        background-color: #fffefb;
      }
      .speed-comparison {
        width: 100%;
        max-width: 900px;
        display: flex;
        background-color: burlywood;
      }
      .speed-comparison .finish {
        display: flex;
        border: 1px solid #f3f3f3;
        justify-content: center;
        align-items: center;
        z-index: 2;
        width: 0px;
        color: black;
        padding-top: 5px;
        padding-right: 20px;
        padding-left: 20px;
        background-color: #ffffff;
        word-break: break-all;
        box-shadow: 3px 0px 0px rgba(0, 0, 0, 0.3);
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
