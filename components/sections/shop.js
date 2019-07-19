export default ({ link, imgSrc }) => {
  const buy = () => {
    window.open(link, "_blank");
  };
  return (
    <section>
      <h3 className="section-title">Shop</h3>
      <a href={link}>Compre sua caneca GoHorse</a>
      <img src={imgSrc} />
      <button onClick={buy}>Compre</button>
      <style jsx>{`
        img {
          width: 400px;
        }
      `}</style>
    </section>
  );
};
