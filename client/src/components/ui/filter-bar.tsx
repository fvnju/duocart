import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AnimatedHeading, AnimatedText } from "@/components/ui/animated-text";

export type SortOption = "price-asc" | "price-desc" | "rating" | "reviews";

export interface FilterState {
    price: {
        min: number;
        max: number;
    };
    rating: number;
    reviews: number;
    search: string;
}

export const initialFilterState: FilterState = {
    price: { min: 0, max: 9999999 },
    rating: 0,
    reviews: 0,
    search: "",
};

interface FilterBarProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    sortBy: SortOption;
    onSortChange: (sort: SortOption) => void;
}

export default function FilterBar({
    filters,
    onFilterChange,
    sortBy,
    onSortChange,
}: FilterBarProps) {
    const handlePriceFilter = (range: string) => {
        if (range === "0") {
            onFilterChange({
                ...filters,
                price: { min: 0, max: 9999999 },
            });
            return;
        }
        const [min, max] = range.split("-").map(Number);
        onFilterChange({
            ...filters,
            price: { min, max },
        });
    };

    const handleRatingFilter = (rating: string) => {
        onFilterChange({
            ...filters,
            rating: Number(rating),
        });
    };

    const handleReviewsFilter = (reviews: string) => {
        onFilterChange({
            ...filters,
            reviews: Number(reviews),
        });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({
            ...filters,
            search: e.target.value,
        });
    };

    const clearFilters = () => {
        onFilterChange(initialFilterState);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-2 flex-1">
                    <AnimatedHeading
                        as="h2"
                        className="text-lg font-semibold"
                        delay={0.1}>
                        Filters:
                    </AnimatedHeading>
                    <div className="gap-4 flex flex-wrap">
                        {/* Search Bar */}
                        <div className="relative w-[250px]">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                value={filters.search}
                                onChange={handleSearchChange}
                                className="rounded-full bg-primary-foreground text-foreground border-none pl-10"
                            />
                            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
                        </div>

                        {/* Price Filter */}
                        <Select
                            value={
                                filters.price.min === 0 &&
                                filters.price.max === 9999999
                                    ? "0"
                                    : `${filters.price.min}-${filters.price.max}`
                            }
                            onValueChange={handlePriceFilter}>
                            <SelectTrigger className="w-[150px] rounded-full bg-primary-foreground text-foreground border-none">
                                <SelectValue placeholder="Any Price" />
                            </SelectTrigger>
                            <SelectContent className="border-0 rounded-3xl p-2">
                                <SelectItem
                                    value="0"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    Any Price
                                </SelectItem>
                                <SelectItem
                                    value="0-10000"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    Under ₦10,000
                                </SelectItem>
                                <SelectItem
                                    value="10000-50000"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    ₦10,000 - ₦50,000
                                </SelectItem>
                                <SelectItem
                                    value="50000-100000"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    ₦50,000 - ₦100,000
                                </SelectItem>
                                <SelectItem
                                    value="100000-500000"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    ₦100,000 - ₦500,000
                                </SelectItem>
                                <SelectItem
                                    value="500000-9999999"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    ₦500,000+
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Rating Filter */}
                        <Select
                            value={filters.rating.toString()}
                            onValueChange={handleRatingFilter}>
                            <SelectTrigger className="w-[150px] rounded-full bg-primary-foreground text-foreground border-none">
                                <SelectValue placeholder="Minimum Rating" />
                            </SelectTrigger>
                            <SelectContent className="border-0 rounded-3xl p-2">
                                <SelectItem
                                    value="0"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    Any Rating
                                </SelectItem>
                                <SelectItem
                                    value="3"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    3+ Stars
                                </SelectItem>
                                <SelectItem
                                    value="4"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    4+ Stars
                                </SelectItem>
                                <SelectItem
                                    value="4.5"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    4.5+ Stars
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Reviews Filter */}
                        <Select
                            value={filters.reviews.toString()}
                            onValueChange={handleReviewsFilter}>
                            <SelectTrigger className="w-[150px] rounded-full bg-primary-foreground text-foreground border-none">
                                <SelectValue placeholder="Minimum Reviews" />
                            </SelectTrigger>
                            <SelectContent className="border-0 rounded-3xl p-2">
                                <SelectItem
                                    value="0"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    Any Reviews
                                </SelectItem>
                                <SelectItem
                                    value="10"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    10+ Reviews
                                </SelectItem>
                                <SelectItem
                                    value="50"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    50+ Reviews
                                </SelectItem>
                                <SelectItem
                                    value="100"
                                    className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                    100+ Reviews
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Clear Filters Button */}
                        <Button
                            className="rounded-full cursor-pointer hover:bg-foreground/40 hover:text-foreground"
                            onClick={clearFilters}>
                            Clear Filters
                        </Button>
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                    <AnimatedText
                        className="text-sm text-muted-foreground"
                        delay={0.2}>
                        Sort by:
                    </AnimatedText>
                    <Select
                        value={sortBy}
                        onValueChange={onSortChange}>
                        <SelectTrigger className="rounded-full bg-primary-foreground text-foreground border-none px-4 py-2">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="border-0 rounded-3xl p-2">
                            <SelectItem
                                value="price-asc"
                                className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                Price: Low to High
                            </SelectItem>
                            <SelectItem
                                value="price-desc"
                                className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                Price: High to Low
                            </SelectItem>
                            <SelectItem
                                value="rating"
                                className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                Rating
                            </SelectItem>
                            <SelectItem
                                value="reviews"
                                className="rounded-full hover:!bg-foreground hover:!text-background px-4">
                                Most Reviewed
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Active Filters Display */}
            {(filters.price.min > 0 ||
                (filters.price.max < 9999999 &&
                    filters.price.max !== 9999999) ||
                filters.rating > 0 ||
                filters.reviews > 0 ||
                filters.search) && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                    <span>Active filters:</span>
                    {filters.search && (
                        <span className="p-2 px-4 rounded-full bg-primary/10 text-primary text-xs">
                            Search: {filters.search}
                        </span>
                    )}
                    {filters.price.min > 0 && (
                        <span className="p-2 px-4 rounded-full bg-primary/10 text-primary text-xs">
                            Min Price: ₦{filters.price.min.toLocaleString()}
                        </span>
                    )}
                    {filters.price.max < 9999999 &&
                        filters.price.max !== 9999999 && (
                            <span className="p-2 px-4 rounded-full bg-primary/10 text-primary text-xs">
                                Max Price: ₦{filters.price.max.toLocaleString()}
                            </span>
                        )}
                    {filters.rating > 0 && (
                        <span className="p-2 px-4 rounded-full bg-primary/10 text-primary text-xs">
                            {filters.rating}+ Stars
                        </span>
                    )}
                    {filters.reviews > 0 && (
                        <span className="p-2 px-4 rounded-full bg-primary/10 text-primary text-xs">
                            {filters.reviews}+ Reviews
                        </span>
                    )}
                </motion.div>
            )}
        </div>
    );
}
