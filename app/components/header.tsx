import Logo from "~/components/icons/logo";
import { Link } from "remix";

import ConnectWallet from "./connect-wallet";

export default function Header() {
  return (
    <div
      className="text-white px-2 py-3 fixed top-0 left-0 w-full"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <div className="flex">
        <div className="flex flex-grow">
          <div className="mr-2">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h1 className="heading">
            <Link to="/">CTNFT</Link>
          </h1>
        </div>
        <div>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}
