import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default ({ muglink }) => {
  const buy = () => {
    window.open(muglink, "_blank");
  };

  return (
    <section>
      <h3 className="section-title">Shop</h3>
      <a target="_blank" className="buy-link-title" href={muglink}>
        Leve sua caneca gohorse
      </a>
      <img
        width="400px"
        src="https://http2.mlstatic.com/caneca-go-horse-certified-professional-D_NQ_NP_898720-MLB30696159675_052019-F.webp"
      />
      <button onClick={buy}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Comprar</span>
      </button>
      <style jsx>
        {`
          .buy-link-title {
            font-family: Weston;
            font-size: 1.5rem;
            color: brown;
            text-decoration: none;
            font-weight: bold;
            text-shadow: 2px 2px 3px gray;
          }
          button {
            font-family: Quicksand;
            font-weight: bold;
            background-color: #9e4700;
            border: none;
            color: #ffffff;
            width: 220px;
            height: 50px;
            border-bottom: 4px solid #772e2e;
            border-radius: 9px;
            line-height: 46px;
          }
          button:hover {
            -ms-transform: translateY(4px);
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
            border-bottom: none;
          }
          button span {
            vertical-align: middle;
            text-shadow: 2px 2px 5px #462c17;
            margin: 0 6px;
          }
        `}
      </style>
    </section>
  );
};
