import supabase from "./supaBase";
export async function getAllCitiesOfUser(userId) {
  let { data, error } = await supabase
    .from("allCities")
    .select("*")
    .eq("userId", userId);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
