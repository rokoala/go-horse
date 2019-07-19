export default () => {
  return (
    <React.Fragment>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input
          type="hidden"
          name="business"
          value="xghcertification@gmail.com"
        />
        <input type="hidden" name="currency_code" value="BRL" />
        <input type="hidden" name="amount" value="5" />
        <input
          type="image"
          src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input
          type="hidden"
          name="business"
          value="xghcertification@gmail.com"
        />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="amount" value="5" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_BR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Raleway");
        .help-us {
          font-family: arial;
          margin: 12px 0;
          text-align: center;
          font-family: "Raleway", sans-serif;
        }
      `}</style>
    </React.Fragment>
  );
};
