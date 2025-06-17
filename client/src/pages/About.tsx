import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function About() {
    return (
        <>
            <Header />
            <main className="bg-[#f8f8fa] min-h-screen pb-8">
                {/* Top Banner */}
                <section className="max-w-4xl mx-auto rounded-2xl mt-8 mb-8 p-0 overflow-hidden">
                    <div className="bg-[#4bb0fa] px-8 py-6 rounded-2xl flex flex-col items-center">
                        <h1
                            className="text-4xl font-extrabold text-white drop-shadow mb-2 text-center"
                            style={{ fontFamily: "Montserrat, sans-serif" }}>
                            About Us
                        </h1>
                        <p className="text-white text-center text-base font-medium max-w-2xl">
                            Welcome to DuoCart, where we connects buyers and
                            sellers,
                            <br />
                            making it simple for anyone to trade anything,
                            anytime..
                        </p>
                    </div>
                </section>

                {/* About DuoCart Section */}
                <section className="max-w-5xl mx-auto bg-white rounded-2xl flex flex-col md:flex-row items-center gap-8 p-8 mb-8 shadow-none">
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
                <section className="max-w-6xl mx-auto px-2">
                    <h2 className="text-xl font-bold mb-6">Our Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 01 Community */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    01
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Community
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Duo Cart supports local sellers, small
                                businesses, and side hustlers by giving them the
                                tools they need to reach customers and grow.
                                We're building a marketplace where everyone's
                                hustle gets the attention it deserves.
                            </p>
                        </div>
                        {/* 02 Our Mission */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    02
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Our Mission
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                At DuoCart, our mission is to make buying and
                                selling simple, accessible, and enjoyable for
                                everyone. We believe anyone should be able to
                                turn their ideas or needs into reality, whether
                                they're looking to sell products or find what
                                they need fast.
                            </p>
                        </div>
                        {/* 03 Our Vision */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    03
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Our Vision
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                DuoCart aim to become a global platform where
                                individuals, small businesses, and entrepreneurs
                                can thrive. Our vision is a connected
                                marketplace where opportunity meets simplicity,
                                and everyone can participate without barriers.
                            </p>
                        </div>
                        {/* 04 Security & Trust */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    04
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Security & Trust
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                DuoCart aim to become a global platform where
                                individuals, small businesses, and entrepreneurs
                                can thrive. Our vision is a connected
                                marketplace where opportunity meets simplicity,
                                and everyone can participate without barriers.
                            </p>
                        </div>
                        {/* 05 Customer Support */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    05
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Customer Support
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Got questions or issues? Our customer support
                                team is always ready to assist. We're committed
                                to quick responses, helpful solutions, and
                                making sure your Duo Cart experience is smooth
                                from start to finish.
                            </p>
                        </div>
                        {/* 05 Technology */}
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="text-3xl font-extrabold text-[#8d7ae7] mr-2">
                                    05
                                </span>
                                <span className="text-lg font-semibold text-[#8d7ae7]">
                                    Technology
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Our platform is built using modern, scalable
                                technology that keeps your experience fast and
                                responsive. Whether you're browsing on your
                                phone or managing your store on a desktop, Duo
                                Cart's tech adapts to you.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    );
}
