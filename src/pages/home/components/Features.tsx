import { colors } from "@mui/material";
import React from "react";

const Features = () => {
  return (
    <div style={styles.features}>
      <div style={styles.card}>Card 1</div>
      <div style={styles.card}>Card 2</div>
      <div style={styles.card}>Card 3</div>
      <div style={styles.card}>Card 4</div>
    </div>
  );
};

const styles = {
  features: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "5px",
    padding: "0px",
  },
  card: {
    height: "50vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "50px",
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

export default Features;
