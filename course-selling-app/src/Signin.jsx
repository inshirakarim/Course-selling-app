import "./Signin.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";

function Signin() {
  return (
    <div>
      <div className="heading">
        <Typography variant={"h6"}>Welcome Back! Sign in here.</Typography>
      </div>

      <div className="box">
        <Card className="card" variant={"outlined"}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />{" "}
          <br />
          <br />
          <TextField
            type="password"
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            size={"large"}
            variant="contained"
          >
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Signin;
