import { useRef, useEffect } from "react";
import { Head, Hero, Header, Footer } from "../components";
import {
  SpeedSection,
  AboutSection,
  ShopSection,
  ExamSection
} from "../components/sections";
import ReactGA from "react-ga";
import { Axiom } from "../components";
import { withTranslation } from "react-i18next";

const Index = ({ i18n }) => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1462658131006885",
      enable_page_level_ads: true
    });
    ReactGA.initialize("UA-137508594-1");
    ReactGA.pageview(document.location.pathname);
  }, []);

  return (
    <>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-1462658131006885"
        data-ad-slot="6724162623"
        data-auto-format="rspv"
        data-full-width
      >
        <div overflow></div>
      </amp-ad>
      <AboutSection refProp={refWhatIs} />
      <Axiom />
      <SpeedSection refProp={refSpeed} />
      <ExamSection />
      {i18n.language === "pt" && (
        <ShopSection
          imgSrc="https://http2.mlstatic.com/caneca-go-horse-certified-professional-D_NQ_NP_755061-MLB31828910724_082019-F.webp"
          link="https://produto.mercadolivre.com.br/MLB-1299690936-caneca-go-horse-certified-professional-_JM"
        />
      )}
      <Footer />
    </>
  );
};

export default withTranslation()(Index);
