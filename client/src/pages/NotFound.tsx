import { motion } from "motion/react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedHeading, AnimatedText } from "@/components/ui/animated-text";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-16">
                <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative">
                        <AnimatedHeading
                            as="h1"
                            className="text-9xl font-heading font-bold text-primary"
                            delay={0.2}>
                            404
                        </AnimatedHeading>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.3,
                                type: "spring",
                            }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-destructive rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-exclamation text-background text-2xl"></i>
                        </motion.div>
                    </motion.div>

                    <AnimatedHeading
                        as="h2"
                        className="text-4xl font-bold"
                        delay={0.4}>
                        Page Not Found
                    </AnimatedHeading>

                    <AnimatedText
                        className="text-lg text-muted-foreground"
                        delay={0.6}>
                        The page you're looking for doesn't exist or has been
                        moved. Let's get you back on track!
                    </AnimatedText>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}>
                        <Link href="/">
                            <Button
                                className="rounded-full px-8 py-6 text-lg"
                                size="lg">
                                <i className="fa-solid fa-house mr-2"></i>
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.4 }}
                        className="flex gap-4 text-muted-foreground">
                        <Link
                            href="/shop"
                            className="hover:text-foreground transition-colors">
                            Shop
                        </Link>
                        <span>•</span>
                        <Link
                            href="/about"
                            className="hover:text-foreground transition-colors">
                            About
                        </Link>
                        <span>•</span>
                        <Link
                            href="/contact"
                            className="hover:text-foreground transition-colors">
                            Contact
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
