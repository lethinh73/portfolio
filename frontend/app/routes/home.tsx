import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thinh Le - Home" },
    { name: "description", content: "Thinh's Home Page" },
  ];
}

export default function Home() {
  return <Welcome />;
}
