import Image from "next/image";
import BackButton from "../../../components/BackButton";

export default function AboutPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-10 sm:p-10">
      <BackButton />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-3 flex-wrap items-center">
            <h1 className="text-5xl font-bold ">About Me</h1>
            <div className="flex flex-row items-center">
              <a
                href="https://www.linkedin.com/in/raheim-bailey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="h-10 w-10 hover:opacity-80 transition"
                />
              </a>

              <a
                href="https://github.com/ramsers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="h-10 w-10 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
          <p className="text-4xl font-semibold leading-normal">
            Hey there, thanks for stopping by!
          </p>
          <p className="text-4xl font-semibold leading-normal">
            I&apos;m Raheim — a Fullstack Developer passionate about building
            apps and features that make everyday operations smoother for both
            businesses and individuals.
          </p>
          <p className="text-4xl font-semibold leading-normal">
            Previously, I worked at Billdr Canada Inc., where I helped shape the
            future of construction SaaS. During my time there, I worked across a
            variety of languages and frameworks, including Laravel/PHP,
            Python/Django REST, and React. I had the opportunity to contribute
            to everything from the React Native mobile app to the Django REST
            API, and plenty in between.
          </p>

          <p className="text-4xl font-semibold leading-normal">
            Outside of coding, I&apos;m a martial arts hobbyist, exercise
            enthusiast, and gardener — always exploring new ways to challenge
            myself and grow.
          </p>
        </div>
        <div className="flex flex-col justify-around w-full mt-4 md:flex-row">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">My capabilities</h3>
            <div>
              <p className="text-lg">React / NextJS</p>
              <p className="text-lg">Python / Django REST</p>
              <p className="text-lg">PHP / Laravel</p>
              <p className="text-lg">React Native - Android & IOS</p>
              <p className="text-lg">TypeScript</p>
              <p className="text-lg">SQL</p>
              <p className="text-lg">Docker</p>
              <p className="text-lg">Figma</p>
              <p className="text-lg">Github</p>
              <p className="text-lg">Gitlab</p>
              <p className="text-lg">Heroku</p>
              <p className="text-lg">Tailwind CSS</p>
              <p className="text-lg">Bootstrap CSS</p>
            </div>
          </div>
          <Image
            aria-hidden
            src="/placeholder-1.jpg"
            alt="File icon"
            width={300}
            height={150}
            className="rounded-md"
          />
        </div>
      </main>
    </div>
  );
}
