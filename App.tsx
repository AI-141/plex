import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import StudioBanner from './components/StudioBanner';
import FeatureGrid from './components/FeatureGrid';
import Heroes from './components/Heroes';
import Metrics from './components/Metrics';
import Footer from './components/Footer';
import Company from './components/Company';
import EarlyAccess from './components/EarlyAccess';

function App() {
  const [page, setPage] = useState('product');
  const [activeRole, setActiveRole] = useState('Sales Rep');

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar onNavigate={setPage} currentPage={page} />
      <main>
        {page === 'product' && (
          <>
            <Hero onNavigate={setPage} />
            <ValueProp />
            <HowItWorks />
            <StudioBanner />
            <FeatureGrid />
            <Heroes activeRole={activeRole} onSelectRole={setActiveRole} />
            <Metrics activeRole={activeRole} />
          </>
        )}
        {page === 'company' && <Company />}
        {page === 'early-access' && <EarlyAccess />}
      </main>
      <Footer onNavigate={setPage} showCta={page !== 'early-access'} />
    </div>
  );
}

export default App;