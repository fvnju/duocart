import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ShopItem from "@/components/ui/shop-item";
import { Button } from "@/components/ui/button";
import { AnimatedHeading, AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type SortOption = "price-asc" | "price-desc" | "rating" | "reviews";
type FilterOption = "price" | "rating" | "reviews" | "all";

export default function Shop() {
    const [location] = useLocation();
    const [showMessage, setShowMessage] = useState(true);
    const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>("price-asc");

    // Get category from URL if present
    const searchParams = new URLSearchParams(location.split("?")[1]);
    searchParams.get("category");

    const handleFilter = (filter: FilterOption) => {
        setActiveFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter]
        );
    };

    const handleSort = (option: SortOption) => {
        setSortBy(option);
    };

    return (
        <>
            <Header />
            <div className="px-16 flex-col w-full flex min-h-screen">
                {/* Dismissible Message */}
                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative mt-4 p-2 px-4 rounded-full bg-secondary-foreground text-background">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <i className="fa-solid fa-info-circle text-primary"></i>
                                    <AnimatedText className="text-sm">
                                        Want to sell items instead? Click{" "}
                                        <Link
                                            to="#"
                                            className="underline font-medium">
                                            Here
                                        </Link>
                                        .
                                    </AnimatedText>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full hover:bg-background/20 hover:text-background"
                                    onClick={() => setShowMessage(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <section className="flex flex-col w-full py-8">
                    {/* Filters and Sort */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col gap-2">
                                <AnimatedHeading
                                    as="h2"
                                    className="text-lg font-semibold"
                                    delay={0.1}>
                                    Filters:
                                </AnimatedHeading>
                                <div className="gap-4 flex">
                                    {["price", "rating", "reviews", "all"].map(
                                        (filter) => (
                                            <Button
                                                key={filter}
                                                size="sm"
                                                className={cn(
                                                    "capitalize rounded-full bg-secondary-foreground",
                                                    activeFilters.includes(
                                                        filter as FilterOption
                                                    ) &&
                                                        "bg-primary/10 border-primary/50 text-primary"
                                                )}
                                                onClick={() =>
                                                    handleFilter(
                                                        filter as FilterOption
                                                    )
                                                }>
                                                {filter === "all"
                                                    ? "All"
                                                    : `By ${filter}`}
                                            </Button>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <AnimatedText
                                    className="text-sm text-muted-foreground"
                                    delay={0.2}>
                                    Sort by:
                                </AnimatedText>
                                <Select
                                    value={sortBy}
                                    onValueChange={handleSort}>
                                    <SelectTrigger className="rounded-full bg-secondary-foreground text-background border-none px-4 py-2">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price-asc">
                                            Price: Low to High
                                        </SelectItem>
                                        <SelectItem value="price-desc">
                                            Price: High to Low
                                        </SelectItem>
                                        <SelectItem value="rating">
                                            Rating
                                        </SelectItem>
                                        <SelectItem value="reviews">
                                            Most Reviewed
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        {activeFilters.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Active filters:</span>
                                {activeFilters.map((filter) => (
                                    <span
                                        key={filter}
                                        className="p-2 px-4 capitalize rounded-full bg-primary/10 text-primary text-xs">
                                        {filter}
                                    </span>
                                ))}
                                <Button
                                    size="sm"
                                    className="text-xs rounded-full bg-secondary-foreground"
                                    onClick={() => setActiveFilters([])}>
                                    Clear all
                                </Button>
                            </motion.div>
                        )}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-4 gap-8 py-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                            <ShopItem
                                key={i}
                                name="Clothing"
                                id={`item-${i}`}
                                image="/"
                                price={1200 + i * 100}
                                rating={4.5 - i * 0.1}
                                reviews={128 + i * 10}
                            />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center py-8">
                        <Button
                            variant="outline"
                            className="px-8"
                            onClick={() => {
                                /* Load more items */
                            }}>
                            Load More
                            <i className="fa-solid fa-chevron-down"></i>
                        </Button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
