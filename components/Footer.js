import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <footer className="">
            <div className="max-w-screen-xl px-6 py-10 flex flex-col">

                <Link href="/" className="mb-4">
                    <Image src="/logo.png" alt="Raheim Bailey" width={50} height={50} />
                </Link>

                <ul className="flex flex-col text-white font-medium gap-4 font-semibold text-lg">
                    {links.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:text-blue-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
