import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import line from "@/assets/line.png";
import Image from "next/image";
import phone from "@/assets/phone.png";
const About = () => {
  return (
    <div className="bg-white">
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
            <div className="flex flex-col justify-center sm:h-[70vh] w-10/12">
              <h6 className="max-w-fit green-text mt-20 sm:mt-1 ">
                About Kharda App
              </h6>
              <Image src={line} alt="line" style={{ marginTop: "-15px" }} />
              <p className="mt-8">
                With our innovative app, effortlessly convert your spare change
                into a digital wallet and watch it grow through intelligent
                investments.
              </p>
              <p className="mt-4">
                {
                  " It's time to unlock the potential of your pocket change and build the future you deserve."
                }
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="flex items-center justify-center md:justify-end h-full max-[400px]:w-80 mb-10">
              <Image src={phone} alt="phone" width={400} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
