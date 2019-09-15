import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

const Tools = ({ t }) => (
  <Fade>
    <section>
      <h3 className="section-title">Good Tools</h3>
      <div className="tools">
        <Fade cascade>
          <ol>
            <li>
              <a href="https://baconipsum.com/api/">Bacon Ipsum</a>
            </li>
            <li>
              <a href="https://foaas.com/">FOOAS</a>
            </li>
            <li>
              <a href="https://http.cat">HTTP CATS</a>
            </li>
            <li>
              <a href="https://httpstatusdogs.com">HTTP DOGS</a>
            </li>
            <li>
              <a href="https://rapidapi.com/ConflictGames/api/slapbot/endpoints">
                Slap Bot API
              </a>
            </li>
            <li>
              <a href="https://yesno.wtf/#api">Yes or no api</a>
            </li>
          </ol>
        </Fade>
      </div>

      <style jsx>
        {`
          .tools {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          ol {
            list-style: none;
            text-align: center;
            padding: 0;
          }
          li {
            margin: 1rem 0;
          }
          a {
            font-size: 1.5rem;
            line-height: 2rem;
            text-transform: uppercase;
          }
          a:visited {
            color: black;
          }
          a:hover {
            color: brown;
          }
          a:active {
            color: black;
          }
        `}
      </style>
    </section>
  </Fade>
);

export default withTranslation("books")(Tools);
