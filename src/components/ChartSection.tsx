export const ChartSection = () => {
  const diseaseData = [
    { name: "Diabetes", value: 85, color: "bg-blue-500" },
    { name: "CKD", value: 60, color: "bg-blue-500" },
    { name: "CKD", value: 35, color: "bg-blue-500" }
  ];

  const gapTypeData = [
    { name: "Adherence", value: 75, color: "bg-primary" },
    { name: "Med Rec", value: 55, color: "bg-primary-light" },
    { name: "Screening", value: 35, color: "bg-primary-lighter" },
    { name: "Labs", value: 25, color: "bg-primary-lighter" }
  ];

  return (
    <div className="space-y-8">
      {/* Care Gaps Closed by Disease Group */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Care Gaps Closed<br />by Disease Group
        </h3>
        
        <div className="space-y-6">
          {diseaseData.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-sm font-medium text-foreground w-20">{item.name}</span>
              <div className="flex-1 bg-blue-200 rounded-sm h-8 relative overflow-hidden">
                <div 
                  className="bg-blue-500 h-8 rounded-sm transition-all duration-1000 ease-out animate-fade-in"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Gaps Closed by Gap Type */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Care Gaps Closed<br />by Gap Type
        </h3>
        
        <div className="space-y-4 relative">
          {gapTypeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-sm font-medium text-foreground w-20 text-left">{item.name}</span>
              <div className="flex-1 bg-blue-200 rounded-sm h-6 relative overflow-hidden">
                <div 
                  className="bg-blue-500 h-6 rounded-sm transition-all duration-1000 ease-out animate-fade-in"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
          
          {/* Line chart using CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Data points positioned to align with bars */}
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '10%', bottom: '15%' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '40%', bottom: '25%' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '60%', bottom: '55%' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '90%', bottom: '85%' }} />
            
            {/* Line segments connecting the points */}
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '10%', 
                bottom: '15%', 
                width: '32%', 
                transform: 'rotate(8deg) translateY(-1px)'
              }}
            />
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '40%', 
                bottom: '25%', 
                width: '25%', 
                transform: 'rotate(35deg) translateY(-1px)'
              }}
            />
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '60%', 
                bottom: '55%', 
                width: '36%', 
                transform: 'rotate(25deg) translateY(-1px)'
              }}
            />
          </div>
        </div>

        {/* Gap Closure rate label */}
        <div className="mt-4 text-center">
          <div className="text-xs text-muted-foreground">Gap Closure rate</div>
        </div>
      </div>
    </div>
  );
};