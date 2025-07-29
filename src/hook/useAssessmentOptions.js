// hooks/useAssessmentOptions.js
import { useQuery } from "@tanstack/react-query";
import { getAssessmentOption } from "../controller/services/assessmentService";

export function useAssessmentOptions() {
  return useQuery({
    queryKey: ["assessments-option"],
    queryFn: getAssessmentOption,
  });
}
