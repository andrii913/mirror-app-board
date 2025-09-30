import { useState } from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Download, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CareGapsTable = () => {
  const { toast } = useToast();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedPerformanceRows, setSelectedPerformanceRows] = useState<number[]>([]);
  const [selectedBottomRows, setSelectedBottomRows] = useState<number[]>([]);

  const tableData = [
    {
      id: 1,
      totalMembers: "12,400",
      gapsIdentified: "8,200",
      closureRate: "5,600",
      percentage: "68%"
    },
    {
      id: 2,
      totalMembers: "6,800",
      gapsIdentified: "4,300",
      closureRate: "2,700",
      percentage: "63%"
    }
  ];

  const performanceData = [
    { id: 1, metric1: "68%", metric2: "74%", metric3: "63%", metric4: "41%" },
    { id: 2, metric1: "78%", metric2: "86%", metric3: "76%", metric4: "55%" },
    { id: 3, metric1: "65%", metric2: "68%", metric3: "71%", metric4: "71%" },
    { id: 4, metric1: "58%", metric2: "63%", metric3: "71%", metric4: "62%" }
  ];

  const bottomData = [
    { id: 1, metric1: "58%", metric2: "63%", metric3: "58%", metric4: "58%" }
  ];

  const handleRowSelect = (rowId: number, tableType: 'main' | 'performance' | 'bottom') => {
    if (tableType === 'main') {
      setSelectedRows(prev => 
        prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
      );
    } else if (tableType === 'performance') {
      setSelectedPerformanceRows(prev => 
        prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
      );
    } else {
      setSelectedBottomRows(prev => 
        prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
      );
    }
  };

  const handleSelectAll = (tableType: 'main' | 'performance' | 'bottom') => {
    if (tableType === 'main') {
      const allSelected = selectedRows.length === tableData.length;
      setSelectedRows(allSelected ? [] : tableData.map(row => row.id));
    } else if (tableType === 'performance') {
      const allSelected = selectedPerformanceRows.length === performanceData.length;
      setSelectedPerformanceRows(allSelected ? [] : performanceData.map(row => row.id));
    } else {
      const allSelected = selectedBottomRows.length === bottomData.length;
      setSelectedBottomRows(allSelected ? [] : bottomData.map(row => row.id));
    }
  };

  const handleBulkAction = (action: 'delete' | 'export' | 'email', tableType: 'main' | 'performance' | 'bottom') => {
    let selectedCount = 0;
    if (tableType === 'main') selectedCount = selectedRows.length;
    else if (tableType === 'performance') selectedCount = selectedPerformanceRows.length;
    else selectedCount = selectedBottomRows.length;

    if (selectedCount === 0) {
      toast({
        title: "No rows selected",
        description: "Please select at least one row to perform this action.",
        variant: "destructive"
      });
      return;
    }

    let actionMessage = "";
    switch (action) {
      case 'delete':
        actionMessage = `Deleted ${selectedCount} row(s)`;
        break;
      case 'export':
        actionMessage = `Exported ${selectedCount} row(s) to CSV`;
        break;
      case 'email':
        actionMessage = `Sent ${selectedCount} row(s) via email`;
        break;
    }

    toast({
      title: "Action completed",
      description: actionMessage,
    });

    // Clear selections after action
    if (tableType === 'main') setSelectedRows([]);
    else if (tableType === 'performance') setSelectedPerformanceRows([]);
    else setSelectedBottomRows([]);
  };

  const ActionButtons = ({ tableType }: { tableType: 'main' | 'performance' | 'bottom' }) => {
    let hasSelected = false;
    if (tableType === 'main') hasSelected = selectedRows.length > 0;
    else if (tableType === 'performance') hasSelected = selectedPerformanceRows.length > 0;
    else hasSelected = selectedBottomRows.length > 0;

    if (!hasSelected) return null;

    return (
      <div className="flex gap-2 mb-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleBulkAction('delete', tableType)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleBulkAction('export', tableType)}
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleBulkAction('email', tableType)}
        >
          <Mail className="h-4 w-4 mr-2" />
          Email
        </Button>
      </div>
    );
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 w-full">
      <h3 className="text-lg font-semibold text-foreground mb-6">Care Gaps Closed</h3>
      
      <div className="space-y-8">
        {/* Main table */}
        <div>
          <ActionButtons tableType="main" />
          <Table>
            <colgroup>
              <col className="w-12" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>
                  <Checkbox
                    checked={selectedRows.length === tableData.length && tableData.length > 0}
                    onCheckedChange={() => handleSelectAll('main')}
                  />
                </TableHead>
                <TableHead>Total Members</TableHead>
                <TableHead>Gaps Identified</TableHead>
                <TableHead>Closure Rate %</TableHead>
                <TableHead>M&Adj%</TableHead>
                <TableHead>Prime %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id} className="border-t border-border">
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onCheckedChange={() => handleRowSelect(row.id, 'main')}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{row.totalMembers}</TableCell>
                  <TableCell className="font-normal">{row.gapsIdentified}</TableCell>
                  <TableCell className="font-normal">{row.closureRate}</TableCell>
                  <TableCell>{row.percentage}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Performance metrics table */}
        <div>
          <ActionButtons tableType="performance" />
          <Table>
            <colgroup>
              <col className="w-12" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>
                  <Checkbox
                    checked={selectedPerformanceRows.length === performanceData.length && performanceData.length > 0}
                    onCheckedChange={() => handleSelectAll('performance')}
                  />
                </TableHead>
                <TableHead>Health Age %</TableHead>
                <TableHead>HIA</TableHead>
                <TableHead>Referrals</TableHead>
                <TableHead>Comp %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceData.map((row) => (
                <TableRow key={row.id} className="border-t border-border">
                  <TableCell>
                    <Checkbox
                      checked={selectedPerformanceRows.includes(row.id)}
                      onCheckedChange={() => handleRowSelect(row.id, 'performance')}
                    />
                  </TableCell>
                  <TableCell>{row.metric1}</TableCell>
                  <TableCell>{row.metric2}</TableCell>
                  <TableCell>{row.metric3}</TableCell>
                  <TableCell>{row.metric4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Bottom metrics table */}
        <div>
          <ActionButtons tableType="bottom" />
          <Table>
            <colgroup className="bg-muted/30">
              <col className="w-12" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    checked={selectedBottomRows.length === bottomData.length && bottomData.length > 0}
                    onCheckedChange={() => handleSelectAll('bottom')}
                  />
                </TableHead>
                <TableHead>(MR) C%</TableHead>
                <TableHead>CAP</TableHead>
                <TableHead>RFR%</TableHead>
                <TableHead>Comp %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bottomData.map((row) => (
                <TableRow key={row.id} className="border-t border-border">
                  <TableCell>
                    <Checkbox
                      checked={selectedBottomRows.includes(row.id)}
                      onCheckedChange={() => handleRowSelect(row.id, 'bottom')}
                    />
                  </TableCell>
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
    </div>
  );
};