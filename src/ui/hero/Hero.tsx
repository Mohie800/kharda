import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import blur from "@/assets/Blure.png";
import glass from "@/assets/Glass.png";
import glassMobile from "@/assets/GlassMobile.png";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import wealth from "@/assets/wealth.svg";
import bigLogo from "@/assets/bigLogo.png";
import "animate.css";
const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          zIndex: "-1",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Image src={glass} alt="blur" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          zIndex: "-1",
          display: { sm: "none" },
        }}
      >
        <Image src={glassMobile} alt="blur" />
      </Box>
      <div className="relative">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="wrap"
          >
            <Grid item xs={12} sm={6}>
              <div className="flex flex-col justify-center md:h-[100vh]">
                <h6 className="max-w-fit green-text">Change for Good</h6>
                <h1 className="blue-text text-6xl mt-6 animate__animated animate__fadeInLeft">
                  Turn Spare
                </h1>
                <h1 className="blue-text text-6xl animate__animated animate__fadeInLeft animate__delay-1s">
                  Change into
                </h1>
                <Image
                  src={wealth}
                  alt="wealth"
                  className="animate__animated animate__fadeInLeft animate__delay-2s"
                />
                <p style={{ color: "#828282", width: 344 }} className="">
                  Every penny counts towards better financial management! Say
                  goodbye to loose change and hello to a smarter, more rewarding
                  way to manage your money
                </p>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#072032",
                    ":hover": { bgcolor: "#072032" },
                    width: "max-content",
                    borderRadius: "12px",
                  }}
                  className="bg-[#072032] mt-5"
                >
                  Join The Waitlist
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-end items-center md:h-[100vh]">
                <Image src={bigLogo} alt="logo" width={400} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
