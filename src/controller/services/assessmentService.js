import pb from "../pocketbaseClient";

export async function getAssessments() {
  try {
    const result = await pb
      .collection("assessments")
      .getList(1, 50, { expand: "text" });
    return result.items;
  } catch (error) {
    console.error("Xato:", error);
    throw error;
  }
}

export async function getAssessmentOption() {
  try {
    const result = await pb.collection("assessment_options").getList(1, 50);
    console.log("option", result);

    // return result.items;
  } catch (error) {
    console.error("Xato:", error);
    throw error;
  }
}
