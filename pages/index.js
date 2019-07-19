import { useRef } from "react";
import { Head, Hero, Header } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection
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
      <ShopSection />
    </div>
  );
};
