import { Axiom } from "../../components";

export default ({ refProp }) => {
  return (
    <>
      <section ref={refProp} className="content">
        <h3 className="section-title">What is eXtreme GoHorse</h3>
        <Axiom />
      </section>
      <style jsx>
        {`
          .content {
            margin: 0px 180px;
          }
        `}
      </style>
    </>
  );
};
