import pb from "../pocketbaseClient";

export async function getUsers() {
  try {
    const result = await pb.collection("users").getList();

    return result.items;
  } catch (error) {
    console.error("Xato:", error);
    throw error;
  }
}