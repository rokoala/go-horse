import Router from "next/router";

export default ({ refProp }) => {
  const go = () => {
    const name = prompt("Please fill your name", "");
    if (name !== null || name !== "") {
      Router.push({ pathname: "/exam", query: { name } }, "/exam");
    }
  };
  return (
    <>
      <section ref={refProp} className="content">
        <h3>Do the exam</h3>
        <p>Faça seu exame para obter o certificado xGoHorse de graça</p>
        <button onClick={go}>Começar</button>
      </section>
      <style jsx>{``}</style>
    </>
  );
};
