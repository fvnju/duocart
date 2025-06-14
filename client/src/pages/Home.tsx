import ShopItem from "@/components/ui/shop-item";
import { Button } from "@/components/ui/button";
import CategoryItem from "@/components/ui/category-item";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "motion/react";

export default function Home() {
    return (
        <>
            <Header />
            <div className="p-16 py-8 flex flex-col items-center w-full [&>section]:w-full">
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="rounded-3xl bg-linear-120 from-accent to-secondary-foreground to-100% h-96 flex items-center justify-between [&>div]:w-1/2 px-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="flex flex-col gap-4">
                            <h1 className="font-heading text-6xl text-background">
                                Buying and selling made simple.
                            </h1>
                            <p className="font-medium text-background">
                                Shop for anything and find it fast.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                <Button className="w-min rounded-full p-8 bg-background text-foreground">
                                    Shop Now
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: "easeOut",
                            }}>
                            <div className="flex justify-between w-full">
                                {["Clothing", "Devices", "Food Items"].map(
                                    (name, i) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.6 + i * 0.1,
                                            }}>
                                            <CategoryItem
                                                name={name}
                                                image={`/images/category-items/${name
                                                    .toLowerCase()
                                                    .replace(" ", "-")}.png`}
                                                link="#"
                                                textBackground={true}
                                                small={true}
                                            />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-lg font-bold">
                        Explore Our Categories
                    </motion.h1>
                    <div className="flex justify-between h-max py-8">
                        {[
                            "Clothing",
                            "Devices",
                            "Food Items",
                            "Accessories",
                            "Prints",
                        ].map((name, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}>
                                <CategoryItem
                                    name={name}
                                    image={`/images/category-items/${name
                                        .toLowerCase()
                                        .replace(" ", "-")}.png`}
                                    link="#"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
                <section className="py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-lg font-bold">
                        Popular
                    </motion.h1>
                    <div className="flex justify-between h-max py-8">
                        {[1, 2, 3, 4].map((_, i) => (
                                <ShopItem
                                    name="Clothing"
                                    id={`item-${i}`}
                                    image="/"
                                    price={1200}
                                    rating={4.5}
                                    reviews={128}
                                />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
