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
      <main className="flex flex-col gap-10 w-full row-start-2 items-center text-left">
        <h1 className="text-5xl font-bold">Reformé Pilates</h1>

        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl">
            <div
              style={{
                position: "relative",
                paddingBottom: "54.7112462006079%",
                height: 0,
              }}
            >
              <iframe
                src={
                  "https://www.loom.com/embed/eef81ad9c37d4a51bd5e551af53216ef?sid=8d9f025b-c41a-4baa-9148-35ab69d4ae42" +
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
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-bold">
              Pilates Studio SaaS MVP -{" "}
              <a
                href="https://reforme-desktop.vercel.app/"
                className="text-blue-400 hover:underline"
                target="blank"
              >
                View Live Demo App
              </a>
            </h2>
          </div>

          <div className="flex flex-col gap-2 text-lg font-semibold max-w-4xl">
            <p className="italic">For admin dashboard access use the credentials below</p>
            <p>
              username: <span className="font-bold">reforme_admin@gmail.com</span>
            </p>
            <p>
              password:{" "}
              <span className="font-bold">
                admin123! ( Please avoid changing the admin password for others to
                use &#9786; )
              </span>
            </p>
            <p className="font-bold">Please check your spam folder for automatic emails</p>
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="flex flex-col gap-6 text-lg font-semibold">
              <p>
                <strong>Challenge:</strong> Small local and independent Pilates,
                fitness studios, & martial arts studios often rely on
                spreadsheets, Instagram DMs, or basic plug-ins to manage
                schedules, bookings, and passes. Or pay a pretty penny for a
                heavy software they will only need/use a small portion of.
              </p>

              <p>
                <strong>Solution:</strong> I designed and built a fully
                functional MVP of a mini SaaS that mirrors what a small studio
                would need to operate day-to-day. The platform includes a
                client-facing site, an admin dashboard, a scheduling/booking
                system, and Stripe-powered pass purchases. I built the entire
                system end to end — from UI and booking flows to backend models,
                recurrence logic, API design, and deployment.
              </p>

              <p>
                There are many improvements I would like to make to this app,
                such as a full onboarding flow for created users (email
                verification + password creation), automated booking reminders,
                subscription payment failure notifications, fully fleshed out
                content on the marketing site, as well as an instructor dashboard
                where they can view classes assigned to them and eventually
                payments etc.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-left text-lg font-semibold">
              <p>
                <strong>Key Capabilities</strong>
              </p>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  <strong>Scheduling & Class Management</strong>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Recurrence engine (weekly / monthly / yearly patterns - Just
                    select the time and days you want the class to occur on)
                  </li>
                  <li>Automatic generation of future classes (parent/child propagation)</li>
                  <li>Regeneration of future classes when the parent class is updated</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  <strong>Admin Dashboard</strong>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Create / edit / cancel classes</li>
                  <li>Manage instructors & clients</li>
                  <li>View bookings by class and date range</li>
                  <li>Manually add clients to classes</li>
                  <li>Capacity management</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  <strong>Client Experience</strong>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Weekly class schedule (timezone-safe)</li>
                  <li>Booking & cancellation with pass validation</li>
                  <li>Stripe checkout for drop-ins, weekly & monthly passes</li>
                  <li>Client account dashboard (passes, bookings, profile)</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  <strong>Email Notifications</strong>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Booking confirmations</li>
                  <li>Cancellation emails</li>
                  <li>Pass purchase confirmations</li>
                  <li>Class updates (reschedules / changes)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <SliderComponent images={sliderImages} />
        </div>
      </main>
    </div>
  );
}
