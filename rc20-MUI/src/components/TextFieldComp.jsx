import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const TextFieldComp = () => {
  const [error, setError] = useState(false);
  console.log(setError);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>
        <Box sx={{mt:4, textAlign: 'center'}}>
          <TextField
            id="email"
            label="Email"
            placeholder="Enter Your Mail"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />
          <TextField
            margin="normal"
            id="password"
            label="Password"
            placeholder="Enter Your Password"
            fullWidth
            error={error}
            helperText={error && "Incorrect password format"}
          />

          <Button variant="contained" color="warning" sx={{mt:2}}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
