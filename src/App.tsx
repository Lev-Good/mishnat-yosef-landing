/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { FeaturesBento } from './components/FeaturesBento';
import { SavingsCalculator } from './components/SavingsCalculator';
import { InstallationSteps } from './components/InstallationSteps';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white" dir="rtl">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InteractiveSimulator />
        <FeaturesBento />
        <SavingsCalculator />
        <InstallationSteps />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
