import { motion } from "motion/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "wouter";
import { Button } from "./button";

export default function Header() {
    const links = ["Home", "Shop", "Contact", "About"];

    return (
        <motion.header
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-20 flex justify-between border-b"
        >
            <div className="aspect-square p-4 border-r">
                <div className="bg-primary h-full w-full"></div>
            </div>

            <div className="h-full flex items-center">
                <NavigationMenu>
                    <NavigationMenuList className="gap-16 px-16">
                        {links.map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.6 + i * 0.1,
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <NavigationMenuItem>
                                    <Link to="#">{text}</Link>
                                </NavigationMenuItem>
                            </motion.div>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="h-full">
                    {["magnifying-glass", "shopping-cart", "user"].map(
                        (icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 1 + i * 0.1,
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="inline-block h-full"
                            >
                                <Button className="aspect-square border-l bg-transparent hover:bg-accent/40 text-foreground rounded-none h-full">
                                    <i className={`fa-regular fa-${icon}`}></i>
                                </Button>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </motion.header>
    );
}
