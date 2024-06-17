import supabase from "../supabase";

export async function loginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log("THIS IS EMAIL ID PASSWORD AND DATA ", email, password, data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}

export async function getUsersDetails(email) {
  console.log("THIS IS EMAIL ID OF VAIBHAV", email);
  let { data, error: error1 } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);
  console.log("THIS IS ALL USER DATA ", data);
  if (error1) throw new Error(error1.message);
  return data[0];
}
export async function signupApi({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    fullName,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function createNewUser({ fullName, email }) {
  const { data, error } = await supabase
    .from("users")
    .insert({ fullName, email });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function logOutApi() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function createNewCity(newCity) {
  console.log("THIS IS NEW CITY", newCity);
  const { data, error } = await supabase.from("allCities").insert(newCity);
  if (error) throw new Error(error.message);

  return data;
}

export async function deleteCityApi(id) {
  const { data, error } = await supabase
    .from("allCities")
    .delete()
    .eq("id", id);
  if (error) throw new Error();
  return data;
}
