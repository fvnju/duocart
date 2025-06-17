import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

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
        <div className="flex flex-col gap-8 rounded-3xl bg-primary-foreground p-8 outline-8 transition-colors outline-foreground/5">
            <div className="flex items-center gap-4">
                <h1 className="text-7xl font-extrabold text-secondary mr-2">
                    {number}
                </h1>
                <h2 className="text-lg font-semibold text-secondary">
                    {title}
                </h2>
            </div>
            <p className="text-foreground font-normal">{description}</p>
        </div>
    );
}

export default function About() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full gap-16 px-16 pb-16">
                {/* Top Banner */}
                <section className="w-full flex items-center rounded-2xl overflow-hidden h-96">
                    <div className="px-8 py-6 gap-8 rounded-2xl flex flex-col h-full w-full">
                        <h1 className="text-8xl uppercase font-heading">
                            About
                        </h1>
                        <div className="flex w-full gap-8">
                            <div className="basis-1/3 flex flex-col gap-8">
                                <h1 className="text-8xl uppercase font-heading">
                                    Us
                                </h1>
                                <p>
                                    Welcome to DuoCart, where we connects buyers
                                    and sellers, making it simple for anyone to
                                    trade anything, anytime.
                                </p>
                            </div>
                            <div className="flex basis-2/3 gap-8 h-full">
                                <div className="bg-foreground h-full rounded-3xl flex-1"></div>
                                <div className="bg-foreground h-full rounded-3xl flex-1"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About DuoCart Section */}
                <section className="w-full bg-white rounded-2xl flex flex-col md:flex-row items-center gap-8 p-8 mb-8 shadow-none">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2">
                            About DuoCart
                        </h2>
                        <p className="text-base text-gray-700">
                            DuoCart is built for everyone — whether you're a
                            small business, a casual seller, or someone hunting
                            for the perfect deal. We make buying and selling
                            easy, fast, and secure, giving users the freedom to
                            trade anything from anywhere. Our mission is to
                            create a marketplace where opportunities are open to
                            all, no matter your experience level. Simple tools,
                            smooth transactions, and real people behind every
                            product.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        {/* Placeholder for stars image */}
                        <div className="w-64 h-64 rounded-xl bg-[#4bb0fa] flex items-center justify-center overflow-hidden">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 256 256"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    width="256"
                                    height="256"
                                    fill="#4bb0fa"
                                />
                                <g>
                                    <g fill="#fff">
                                        <polygon points="40,60 44,72 56,72 46,80 50,92 40,84 30,92 34,80 24,72 36,72" />
                                        <polygon points="200,40 204,52 216,52 206,60 210,72 200,64 190,72 194,60 184,52 196,52" />
                                        <polygon points="120,120 124,132 136,132 126,140 130,152 120,144 110,152 114,140 104,132 116,132" />
                                        <polygon points="180,180 184,192 196,192 186,200 190,212 180,204 170,212 174,200 164,192 176,192" />
                                        <polygon points="60,180 64,192 76,192 66,200 70,212 60,204 50,212 54,200 44,192 56,192" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="w-full flex flex-col gap-16">
                    <h2 className="text-3xl font-bold">Our Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
                        {storyItems.map((item, idx) => (
                            <StoryCard
                                key={idx}
                                {...item}
                            />
                        ))}
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}
