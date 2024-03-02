import Container from "@mui/material/Container";
import Image from "next/image";
import logo from "@/assets/logo.png";
import blur from "@/assets/Blure.png";
const Header = () => {
  return (
    <div className="">
      {/* <Image src={blur} alt="blur"  /> */}
      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Image src={logo} alt="logo" width={93} />
      </Container>
    </div>
  );
};

export default Header;
