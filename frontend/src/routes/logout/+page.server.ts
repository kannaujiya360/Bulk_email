import { redirect } from "@sveltejs/kit";

export const load = async ({ fetch }) => {
  await fetch("http://localhost:3000/api/logout", {
    method: "POST",
    credentials: "include"
  });

  throw redirect(302, "/login");
};
