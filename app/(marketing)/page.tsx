import localFont from "next/font/local";
import { Poppins } from "next/font/google";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return <div>Marketing</div>;
};

export default MarketingPage;
