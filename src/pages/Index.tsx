import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { Sidebar } from "@/components/Sidebar";
import { CareGapsTable } from "@/components/CareGapsTable";
import { ChartSection } from "@/components/ChartSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 min-h-screen">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Index;
