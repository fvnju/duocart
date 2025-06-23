import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { useSearchParams, useLocation } from "wouter";

const tabs = [
    {
        key: "profile",
        label: "Profile",
        icon: <i className="fa-regular fa-user mr-2"></i>,
    },
    {
        key: "analytics",
        label: "Analytics",
        icon: <i className="fa-solid fa-chart-mixed mr-2"></i>,
    },
    {
        key: "aisle",
        label: "Your Aisle",
        icon: <i className="fa-solid fa-shop mr-2"></i>,
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
                <section className="min-h-[80vh] flex gap-8">
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="p-4 flex gap-2 items-center bg-muted rounded-4xl">
                            <div className="h-12 bg-foreground aspect-square rounded-full"></div>
                            <div className="text-sm">
                                <h1>User</h1>
                                <h1>user@email.com</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 rounded-4xl p-4 bg-muted h-full">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.key}
                                    variant={
                                        currentTab === tab.key
                                            ? "default"
                                            : "ghost"
                                    }
                                    className="p-8 hover:bg-foreground hover:text-background justify-start w-full rounded-full"
                                    onClick={() => handleTabClick(tab.key)}>
                                    {tab.icon}
                                    {tab.label}
                                </Button>
                            ))}
                            <Button
                                variant="ghost"
                                className="p-8 hover:bg-foreground hover:text-background justify-start w-full rounded-full"
                                onClick={() => setLocation("/")}>
                                <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                                Logout
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-4xl flex-7/12 bg-muted p-6">
                        <div></div>
                    </div>
                </section>
            </main>
        </>
    );
}
