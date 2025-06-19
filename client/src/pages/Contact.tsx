import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "motion/react";
import { MouseEventHandler } from "react";
import { Link } from "wouter";

const contactCards = [
    {
        label: "Address",
        value: "None.",
        icon: "fa-solid fa-location-dot",
        href: "#",
    },
    {
        label: "Email",
        value: "None.",
        icon: "fa-solid fa-envelope",
        href: "mailto:none@example.com",
    },
    {
        label: "Call Us",
        value: "None.",
        icon: "fa-solid fa-phone",
        href: "tel:0000000000",
    },
    {
        label: "Working Hours",
        value: "None.",
        icon: "fa-solid fa-clock",
        href: "#",
    },
];

function ContactCard({
    label,
    value,
    icon,
    onClick,
    delay,
}: {
    label: string;
    value: string;
    icon: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="bg-primary-foreground flex justify-between w-full rounded-3xl p-4 items-center ">
            <div className="flex flex-col gap-2">
                <h2 className="font-medium flex items-center gap-2">
                    <i className={icon}></i>
                    {label}
                </h2>
                <p>{value}</p>
            </div>
            <Button
                onClick={onClick}
                className="aspect-square w-10 h-10 rounded-full cursor-pointer hover:opacity-80">
                <i className="fa-regular fa-copy"></i>
            </Button>
        </motion.div>
    );
}

export default function Contact() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full gap-16 px-16 pb-16">
                {/* Top Banner */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex items-center rounded-2xl overflow-hidden h-96">
                    <div className="px-8 py-6 gap-8 rounded-2xl flex flex-col h-full w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-8xl uppercase font-heading">
                            Contact
                        </motion.h1>
                        <div className="flex w-full gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="basis-1/3 flex flex-col gap-8">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="text-8xl uppercase font-heading">
                                    Us
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="text-muted-foreground">
                                    Have a question or need assistance? Our team
                                    is here to help! Whether you're tracking an
                                    order, looking for product info, or just
                                    want to say hi, feel free to reach out
                                    anytime.
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="flex basis-2/3 h-full items-center justify-center">
                                <div className="flex flex-row gap-x-12 items-center justify-center w-full">
                                    {/* social icons */}
                                    <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-9xl text-foreground rotate-[-8deg] transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:text-pink-500"
                                        aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                    <Link
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-9xl text-foreground rotate-[10deg] transition-transform duration-300 hover:scale-125 hover:-rotate-6 hover:text-neutral-800"
                                        aria-label="X (Twitter)">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </Link>
                                    <Link
                                        href="https://threads.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-9xl text-foreground rotate-[4deg] transition-transform duration-300 hover:scale-125 hover:rotate-3 hover:text-black"
                                        aria-label="Threads">
                                        <i className="fa-brands fa-threads"></i>
                                    </Link>
                                    <Link
                                        href="https://tiktok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-9xl text-foreground rotate-[-12deg] transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:text-[#25F4EE]"
                                        aria-label="TikTok">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </Link>
                                    <Link
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-9xl text-foreground rotate-[7deg] transition-transform duration-300 hover:scale-125 hover:-rotate-12 hover:text-blue-600"
                                        aria-label="LinkedIn">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full rounded-3xl flex flex-col md:flex-row items-center gap-8 p-8 mb-8 shadow-none">
                    {contactCards.map((card, i) => (
                        <ContactCard
                            onClick={() => 0}
                            key={card.label}
                            {...card}
                            delay={i * 0.1}
                        />
                    ))}
                </motion.section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}
