import ShopItem from "@/components/ui/shop-item";
import { Button } from "@/components/ui/button";
import CategoryItem from "@/components/ui/category-item";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "motion/react";
import { AnimatedHeading, AnimatedText } from "@/components/ui/animated-text";

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
              className="rounded-3xl bg-linear-120 from-accent to-secondary-foreground to-100% h-96 flex items-center justify-between [&>div]:w-1/2 px-16"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-4"
              >
                <AnimatedHeading
                  as="h1"
                  className="font-heading text-6xl text-background"
                  delay={0.3}
                >
                  Buying and selling made simple.
                </AnimatedHeading>
                <AnimatedText
                  className="font-medium text-background"
                  delay={0.4}
                >
                  Shop for anything and find it fast.
                </AnimatedText>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
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
                }}
              >
                <div className="flex justify-between w-full">
                  {["Clothing", "Devices", "Food Items"].map((name, i) => (
                    <motion.div
                      key={`${name}+top`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + i * 0.1,
                      }}
                    >
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
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>
          <section className="py-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <AnimatedHeading
                  as="h2"
                  className="text-3xl font-bold"
                  delay={0.2}
                >
                  Explore Our Categories
                </AnimatedHeading>
              </div>

              <div className="grid grid-cols-5 gap-8">
                {[
                  {
                    name: "Clothing",
                    description: "Trendy fashion for every style",
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
                    }}
                  >
                    <CategoryItem
                      name={category.name}
                      description={category.description}
                      image={category.image}
                      link={`/shop?category=${category.name}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-8">
            <AnimatedHeading as="h2" className="text-3xl font-bold" delay={0.2}>
              Popular
            </AnimatedHeading>
            <div className="flex justify-between h-max py-8">
              {[1, 2, 3, 4].map((_, i) => (
                <ShopItem
                  key={`item+clothing${i}`}
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
