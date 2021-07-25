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
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
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
    fontSize: "12px",
  },
  title: {
    fontSize: 150,
    backgroundColor: red[500],
  },
}));

export function SteakData() {
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
              <Avatar aria-label="steak-python" className={classes.avatar}>
                Python
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Steak Risk Data Analysis"
            subheader="March, 2021"
          />
          <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/ehk9A7jHCSceFjI8BOxJ9SMNU4ibLC_x8drTDxwuIWfMWukZSHH8Gt386yrcbQM8s8O5Oy9oete0CD0JcsFy0qwVPXKUynIGEgladimy5pjrtGH9bGPY5LJA0F0McC6BldeiaKKWPJ_zPALd5APFfuPp3FLLb92-1T0qhbQauCCU4XrdkMXmLTaQyqouoCte-nFIl0h5CzEihhvL3h61hRCAs-HsTh96ViLszpoeETXvoCJJDDMsSTrRy6s3B-UuLTT6P2W-aAxacI1BQvlHX8YkBCTumkEfNtZcy5sQYRCUukFtrP0TwJGSCYRmK-JduGUTnZPpQC3j-nvI2W0OtThWYhWTsDxVlYUnqkfjeHF5PLlCohC0hX2-fUuaAgnl54e6oIko7dzf1Bo07ANNt22QzF5Xbo6qciU0331C2fB4mt5JVsXJ59KDJFJt8yqFPYLwm5jCKiMrNBrDlXwjMsBD4cAWWlRKNw8pnweR4XPuEZq1LdvLPang0TmLVwF8-xKWyfSkAOjNLQAJeK2FErkj674UjWmEhLTHZiDfAp9iJJaf25xkWysEzLYeF-IkcDlAqBD_oGMqTe_TadXbyja9zMFTQbjtuNqIm5N0PSEzXcCN0jwd2hMyHJCxQvUDOSQVqV0SigRZhoQ3JFqOpxj7hNq05kKM5QZFoxo18jrowvH4SbRm3h5xP3lBuWtbtaiBqKTtRcDHWxcWirgRLPFTXg=w606-h474-no?authuser=0"
            title="Steak Risk Data Analysis"
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
              A data analysis based on correlations and comparisons among the
              samples.
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
                  window.open("https://github.com/MairaGalvao/Steak_Risk_Data")
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

            {/* <ImportContactsIcon
              aria-label="Demo"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("")}
            ></ImportContactsIcon> */}

            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {" "}
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
