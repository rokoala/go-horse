import { useRef, useEffect } from "react";
import { Head, Hero, Header, Footer } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection,
  ExamSection
} from "../components/sections";
import AdSense from "react-adsense";
import ReactGA from "react-ga";
import { Axiom } from "../components";
import { withTranslation } from "react-i18next";
const adclient = "ca-pub-1462658131006885";

const Index = ({ i18n }) => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);

  useEffect(() => {
    // (window.adsbygoogle = window.adsbygoogle || []).push({
    //   google_ad_client: "ca-pub-1462658131006885",
    //   enable_page_level_ads: true
    // });
    ReactGA.initialize("UA-137508594-1");
    ReactGA.pageview(document.location.pathname);
  }, []);

  return (
    <>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <AboutSection refProp={refWhatIs} />
      <Axiom />
      <AdSense.Google
        client={adclient}
        slot="3286097608"
        style={{ display: "flex", justifyContent: "center" }}
        format="auto"
        responsive="true"
      />
      <SpeedSection refProp={refSpeed} />
      <AdSense.Google
        client={adclient}
        slot="6724162623"
        style={{ display: "flex", justifyContent: "center" }}
        format="auto"
        responsive="true"
      />
      <ExamSection />
      {(i18n.language === "pt" || i18n.language === "pt-BR") && (
        <ShopSection
          imgSrc="https://http2.mlstatic.com/caneca-go-horse-certified-professional-D_NQ_NP_755061-MLB31828910724_082019-F.webp"
          link="https://produto.mercadolivre.com.br/MLB-1299690936-caneca-go-horse-certified-professional-_JM"
        />
      )}
      <AdSense.Google
        client={adclient}
        className="adsbygoogle"
        slot="3725081307"
        style={{ display: "flex", justifyContent: "center" }}
        responsive="true"
        format="auto"
      />

      <Footer />
    </>
  );
};

export default withTranslation()(Index);
