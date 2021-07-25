import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import CodeIcon from "@material-ui/icons/Code";
import HttpIcon from "@material-ui/icons/Http";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function TheRealBill() {
  console.log("i am the project");
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box>
        <Card className={classes.root}>
          <CardHeader
            style={{ cursor: "pointer" }}
            avatar={
              <Avatar aria-label="project-logo" className={classes.avatar}>
                Redux
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="The Real Bill"
            subheader="July, 2021"
          />
          <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/bbZESX627zHZeIEsD76nvykr7_oD-pfqiePg-8m6yDd1_6mQ28GtnOA1sFSTxe96rWP-RhUoYRB4y2ewUEImCDmJquCWnnWh-qVK0BbZv_bA0md-_iTbUZGPs1sOu14k7KYulHaCZ-GWwx-Eg4Y0vin-RugXu0r94HJBktn5uDNvmCD6uWxeeX0__pi3LbIHA1ZDBwDvYFz51Sqhi0Y4oyw8OkoYp0Zx2SZUhjDv9CVFXWUlmI8jNqATaTtIrDVMrUvca3-VKGiWyvEBEYZsxbYU0dCfyrW_SGoQ78940CzIqVRjmHPWW371jGqfg5_hVboDvin05y-OmMtqZEXlpNcLVSVcxbtYHbTZWhmDd6boHF8-cDBgmNEGn8MRblj5ye4Bzc3LKSUgkDGfrsDn-FiwQfXqrfrN7vC2J8vcexn4wWtK12wXQ832cHqUV3vIr9Ol4n0VLhyRr-mxg6vRVzs8-Ye8Y8MoeJMgl3bBRiI0ljWSLc-_N6H9jbyFg8NR9ywQub4DrglNeZ1InimhLzs4WkFDWZ1KjgVLmnUV0JEGc3mL1EWhutD25Oq7vhqCh5Wh5WFh9Ju-uvUnLPsu5kQeudoMPbqFIRvDVAFVAeHScuvdHIqJ4Uf2mO6VDAJeV3XcUOlFMSNkqYQr_s8EftsUqZYRmPNTetwMM8I-HKa423hJnjwLygy9stt_BploKjwKgk5iSvlKT90bd9zIvLA_iQ=w902-h505-no?authuser=0"
            title="The Real Bill"
          />

          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "Montserrat",
              }}
            >
              An app that provides information about the Living Index - theory
              based on the Purchasing Power Parity
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                margin: "4px",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <CodeIcon
                aria-label="see the code"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/MairaGalvao/TheRealBill")
                }
              >
                {" "}
              </CodeIcon>
              GitHub
            </Box>
            <Box
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                margin: "4px",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
              <DescriptionIcon
                aria-label="Demo"
                style={{ cursor: "pointer" }}
                onClick={() => window.open()}
              ></DescriptionIcon>
              Demo
            </Box>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Box>
                Read more
                <ExpandMoreIcon />
              </Box>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Project:</Typography>
              <Typography paragraph>
                The <b> Big Mac Index </b> was invented by The Economist in 1986
                as a lighthearted guide to whether currencies are at their
                “correct” level. It is based on the theory of purchasing-power
                parity (PPP).
              </Typography>
              <Typography paragraph>
                This website was created to help users understand the living
                index according to the country they choose.
              </Typography>

              <Typography>
                <b> Tip: </b> Decide on a country where you desire to feel like
                a local.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}
