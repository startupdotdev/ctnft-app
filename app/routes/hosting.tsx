export default function Huting() {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center align-middle text-white min-h-screen">
        <form className="flex flex-col w-full max-w-sm">
          <div className="mb-4">
            <label className="label">Name:</label> <input className="input" />
          </div>
          <div className="mb-8">
            <label className="label">Code:</label> <input className="input" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-grow">
              <input
                className="submit-button"
                type="submit"
                value="Create Contest"
              />
            </div>
            <div
              className="text-sm opacity-40 cursor-pointer"
              onClick={() => alert("ikr!")}
            >
              Help?
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
