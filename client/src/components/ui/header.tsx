import { motion } from "motion/react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import CartItem from "@/components/ui/cart-item";

const mockCartItems = [
    {
        image: "/images/category-items/clothing.png",
        name: "T-Shirt",
        price: 19.99,
        quantity: 2,
    },
    {
        image: "/images/category-items/devices.png",
        name: "Smartphone",
        price: 499.99,
        quantity: 1,
    },
    {
        image: "/images/category-items/food-items.png",
        name: "Chocolate Bar",
        price: 2.49,
        quantity: 5,
    },
];

export default function Header() {
    const [location] = useLocation();
    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-4 sticky bg-background top-0 z-50 w-full">
            <div className="mx-16 px-4 py-4 bg-primary-foreground rounded-3xl h-full flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-2">
                    <div className="aspect-square h-12 rounded-xl bg-primary"></div>
                    <span className="font-bold text-xl">DuoCart</span>
                </motion.div>

                {/* Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-center gap-4">
                    <div className="bg-background rounded-full p-1.5 flex items-center gap-1">
                        {links.map((link, i) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4 + i * 0.1,
                                }}>
                                <Link href={link.path}>
                                    <Button
                                        variant="ghost"
                                        className={cn(
                                            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
                                            location === link.path
                                                ? "bg-foreground text-background hover:bg-foreground/100 hover:text-background"
                                                : "hover:bg-foreground/100 hover:text-background"
                                        )}>
                                        {link.name}
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Buttons with Dropdowns */}
                    <div className="flex items-center gap-2 ml-4">
                        {/* Shopping Cart Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 }}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full hover:bg-background cursor-pointer p-6">
                                        <i className="fa-regular fa-shopping-cart"></i>
                                    </Button>
                                </motion.div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="flex flex-col gap-2 min-w-md">
                                <DropdownMenuLabel>
                                    Shopping Cart
                                </DropdownMenuLabel>
                                <DropdownMenuGroup
                                    className="px-2 mb-2 flex flex-col w-full gap-2"
                                    tabIndex={0}
                                    autoFocus>
                                    {mockCartItems.length > 0 ? (
                                        mockCartItems.map((item, i) => (
                                            <CartItem
                                                key={item.name + i}
                                                image={item.image}
                                                name={item.name}
                                                price={item.price}
                                                quantity={item.quantity}
                                                onRemove={() => {}}
                                            />
                                        ))
                                    ) : (
                                        <>
                                            <h2 className="text-xl text-muted-foreground font-bold">
                                                Your cart is empty
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                Start shopping to begin
                                            </p>
                                        </>
                                    )}
                                </DropdownMenuGroup>
                                <DropdownMenuItem className="justify-center p-0 bg-foreground text-background hover:!bg-primary-foreground hover:!text-foreground">
                                    <Link
                                        href="/cart"
                                        className="w-full text-center p-4">
                                        View Cart
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="justify-center bg-foreground text-background hover:!bg-primary-foreground hover:!text-foreground">
                                    Checkout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* User Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.9 }}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full hover:bg-background cursor-pointer p-6">
                                        <i className="fa-regular fa-user"></i>
                                    </Button>
                                </motion.div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="gap-2 flex-col flex"
                                align="end">
                                <DropdownMenuItem>
                                    <i className="fa-regular fa-user mr-2"></i>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <i className="fa-solid fa-gear mr-2"></i>
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </motion.nav>
            </div>
        </motion.header>
    );
}
