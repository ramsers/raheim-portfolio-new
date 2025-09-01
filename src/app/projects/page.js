import Image from "next/image";
import Link from "next/link";
import {ChevronRightIcon, ArrowRightIcon} from "@heroicons/react/16/solid";


export default function ProjectsPage() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
            <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold mb-10">Projects</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 w-full mt-4 ">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold">Billdr Canada Inc.</h3>
                        <div>
                            <p className="text-lg">
                                Billdr Canada Inc. builds software to make life easier for general contractors. Instead of juggling spreadsheets, documents, and endless emails, contractors can create estimates, write scopes of work, send proposals, and manage projects all in one platform. The goal is simple: save time, stay organized, and make running a business less chaotic. At its core, Billdr modernizes construction by giving contractors control with smart, practical tools.
                                Below are just a few of the features I worked on, where I had full ownership — collaborating with design and product teams to define scope and timelines, and coordinating with C-suite executives and customer success to tackle major client pain points.
                            </p>
                        </div>
                    </div>
                    <Link href="/projects/billdr">
                        <Image
                            aria-hidden
                            src="/billdr_showcase.png"
                            alt="File icon"
                            width={1000}
                            height={1000}
                            className="rounded-md"
                        />
                    </Link>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row items-center hover:text-blue-300 hover:underline gap-1">
                        <Link href="/projects/billdr/task-feature" className="font-semibold">
                            Task/Todo Synchronization
                        </Link>
                        <ArrowRightIcon className="h-5 w-5"/>
                    </div>
                    <div className="flex flex-row items-center hover:text-blue-300 hover:underline gap-1">
                        <Link href="/projects/billdr/construction-report" className="font-semibold">
                            Construction Report
                        </Link>
                        <ArrowRightIcon className="h-5 w-5"/>
                    </div>
                </div>
            </main>
        </div>
    )
}

