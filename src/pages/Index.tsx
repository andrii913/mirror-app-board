import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { Sidebar } from "@/components/Sidebar";
import { CareGapsTable } from "@/components/CareGapsTable";
import { ChartSection } from "@/components/ChartSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Full-width metrics cards */}
      <div className="p-6">
        <MetricsCards />
      </div>
      
      {/* Main content area with sidebar, table, and charts in a row */}
      <div className="flex gap-6 p-6 pt-0">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <Sidebar />
        </div>
        
        {/* Table and Charts */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table Section */}
          <div className="lg:col-span-2">
            <CareGapsTable />
          </div>
          
          {/* Charts Section */}
          <div className="lg:col-span-1">
            <ChartSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
