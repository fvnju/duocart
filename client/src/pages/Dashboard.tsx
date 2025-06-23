import Header from "@/components/ui/header";

export default function Dashboard() {
    return (
        <>
            <Header />
            <main className="py-8 px-16 min-h-[90vh] bg-background">
                {/* Dashboard Title */}
                <section className="mb-8">
                    <h1 className="tracking-widest text-2xl font-bold text-primary mb-2">
                        DASHBOARD
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Welcome back! Here's an overview of your store's
                        activity.
                    </p>
                </section>

                {/* Dashboard Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Stats Card */}
                    <div className="bg-foreground rounded-3xl p-6 flex flex-col gap-4 shadow-md">
                        <h2 className="text-lg font-semibold text-background">
                            Sales
                        </h2>
                        <span className="text-3xl font-bold text-background">
                            ₦12,500
                        </span>
                        <span className="text-xs text-background/70">
                            This month
                        </span>
                    </div>
                    <div className="bg-foreground rounded-3xl p-6 flex flex-col gap-4 shadow-md">
                        <h2 className="text-lg font-semibold text-background">
                            Orders
                        </h2>
                        <span className="text-3xl font-bold text-background">
                            34
                        </span>
                        <span className="text-xs text-background/70">
                            Completed
                        </span>
                    </div>
                    <div className="bg-foreground rounded-3xl p-6 flex flex-col gap-4 shadow-md">
                        <h2 className="text-lg font-semibold text-background">
                            Visitors
                        </h2>
                        <span className="text-3xl font-bold text-background">
                            1,200
                        </span>
                        <span className="text-xs text-background/70">
                            This week
                        </span>
                    </div>
                </section>

                {/* Recent Activity & Quick Actions */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Recent Activity */}
                    <div className="bg-foreground rounded-3xl p-6 flex flex-col gap-4 shadow-md min-h-[250px]">
                        <h2 className="text-lg font-semibold text-background mb-2">
                            Recent Activity
                        </h2>
                        <ul className="text-background/90 text-sm flex flex-col gap-2">
                            <li>• Order #1234 placed by John Doe</li>
                            <li>• New product "Holiday Mug" added</li>
                            <li>• Order #1233 shipped</li>
                            <li>• Stock updated for "Christmas Tree pouch"</li>
                        </ul>
                    </div>
                    {/* Quick Actions */}
                    <div className="bg-foreground rounded-3xl p-6 flex flex-col gap-6 shadow-md min-h-[250px]">
                        <h2 className="text-lg font-semibold text-background mb-2">
                            Quick Actions
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-background px-6 py-2 rounded-full font-semibold hover:bg-primary/80 transition">
                                Add Product
                            </button>
                            <button className="bg-primary text-background px-6 py-2 rounded-full font-semibold hover:bg-primary/80 transition">
                                View Orders
                            </button>
                            <button className="bg-primary text-background px-6 py-2 rounded-full font-semibold hover:bg-primary/80 transition">
                                Manage Stock
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
