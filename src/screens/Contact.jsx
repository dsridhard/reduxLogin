import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "../components/Footer";
const defaultTheme = createTheme();

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg" elevation={3} component={Paper}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography my={2} component="h1" variant="h5">
            Contact us for queries
          </Typography>
          {/* <Typography mt={2} textAlign={"start"}>
            If you sign up here, it will be displayed in the Participants page.
          </Typography> */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  name="Subject"
                  label="Subject"
                  type="text"
                  id="Subject"
                  autoComplete="Subject"
                  inputProps={{ maxLength: 20 }}
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={5}
                  inputProps={{ maxLength: 200 }}
                />
              </Grid>
            </Grid>

            <Grid mb={8}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* <Footer/> */}
    </ThemeProvider>
  );
}
