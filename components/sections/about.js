export default ({ refProp }) => {
  return (
    <>
      <section ref={refProp} className="content">
        <h3>What is extreme gohorse</h3>
        <p>
          <b>eXtreme GoHorse</b> é uma sátira as metodologias de desenvolvimento
          e gerenciamento de projetos
        </p>
      </section>
      <style jsx>
        {`
          .content {
            display: flex;
            flex-direction: row;
            padding: 30px 200px;
            justify-content: center;
          }
          h3 {
            margin: 35px;
            line-height: 30px;
            text-align: right;
          }
          p {
            line-height: 20px;
          }
        `}
      </style>
    </>
  );
};
