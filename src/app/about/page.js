import Image from "next/image";
import BackButton from "../../../components/BackButton";

export default function AboutPage() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-10 sm:p-10">
            <BackButton />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold mb-10">About Me</h1>
                    <p className="text-4xl font-semibold leading-normal">
                        Hey there, thanks for stopping by.
                    </p>
                    <p className="text-4xl font-semibold leading-normal">
                        I'm Raheim - a Fullstack Developer interested in building useful apps and features that
                        make the day to day operations of businesses and individuals just a little bit easier.
                    </p>
                    <p className="text-4xl font-semibold leading-normal">
                        Previously, I worked at Billdr Canada Inc. helping to build the future
                        of construction SaaS. While there I was fortunate to work across a myriad of languages and frameworks
                        such as Laravel/PHP, Python/Django REST, & React. And had the pleasure of working on everything from the
                        React Native mobile app, to the Django REST API and much more.
                    </p>

                    <p className="text-4xl font-semibold leading-normal">
                        I'm also an martial arts hobbyist, exercise enthusiast, and gardener.
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
                    {/* TODO here create a little image/graphic in canva with the logos of the main technologies */}
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
