export default () => {
  return (
    <React.Fragment>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="FRGV4A8A26XW6" />
        <input
          type="image"
          src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_SM.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Faça doações com o botão do PayPal"
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
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="FRGV4A8A26XW6" />
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
