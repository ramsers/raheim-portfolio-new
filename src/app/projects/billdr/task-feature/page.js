import Image from "next/image";
import SliderComponent from "../../../../../components/SliderComponent";

export default function TaskFeaturePage() {

    const sliderImages = [
        "/screenshot-1.png",
        "/screenshot-2.png",
        "/screenshot-3.png",
        "/screenshot-4.png",
        "/screenshot-5.png",
        "/screenshot-6.png",
        "/screenshot-7.png",
    ];

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-10">
            <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
                <h1 className="text-5xl font-bold mb-10">Billdr Canada Inc.</h1>
                <h2 className="text-3xl font-bold mb-4">
                    Feature: Schedule/Task Synchronization & UI/UX Improvements
                </h2>
                <div className="flex flex-row justify-between gap-8 flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col gap-4">
                        <div style={{position: "relative", paddingBottom: "54.7112462006079%", height: 0}}>
                            <iframe
                                src="https://www.loom.com/embed/993ef340e11441f296c472eb6e545fe1?sid=3bf80021-35d3-4a90-b830-72893e15a147"
                                frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen
                                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}/>
                        </div>
                        <SliderComponent images={sliderImages} />
                    </div>

                    <div>
                        <p className="text-lg font-semibold mb-4">
                            <strong>Challenge:</strong> Contractors needed a reliable way to synchronize schedules and task lists. Tasks should be created from schedule items, and completing a task needed to automatically update the related schedule item — and vice versa.
                        </p>

                        <p className="text-lg font-semibold mb-4">
                            <strong>Solution:</strong> Working closely with Product/Design and Customer Success, I led development of a feature that allowed tasks to be created not only from schedule items, but also from:
                        </p>

                        <ul className="list-disc list-inside text-lg font-semibold mb-4">
                            <li>Schedule Items</li>
                            <li>Quote categories/sections</li>
                            <li>Change order items</li>
                        </ul>

                        <p className="text-lg font-semibold mb-4">
                            This reduced duplication by letting contractors reuse existing work. The schedule, task system, and employee mobile portal all communicated, ensuring data fidelity — e.g., a task completed on mobile would update the desktop app and its related schedule item automatically.
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

                        <p className="text-lg font-semibold mb-4">
                            <strong>Impact:</strong> Contractors gained a unified workflow across devices, reducing redundant work and improving team coordination. This led to faster task completion, fewer errors, and clearer visibility into project progress for both office staff and field workers.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    )
}
