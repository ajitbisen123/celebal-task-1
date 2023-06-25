const FrameComponent = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "657px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "64px",
        color: "#000",
        fontFamily: "Manrope",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "85px",
          left: "82px",
          lineHeight: "82px",
          fontWeight: "800",
          display: "inline-block",
          width: "665px",
        }}
      >{`Use Dummy text in whole UI `}</div>
      <div
        style={{
          position: "absolute",
          top: "299px",
          left: "82px",
          fontSize: "26px",
          lineHeight: "40px",
          fontFamily: "Inter",
          display: "inline-block",
          width: "1002px",
          height: "246px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default FrameComponent;
