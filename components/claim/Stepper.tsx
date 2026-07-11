interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  "Content Type",
  "Exposure Date",
  "Disclosure",
  "Company",
  "Document Type",
];

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="mb-12">
      {/* Progress bar */}
      <div className="h-1 bg-slate-200 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-teal-600 transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isComplete = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isCurrent
                    ? "bg-teal-600 text-white scale-110"
                    : isComplete
                      ? "bg-teal-100 text-teal-600"
                      : "bg-slate-200 text-slate-600"
                }`}
              >
                {isComplete ? "✓" : stepNumber}
              </div>
              <p
                className={`text-xs font-medium mt-2 text-center transition-colors ${
                  isCurrent || isComplete ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
