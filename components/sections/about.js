export default ({ refProp }) => {
  return (
    <>
      <section ref={refProp} className="content">
        <h3>What is eXtreme GoHorse</h3>
        <p>
          eXtreme GoHorse é uma sátira as metodologias de desenvolvimento e
          gerenciamento de projetos
        </p>
      </section>
      <style jsx>
        {`
          .content {
            display: flex;
            flex-direction: row;
            padding: 0px 180px;
          }
        `}
      </style>
    </>
  );
};
