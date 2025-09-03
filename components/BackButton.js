"use client"

import { useRouter } from "next/navigation";
import {ArrowLeftIcon, ChevronLeftIcon} from "@heroicons/react/16/solid";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="py-2 rounded-lg text-white flex flex-row gap-2 items-center hover:text-blue-500 transition"
        >
            <ArrowLeftIcon className="h-5 w-5"/>
            Back
        </button>
    );
}
