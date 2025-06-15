import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { AnimatedText } from "./animated-text";
import { motion } from "motion/react";

interface CategoryItemProps {
    name: string;
    image: string;
    link: string;
    textBackground?: boolean;
    small?: boolean;
    description?: string;
}

export default function CategoryItem({
    name,
    image,
    link,
    textBackground = false,
    small = false,
    description,
}: CategoryItemProps) {
    return (
        <Link href={link}>
            <motion.div 
                className="group relative flex flex-col items-center w-min gap-4"
                whileHover={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <motion.div
                    className={cn(
                        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
                        small ? "w-32" : "w-48",
                        ""
                    )}
                    whileHover={{ scale: 1.01}}
                >
                    <div
                        className={cn(
                            "relative aspect-square w-full transition-transform duration-300 group-hover:scale-110",
                            "bg-contain bg-center bg-no-repeat"
                        )}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                </motion.div>
                <div className="flex flex-col items-center gap-1">
                    <AnimatedText
                        as="p"
                        className={cn(
                            "font-semibold text-lg transition-colors duration-300",
                            textBackground ? "text-background" : "text-foreground group-hover:text-primary"
                        )}
                        delay={0.1}
                    >
                        {name}
                    </AnimatedText>
                    {description && (
                        <AnimatedText
                            as="p"
                            className="text-sm text-muted-foreground text-center max-w-[200px]"
                            delay={0.2}
                        >
                            {description}
                        </AnimatedText>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}

