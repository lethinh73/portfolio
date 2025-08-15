import { Welcome } from "../welcome/welcome";
import Header from "@/components/home/header";

export function meta() {
  return [
    { title: "Thinh Le - Home" },
    { name: "description", content: "Thinh Le's personal website" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
}
