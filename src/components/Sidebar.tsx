import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Sidebar = () => {
  const { toast } = useToast();
  
  const [conditions, setConditions] = useState({
    diabetes: true,
    ckd: false,
    heartFailure: false,
    ccpd: false
  });

  const [riskFactors, setRiskFactors] = useState({
    medication: true,
    adherence: true,
    labTest: true,
    preventive: true
  });

  const handleConditionChange = (condition: keyof typeof conditions) => {
    setConditions(prev => ({
      ...prev,
      [condition]: !prev[condition]
    }));
    toast({
      title: "Filter Updated",
      description: `${condition} filter ${conditions[condition] ? 'removed' : 'applied'}`
    });
  };

  const handleRiskFactorChange = (factor: keyof typeof riskFactors) => {
    setRiskFactors(prev => ({
      ...prev,
      [factor]: !prev[factor]
    }));
    toast({
      title: "Risk Filter Updated", 
      description: `${factor} filter ${riskFactors[factor] ? 'removed' : 'applied'}`
    });
  };

  const applyFilters = () => {
    const selectedConditions = Object.entries(conditions)
      .filter(([_, selected]) => selected)
      .map(([condition, _]) => condition);
    
    const selectedRiskFactors = Object.entries(riskFactors)
      .filter(([_, selected]) => selected)
      .map(([factor, _]) => factor);

    toast({
      title: "Filters Applied",
      description: `Applied ${selectedConditions.length} condition(s) and ${selectedRiskFactors.length} risk factor(s)`
    });
  };

  const resetFilters = () => {
    setConditions({
      diabetes: false,
      ckd: false,
      heartFailure: false,
      ccpd: false
    });
    setRiskFactors({
      medication: false,
      adherence: false,
      labTest: false,
      preventive: false
    });
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared"
    });
  };

  return (
    <div className="bg-dashboard-sidebar border-r border-border p-6 space-y-8">
      {/* Conditions */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">CONDITION</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="diabetes" 
              checked={conditions.diabetes}
              onCheckedChange={() => handleConditionChange('diabetes')}
              className="border-primary data-[state=checked]:bg-primary" 
            />
            <label htmlFor="diabetes" className="text-sm font-medium text-foreground">
              Diabetes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="ckd" 
              checked={conditions.ckd}
              onCheckedChange={() => handleConditionChange('ckd')}
              className="border-muted-foreground" 
            />
            <label htmlFor="ckd" className="text-sm text-muted-foreground">
              CKD
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="heart-failure" 
              checked={conditions.heartFailure}
              onCheckedChange={() => handleConditionChange('heartFailure')}
              className="border-muted-foreground" 
            />
            <label htmlFor="heart-failure" className="text-sm text-muted-foreground">
              Heart Failure
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="ccpd" 
              checked={conditions.ccpd}
              onCheckedChange={() => handleConditionChange('ccpd')}
              className="border-muted-foreground" 
            />
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
            <Checkbox 
              id="medication" 
              checked={riskFactors.medication}
              onCheckedChange={() => handleRiskFactorChange('medication')}
              className="border-primary data-[state=checked]:bg-primary" 
            />
            <label htmlFor="medication" className="text-sm font-medium text-foreground">
              Medication
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="adherence" 
              checked={riskFactors.adherence}
              onCheckedChange={() => handleRiskFactorChange('adherence')}
              className="border-primary data-[state=checked]:bg-primary" 
            />
            <label htmlFor="adherence" className="text-sm font-medium text-foreground">
              Adherence %
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="lab-test" 
              checked={riskFactors.labTest}
              onCheckedChange={() => handleRiskFactorChange('labTest')}
              className="border-primary data-[state=checked]:bg-primary" 
            />
            <label htmlFor="lab-test" className="text-sm font-medium text-foreground">
              Lab/Test Completion
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="preventive" 
              checked={riskFactors.preventive}
              onCheckedChange={() => handleRiskFactorChange('preventive')}
              className="border-primary data-[state=checked]:bg-primary" 
            />
            <label htmlFor="preventive" className="text-sm font-medium text-foreground">
              Preventive Screening
            </label>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={applyFilters} 
          className="w-full bg-primary hover:bg-primary/90"
        >
          Apply Filters
        </Button>
        <Button 
          onClick={resetFilters} 
          variant="outline" 
          className="w-full"
        >
          Reset All
        </Button>
      </div>

      {/* Risk Stratification Types */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">RISK LEVELS</h3>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Low-risk   High-risk</div>
        </div>
      </div>
    </div>
  );
};