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
          
          {/* Line chart using CSS - positioned below status bars */}
          <div className="absolute inset-0 -b-4 w-full h-full pointer-events-none">
            {/* Data points positioned at start and end of each status bar, slightly below */}
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '75%', top: '10px' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '55%', top: '42px' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '35%', top: '74px' }} />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-scale-in" style={{ left: '25%', top: '106px' }} />
            
            {/* Line segments connecting the points */}
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '20%', 
                top: '11px', 
                width: '55%', 
                transform: 'rotate(0deg)'
              }}
            />
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '20%', 
                top: '43px', 
                width: '35%', 
                transform: 'rotate(0deg)'
              }}
            />
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '20%', 
                top: '75px', 
                width: '15%', 
                transform: 'rotate(0deg)'
              }}
            />
            <div 
              className="absolute border-t-2 border-red-500 origin-left animate-fade-in"
              style={{ 
                left: '20%', 
                top: '107px', 
                width: '5%', 
                transform: 'rotate(0deg)'
              }}
            />
            
            {/* Connecting vertical lines between rows */}
            <div 
              className="absolute border-l-2 border-red-500 animate-fade-in"
              style={{ 
                left: '75%', 
                top: '11px', 
                height: '32px'
              }}
            />
            <div 
              className="absolute border-l-2 border-red-500 animate-fade-in"
              style={{ 
                left: '55%', 
                top: '43px', 
                height: '32px'
              }}
            />
            <div 
              className="absolute border-l-2 border-red-500 animate-fade-in"
              style={{ 
                left: '35%', 
                top: '75px', 
                height: '32px'
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