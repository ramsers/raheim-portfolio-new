import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-fit p-8 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <p className="text-4xl font-semibold leading-normal">
            I’m a Fullstack Software Engineer with 5+ years of experience
            building software for companies of all sizes — mostly in the
            construction space, from nimble startups to sprawling enterprises.
          </p>
          <p className="text-4xl font-semibold leading-relaxed">
            When I’m not architecting apps, you might find me lifting weights,
            wandering in the wild, or interrogating a plant or bug about what
            it’s really up to.
          </p>
        </div>
      </main>
    </div>
  );
}
