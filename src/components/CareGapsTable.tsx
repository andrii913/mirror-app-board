export const CareGapsTable = () => {
  const tableData = [
    {
      totalMembers: "12,400",
      gapsIdentified: "8,200",
      closureRate: "5,600",
      percentage: "68%"
    },
    {
      totalMembers: "6,800",
      gapsIdentified: "4,300",
      closureRate: "2,700",
      percentage: "63%"
    }
  ];

  const performanceData = [
    { metric1: "68%", metric2: "74%", metric3: "63%", metric4: "41%" },
    { metric1: "78%", metric2: "86%", metric3: "76%", metric4: "55%" },
    { metric1: "65%", metric2: "68%", metric3: "71%", metric4: "71%" },
    { metric1: "58%", metric2: "63%", metric3: "71%", metric4: "62%" }
  ];

  const bottomData = [
    { metric1: "58%", metric2: "63%", metric3: "58%", metric4: "58%" }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Care Gaps Closed</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-dashboard-table-header">
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">Total Members</th>
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">Gaps Identified</th>
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">Closure Rate %</th>
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">M&adj%</th>
              <th className="text-left p-3 text-sm font-medium text-muted-foreground">reime %</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-t border-border">
                <td className="p-3 text-sm font-medium text-foreground">{row.totalMembers}</td>
                <td className="p-3 text-sm text-foreground">{row.gapsIdentified}</td>
                <td className="p-3 text-sm text-foreground">{row.closureRate}</td>
                <td className="p-3 text-sm font-semibold text-foreground">{row.percentage}</td>
                <td className="p-3 text-sm text-foreground"></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Performance metrics table */}
        <div className="mt-8">
          <table className="w-full">
            <tbody>
              {performanceData.map((row, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric1}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric2}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric3}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom metrics */}
        <div className="mt-4">
          <div className="text-sm text-muted-foreground mb-2">
            <span className="inline-block w-20">HealAAgeluJB%</span>
            <span className="inline-block w-20 ml-12">HIA</span>
            <span className="inline-block w-20 ml-12">Heterals</span>
          </div>
          <div className="text-sm text-muted-foreground mb-2">
            <span className="inline-block w-20">(MR) c%</span>
            <span className="inline-block w-20 ml-12">CAP</span>
            <span className="inline-block w-20 ml-12">RFR%</span>
            <span className="inline-block w-20 ml-12">Comp %</span>
          </div>
          <table className="w-full">
            <tbody>
              {bottomData.map((row, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric1}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric2}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric3}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{row.metric4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};