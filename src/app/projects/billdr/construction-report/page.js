import Image from "next/image";
import SliderComponent from "../../../../../components/SliderComponent";
import BackButton from "../../../../../components/BackButton";

export default function ConstructionReportPage() {
  const sliderImages = [
    "/construction-report-1.png",
    "/construction-report-2.png",
    "/construction-report-3.png",
    "/construction-report-4.png",
    "/construction-report-5.png",
    "/construction-report-6.png",
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-10 sm:p-10">
      <BackButton />
      <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold mb-10">Billdr Canada Inc.</h1>
        <h2 className="text-3xl font-bold mb-4">
          Feature: Construction Report
        </h2>

        <div className="flex flex-row justify-between gap-8 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-4">
            <div
              style={{
                position: "relative",
                paddingBottom: "54.7112462006079%",
                height: 0,
              }}
            >
              <iframe
                src={
                  "https://www.loom.com/embed/4d57a76e82ab4048b59cfa2051e36550?sid=8d9f025b-c41a-4baa-9148-35ab69d4ae42" +
                  "&hideEmbedTopBar=true" +
                  "&hide_share=true" +
                  "&hide_title=true"
                }
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <SliderComponent images={sliderImages} />
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">
              <strong>Challenge:</strong> Contractors needed a streamlined way
              to keep homeowners updated on project status without manually
              compiling financials, progress updates, and supporting
              documentation. Existing communication channels were fragmented and
              inconsistent.
            </p>

            <p className="text-lg font-semibold mb-4">
              <strong>Solution:</strong> Partnering with Product/Design and
              Customer Success, I implemented a comprehensive reporting feature.
              It pulled live financial data (quotes, invoices, and change orders
              at all stages of payment) directly from the contractor’s account,
              while also allowing contractors to enrich reports with categories,
              tasks, notes, and photos. Reports were customizable (reordering,
              hiding, or displaying elements before sending), and homeowners
              automatically received email notifications with a PDF attachment,
              ensuring consistent updates.
            </p>

            <p className="text-lg font-semibold mb-4">
              <strong>Key Capabilities:</strong>
            </p>

            <ul className="list-disc list-inside text-lg font-semibold mb-4">
              <li>
                Create a report which pulls data from the signed contract or
                create a blank custom report
              </li>
              <li>Importing categories and tasks directly from quotes</li>
              <li>Pulling items from the contractor’s cost catalog</li>
              <li>Creating and adding fully custom tasks</li>
              <li>
                Client task list:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Assign tasks to stakeholders such as the homeowner</li>
                  <li>Track completion progress across all contributors</li>
                </ul>
              </li>
              <li>Dedicated notes section for contractor-to-client updates</li>
              <li>Construction photo block for visual project tracking</li>
              <li>
                PDF attachment automatically generated and sent with email
                notifications
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4">
              <strong>Impact:</strong> Homeowners received professional,
              consistent updates without additional contractor effort, while
              contractors saved time and avoided duplication. The reports
              strengthened trust, improved transparency, and reduced
              back-and-forth communication between contractors and clients.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
