import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="px-16 py-2 flex flex-col justify-between border-t">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="aspect-square h-16 p-4">
                        <div className="bg-primary h-full w-full"></div>
                    </div>
                    <span className="font-bold">DuoCart</span>
                </div>
                <div className="h-full flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-16 px-16">
                            <NavigationMenuItem>
                                <Link to="#">Home</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="#">Shop</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="#">Contact</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="#">About</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="h-full">
                    <p>
                        <span className="font-bold">Contact</span>:{" "}
                        <span className="font-medium">+234 813 001 5634</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-12 justify-center">
                <Link to="#">
                    <i className="fa-brands fa-instagram fa-xl"></i>
                </Link>
                <Link to="#">
                    <i className="fa-brands fa-x-twitter fa-xl"></i>
                </Link>
                <Link to="#">
                    <i className="fa-brands fa-threads fa-xl"></i>
                </Link>
                <Link to="#">
                    <i className="fa-brands fa-tiktok fa-xl"></i>
                </Link>
                <Link to="#">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </Link>
            </div>
            <div className="flex justify-center items-center gap-4 py-8 text-secondary-foreground">
                <Link to="#">
                    Privacy Policy
                </Link>
                <Link to="#">
                    Terms of Service
                </Link>
                <Link to="#">
                    Copyright 2025
                </Link>
            </div>
        </footer>
    );
}
