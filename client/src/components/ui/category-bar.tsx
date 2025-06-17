import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CategoryBarProps<T extends readonly string[]> {
  categories: T;
  selectedCategory?: T[number];
  onCategorySelect?: (category: T[number]) => void;
  className?: string;
}

export default function CategoryBar<const T extends readonly string[]>({
  categories,
  selectedCategory = categories[0],
  onCategorySelect,
  className,
}: CategoryBarProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("px-16 flex gap-2 flex-wrap justify-between", className)}
    >
      <div className="p-4 w-full flex justify-between rounded-3xl bg-primary-foreground">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
          >
            <Button
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => onCategorySelect?.(category)}
              className={cn(
                "transition-colors rounded-full hover:bg-background cursor-pointer select-none",
                selectedCategory === category &&
                  "bg-foreground text-background hover:bg-foreground"
              )}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
