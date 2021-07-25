import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

export function NavBar() {
  let history = useHistory();
  return (
    <Box class="w3-top">
      <Box
        class="w3-bar w3-white w3-wide w3-padding w3-card"
        style={{ height: "50px" }}
      >
        <Typography class="w3-bar-item" style={{ padding: "0px 20px" }}>
          Web <b> Developer </b>
        </Typography>

        <Box class="w3-right w3-hide-small">
          <Typography
            href="#Life-Style-Info"
            class="w3-bar-item w3-button"
            style={{ padding: "0px 20px" }}
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Typography>

          <Typography
            href="#Life-Style-Info"
            class="w3-bar-item w3-button"
            style={{ padding: "0px 20px" }}
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </Typography>

          <Typography
            href="#contact"
            class="w3-bar-item w3-button"
            style={{ padding: "0px 20px" }}
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
