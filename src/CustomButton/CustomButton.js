import React from "react";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    margin: 50,
    padding: 10,
    width: 180,
    fontSize: 20,
    fontWeight: "bold",
  },
});

function CustomButton(props) {
  return <Button variant="contained" color="primary" {...props} />;
}

export default withStyles(styles)(CustomButton);
