import { useRef } from "react";
import { withTranslation } from "react-i18next";
import { Head, Hero, Header, Footer } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection
} from "../components/sections";

const Index = ({ t }) => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);
  return (
    <div>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <AboutSection refProp={refWhatIs} />
      <SpeedSection refProp={refSpeed} />
      <ShopSection muglink="https://produto.mercadolivre.com.br/MLB-1270404740-caneca-go-horse-certified-professional-_JM" />
      <Footer />
    </div>
  );
};

export default withTranslation("index")(Index);
