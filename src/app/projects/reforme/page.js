import Image from "next/image";
import SliderComponent from "../../../../components/SliderComponent";
import BackButton from "../../../../components/BackButton";

export default function ReformePilatesPage() {
  const sliderImages = [
    "/reforme_1.png",
    "/reforme_2.png",
    "/reforme_3.png",
    "/reforme_4.png",
    "/reforme_5.png",
    "/reforme_6.png",
    "/reforme_7.png",
    "/reforme_8.png",
    "/reforme_9.png",
    "/reforme_10.png",
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-10 sm:p-10">
      <BackButton />
      <main className="flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold mb-10">Reformé Pilates</h1>
        <h2 className="text-3xl font-bold mb-4">Pilates Studio SaaS MVP</h2>

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
              <strong>Challenge:</strong> Small local and independent Pilates,
              fitness studios, & martial arts studios often rely on
              spreadsheets, Instagram DMs, or basic plug-ins to manage
              schedules, bookings, and passes. Or pay a pretty penny for a heavy
              software they will only need/use a small portion of.
            </p>

            <p className="text-lg font-semibold mb-4">
              <strong>Solution:</strong> I designed and built a fully functional
              MVP that mirrors what a small studio would need to operate
              day-to-day. The platform includes a client-facing site, an admin
              dashboard, a scheduling/booking system, and Stripe-powered pass
              purchases. I built the entire system end to end, from the UI and
              booking experience to the backend models, recurrence logic, API
              design, and full deployment.
            </p>

            <p className="text-lg font-semibold mb-4">
              <strong>Key Capabilities:</strong>
            </p>

            <p className="font-semibold mb-4">
              <strong>Scheduling & Class Management</strong>
            </p>

            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                Complex recurrence engine (weekly / monthly / yearly patterns)
              </li>
              <li>
                Automatic generation of future classes (parent/child
                propagation)
              </li>
              <li>
                Regeneration of future classes when the parent class is updated
              </li>
            </ul>

            <p className="font-semibold mb-2">
              <strong>Admin Dashboard</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Create / edit / cancel classes</li>
              <li>Manage instructors & clients</li>
              <li>View bookings by class and date range</li>
              <li>Manually add clients to classes</li>
              <li>Capacity management</li>
            </ul>

            <p className="font-semibold mb-2">
              <strong>Client Experience</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Weekly class schedule (timezone-safe)</li>
              <li>Booking & cancellation with pass validation</li>
              <li>Stripe checkout for drop-ins, weekly & monthly passes</li>
              <li>Client account dashboard (passes, bookings, profile)</li>
            </ul>

            <p className="font-semibold mb-2">
              <strong>Email Notifications</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Booking confirmations</li>
              <li>Cancellation emails</li>
              <li>Pass purchase confirmations</li>
              <li>Class updates (reschedules / changes)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
