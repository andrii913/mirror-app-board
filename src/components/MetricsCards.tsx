export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Gaps Closed Percentage */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="76, 100"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-foreground">76%</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">% GAPS CLOSED</p>
            <p className="text-sm text-muted-foreground">THIS MONTH</p>
          </div>
        </div>
      </div>

      {/* Auditable */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground mb-2">243</div>
          <div className="text-sm text-muted-foreground">
            <div>Auditable</div>
            <div>Quarter</div>
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground mb-2">$189.9M</div>
          <div className="text-sm text-muted-foreground">Revenue</div>
        </div>
      </div>
    </div>
  );
};