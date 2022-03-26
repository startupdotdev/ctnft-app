import { Link, ActionFunction, json, useActionData } from "remix";
import { redirect } from "remix";
import { createPreuser } from "~/lib/preusers";
import { getEnv } from "~/config/env";

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const { data, err } = await createPreuser(formData, getEnv());

    if (data.error) {
      return json(err);
    } else {
      return redirect(`/about`);
    }
    // TODO: errors
  } catch (e) {
    console.error("Failed to create", e);
  }
};

export default function Hunting() {
  const data = useActionData();
  return (
    <div>
      <div className="flex flex-col items-center  justify-center align-middle text-white min-h-screen">
        <form
          method="POST"
          action="/hunting"
          className="flex flex-col w-full max-w-sm"
        >
          <div>
            <p className="font-light opacity-70 mb-8 text-lg">
              CTNFT is a web3 protocol to facilitate the bag for capture the
              flag contests. Prized can include NFTs, Tokens, and Crypto.
              Project drops soon sign up to be notified.
            </p>
          </div>
          {data?.error && (
            <div className=" py-2 px-6 text-white bg-yellow-500 mb-3">
              Problem submitting your email
            </div>
          )}
          <div className="mb-4">
            <label className="label">Email:</label>{" "}
            <input name="email" type="text" className="input" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-grow">
              <input className="submit-button" type="submit" value="Sign Up" />
              {data?.errors?.email.map((e) => (
                <div>boop</div>
              ))}
            </div>
            <div className="text-sm opacity-40 cursor-pointer">
              <Link to="/about">Help?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
