export default ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            min-width: 16rem;
            margin: 0.5rem;
            cursor: pointer;
            font-family: Weston;
            background-color: brown;
            padding: 15px;
            color: white;
            border: none;
            box-shadow: 0 3px 6px -3px #a0442f;
            border-radius: 5px;
          }
          button:hover {
            box-shadow: 0 10px 16px -10px #ab4a34;
          }
          button:focus {
            outline: none;
          }
        `}
      </style>
    </>
  );
};
