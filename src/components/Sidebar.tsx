import { Checkbox } from "@/components/ui/checkbox";

export const Sidebar = () => {
  return (
    <div className="bg-dashboard-sidebar border-r border-border p-6 space-y-8">
      {/* Conditions */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">CONDITION</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="diabetes" defaultChecked className="border-primary data-[state=checked]:bg-primary" />
            <label htmlFor="diabetes" className="text-sm font-medium text-foreground">
              Diabetes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ckd" className="border-muted-foreground" />
            <label htmlFor="ckd" className="text-sm text-muted-foreground">
              CKD
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="heart-failure" className="border-muted-foreground" />
            <label htmlFor="heart-failure" className="text-sm text-muted-foreground">
              Heart Failure
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ccpd" className="border-muted-foreground" />
            <label htmlFor="ccpd" className="text-sm text-muted-foreground">
              CCPD
            </label>
          </div>
        </div>
      </div>

      {/* Risk Stratification */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">RISK STRATIFICATION</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="medication" defaultChecked className="border-primary data-[state=checked]:bg-primary" />
            <label htmlFor="medication" className="text-sm font-medium text-foreground">
              Medication
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="adherence" defaultChecked className="border-primary data-[state=checked]:bg-primary" />
            <label htmlFor="adherence" className="text-sm font-medium text-foreground">
              Adherence %
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="lab-test" defaultChecked className="border-primary data-[state=checked]:bg-primary" />
            <label htmlFor="lab-test" className="text-sm font-medium text-foreground">
              Lab/Test Completion
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="preventive" defaultChecked className="border-primary data-[state=checked]:bg-primary" />
            <label htmlFor="preventive" className="text-sm font-medium text-foreground">
              Preventive Screening
            </label>
          </div>
        </div>
      </div>

      {/* Risk Stratification Types */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">RISK STRATIFICATION</h3>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Low-risk   High-risk</div>
        </div>
      </div>
    </div>
  );
};