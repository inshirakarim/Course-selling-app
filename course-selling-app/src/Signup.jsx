import "./Signup.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="heading">
        <Typography variant={"h6"}>Welcome! Sign up here.</Typography>
      </div>

      <div className="box">
        <Card className="card" variant={"outlined"}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <br />
          <TextField
          type="password"
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              function callback2(data) {
                localStorage.setItem("token", data.token);
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then(callback1);
            }}
            size={"large"}
            variant="contained"
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Signup;
