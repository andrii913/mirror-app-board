import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

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
      
      <div className="space-y-8">
        {/* Main table */}
        <Table>
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead>Total Members</TableHead>
              <TableHead>Gaps Identified</TableHead>
              <TableHead>Closure Rate %</TableHead>
              <TableHead>M&adj%</TableHead>
              <TableHead>Prime %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-t border-border">
                <TableCell className="font-medium">{row.totalMembers}</TableCell>
                <TableCell className="font-normal">{row.gapsIdentified}</TableCell>
                <TableCell className="font-normal">{row.closureRate}</TableCell>
                <TableCell>{row.percentage}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Performance metrics table */}
        <Table>
          <colgroup>
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead>Health Age %</TableHead>
              <TableHead>HIA</TableHead>
              <TableHead>Referrals</TableHead>
              <TableHead>Comp %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {performanceData.map((row, index) => (
              <TableRow key={index} className="border-t border-border">
                <TableCell>{row.metric1}</TableCell>
                <TableCell>{row.metric2}</TableCell>
                <TableCell>{row.metric3}</TableCell>
                <TableCell>{row.metric4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Bottom metrics table */}
        <Table>
          <colgroup className="bg-muted/30">
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <TableHeader>
            <TableRow>
              <TableHead>(MR) c%</TableHead>
              <TableHead>CAP</TableHead>
              <TableHead>RFR%</TableHead>
              <TableHead>Comp %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bottomData.map((row, index) => (
              <TableRow key={index} className="border-t border-border">
                <TableCell>{row.metric1}</TableCell>
                <TableCell>{row.metric2}</TableCell>
                <TableCell>{row.metric3}</TableCell>
                <TableCell>{row.metric4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};