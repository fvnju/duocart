import { Button } from "./button";
import { motion } from "motion/react";
import { AnimatedText, AnimatedSpan } from "./animated-text";
import { useLocation } from "wouter";

interface ShopItemProps {
    name: string;
    id: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
}

export interface StarRatingProps {
    rating: number;
}

export default function ShopItem({
    name = "Clothing",
    id = "0",
    image = "",
    rating = 3.5,
    reviews = 0,
    price = 1200,
}: ShopItemProps) {

    function StarRating({ rating }: StarRatingProps) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex gap-2">
                {[...Array(fullStars)].map((_, i) => (
                    <i
                        key={`full-${i}`}
                        className="fa-solid fa-star text-amber-500"></i>
                ))}
                {hasHalfStar && (
                    <i className="fa-duotone fa-regular fa-star-half-stroke text-amber-500"></i>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <i
                        key={`empty-${i}`}
                        className="fa-solid fa-star text-gray-400"></i>
                ))}
            </div>
        );
    }

    const [, setLocation] = useLocation();

    function goToItem() {
        setLocation(`/item/${id}`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0 }}
            whileHover={{ y: -5, animationDuration: .1, animationDelay: 0 }}
            className="w-full basis-1/5 cursor-pointer group">
            <div
                className="w-full"
                id={id}>
                <div
                    className="rounded-3xl w-full h-48 bg-accent/50"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}></div>
                <div className="py-4 flex flex-col gap-1">
                    <AnimatedText
                        as="h3"
                        className="font-medium group-hover:underline transition-all duration-200"
                        delay={0.1}>
                        {name}
                    </AnimatedText>
                    <div className="flex justify-between items-center">
                        <StarRating rating={rating} />
                        <div className="flex items-center gap-2">
                            <AnimatedSpan
                                className="text-lg font-bold"
                                delay={0.2}>
                                {rating.toFixed(1)}
                            </AnimatedSpan>
                            <AnimatedSpan
                                className="text-xs text-secondary-foreground"
                                delay={0.3}>
                                ({reviews} reviews)
                            </AnimatedSpan>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <AnimatedSpan
                            className="font-bold text-2xl"
                            delay={0.4}>
                            <sup>₦</sup>{" "}{price.toFixed(2)}
                        </AnimatedSpan>
                        <Button className="bg-foreground aspect-square rounded-full h-12 hover:bg-secondary-foreground" onClick={goToItem}>
                            <i className="fa-solid fa-chevron-right text-background"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
