// hooks/useAssessments.js
import { useQuery } from "@tanstack/react-query";
import { getAssessments } from "../controller/services/assessmentService";

export function useAssessments() {
  return useQuery({ queryKey: ["assessments"], queryFn: getAssessments });
}
