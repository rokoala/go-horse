import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => {
  const { t } = useTranslation("axioms");

  return (
    <>
      <Carousel showThumbs={false}>
        {Array.apply(null, Array(24)).map((axiom, index) => (
          <div className="axiom" key={index}>
            <h3>{t("title" + (index + 1))}</h3>
            <p>{t("description" + (index + 1))}</p>
          </div>
        ))}
        <style jsx>{`
          .axiom {
            color: white;
          }
        `}</style>
      </Carousel>
    </>
  );
};
