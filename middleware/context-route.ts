import { Context } from "@nuxt/vue-app";

export default function({ route, redirect }: Context): void {
  if (route.path === "about") {
    redirect("/");
  }
}
