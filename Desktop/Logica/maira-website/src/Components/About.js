import { Box, Container, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";

const SHORT_TEXT = (
  <>
    <Typography>
      A global individual with programming knowledge and marketing experience.
    </Typography>
    <Typography>Brazilian by birth , originally from São Paulo.</Typography>
    <Typography>
      Living in Tel Aviv with my partner, in love with Israel!!💖
    </Typography>
  </>
);
const FULL_TEXT = (
  <>
    <Typography>
      A global individual with programming knowledge and marketing experience.
    </Typography>
    <Typography>Brazilian by birth , originally from São Paulo.</Typography>
    <Typography>
      Living in Tel Aviv with my partner, in love with Israel!!💖
    </Typography>
    <Typography>
      With my marketing background, I can add value to any team.
    </Typography>
    <Typography>
      As front-end developers, we are responsible for bringing the mock up to
      life. Knowing the basis of designing is a win-win situation for any
      company.🙌
    </Typography>
    <Typography>
      Having lived in the U.S and in Ireland for the past 5 years, I became
      fluent in English and developed great people skills.
    </Typography>
    <Typography>
      Furthermore, I was able to observe the world and the vast variety of
      people and unique cultures in the countries that I have visited.
    </Typography>
    <Typography>
      See my articles on my Medium profile. I just wrote an article on how women
      and men like their steak cooked!!
    </Typography>
    <Typography>
      SPOILER 👀 There's an affinity for rare stakes among women.
    </Typography>
    <Typography>
      I just finished an innovative training program, in Tel Aviv, designed to
      turn selected young professionals into skilled full-stack software
      developers.
    </Typography>
    <Typography>
      The program consists of a three-month, hands-on programming, followed by
      three months of internship in the industry, which promotes self-led
      learning, self-discovery and teamwork while following best practices for
      the industry.
    </Typography>
    <Typography>
      Frontend side: JavaScript, React, AJAX, Promises, Async Await, CSS3,
      HTML5, DOM, Redux, Bootstrap, Landing pages, Responsive design;
    </Typography>
    <Typography>
      Backend side: Python, Node.js, Express.js, Object Oriented Programming
      (OOP), APIs and RESTful APIs
    </Typography>
    <Typography>Data analysis: SQL, PostgreSQL</Typography>
    <Typography>
      Other skills: Error Handling, Authentification, Project Management & Agile
      methodology, Deployment (Heroku and AWS), Command Line, Developer
      Environments, Git & GitHub
    </Typography>
    <Typography>Feel free to contact me if you want to know more!!</Typography>
  </>
);

export function About() {
  const [fullText, setFullText] = useState(false);

  return (
    <Container maxWidth={"md"} style={{ paddingTop: "20px" }}>
      <Box
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ width: "100%" }}>
          <Typography
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontSize: "15px",
            }}
          >
            {fullText ? FULL_TEXT : SHORT_TEXT}
          </Typography>
        </Box>
        <Box>
          <Button
            style={{ paddingTop: "10px", width: "100px" }}
            onClick={() => setFullText(!fullText)}
          >
            {!fullText ? "Read More" : "hide"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
