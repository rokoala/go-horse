export default ({ children, speed }) => {
  return (
    <>
      <span>
        {children}
        <style jsx>
          {`
            @keyframes blink {
              0% {
                visibility: hidden;
              }
              50% {
                visibility: hidden;
              }
              100% {
                visibility: visible;
              }
            }
            animation: blink ${speed} infinite;
          `}
        </style>
      </span>
    </>
  );
};
