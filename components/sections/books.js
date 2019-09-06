import { withTranslation } from "react-i18next";

const Books = ({ t }) => (
  <section>
    <h3 className="section-title">{t("good-books")}</h3>
    <div className="books">
      <img className="book" src="/static/images/copy_paste.jpg" />
      <img className="book" src="/static/images/until_works.jpeg" />
      <img className="book" src="/static/images/googling.jpg" />
      <img className="book" src="/static/images/useless.jpg" />
      <img className="book" src="/static/images/code_nobody.jpg" />
    </div>
    <style jsx>
      {`
        .books {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .book {
          margin: 20px 5px;
          width: 250px;
          height: 350px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.09);
        }
      `}
    </style>
  </section>
);

export default withTranslation("books")(Books);
