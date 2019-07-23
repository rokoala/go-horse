import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => {
  const { t } = useTranslation("axioms");

  return (
    <>
      <div className="my-carousel">
        <Carousel
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={7000}
          useKeyboardArrows={true}
        >
          {Array.apply(null, Array(24)).map((axiom, index) => (
            <div className="axiom" key={index}>
              <h3>{t("title" + (index + 1))}</h3>
              <p>{t("description" + (index + 1))}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>
        {`
          .axiom {
            color: black;
            background: #efefef;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          p {
            padding: 20px;
          }
          .my-carousel {
            border-top: 1px solid rgba(0, 0, 0, 0.09);
            border-bottom: 1px solid rgba(0, 0, 0, 0.09);
          }
        `}
      </style>
      <style jsx global>{`
        li.slide {
          background: #efefef !important;
        }
        .carousel .control-prev.control-arrow:before {
          border-right: 8px solid black !important;
        }
        .carousel .control-next.control-arrow:before {
          border-left: 8px solid black !important;
        }
      `}</style>
    </>
  );
};
