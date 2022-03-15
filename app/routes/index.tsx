import { Link } from "remix";
export default function Index() {
  return (
    <div className="text-white flex h-screen ">
      <div className="w-1/2" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="flex items-center align-middle justify-center h-full">
          <div>
            <Link to="/hunting">
              <div className="text-6xl -ml-6">👈</div>
              <div className="heading text-3xl">Hunting</div>
              <div>Win JPGs</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2" style={{ background: "rgba(255,255,255,0.05)" }}>
        <div className="flex items-center align-middle justify-center h-full">
          <div className="text-right cursor-pointer">
            <Link to="/hosting">
              <div className="text-6xl -mr-6">👉</div>
              <div className="heading text-3xl">Hosting</div>
              <div>New CTF.</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
