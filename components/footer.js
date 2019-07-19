import { Donate, SharePage } from "./";
import Link from "next/link";

export default () => (
  <>
    <footer>
      <Link href={"/termsofservice-pt"}>
        <a>{"Termos de serviço"}</a>
      </Link>
      <a href="mailto:xghcertification@gmail.com">{"Contate nos"}</a>
      <Donate />
      <div className="share-buttons">
        <SharePage />
      </div>
    </footer>
    <style jsx>
      {`
        .share-buttons {
          display: flex;
          margin-top: 15px;
        }
        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 20px;
          align-items: center;
          border-top: 1px solid gray;
          color: black;
          width: 100%;
          padding: 15px;
        }
      `}
    </style>
  </>
);
