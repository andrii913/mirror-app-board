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
        
        <div className="space-y-3 relative">
          {gapTypeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-sm font-medium text-foreground w-20 text-left">{item.name}</span>
              <div className="flex-1 bg-gray-100 rounded h-8 relative overflow-hidden">
                <div 
                  className="bg-blue-500 h-8 rounded transition-all duration-1000 ease-out animate-fade-in"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
          
          {/* Curved line chart overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ left: 'calc(5rem + 1rem)', right: '0' }}>
            <svg 
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Smooth curved line */}
              <path
                d="M 10 85 Q 30 75, 50 55 Q 70 35, 90 15"
                stroke="#0ea5e9"
                strokeWidth="3"
                fill="none"
                className="transition-all duration-1000 ease-out animate-fade-in"
              />
              {/* Data point circles */}
              <circle cx="10" cy="85" r="2.5" fill="#0ea5e9" className="animate-scale-in" />
              <circle cx="30" cy="70" r="2.5" fill="#0ea5e9" className="animate-scale-in" />
              <circle cx="60" cy="45" r="2.5" fill="#0ea5e9" className="animate-scale-in" />
              <circle cx="90" cy="15" r="2.5" fill="#0ea5e9" className="animate-scale-in" />
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