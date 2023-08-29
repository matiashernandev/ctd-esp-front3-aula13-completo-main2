import * as React from "react";
import { Typography, Button, TextField, Box, Paper, Grid } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
          Inscreva-se em nossa newsletter
        </Typography>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
