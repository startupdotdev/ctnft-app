import Logo from "~/components/icons/logo";

export default function Header() {
  return (
    <div
      className="text-white px-2 py-3"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <div className="flex">
        <div className="flex flex-grow">
          <div className="mr-2">
            <Logo />
          </div>
          <h1 className="heading">CTNFT</h1>
        </div>
        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
