import React from "react";

var style = {
  backgroundColor: "#f7f7f7",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  paddingTop: "20px",
  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.3)",
};

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer style={style}>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
