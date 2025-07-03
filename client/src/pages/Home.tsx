import ShopItem from "@/components/ui/shop-item";
import { Button } from "@/components/ui/button";
import CategoryItem from "@/components/ui/category-item";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "motion/react";
import { AnimatedHeading, AnimatedText } from "@/components/ui/animated-text";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <>
            <Header />
            <main className="px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 flex flex-col items-center w-full [&>section]:w-full">
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="rounded-3xl from-accent to-secondary-foreground to-100% flex flex-col items-center justify-center px-2 sm:px-8 md:px-12 lg:px-16 h-[65dvh]">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="flex flex-col gap-4 items-center">
                            <AnimatedHeading
                                as="h1"
                                className="font-heading text-6xl text-center"
                                delay={0.3}>
                                Buying and selling made simple.
                            </AnimatedHeading>
                            <AnimatedText
                                className="font-medium text-foreground"
                                delay={0.4}>
                                Shop for anything and find it fast.
                            </AnimatedText>
                            <div className="relative w-2xl px-2 py-2 flex items-center rounded-full bg-primary-foreground text-foreground">
                                <i className="fa-solid fa-magnifying-glass fa-lg ml-2"></i>
                                <Input
                                    type="text"
                                    placeholder="Search products..."
                                    className="rounded-full h-12 shadow-none focus-visible:ring-0 text-foreground border-none"
                                />
                                <Button className="rounded-full h-full hover:opacity-90">
                                    Search
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: "easeOut",
                            }}>
                            <div className="flex justify-end items-center w-full">
                                {/* (SVG or illustration goes here, or leave empty for now) */}
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="py-8 sm:py-12 md:py-16">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <AnimatedHeading
                                as="h2"
                                className="text-3xl font-bold"
                                delay={0.2}>
                                Explore Our Categories
                            </AnimatedHeading>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                            {[
                                {
                                    name: "Clothing",
                                    description:
                                        "Trendy fashion for every style",
                                    image: "/images/category-items/clothing.png",
                                },
                                {
                                    name: "Devices",
                                    description: "Latest tech and gadgets",
                                    image: "/images/category-items/devices.png",
                                },
                                {
                                    name: "Food Items",
                                    description: "Fresh and packaged foods",
                                    image: "/images/category-items/food-items.png",
                                },
                                {
                                    name: "Accessories",
                                    description: "Complete your look",
                                    image: "/images/category-items/accessories.png",
                                },
                                {
                                    name: "Prints",
                                    description: "Art and wall decorations",
                                    image: "/images/category-items/prints.png",
                                },
                            ].map((category, i) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: "easeOut",
                                    }}>
                                    <CategoryItem
                                        name={category.name}
                                        description={category.description}
                                        image={category.image}
                                        link={`/shop?category=${category.name.toLowerCase()}`}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-6 sm:py-8 md:py-10">
                    <AnimatedHeading
                        as="h2"
                        className="text-3xl font-bold"
                        delay={0.2}>
                        Popular
                    </AnimatedHeading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 w-full h-max py-4 sm:py-6 md:py-8 gap-4 sm:gap-6 md:gap-8 justify-between">
                        {[1, 2, 3, 4].map((_, i) => (
                            <ShopItem
                                name="Clothing"
                                id={`item-${i}`}
                                key={i}
                                image="/"
                                price={1200}
                                rating={4.5}
                                reviews={128}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
