import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "motion/react";

const storyItems = [
    {
        number: "01",
        title: "Community",
        description:
            "Duo Cart supports local sellers, small businesses, and side hustlers by giving them the tools they need to reach customers and grow. We're building a marketplace where everyone's hustle gets the attention it deserves.",
    },
    {
        number: "02",
        title: "Our Mission",
        description:
            "At DuoCart, our mission is to make buying and selling simple, accessible, and enjoyable for everyone. We believe anyone should be able to turn their ideas or needs into reality, whether they're looking to sell products or find what they need fast.",
    },
    {
        number: "03",
        title: "Our Vision",
        description:
            "DuoCart aim to become a global platform where individuals, small businesses, and entrepreneurs can thrive. Our vision is a connected marketplace where opportunity meets simplicity, and everyone can participate without barriers.",
    },
    {
        number: "04",
        title: "Security & Trust",
        description:
            "DuoCart aim to become a global platform where individuals, small businesses, and entrepreneurs can thrive. Our vision is a connected marketplace where opportunity meets simplicity, and everyone can participate without barriers.",
    },
    {
        number: "05",
        title: "Customer Support",
        description:
            "Got questions or issues? Our customer support team is always ready to assist. We're committed to quick responses, helpful solutions, and making sure your Duo Cart experience is smooth from start to finish.",
    },
    {
        number: "06",
        title: "Technology",
        description:
            "Our platform is built using modern, scalable technology that keeps your experience fast and responsive. Whether you're browsing on your phone or managing your store on a desktop, Duo Cart's tech adapts to you.",
    },
];

function StoryCard({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-8 rounded-3xl bg-primary-foreground p-8 outline-8 transition-colors outline-foreground/5">
            <div className="flex items-center gap-4">
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-7xl font-extrabold text-secondary mr-2">
                    {number}
                </motion.h1>
                <motion.h2
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-lg font-semibold text-secondary">
                    {title}
                </motion.h2>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-foreground font-normal">
                {description}
            </motion.p>
        </motion.div>
    );
}

export default function About() {
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
                            About
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
                                    Welcome to DuoCart, where we connects buyers
                                    and sellers, making it simple for anyone to
                                    trade anything, anytime.
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="flex basis-2/3 gap-8 h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="bg-foreground h-full rounded-3xl flex-1"></motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="bg-foreground h-full rounded-3xl flex-1"></motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* About DuoCart Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full bg-primary-foreground rounded-3xl flex flex-col md:flex-row items-center gap-8 p-8 mb-8 shadow-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex-1 flex flex-col gap-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-3xl font-bold">
                            About DuoCart
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-base text-gray-700">
                            DuoCart is built for everyone — whether you're a
                            small business, a casual seller, or someone hunting
                            for the perfect deal. We make buying and selling
                            easy, fast, and secure, giving users the freedom to
                            trade anything from anywhere. Our mission is to
                            create a marketplace where opportunities are open to
                            all, no matter your experience level. Simple tools,
                            smooth transactions, and real people behind every
                            product.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex justify-center flex-1">
                        {/* Placeholder for stars image */}
                        <div className="w-full h-96 rounded-3xl bg-foreground flex items-center justify-center overflow-hidden"></div>
                    </motion.div>
                </motion.section>

                {/* Our Story Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col gap-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl font-bold">
                        Our Story
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
                        {storyItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.05,
                                    ease: "easeOut",
                                }}>
                                <StoryCard {...item} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}
