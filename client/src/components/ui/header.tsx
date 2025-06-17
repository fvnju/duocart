import { motion } from "motion/react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function Header() {
    const [location] = useLocation();
    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-4 sticky bg-background top-0 z-50 w-full"
      >
        <div className="mx-16 px-4 py-4 bg-primary-foreground rounded-3xl h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="aspect-square h-12 rounded-xl bg-primary"></div>
            <span className="font-bold text-xl">DuoCart</span>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="bg-background rounded-full p-1.5 flex items-center gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + i * 0.1,
                  }}
                >
                  <Link href={link.path} asChild>
                    <Button
                      disabled={location === link.path}
                      variant="ghost"
                      className={cn(
                        "rounded-full px-6 py-2 text-sm font-medium transition-colors",
                        location === link.path
                          ? "disabled:line-through"
                          : "hover:bg-foreground/100 hover:text-background"
                      )}
                    >
                      {link.name}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 ml-4">
              {["shopping-cart", "user"].map((icon, i) => (
                <motion.div
                  key={icon}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + i * 0.1,
                  }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-background cursor-pointer p-6"
                  >
                    <i className={`fa-regular fa-${icon}`}></i>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>
    );
}
