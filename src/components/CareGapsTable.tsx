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
    <div className="bg-card rounded-lg border border-border p-6 w-full">
      <h3 className="text-lg font-semibold text-foreground mb-6">Care Gaps Closed</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr className="bg-muted/30">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground border-r border-border">Total Members</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground border-r border-border">Gaps Identified</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground border-r border-border">Closure Rate %</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground border-r border-border">M&adj%</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">reime %</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-t border-border h-12">
                <td className="p-4 text-sm font-medium text-foreground border-r border-border">{row.totalMembers}</td>
                <td className="p-4 text-sm text-foreground border-r border-border">{row.gapsIdentified}</td>
                <td className="p-4 text-sm text-foreground border-r border-border">{row.closureRate}</td>
                <td className="p-4 text-sm font-semibold text-foreground border-r border-border">{row.percentage}</td>
                <td className="p-4 text-sm text-foreground"></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Performance metrics table */}
        <div className="mt-8">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">HealAAgeluJB%</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">HIA</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Heterals</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Comp %</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row, index) => (
                <tr key={index} className="h-12">
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric1}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric2}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric3}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom metrics */}
        <div className="mt-4">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">(MR) c%</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">CAP</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">RFR%</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Comp %</th>
              </tr>
            </thead>
            <tbody>
              {bottomData.map((row, index) => (
                <tr key={index} className="h-12">
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric1}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric2}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric3}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{row.metric4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};