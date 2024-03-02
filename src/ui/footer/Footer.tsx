import Container from "@mui/material/Container";
import Image from "next/image";
import xcom from "@/assets/x.com.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import logo from "@/assets/footerLogo.png";
const Footer = () => {
  return (
    <div className="bg-[#072032] px-10">
      <Container maxWidth="lg">
        <div className="w-full flex justify-between">
          <Image src={logo} alt="logo" width={93} className="object-contain" />
          <h6 className="text-white">KHARDA ©️ 2024</h6>
          <div className="flex gap-4">
            <Image
              src={xcom}
              alt="social"
              width={25}
              className="object-contain"
            />
            <Image
              src={facebook}
              alt="social"
              width={25}
              className="object-contain"
            />
            <Image
              src={instagram}
              alt="social"
              width={25}
              className="object-contain"
            />
            <Image
              src={linkedin}
              alt="social"
              width={25}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
