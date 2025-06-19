import { Button } from "@/components/ui/button";

export interface CartItemProps {
    image: string;
    name: string;
    price: number;
    quantity: number;
    onRemove?: () => void;
    variant?: "compact" | "page";
}

function CartItemPage({
    image,
    name,
    price,
    quantity,
    onRemove,
}: Omit<CartItemProps, "variant">) {
    return (
        <div className="flex items-start gap-6 py-4 rounded-2xl bg-background">
            <div className="p-4 w-30 h-30 bg-primary-foreground rounded-3xl">
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="w-full h-full bg-center bg-contain bg-no-repeat rounded-xl"
                />
            </div>
            <div className="flex flex-col justify-between h-full flex-1 min-w-0 gap-0">
                <div>
                    <h1 className="font-bold text-lg truncate">{name}</h1>
                    <span className="font-medium text-muted-foreground">
                        <span className="font-semibold">Qty:</span> {quantity}
                    </span>
                </div>
                <span className="font-bold">${price.toFixed(2)}</span>
            </div>
            <div className="flex flex-col justify-between h-full items-end">
                <Button
                    size="lg"
                    className="rounded-full hover:bg-primary-foreground/80 hover:text-foreground cursor-pointer w-12 h-12"
                    onClick={onRemove}
                    aria-label="Remove from cart">
                    <i className="fa-regular fa-trash"></i>
                </Button>
                <div className="gap-4 flex items-center rounded-full p-2 bg-primary-foreground">
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
        </div>
    );
}

function CartItemCompact({
    image,
    name,
    price,
    quantity,
    onRemove,
}: Omit<CartItemProps, "variant">) {
    return (
        <div className="flex items-center gap-3 py-2 px-2 rounded-xl select-none hover:bg-foreground/3 transition-colors">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="w-14 h-14 bg-center bg-contain bg-no-repeat rounded-md"
            />
            <div className="flex flex-col flex-1 min-w-0">
                <h1 className="truncate text-sm">{name}</h1>
                <span className="text-muted-foreground">
                    ${price.toFixed(2)}
                </span>
                <span className="text-xs text-muted-foreground">
                    Qty: {quantity}
                </span>
            </div>
            <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-background/80"
                onClick={onRemove}
                aria-label="Remove from cart">
                <i className="fa-solid fa-xmark"></i>
            </Button>
        </div>
    );
}

export default function CartItem({
    image,
    name,
    price,
    quantity,
    onRemove,
    variant = "compact",
}: CartItemProps) {
    if (variant === "page") {
        return (
            <CartItemPage
                image={image}
                name={name}
                price={price}
                quantity={quantity}
                onRemove={onRemove}
            />
        );
    }
    return (
        <CartItemCompact
            image={image}
            name={name}
            price={price}
            quantity={quantity}
            onRemove={onRemove}
        />
    );
}
