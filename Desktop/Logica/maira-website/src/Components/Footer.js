import { Box } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

export function Footer() {
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "60px",
          background: "#6cf",
        }}
      >
        <BottomNavigation class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
          <Chip
            class="fa fa-medium w3-hover-opacity"
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={() => window.open("https://mairagalvao.medium.com/")}
          ></Chip>
          <Chip
            class="fa fa-github w3-hover-opacity"
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={() => window.open("https://github.com/MairaGalvao")}
          ></Chip>
          <Chip
            class="fa fa-linkedin w3-hover-opacity"
            target="_blank"
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/maira-galvao")
            }
          ></Chip>
          <Typography>
            Made by <Link>Maíra Galvão</Link>
          </Typography>
        </BottomNavigation>
      </Box>
    </>
  );
}
