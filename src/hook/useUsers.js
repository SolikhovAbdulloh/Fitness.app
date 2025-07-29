import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../controller/services/userService";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
