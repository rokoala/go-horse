import { withTranslation } from "react-i18next";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Books = ({ t }) => (
  <Fade>
    <section>
      <h3 className="section-title">{t("good-books")}</h3>
      <Flip left cascade>
        <div className="books">
          <img className="book" src="/static/images/copy_paste.jpg" />
          <img className="book" src="/static/images/until_works.jpeg" />
          <img className="book" src="/static/images/googling.jpg" />
          <img className="book" src="/static/images/useless.jpg" />
          <img className="book" src="/static/images/code_nobody.jpg" />
        </div>
      </Flip>
      <style jsx>
        {`
          .books {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .book {
            margin: 15px 5px;
            width: 250px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.09);
          }
          @media all and (max-width: 900px) {
            .book {
              width: 170px;
            }
          }
        `}
      </style>
    </section>
  </Fade>
);

export default withTranslation("books")(Books);
