import { Button } from "@chakra-ui/react";

export function meta() {
  return [
    { title: "Thinh Le - Not Found" },
    { name: "description", content: "Thinh Le's personal website" },
  ];
}

export default function NotFound() {
  return (
    <>
      <main className="relative isolate flex-1 min-h-0 flex items-center">
        <img
          alt=""
          src="/img/404.png"
          className="absolute inset-0 -z-10 size-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-base/8 font-semibold text-white">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page not found
          </h1>
          <div className="mt-10 flex justify-center">
            <Button asChild colorPalette="gray" shadow="2px 2px 2px 2px rgba(0, 0, 0, 0.1)">
              <a href="/">Back to home</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
