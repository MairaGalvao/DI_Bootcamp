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
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {},
  avatar: {
    backgroundColor: red[500],
  },
}));

export function IFlashGeek() {
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
            avatar={<Avatar className={classes.avatar}>JS</Avatar>}
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="I Flash Geek"
            subheader="April, 2021"
          />
          <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/7SBH_Rp7OdJdQ5rtH4-ULIaKGqQ1BxVtlPh_dYfgFqxfbZ6n7WnA_BKqELQfWHnqjsfEg-SNdLEc2goMnJTF8-dRQyE7asjdgl5ZUgnZO116hRDd-V-AMB1h1Qrz9co196fbyOpN2S5nKDSNGdEW-XTPuLcQLoljh4U93bkDvqD7vD6ZIDtRK0GgPkPR8s93UIru1ejPosWk8GSd9YV1Kvl1bNo4t5z1Fce3OoA4MBDrPCF4zXPHXcQ_1T-wzTk1ZPkUOamC8v6QhJgm-rFnziah-p_XskCQv1uOvAW1TikeMENTxKoBa0hgTPZxx1qvEsckDFmm4JJQR92knzhQyGk03laD_jbMzEk5REidljGgEEbAFV0EvIsn4vqkkmsWbmAMf6cCsWG_29Fx4dtMBORzjdvjdwIIBr3JRSOHjUcdoNEt1Ce6it2_xnFLcZZ3E8jlvxU-YIrdlOfExNFZG_xwuH0-bLKh5I2boueuZnJ19nsCJSOsFBNwH05ndDx34bEcRZiypzV3Y6H3TUkD-HJHh5NoEqzSe2lD2YoGUZrwwBBEbyatBryw3W77usHP6B0_8hCkZiPsnN8AQ8RZ7admmYkoYK4swNyvpe_0Um2YP2Rh27KzIcEVDZ2ZqrOV_UJoT_dIIr5wEF-IWJP8_nmkIbuQ-5n0vnOCSA6RssvSPxB5UHJ0mRRT4jKZ4x8RJrxqMXAUhWXWUYrwNFBqB1KLAQ=w453-h220-no?authuser=0"
            title="I Flash Geek"
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
              Serverless flashcards app that displays a quiz containing several
              questions on computer languages.
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
                  window.open("https://github.com/MairaGalvao/I_Flash_Geek")
                }
              ></CodeIcon>
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
              <DescriptionIcon
                aria-label="Demo"
                onClick={() => window.open("https://iflashgeek.web.app/")}
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
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}
