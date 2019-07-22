export default ({ link, imgSrc }) => {
  const buy = () => {
    window.open(link, "_blank");
  };
  return (
    <section>
      <h3 className="section-title">Shop</h3>
      <img src={imgSrc} />
      <h4>Caneca GoHorse Process</h4>
      <button onClick={buy}>Compre</button>
      <style jsx>{`
        img {
          width: 300px;
        }
      `}</style>
    </section>
  );
};
