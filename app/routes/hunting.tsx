export default function Huting() {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center align-middle text-white min-h-screen">
        <form className="flex flex-col w-full max-w-sm">
          <div>
            <p className="font-light opacity-70 mb-8 text-lg">
              CTNFT is launching a platform to asdlkf asdlfkj asdlfkj asdlkjfa
              sldfja sldkfjasldkfjasdflkj
            </p>
          </div>
          <div className="mb-4">
            <label className="label">Email:</label> <input className="input" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-grow">
              <input className="submit-button" type="submit" value="Sign Up" />
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
