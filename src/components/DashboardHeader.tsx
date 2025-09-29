import { Menu } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="bg-dashboard-header border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Ledger Dashboard</h1>
        <button className="p-2 hover:bg-accent rounded-md">
          <Menu className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};