import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavBar } from "./NavBar";

export const Contact = () => {
  return (
    <>
      <NavBar />
      <form style={{ paddingTop: "100px" }}>
        <TextField label="Full Name" />
        <TextField label="Email" />
        <TextField label="Message" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
