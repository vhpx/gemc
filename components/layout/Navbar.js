import Link from "next/link";
import Logo from "../common/Logo";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/Instagram";
import SocialIcon1 from "../icons/SocialIcon1";
import SocialIcon2 from "../icons/SocialIcon2";
import TwitterIcon from "../icons/TwitterIcon";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-between p-8 gap-8">
      <div className="flex gap-16">
        <Logo />
        <div className="flex gap-6 uppercase font-semibold">
          <Link href="/privacy">The club</Link>
          <Link href="/terms">Mint a GEMC</Link>
          <Link href="/terms">Nesting</Link>
          <Link href="/terms">Blueprint</Link>
          <Link href="/terms">About us</Link>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-3">
          <TwitterIcon />
          <DiscordIcon />
          <InstagramIcon />
          <SocialIcon1 />
          <SocialIcon2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;