import { useRef } from "react";
import { Head, Hero, Header } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection
} from "../components/sections";

export default () => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);
  return (
    <div>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <AboutSection refProp={refWhatIs} />
      <SpeedSection refProp={refSpeed} />
      <ShopSection />
    </div>
  );
};
