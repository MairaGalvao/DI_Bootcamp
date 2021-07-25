import { Box, Typography } from "@material-ui/core";

export function MainPageContent() {
  return (
    <Box style={{ textAlign: "center", paddingTop: '100px', paddingBottom: '40px'}}>
      <Typography variant={"h1"}>Hey there!</Typography>
      <Typography variant={"h3"}>👋</Typography>
      <Typography variant={"h2"}>I'm Maira Galvao</Typography>
      <Box style={{paddingTop: '40px'}}>
      <Typography variant={"h4"}>An enthusiastic Full-stack Developer</Typography>
      </Box>
      <Box style={{paddingTop: '30px', }}>
        <Typography variant={"h5"} style={{color:'darkcyan', fontStyle:'italic'}}>Creating remarkable products with amazing people is my passion</Typography>
        </Box>
    </Box>
  );
}
