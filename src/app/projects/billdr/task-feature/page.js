import Image from "next/image";

export default function TaskFeaturePage() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
            <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
                <h1 className="text-5xl font-bold mb-10">Billdr Canada Inc.</h1>

                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Feature: Schedule/Task Synchronization & UI/UX Improvements
                    </h2>

                    <p className="text-lg font-semibold mb-4">
                        <strong>Issue:</strong> Contractors needed synchronization between their schedules and Todo/Task lists. Tasks should be created from schedule items, and completing a task would automatically update the related schedule item — and vice versa.
                    </p>

                    <p className="text-lg font-semibold mb-4">
                        <strong>Solution & Scope:</strong> I led development of a feature that allowed tasks to be created not only from schedule items, but also from:
                    </p>

                    <ul className="list-disc list-inside text-lg font-semibold mb-4">
                        <li>Schedule Items</li>
                        <li>Quote categories/sections</li>
                        <li>Change order items</li>
                    </ul>

                    <p className="text-lg font-semibold mb-4">
                        This allowed contractors to reuse work they had already completed instead of duplicating tasks manually. The schedule, task feature, and employee mobile portal all needed to communicate seamlessly to ensure data fidelity — e.g., a task completed on mobile updates the desktop app and related schedule items automatically.
                    </p>

                    <p className="text-lg font-semibold mb-4">
                        <strong>Key Enhancements:</strong>
                    </p>

                    <ul className="list-disc list-inside text-lg font-semibold mb-4">
                        <li>Reordering tasks and subtasks</li>
                        <li>Bulk actions: notify and delete</li>
                        <li>Parent-child task interactions:
                            <ul className="list-disc list-inside ml-4 mt-1">
                                <li>Completing a parent task completes all children</li>
                                <li>Completing one child marks the parent as in progress</li>
                                <li>Completing all children completes the parent automatically</li>
                            </ul>
                        </li>
                        <li>Consistent behavior across desktop and mobile apps</li>
                    </ul>

                    <div className="flex flex-col gap-4">
                        <Image aria-hidden src="/screenshot-1.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/screenshot-2.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/screenshot-3.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/screenshot-4.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/screenshot-5.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/screenshot-6.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                    </div>
                </div>
            </main>
        </div>
    )
}
