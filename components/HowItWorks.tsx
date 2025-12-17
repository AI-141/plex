import React from 'react';
import FeatureSection from './FeatureSection';
import { 
  LiveDemoVisual, 
  TrainPlexVisual, 
  AiPoweredVisual, 
  AnalyticsVisual, 
  ConnectVisual 
} from './Visuals';
import { 
  Video, Mic, Code, 
  Upload, FileType, Repeat, 
  Music, Sparkles, UserCheck, 
  Clock, TrendingUp, Users,
  RefreshCw, Lock, BarChart 
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How Plex AI works</h2>
          <p className="text-lg text-slate-600">Plex AI turns curiosity into qualified pipeline.</p>
        </div>

        <div className="space-y-0"> {/* Feature Blocks */}
          
          <FeatureSection 
            pill="Capture. Add. Done"
            title="Live demo recording & audio capture"
            description="Use our Chrome extension or preferred setup. Record anywhere, capture audio and interactions, and customize every demo to match your product and sales intent."
            points={[
              { icon: Video, text: "Video-based capture" },
              { icon: Mic, text: "Record audio" },
              { icon: Code, text: "HTML-based capture" }
            ]}
            visual={<LiveDemoVisual />}
            align="left"
          />

          <FeatureSection 
            pill="Your Product. Your Content"
            title="Train Plex AI"
            description="Train Plex AI using your product, website links, files, and demo recordings. Bring your demo to life with auto-generated voiceovers that sound natural and human. Just select a tone and language, and AI takes care of the rest."
            points={[
              { icon: Upload, text: "Manual import" },
              { icon: FileType, text: "Multi-file types support" },
              { icon: Repeat, text: "Continuous capture" }
            ]}
            visual={<TrainPlexVisual />}
            align="right"
          />

          <FeatureSection 
            pill="Preview? Feedback"
            title="AI-powered sales demo"
            description="MarginPlex's AI creates your live demo & guide visitors. Plex AI learns how your product works, how you sell it, and what buyers care about. It adapts the experience to each viewer in real time."
            points={[
              { icon: Music, text: "Realistic voice tones (+40 languages)" },
              { icon: Sparkles, text: "Generate fully your demo content" },
              { icon: UserCheck, text: "Context-aware" }
            ]}
            visual={<AiPoweredVisual />}
            align="left"
          />

          <FeatureSection 
            pill="Leads. Conversions"
            title="Identify leads & get AI analytics"
            description="Understand your audience at a deeper level with user data insights. Analyze user interactions, engagement trends, and drop-off points to refine your interactive demos & optimize conversions. Keep track of user sessions as they happen."
            points={[
              { icon: Clock, text: "Engagement tracking" },
              { icon: TrendingUp, text: "Performance metrics" },
              { icon: Users, text: "User behavior insights" }
            ]}
            visual={<AnalyticsVisual />}
            align="right"
          />

           <FeatureSection 
            pill="Capture. Add. Done"
            title="Connect your CRM, Analytics stack"
            description="Push lead data and engagement signals from your demos directly into your CRM. Track how users engage with your demos across every step and integrate seamlessly with analytics tools like Segment, Mixpanel, Amplitude, and Google Analytics for deeper insights."
            points={[
              { icon: RefreshCw, text: "Auto-sync CRM" },
              { icon: Lock, text: "Unlock product & growth insights" },
              { icon: BarChart, text: "Measure conversion impact" }
            ]}
            visual={<ConnectVisual />}
            align="left"
          />

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;