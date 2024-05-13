import { colors } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Pay bills, get paid and manage cash flow</h1>
        <h2 style={styles.subtitle}>
          Tola combines accounts payable, receivable and cash flow management
          with working capital, helping save businesses time and money.
        </h2>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    height: "50vh",
    padding: "3vw",
    paddingTop: "9vw",
    color: "black",
    borderWidth: "2px",
    borderRadius: "50px",
    backgroundColor: "white",
  },
  textContainer: {
    width: "110vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10vh",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "500",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    color: colors.grey[700],
  },
};

export default Hero;
