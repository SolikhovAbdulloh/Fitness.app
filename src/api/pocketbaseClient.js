import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_API_BASE_URL);
pb.enableAutoCancellation = false; // 🛑 AUTOCANCEL O‘CHIRILDI

// Agar token mavjud bo‘lsa, uni localStorage'dan o‘qib yuklaymiz
export async function getUsers() {
  try {
    const result = await pb.collection("users").getList();
    console.log("Foydalanuvchilar:", result.items[0]);
    return result.items;
  } catch (error) {
    console.error("Xato:", error);
    throw error;
  }
}

// Funksiyani chaqirish
export default pb;
