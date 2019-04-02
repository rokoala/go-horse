import { withTranslation } from "react-i18next";

const Books = ({ t }) => (
  <div>
    <h3 className="section-header">{t("good-books")}</h3>
    <div className="books">
      <img className="book" src="/static/images/copy_paste.jpg" />
      <img className="book" src="/static/images/until_works.jpeg" />
      <img className="book" src="/static/images/googling.jpg" />
      <img className="book" src="/static/images/useless.jpg" />
      <img className="book" src="/static/images/code_nobody.jpg" />
    </div>
    <style jsx>
      {`
        .section-header {
          text-align: center;
          text-transform: uppercase;
        }
        .books {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .book {
          width: 250px;
          height: 350px;
        }
      `}
    </style>
  </div>
);

export default withTranslation("books")(Books);
