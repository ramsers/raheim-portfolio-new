import Image from "next/image";

export default function ConstructionReportPage() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
            <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
                <h1 className="text-5xl font-bold mb-10">Billdr Canada Inc.</h1>

                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Feature: Construction Report
                    </h2>

                    <p className="text-lg font-semibold mb-4">
                        <strong>Issue:</strong>
                        Contractors needed a way to send detailed reports showing a full detailed report and financial snap shot of the projects progress to their clients.
                    </p>

                    <p className="text-lg font-semibold mb-4">
                        <strong>Solution & Scope:</strong>
                        I led development of this feature which showed the scope of quotes sent and signed, invoices at all stages of payment and change orders at all stages of payment.
                        Once submitted homeowners are then notified via email allowing contractors to keep their clients up to date.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Image aria-hidden src="/construction-report-1.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                        <Image aria-hidden src="/construction-report-2.png" alt="File icon" width={1000} height={1000} className="rounded-md" />
                    </div>
                </div>
            </main>
        </div>
    )
}
