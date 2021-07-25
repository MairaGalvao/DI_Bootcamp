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

export function HealthAnal() {
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
              <Avatar aria-label="recipe" className={classes.avatar}>
                JS
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="International Health Care Analysis"
            subheader="May, 2021"
          />
          <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/07x3VFk63yLiLltR6aFy3WdcwWut0yTNF_klrxCbwStpUXrbHO6NbHoTFx2XX88wxoSk_q2AZAcfuE6bGZfZS3r97woLsUE1AEQT9_1wRRoFAb3KgVkgU39DAxFFX6myCPmjvRrOFHatlQ0HaZEAOQTtQFCj92L6R8eTh2iWUtJc5kblCpywbIe8aBVcflOYkbrMZEMB0fmOHZaXJjbnvOWqvEd3OwZDxi023-xUdcGrSQ6U9HNqOTjsBau6DOJBdFK_Xhn0DAJLcJ6klnY9aZpM0ej0UhlJ4_8wBq29UOQ05IFOF2qUgg0i94VdQ5emEBGPK8QNvrzKE7HnpqjFMmOD2wPCpihcAffM4MTKNroDugoKjmt0JcqMaodeBF7P4cW9bStF48AQmMy3ZOde0hPzHcBEk9sY1UXUxkFRGbCpKNanrEpge2YJZ5695ADGSXudg9LPTHZs5NjzV-HdHYDr_B6U9MlGHf-AnlCNSH7myp8Tr9Euyrf8zqYGL_1RJYB84OnU--9RocjEkbPgph0ND5Ct4jSDVr4K7C6YeYCxtNT4KjOpo3i6UcF2RKSVOjD7nHp9gtrbdhbYZmH7LlGCWqNR-mr72Ljka-AzNz64jfLEBvTMVLnWRJ50MSX-LPUP1mfSdIKKjzEd_mU-3ER2_tea9pzgntXcmvkacS2e_mBbEHSO_whTZZRKVnUkpm5S5inNyQAoExMbFvAFben5Gg=w374-h220-no?authuser=0"
            title="International Health Care Analysis"
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
              An app that provides measurements of health care around the world.
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
                onClick={() =>
                  window.open(
                    "https://github.com/MairaGalvao/International_Health_Care_Analysis"
                  )
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
                aria-label="read the article"
                onClick={() =>
                  window.open(
                    "https://medium.com/swlh/practical-data-analysis-with-pandas-and-seaborn-matplotlib-d1820ab27fd8"
                  )
                }
              ></DescriptionIcon>
              Medium
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
