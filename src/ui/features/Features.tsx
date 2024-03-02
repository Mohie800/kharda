import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import hemisphere from "@/assets/hemisphere.png";
import sphere from "@/assets/sphere.png";
import arrow from "@/assets/arrow.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-[#E2E2E266] overflow-hidden">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center">
          <h1 className="blue-text text-5xl md:text-6xl mt-6">
            Simple, Smart,
          </h1>
          <h1 className="blue-text text-5xl md:text-6xl mt-6 flex gap-4">
            Yet <div className="green-text">Rewarding</div>
          </h1>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{ marginBlock: 10 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div className="bg-white rounded-xl p-5 h-full min-h-44">
                <h3 className="green-text text-xl">Change Conversion</h3>
                <p className="blue-text opacity-70 mt-3">
                  Seamlessly convert your loose change into a digital wallet
                  with just a few taps, putting your spare change to work for
                  you
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="bg-[#27B373] rounded-xl p-5 h-full min-h-44 relative">
                <Image
                  src={hemisphere}
                  alt="hemisphere"
                  style={{
                    position: "absolute",
                    zIndex: "-1",
                    top: "50px",
                    right: 100,
                  }}
                />
                <Image
                  src={sphere}
                  alt="hemisphere"
                  style={{
                    position: "absolute",
                    zIndex: "-1",
                    top: "-45px",
                    right: "-60px",
                  }}
                  width={100}
                />
                <h3 className="text-xl text-white animate__animated animate__fadeInLeft animate__delay-1s">
                  Smart Investing
                </h3>
                <p className="text-white/[.7] mt-3">
                  Take control of your financial future by investing your
                  digital wallet funds into diversified portfolios tailored to
                  your financial goals.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="bg-white rounded-xl p-5 h-full min-h-44">
                <h3 className="green-text text-xl">Cashback Rewards</h3>
                <p className="blue-text mt-3 opacity-70">
                  Earn rewards and bonuses every time you convert your change or
                  make an investment, amplifying your wealth-building journey
                  with every transaction.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="wrap"
            mt={10}
            mb={10}
          >
            <Grid item xs={12} md={3}>
              <div>
                <h1 className="blue-text text-6xl mt-6 relative">
                  Our
                  <Image
                    src={arrow}
                    alt="arrow"
                    style={{ position: "absolute", bottom: 0, left: 150 }}
                  />
                </h1>
                <h1 className="blue-text text-6xl mt-4">Mission</h1>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div>
                <h6 className="blue-text text-2xl">
                  Our mission is to revolutionize the way people perceive and
                  utilize spare change. We're committed to empowering
                  individuals to make the most of every cent by converting their
                  change into wealth-building opportunities.
                </h6>
                <h6 className="green-text text-2xl mt-6">
                  Through simplicity, accessibility, and innovation, we're
                  reshaping the financial landscape one coin at a time."
                </h6>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Features;
