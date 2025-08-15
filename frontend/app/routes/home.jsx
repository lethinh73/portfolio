import ContentHeader from "@/components/shared/contentheader";
import MainContent from "@/components/shared/maincontent";

export function meta() {
  return [
    { title: "Thinh Le - Home" },
    { name: "description", content: "Thinh Le's personal website" },
  ];
}

export default function Home() {
  return (
    <>
      <ContentHeader title="Dashboard" />
      <MainContent>
        <p>Welcome to your dashboard!</p>
      </MainContent>
    </>
  );
}
