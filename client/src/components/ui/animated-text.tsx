"use client";

import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface AnimatedTextProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    delay?: number;
    duration?: number;
    once?: boolean;
}

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
};

export const AnimatedHeading = ({
    children,
    className,
    as: Component = "h1",
    delay = 0,
    duration = 0.4,
    once = false,
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration, delay, ease: "easeOut" }}>
            <Component className={cn("", className)}>{children}</Component>
        </motion.div>
    );
};

export const AnimatedText = ({
    children,
    className,
    as: Component = "p",
    delay = 0,
    duration = 0.4,
    once = false,
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration, delay, ease: "easeOut" }}>
            <Component className={cn("", className)}>{children}</Component>
        </motion.div>
    );
};

export const AnimatedSpan = ({
    children,
    className,
    delay = 0,
    duration = 0.4,
    once = false,
}: Omit<AnimatedTextProps, "as">) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn("", className)}>
            {children}
        </motion.span>
    );
};
