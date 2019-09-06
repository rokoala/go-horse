import Router from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Blink } from "../";
import Button from "../button";

export default ({ refProp }) => {
  const { t } = useTranslation("exam");
  const [name, setName] = useState();
  const [enableButton, setEnableButton] = useState(false);

  const go = () => {
    if (!!name && name !== "") {
      Router.push({ pathname: "/exam", query: { name } }, "/exam");
    }
  };

  return (
    <>
      <section ref={refProp} className="content">
        <h3 className="section-title">{t("dotheexam-title")}</h3>
        <h4>
          <Blink speed="1s">{t("dotheexam")}</Blink>
        </h4>
        <p>{t("blink-recommendation")}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            autoCapitalize="true"
            onChange={e => {
              if (e.target.value.trim() !== "") {
                setEnableButton(true);
              } else {
                setEnableButton(false);
              }
              setName(e.target.value.trim());
            }}
            placeholder={t("name")}
          />
          <Button
            style={
              enableButton
                ? {}
                : {
                    backgroundColor: "lightgray",
                    borderBottom: "lightgray",
                    boxShadow: "none",
                    cursor: "no-drop"
                  }
            }
            onClick={go}
          >
            {t("begin")}
          </Button>
        </form>
      </section>
      <style jsx>{`
        form {
          display: flex;
          margin: 10px 0;
          flex-direction: column;
        }
        form input {
          margin: 10px 0;
          border: none;
          border: 1px solid #eaeaea;
          font-family: "Quicksand", sans-serif;
          font-size: 18px;
          border-radius: 5px;
          padding: 10px;
        }
        form input:focus {
          outline: none;
        }
        h4 {
          text-align: center;
          color: red;
          font-size: 23px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
