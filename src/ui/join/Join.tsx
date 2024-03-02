"use client";
import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import qsphere from "@/assets/qsphere.png";
import Image from "next/image";

const Join = () => {
  return (
    <div className="mt-10 mb-10 h-[100vh] md:h-[80vh] flex items-center overflow-x-hidden">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="wrap"
        >
          <Grid item xs={12} md={6}>
            <div className="flex flex-col items-center sm:items-end md:mr-10">
              <div>
                <h2 className="bule-text text-3xl flex gap-2">
                  Sounds <div className="green-text">Interesting</div>?
                </h2>
                <p className="bule-text opacity-70 w-[300px] mt-4">
                  Join the waitlist for exclusive early access to Khardh! Be
                  among the first to experience our ground-breaking app,
                  designed to help you make the most of your pocket change and
                  achieve your financial goals faster
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div className="border-solid border-2 border-[#BDBDBD3B] rounded-xl py-6 px-4 md:ml-10 relative bg-white max-w-[400px]">
              <Image
                src={qsphere}
                alt="shape"
                style={{
                  position: "absolute",
                  bottom: "-130px",
                  right: "-140px",
                  zIndex: "-40",
                }}
                width={300}
              />
              <TextField
                id="outlined-basic"
                placeholder="Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "16px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#27B373 !important",
                  },
                }}
                sx={{
                  ".Mui-focused fieldset": {
                    borderColor: "#27B373 !important",
                  },
                }}
              />
              <TextField
                id="outlined-basic2"
                placeholder="Phone Number"
                variant="outlined"
                name="phone"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "16px",
                  },
                }}
                sx={{
                  ".Mui-focused fieldset": {
                    borderColor: "#27B373 !important",
                  },

                  mt: 2,
                }}
              />
              <TextField
                id="outlined-basic2"
                placeholder="user@email.com"
                variant="outlined"
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "16px",
                  },
                }}
                sx={{
                  ".Mui-focused fieldset": {
                    borderColor: "#27B373 !important",
                  },

                  mt: 2,
                }}
                name="email"
              />
              <Button
                variant="contained"
                sx={{
                  ":hover": { bgcolor: "#072032" },
                  borderRadius: "12px",
                  paddingBlock: 2,
                }}
                fullWidth
                className="bg-[#072032] mt-5"
              >
                Join The Waitlist
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Join;
