export const ChartSection = () => {
  const diseaseData = [
    { name: "Diabetes", value: 85, color: "bg-primary" },
    { name: "CKD", value: 60, color: "bg-primary-light" },
    { name: "CKD", value: 35, color: "bg-primary-lighter" }
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
        
        <div className="space-y-4">
          {diseaseData.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-sm font-medium text-foreground w-16">{item.name}</span>
              <div className="flex-1 bg-muted rounded-full h-6 relative">
                <div 
                  className={`${item.color} h-6 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gap Gaps Closed by Gap Type */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Gap Gaps Closed<br />by Gap Type
        </h3>
        
        <div className="space-y-4">
          {gapTypeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-sm font-medium text-foreground w-20">{item.name}</span>
              <div className="flex-1 bg-muted rounded-full h-4 relative">
                <div 
                  className={`${item.color} h-4 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trending line chart placeholder */}
        <div className="mt-8 relative h-20 bg-accent/20 rounded-lg p-4">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 300 60"
            fill="none"
          >
            <path
              d="M20 40 L80 35 L140 25 L200 20 L260 15"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              className="transition-all duration-1000 ease-out"
            />
            <circle cx="260" cy="15" r="3" fill="hsl(var(--primary))" />
          </svg>
          <div className="absolute bottom-2 right-4 text-xs text-muted-foreground">
            Gap Closure rate
          </div>
        </div>
      </div>
    </div>
  );
};