import React from 'react';

interface MetricsProps {
  activeRole: string;
}

const contentMap: Record<string, { heading: string; items: { title: string; desc: string }[] }> = {
  "Sales Rep": {
    heading: "Upgrade your reps with AI",
    items: [
      {
        title: "Boost client meetings booked by 60%",
        desc: "Use AI-driven signals to bring greater precision to your prospecting and drive higher conversion rates."
      },
      {
        title: "Shorten sales cycles by 30%",
        desc: "Walk into every conversation with full buyer context, intent, and objections—no discovery call needed."
      }
    ]
  },
  "Customer Success": {
    heading: "Adoption & Value Realization",
    items: [
      {
        title: "Accelerate time-to-value for every customer",
        desc: "Guide users through tailored, interactive product experiences so they see value faster and adopt more deeply."
      },
      {
        title: "Turn product usage into expansion opportunities",
        desc: "Identify upsell and cross-sell signals from real product interactions and arm CS with context before outreach."
      }
    ]
  },
  "Founder": {
    heading: "Sell with confidence from day one",
    items: [
      {
        title: "Your personal sales partner",
        desc: "Start selling like a pro from day one. Build more pipeline using guided workflows, best practices, and tailored strategies."
      },
      {
        title: "Scale sales before you scale the team",
        desc: "Turn founder knowledge into AI-powered demos that generate qualified pipeline without added headcount."
      }
    ]
  },
  "Revops": {
    heading: "Reduce funnel leakage",
    items: [
      {
        title: "Improve forecast reliability",
        desc: "Use real buyer intent and engagement signals from demos to reduce guesswork and improve pipeline predictability."
      },
      {
        title: "Unify data across the revenue stack",
        desc: "Connect demo engagement, buyer intent, and pipeline data to create a single source of truth for RevOps."
      }
    ]
  },
  "Marketer": {
    heading: "Market what actually converts",
    items: [
      {
        title: "Turn engagement into qualified demand",
        desc: "Capture buyer signals from interactive demos and turn marketing engagement into sales-ready pipeline."
      },
      {
        title: "Power smarter campaigns",
        desc: "Activate real demo-level intent data to refine targeting, improve attribution, and increase campaign ROI."
      }
    ]
  }
};

const Metrics: React.FC<MetricsProps> = ({ activeRole }) => {
  const content = contentMap[activeRole] || contentMap["Sales Rep"];

  return (
    <section className="pb-24 pt-12 bg-white min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Divider Line */}
        <div className="w-full h-px bg-slate-100 mb-12"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 animate-in fade-in duration-500 key={activeRole}">
          
          {/* Left Column: Heading */}
          <div className="flex-1 lg:max-w-md">
            <h2 className="text-3xl md:text-[2.5rem] font-medium text-slate-900 leading-tight tracking-tight">
              {content.heading}
            </h2>
          </div>

          {/* Right Column: Metrics List */}
          <div className="flex-1 space-y-12">
            
            {content.items.map((item, idx) => (
              <div key={idx} className={idx !== content.items.length - 1 ? "pb-12 border-b border-slate-100" : ""}>
                 <h3 className="text-xl md:text-2xl font-normal text-slate-900 mb-4">
                   {item.title}
                 </h3>
                 <p className="text-slate-600 text-lg leading-relaxed">
                   {item.desc}
                 </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;