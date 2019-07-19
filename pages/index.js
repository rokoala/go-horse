import { useRef } from "react";
import { Head, Hero, Header } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection,
  ExamSection
} from "../components/sections";
import { Axiom } from "../components";

export default () => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);
  return (
    <div>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <AboutSection refProp={refWhatIs} />
      <Axiom />
      <SpeedSection refProp={refSpeed} />
      <ExamSection />
      <ShopSection
        imgSrc="https://http2.mlstatic.com/caneca-go-horse-certified-professional-D_NQ_NP_898720-MLB30696159675_052019-F.webp"
        link="https://produto.mercadolivre.com.br/MLB-1270404740-caneca-go-horse-certified-professional-_JM"
      />
    </div>
  );
};
