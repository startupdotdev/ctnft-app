import { createClient, PostgrestError } from "@supabase/supabase-js";
import { Env, getEnv } from "~/config/env";

interface Err {
  message: string;
}

interface Ret {
  errors?: Err[];
  data: any;
}
export async function createPreuser(form: FormData, env: Env): Promise<Ret> {
  const { supabasePublicAnon, supabaseUrl } = env;

  const supabase = createClient(supabaseUrl, supabasePublicAnon);

  let email = form.get("email");

  let err = new Error("Validation failed");
  if (!email) {
    return { errors: [{ email: "Cannot be empty" }] };
  }

  const { data, error } = await supabase
    .from("preusers")
    .insert([{ email: form.get("email") }], { returning: "minimal" });

  return {
    data,
    error,
  };
}
