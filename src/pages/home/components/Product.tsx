import { borderColor, borderRadius, padding } from "@mui/system";
import React from "react";

const Product = () => {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>Product</h1>
      <h2 style={styles.subtitle}>
        Tola makes it easy for SMBs to pay suppliers, send invoices, get access
        to working capital and gain control over business cash flow in one
        place.
      </h2>
      <hr style={styles.divider} />
      <h3 style={styles.card}>This is a hero section</h3>
    </div>
  );
};

const styles = {
  card: {
    padding: "3vw", 
    color: "black",
    borderWidth: "2px",
    borderColor: "black",
    borderRadius: "50px",
    backgroundColor: "white",
  },
  title: {
    fontSize: "5rem",
    fontWeight: "500",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "normal",
  },
  divider: {
    width: "100%",
    border: "none",
    borderBottom: "1px solid black",
    margin: "1vh 0", // Use vh for vertical margin
  },
};

export default Product;
