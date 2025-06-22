import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import CartItem, { CartItemProps } from "@/components/ui/cart-item";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const initialCart: CartItemProps[] = [
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

export default function Cart() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full py-8 px-16">
                <section className="flex flex-col gap-4">
                    {/* <AnimatePresence>
                        {showMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="relative p-2 px-2 md:px-4 rounded-full bg-secondary-foreground text-background">
                                <div className="flex items-center justify-between px-2 md:px-4">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <AnimatedText className="text-xs md:text-sm flex gap-1 md:gap-2 items-center">
                                            <i className="fa-solid fa-info-circle"></i>
                                            <span>
                                                Want to sell items instead?
                                                Click{" "}
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
                    </AnimatePresence> */}
                    <div className="py-24 flex justify-center items-center">
                        <h1 className="text-4xl font-heading uppercase">Shopping Cart</h1>
                    </div>
                    <h1 className="text-xl font-bold">Your Cart</h1>
                    <div className="flex justify-between gap-8 relative">
                        <div className="w-full flex flex-col gap-4">
                            <div className="outline-4 border border-foreground/10 rounded-full outline-primary-foreground flex justify-between p-4 bg-background sticky top-8 z-10 items-center">
                                <div>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Input
                                            type="checkbox"
                                            className="peer appearance-none w-5 h-6.5 border-2 border-foreground rounded-md checked:bg-primary checked:border-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                                            id="select-all-checkbox"
                                        />
                                        <span className="text-sm ml-2 select-none peer-checked:font-medium transition-colors duration-200">
                                            Select all items
                                        </span>
                                    </label>
                                </div>
                                <Button
                                    size="lg"
                                    className="rounded-full hover:bg-primary-foreground/80 hover:text-foreground cursor-pointer w-12 h-12"
                                    aria-label="Remove from cart">
                                    <i className="fa-regular fa-trash"></i>
                                </Button>
                            </div>
                            <div className="flex flex-col rounded-4xl overflow-hidden outline-4 outline-primary-foreground border border-foreground/10 bg-background px-4">
                                <CartItem
                                    {...initialCart[0]}
                                    variant="page"
                                />
                                <Separator className="bg-primary-foreground" />
                                <CartItem
                                    {...initialCart[1]}
                                    variant="page"
                                />
                                <Separator className="bg-primary-foreground" />
                                <CartItem
                                    {...initialCart[2]}
                                    variant="page"
                                />
                            </div>
                        </div>
                        <div className="basis-5/12">
                            <div className="p-4 outline-4 outline-primary-foreground rounded-4xl border-foreground/10 border bg-background sticky top-32">
                                <h1 className="text-xl font-bold">
                                    Order Summary
                                </h1>
                                <div className="flex flex-col gap-4 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground font-medium">
                                            Subtotal
                                        </span>
                                        <span className="font-medium">$23</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground font-medium">
                                            Delivery fee
                                        </span>
                                        <span className="font-medium">$23</span>
                                    </div>
                                    <Separator className="bg-primary-foreground" />
                                    <div className="flex justify-between">
                                        <span className="font-bold">Total</span>
                                        <span className="font-bold">$23</span>
                                    </div>
                                    <Button className="p-7 rounded-full cursor-pointer">
                                        Go to Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
