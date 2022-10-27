import Link from "next/link";
import Logo from "../common/Logo";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/Instagram";
import SocialIcon1 from "../icons/SocialIcon1";
import SocialIcon2 from "../icons/SocialIcon2";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <div className="bg-black text-white px-16 py-4 flex flex-col gap-4">
      <Logo />
      <div className="flex justify-between text-sm">
        <div>© 2022 GEMCDAO, All rights reserved</div>

        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm underline">
            Terms & Conditions
          </Link>

          <div className="flex gap-3">
            <TwitterIcon />
            <DiscordIcon />
            <InstagramIcon />
            <SocialIcon1 />
            <SocialIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
