import { Box, Typography , Divider, Container} from "@material-ui/core";
import { Footer } from "./Footer";
import { HealthAnal } from "./HealthAnal.js";
import { IFlashGeek } from "./IFlashGeek.js";
import { MainPageContent } from "./MainPageContent";
import { NavBar } from "./NavBar";
import { SteakData } from "./SteakData";
import { TheRealBill } from "./TheRealBill.js";
import { About } from "./About";

export function MainPage() {
  return (
    <>
      <NavBar />
      <MainPageContent />
      <Divider />

      <Box style={{textAlign: 'center', paddingTop: '40px', paddingBottom: '40px'}}>
      <Typography variant={'h3'}>Let me tell you a bit about me</Typography>
      <About />
</Box>
      <Divider />
      <Box style={{textAlign: 'center', paddingTop: '40px'}}>
      <Typography variant={'h3'}>I am proud to share some of my past projects</Typography>
      <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop:'40px' }}>
        <TheRealBill />
        <HealthAnal />
        <IFlashGeek />
        <SteakData />
      </Box>
      </Box>
      <Footer />
    </>
  );
}
