import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ShopItem from "@/components/ui/shop-item";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import CategoryBar from "@/components/ui/category-bar";
import FilterBar, {
    FilterState,
    initialFilterState,
    SortOption,
} from "@/components/ui/filter-bar";

export default function Shop() {
    const [location, setLocation] = useLocation();
    const [showMessage, setShowMessage] = useState(true);
    const [filters, setFilters] = useState<FilterState>(initialFilterState);
    const [sortBy, setSortBy] = useState<SortOption>("price-asc");

    // Get category from URL if present, otherwise use "All"
    const searchParams = new URLSearchParams(location.split("?")[1]);
    const urlCategory = searchParams.get("category") || "All";
    const [selectedCategory, setSelectedCategory] = useState(urlCategory);

    // Update URL when category changes
    const handleCategorySelect = (category: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
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
        const currentParams = new URLSearchParams(location.split("?")[1]);
        const newCategory = currentParams.get("category") || "All";
        setSelectedCategory(newCategory);
    }, [location]);

    return (
        <>
            <Header />
            <CategoryBar
                categories={[
                    "All",
                    "Clothing",
                    "Devices",
                    "Food Items",
                    "Accessories",
                    "Prints",
                ]}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />
            <div className="px-16 flex-col w-full flex min-h-screen">
                {/* Dismissible Message */}
                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative mt-4 p-2 px-4 rounded-full bg-secondary-foreground text-background">
                            <div className="flex items-center justify-between px-4">
                                <div className="flex items-center gap-3">
                                    <AnimatedText className="text-sm flex gap-2 items-center">
                                        <i className="fa-solid fa-info-circle"></i>
                                        <span>
                                            Want to sell items instead? Click{" "}
                                            <Link
                                                to="#"
                                                className="underline font-medium">
                                                Here
                                            </Link>
                                            .
                                        </span>
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
                    <FilterBar
                        filters={filters}
                        onFilterChange={setFilters}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />

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
                </section>
            </div>
            <Footer />
        </>
    );
}
