export default ({ children, onClick, style }) => {
  return (
    <>
      <button type="button" style={style} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            min-width: 16rem;
            line-height: 20px;
            cursor: pointer;
            font-family: "Quicksand", sans-serif;
            font-weight: bold;
            background-color: #79f371;
            padding: 15px;
            color: white;
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-bottom: solid 3px #70e074;
            box-shadow: 0 3px 6px -3px #9db998;
            border-radius: 5px;
          }
          button:focus {
            outline: none;
          }
        `}
      </style>
    </>
  );
};
