import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { useSearchParams, useLocation } from "wouter";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
    {
        key: "profile",
        label: "Profile",
        icon: <i className="fa-regular fa-user mr-2"></i>,
    },
    {
        key: "aisle",
        label: "Your Aisle",
        icon: <i className="fa-solid fa-shop mr-2"></i>,
    },
    {
        key: "analytics",
        label: "Analytics",
        icon: <i className="fa-solid fa-chart-mixed mr-2"></i>,
    },
    {
        key: "settings",
        label: "Settings",
        icon: <i className="fa-regular fa-gear mr-2"></i>,
    },
];

export default function Account() {
    const [searchParams] = useSearchParams();
    const [location, setLocation] = useLocation();
    const currentTab = searchParams.get("tab") || "profile";

    const handleTabClick = (tabKey: string) => {
        const newSearchParams = new URLSearchParams(location.split("?")[1]);
        newSearchParams.set("tab", tabKey);
        const newQuery = newSearchParams.toString();
        setLocation(`/account${newQuery ? `?${newQuery}` : ""}`);
    };

    return (
        <>
            <Header />
            <main className="py-4 px-16 flex flex-col w-full">
                <section className="flex gap-8 h-[80vh]">
                    <motion.div
                        className="flex-1 flex flex-col gap-8"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
                        <motion.div
                            className="p-4 flex gap-2 items-center bg-muted rounded-4xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}>
                            <div className="h-12 bg-primary aspect-square rounded-full"></div>
                            <div className="text-sm">
                                <h1>User</h1>
                                <h1>user@email.com</h1>
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-full flex flex-col gap-2 rounded-4xl p-4 bg-muted h-full flex-1 min-h-0"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}>
                            {tabs.map((tab, i) => (
                                <motion.div
                                    key={tab.key}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 + i * 0.08,
                                    }}>
                                    <Button
                                        variant={
                                            currentTab === tab.key
                                                ? "default"
                                                : "ghost"
                                        }
                                        className="p-8 hover:bg-foreground hover:text-background justify-start w-full rounded-full flex-1 h-auto"
                                        onClick={() => handleTabClick(tab.key)}>
                                        {tab.icon}
                                        {tab.label}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + tabs.length * 0.08,
                                }}>
                                <Button
                                    variant="ghost"
                                    className="p-8 hover:bg-foreground hover:text-background justify-start w-full rounded-full flex-1 h-auto"
                                    onClick={() => setLocation("/")}>
                                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                                    Logout
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="rounded-4xl flex-7/12 px-6 h-full flex flex-col">
                        <AnimatePresence mode="wait">
                            {currentTab === "profile" && (
                                <motion.div
                                    key="profile"
                                    className="h-full flex-1 flex flex-col"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.3 }}>
                                    <div className="flex flex-col gap-10 h-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.1,
                                            }}>
                                            <h1 className="text-3xl py-2 font-bold">
                                                Personal Information
                                            </h1>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                Here you can manage your account
                                                and the data you give us!
                                            </p>
                                        </motion.div>
                                        <div className="p-6 bg-muted rounded-4xl h-full flex flex-col w-full">
                                            <div className="flex flex-col px-6 gap-4 w-full">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-6">
                                                        <div className="bg-foreground h-12 flex justify-end items-end aspect-square rounded-full">
                                                            <Button className="flex justify-center rounded-full bg-background text-foreground w-6 h-6 p-0 items-center">
                                                                <i className="fa-solid fa-pencil fa-sm"></i>
                                                            </Button>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h1 className="font-bold">
                                                                Ibereola Oludare
                                                            </h1>
                                                            <span className="text-foreground text-sm">
                                                                ibereola2906@gmail.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Dialog>
                                                        <form>
                                                            <DialogTrigger
                                                                asChild>
                                                                <Button className="p-6 rounded-3xl">
                                                                    Edit profile
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="min-w-2xl">
                                                                <DialogHeader className="pb-6">
                                                                    <DialogTitle className="text-3xl font-bold">
                                                                        Edit
                                                                        profile
                                                                    </DialogTitle>
                                                                    <DialogDescription>
                                                                        Make
                                                                        changes
                                                                        to your
                                                                        profile
                                                                        here.
                                                                        Click
                                                                        save
                                                                        when
                                                                        you're
                                                                        done.
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <div className="grid grid-cols-2 gap-6">
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="name-1">
                                                                            First
                                                                            Name
                                                                        </Label>
                                                                        <Input
                                                                            id="name-1"
                                                                            name="name"
                                                                            defaultValue="Ibereola"
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="name-2">
                                                                            Last
                                                                            Name
                                                                        </Label>
                                                                        <Input
                                                                            id="name-2"
                                                                            name="name"
                                                                            defaultValue="Oludare"
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="email">
                                                                            Email
                                                                        </Label>
                                                                        <Input
                                                                            id="email"
                                                                            name="email"
                                                                            defaultValue="ibereola2906@gmail.com"
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="phone">
                                                                            Phone
                                                                            Number
                                                                        </Label>
                                                                        <Input
                                                                            id="phone"
                                                                            name="phone"
                                                                            defaultValue="+234 813 001 5634"
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="address">
                                                                            Address
                                                                        </Label>
                                                                        <Input
                                                                            id="address"
                                                                            name="address"
                                                                            defaultValue="No.7, Holiness Close, Redeemer's Estate, Lugbe"
                                                                        />
                                                                    </div>
                                                                    <div className="grid gap-3">
                                                                        <Label htmlFor="postal">
                                                                            Postal
                                                                            Code
                                                                        </Label>
                                                                        <Input
                                                                            id="postal"
                                                                            name="postal"
                                                                            defaultValue="900107"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <DialogFooter>
                                                                    <DialogClose
                                                                        asChild>
                                                                        <Button
                                                                            variant="outline"
                                                                            className="p-6 rounded-3xl">
                                                                            Cancel
                                                                        </Button>
                                                                    </DialogClose>
                                                                    <Button
                                                                        type="submit"
                                                                        className="p-6 rounded-3xl">
                                                                        Save
                                                                        changes
                                                                    </Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </form>
                                                    </Dialog>
                                                </div>
                                                <motion.div
                                                    className="grid grid-cols-3 gap-8 p-6 px-12 w-full bg-background rounded-3xl"
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        hidden: {},
                                                        visible: {
                                                            transition: {
                                                                staggerChildren: 0.08,
                                                            },
                                                        },
                                                    }}>
                                                    {[
                                                        {
                                                            label: "First Name",
                                                            value: "Ibereola",
                                                        },
                                                        {
                                                            label: "Last Name",
                                                            value: "Oludare",
                                                        },
                                                        {
                                                            label: "Email",
                                                            value: "ibereola2906@gmail.com",
                                                        },
                                                        {
                                                            label: "Phone No.",
                                                            value: "+234 813 001 5634",
                                                        },
                                                        {
                                                            label: "Address",
                                                            value: "No. 7, Holiness Close, Redeemer's Estate, Lugbe",
                                                        },
                                                        {
                                                            label: "Postal Code",
                                                            value: "900107",
                                                        },
                                                    ].map((item, i) => (
                                                        <motion.div
                                                            key={item.label}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                                delay:
                                                                    0.1 +
                                                                    i * 0.08,
                                                            }}
                                                            className="flex justify-between w-full">
                                                            <div>
                                                                <h1 className="text-xs uppercase text-muted-foreground font-bold">
                                                                    {item.label}
                                                                </h1>
                                                                <span className="text-sm">
                                                                    {item.value}
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {currentTab === "analytics" && (
                                <motion.div
                                    key="analytics"
                                    className="h-full flex-1 flex flex-col items-center justify-center gap-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.3 }}>
                                    <div className="flex flex-col items-center">
                                        <i className="fa-solid fa-chart-mixed text-5xl text-muted-foreground mb-4"></i>
                                        <h2 className="text-2xl font-bold mb-2">
                                            Analytics
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Analytics dashboard coming soon!
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                            {currentTab === "aisle" && (
                                <motion.div
                                    key="aisle"
                                    className="h-full flex-1 flex flex-col items-center justify-center gap-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.3 }}>
                                    <div className="flex flex-col items-center">
                                        <i className="fa-solid fa-shop text-5xl text-muted-foreground mb-4"></i>
                                        <h2 className="text-2xl font-bold mb-2">
                                            Your Aisle
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            You have no products yet.
                                        </p>
                                        <Button className="rounded-3xl px-8 py-4">
                                            Add your first product
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                            {currentTab === "settings" && (
                                <motion.div
                                    key="settings"
                                    className="h-full flex-1 flex flex-col items-center justify-center gap-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.3 }}>
                                    <div className="w-full max-w-md bg-background rounded-3xl p-8 shadow flex flex-col gap-6">
                                        <h2 className="text-2xl font-bold mb-2">
                                            Settings
                                        </h2>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">
                                                Email Notifications
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-primary"
                                                defaultChecked
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">
                                                Theme
                                            </span>
                                            <select className="border rounded-md px-3 py-2 bg-muted-foreground/10">
                                                <option value="system">
                                                    System
                                                </option>
                                                <option value="light">
                                                    Light
                                                </option>
                                                <option value="dark">
                                                    Dark
                                                </option>
                                            </select>
                                        </div>
                                        <Button className="rounded-3xl mt-4">
                                            Save Settings
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
            </main>
        </>
    );
}
