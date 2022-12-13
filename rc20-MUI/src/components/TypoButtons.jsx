import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          mt={4}
          align="center"
          color="error"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          sx={{
            background: "lightgreen",
            color: "#555",
            fontSize: "1.3rem",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis
          nesciunt reprehenderit explicabo dicta tempora molestias. Provident,
          itaque! Tempora expedita molestiae numquam minima amet alias corporis
          accusamus deserunt ipsum ipsam.
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          corporis excepturi atque necessitatibus doloremque aspernatur
          voluptatem quo. Ipsa rerum dignissimos aliquam nulla assumenda magnam
          dolor, temporibus officia laudantium doloribus consectetur!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color='error' startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color='secondary' endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
