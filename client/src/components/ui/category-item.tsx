import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { AnimatedText } from "./animated-text";

interface CategoryItemProps {
    name: string;
    image: string;
    link: string;
    textBackground?: boolean;
    small?: boolean;
}

export default function CategoryItem({
    name,
    image,
    link,
    textBackground = false,
    small = false,
}: CategoryItemProps) {
    return (
        <Link to={link}>
            <div className="flex flex-col items-center w-min gap-4">
                <div
                    className={cn(
                        "p-4 bg-primary-foreground rounded-full aspect-square",
                        small ? "w-32" : "w-40"
                    )}>
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}></div>
                </div>
                <AnimatedText
                    as="p"
                    className={cn(
                        "font-medium",
                        textBackground ? "text-background" : "text-foreground"
                    )}
                    delay={0.1}>
                    {name}
                </AnimatedText>
            </div>
        </Link>
    );
}
