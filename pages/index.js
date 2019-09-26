import { useRef, useEffect } from "react";
import { Head, Hero, Header, Footer } from "../components";
import {
  SpeedSection,
  AboutSection,
  ExamSection,
  BooksSection,
  CowboyCoderSection,
  ToolsSection
} from "../components/sections";
// import AdSense from "react-adsense";
// import ReactGA from "react-ga";
import { Axiom } from "../components";
import { withTranslation } from "react-i18next";
// const adclient = "ca-pub-1462658131006885";

const Index = ({ i18n }) => {
  const refWhatIs = useRef(null);
  const refSpeed = useRef(null);

  useEffect(() => {
    // (window.adsbygoogle = window.adsbygoogle || []).push({
    //   google_ad_client: "ca-pub-1462658131006885",
    //   enable_page_level_ads: true
    // });
    // ReactGA.initialize("UA-137508594-1");
    // ReactGA.pageview(document.location.pathname);
  }, []);

  return (
    <>
      <Header refs={{ refWhatIs, refSpeed }} />
      <Head title="XGH Certification" />
      <Hero />
      <AboutSection refProp={refWhatIs} />
      <Axiom />
      <SpeedSection refProp={refSpeed} />
      {/* <AdSense.Google
        client={adclient}
        slot="3286097608"
        style={{ display: "flex", justifyContent: "center" }}
        format="auto"
        responsive="true"
      /> */}
      <CowboyCoderSection />
      <ExamSection />
      {/* <AdSense.Google
        client={adclient}
        slot="6724162623"
        style={{ display: "flex", justifyContent: "center" }}
        format="auto"
        responsive="true"
      /> */}
      <BooksSection />
      <ToolsSection />
      {/* <AdSense.Google
        client={adclient}
        slot="4615491145"
        style={{ display: "flex", justifyContent: "center" }}
        format="auto"
        responsive="true"
      /> */}
      <Footer />
    </>
  );
};

export default withTranslation()(Index);
