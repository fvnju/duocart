import CategoryBar from "@/components/ui/category-bar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { categories } from "./Shop";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "wouter";
import { StarRatingProps } from "@/components/ui/shop-item";
import { AnimatedSpan } from "@/components/ui/animated-text";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ItemScreen() {
    const [searchParams] = useSearchParams();
    const [location, setLocation] = useLocation();

    // State for variant and size selection
    const [selectedVariant, setSelectedVariant] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");

    const getURLCategory = useCallback((): (typeof categories)[number] => {
        const urlCategory = searchParams.get("category");
        if (categories.includes(urlCategory as (typeof categories)[number])) {
            return urlCategory as (typeof categories)[number];
        }
        return "All";
    }, [searchParams]);

    const urlCategory = getURLCategory();
    const [selectedCategory, setSelectedCategory] =
        useState<(typeof categories)[number]>(urlCategory);

    // Update URL when category changes
    const handleCategorySelect = (category: (typeof categories)[number]) => {
        const newSearchParams = new URLSearchParams(location.split("?")[1]);
        if (category === "All") {
            newSearchParams.delete("category");
        } else {
            newSearchParams.set("category", category);
        }
        const newQuery = newSearchParams.toString();
        const newPath = newQuery ? `?${newQuery}` : "";
        setLocation(`/shop${newPath}`);
        setSelectedCategory(category);
    };

    // Update state when URL changes
    useEffect(() => {
        const newCategory = getURLCategory();
        setSelectedCategory(newCategory);
    }, [location, getURLCategory]);

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

    return (
        <>
            <Header />
            <CategoryBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />
            <div className="py-8 px-16">
                <section className="flex flex-col w-full gap-8">
                    <div>
                        <h5 className="font-semibold flex gap-12 items-center">
                            <span>Shop</span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span>All</span>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span className="text-muted-foreground">Air</span>
                        </h5>
                    </div>
                    <div className="flex justify-between gap-12 [&>div]:rounded-4xl min-h-[75vh]">
                        <div className="flex-1">
                            <div className="rounded-4xl aspect-video w-full bg-foreground"></div>
                        </div>
                        <div className="flex-1 flex-col gap-3 flex">
                            <h5 className="text-muted-foreground font-medium">
                                CHRISTMAS
                            </h5>
                            <h1 className="text-3xl font-heading">
                                Christmas Tree pouch
                            </h1>
                            <div className="flex gap-4 items-center">
                                <StarRating rating={4.5} />
                                <div className="flex items-center gap-2">
                                    <AnimatedSpan
                                        className="text-lg font-bold"
                                        delay={0.2}>
                                        {(4.5).toFixed(1)}
                                    </AnimatedSpan>
                                    <AnimatedSpan
                                        className="text-xs text-muted-foreground"
                                        delay={0.3}>
                                        ({12} reviews)
                                    </AnimatedSpan>
                                </div>
                            </div>
                            <AnimatedSpan
                                className="font-heading text-4xl"
                                delay={0.4}>
                                <sup className="font-bold">₦</sup>{" "}
                                {(1200).toFixed(2)}
                            </AnimatedSpan>
                            <p className="text-muted-foreground w-md text-sm">
                                Experience the magic of the holiday season with
                                our beautifully crafted Christmas Tree Pouch.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold">
                                        Choose your variant
                                    </h5>
                                    <div>
                                        <Select
                                            value={selectedVariant}
                                            onValueChange={setSelectedVariant}>
                                            <SelectTrigger className="w-[200px] rounded-full bg-primary-foreground text-foreground border-none">
                                                <SelectValue placeholder="Select variant" />
                                            </SelectTrigger>
                                            <SelectContent className="border-0 rounded-3xl p-2">
                                                <SelectItem
                                                    value="red"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Red
                                                </SelectItem>
                                                <SelectItem
                                                    value="green"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Green
                                                </SelectItem>
                                                <SelectItem
                                                    value="blue"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Blue
                                                </SelectItem>
                                                <SelectItem
                                                    value="gold"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Gold
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold">
                                        Choose your size
                                    </h5>
                                    <div>
                                        <Select
                                            value={selectedSize}
                                            onValueChange={setSelectedSize}>
                                            <SelectTrigger className="w-[200px] rounded-full bg-primary-foreground text-foreground border-none">
                                                <SelectValue placeholder="Select size" />
                                            </SelectTrigger>
                                            <SelectContent className="border-0 rounded-3xl p-2">
                                                <SelectItem
                                                    value="small"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Small
                                                </SelectItem>
                                                <SelectItem
                                                    value="medium"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Medium
                                                </SelectItem>
                                                <SelectItem
                                                    value="large"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Large
                                                </SelectItem>
                                                <SelectItem
                                                    value="xlarge"
                                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                                    Extra Large
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-3 flex flex-col">
                                <h5 className="font-bold">Quantity</h5>
                                <div className="gap-4 flex w-min items-center rounded-full p-1 bg-primary-foreground">
                                    <Button
                                        variant="ghost"
                                        className="hover:bg-foreground hover:text-background cursor-pointer rounded-full w-8 h-8 text-xs">
                                        <i className="fa-solid fa-minus"></i>
                                    </Button>
                                    <span className="font-semibold">0</span>
                                    <Button
                                        variant="ghost"
                                        className="hover:bg-foreground hover:text-background cursor-pointer rounded-full text-sm w-8 h-8">
                                        <i className="fa-solid fa-plus"></i>
                                    </Button>
                                </div>
                            </div>
                            <Button className="p-8 rounded-full w-sm">
                                Add to Cart
                            </Button>
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
