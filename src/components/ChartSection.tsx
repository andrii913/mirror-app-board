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
        
        <div className="flex items-center gap-8">
          {/* Left side - Horizontal bars */}
          <div className="flex-1 space-y-4">
            {gapTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-sm font-medium text-foreground w-20 text-left">{item.name}</span>
                <div className="w-32 bg-blue-200 rounded-sm h-6 relative overflow-hidden">
                  <div 
                    className="bg-blue-500 h-6 rounded-sm transition-all duration-1000 ease-out animate-fade-in"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Curved line chart */}
          <div className="relative w-32 h-32 bg-blue-50 rounded-lg">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 120 120"
              fill="none"
            >
              {/* Curved trending line */}
              <path
                d="M15 90 Q30 85 45 70 Q60 55 75 45 Q90 35 105 25"
                stroke="#0ea5e9"
                strokeWidth="3"
                fill="none"
                className="transition-all duration-1000 ease-out animate-fade-in"
              />
              {/* End point circle */}
              <circle cx="105" cy="25" r="3" fill="#0ea5e9" className="animate-scale-in" />
            </svg>
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