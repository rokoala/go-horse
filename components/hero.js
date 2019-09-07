export default () => {
  return (
    <>
      <div className="hero">
        <div className="hero-background" />
        <div className="hero-text">
          <div className="title">free the horse inside you</div>
          <p className="phrase-1">Extreme GoHorse Process</p>
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            width: 100%;
            height: 100vh;
          }
          .hero-background {
            position: absolute;
            width: 100%;
            height: 100vh;
            background: url("/static/background/ganapathy-kumar.jpg");
            background-color: #c59470;
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
          .hero-text {
            position: absolute;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .title {
            text-align: center;
            font-family: NexaRust;
            font-size: 50px;
          }
          @media (max-width: 900px) {
            .title {
              font-size: 30px;
            }
          }

          .logo {
            background-color: white;
            border-radius: 50%;
            border: 10px double black;
            box-shadow: 0px 15px 10px -3px #3e312b;
          }
          .phrase-1 {
            text-align: center;
            font-family: Weston;
            font-size: 0.8rem;
            margin: 2.5rem 0;
            color: gold;
            text-shadow: 1px 1px 10px #9c8922;
          }
        `}
      </style>
    </>
  );
};
