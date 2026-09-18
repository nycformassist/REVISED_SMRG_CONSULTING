import React from 'react';
import { Shield, Sparkles, Building2, User, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <header className="text-center space-y-4 border-b border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4" /> New York-Origin Operational Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Built on the Operational Front Lines of NYC
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-width-3xl mx-auto max-w-3xl leading-relaxed">
            From navigating New York’s shelter system to 20 years optimizing operations for shrewd business leaders across Manhattan and the Bronx—how SMRG turned real-world friction into decision-ready intelligence.
          </p>
        </header>

        {/* ACT I: THE FRONT LINES */}
        <section className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm">
              01
            </span>
            <h2 className="text-2xl font-bold text-white">The Lived Reality & Operational Experience</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            SMRG’s technology didn't begin in a Silicon Valley incubator or behind a desk in a tech lab. It was forged on the operational front lines of New York City across healthcare administration, insurance, medical facilities, and legal environments.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As a lifelong New Yorker who navigated the city’s shelter system firsthand and spent over two decades optimizing operations and plugging profit leaks for shrewd Manhattan and Bronx business owners, one undeniable reality became clear: <strong className="text-white">New Yorkers don’t experience systems as software. They experience them as people trying to get somewhere.</strong>
          </p>
        </section>

        {/* ACT II: THE CORE INSIGHT */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm">
                02
              </span>
              <h2 className="text-2xl font-bold text-white">The Bottleneck Insight</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Across every industry—healthcare, legal, housing, or real estate—the recurring breakdown is always identical:
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/40 text-blue-200 font-medium italic">
              "The person has information. The professional needs structured intelligence. The bottleneck is getting from one to the other."
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              When an inquiry arrives via phone, email, or unformatted web forms, front-desk staff waste hours deciphering unorganized details, prospects get frustrated by phone tag, and valuable opportunities disappear after 5:00 PM.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">The SMRG Process Model</h3>
            <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                <span>1. INBOUND PROSPECT</span>
                <span className="text-slate-500">Raw Inquiry</span>
              </div>
              <div className="text-center text-blue-500 font-bold">↓</div>
              <div className="p-3 bg-blue-950/60 rounded-lg border border-blue-800/50 flex items-center justify-between text-blue-300">
                <span>2. INTELLIGENT CAPTURE</span>
                <span className="text-blue-400">Multilingual Intake</span>
              </div>
              <div className="text-center text-blue-500 font-bold">↓</div>
              <div className="p-3 bg-emerald-950/60 rounded-lg border border-emerald-800/50 flex items-center justify-between text-emerald-300">
                <span>3. DECISION BRIEF</span>
                <span className="text-emerald-400">Structured Readiness</span>
              </div>
              <div className="text-center text-emerald-500 font-bold">↓</div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                <span>4. HUMAN ACTION</span>
                <span className="text-slate-400">Informed Follow-Up</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACT III: PRODUCT LINEAGE */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold text-sm">
                03
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Evolutionary Lineage</h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              One underlying intelligence methodology adapted across adjacent, high-friction professional workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 space-y-3">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">Origin Point</div>
              <h3 className="text-xl font-bold text-white">IRU™</h3>
              <div className="text-xs font-semibold text-slate-400">Immigration Readiness Utility</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Created first to help individuals communicate complex immigration details without getting lost in legal jargon, producing structured briefs for legal aid and missions.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 space-y-3">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Legal Expansion</div>
              <h3 className="text-xl font-bold text-white">LIRU™</h3>
              <div className="text-xs font-semibold text-slate-400">Legal Intake Readiness Utility</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Adapted to legal practice to structure client intake, assess case-readiness, and cross-check documentation before reaching an attorney’s desk.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 space-y-3">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Real Estate & Housing</div>
              <h3 className="text-xl font-bold text-white">RRU™ & RRU Rental</h3>
              <div className="text-xs font-semibold text-slate-400">Real Estate Readiness Utility</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Expanded into residential real estate—delivering 24/7 bilingual capture, voucher-mindful scoring, and decision-ready briefs for buyers, sellers, and renters.
              </p>
            </div>
          </div>
        </section>

        {/* ACT IV: THE PHILOSOPHY & PILLARS */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 space-y-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm">
              04
            </span>
            <h2 className="text-2xl font-bold text-white">Our Core Operating Philosophy</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-5 h-5" /> Localized Operational Grit
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                High-end digital precision rooted in direct exposure to New York’s real-world administrative bottlenecks across healthcare, legal, and housing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-5 h-5" /> Human-Centered & Compliant
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Technology structures and scores information. Authorized human professionals make the final business and compliance decisions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-5 h-5" /> Inclusive Architecture
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Native English and Spanish processing with explicit voucher verification mechanics built into housing workflows so foundation-level New Yorkers are never excluded.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-5 h-5" /> Process Over Technology
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't sell AI for its own sake. We build operational systems that happen to utilize AI to plug revenue leaks and save time.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Plug Your Operational Gaps?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Let's identify where information is getting lost in your current workflow and determine whether an SMRG operational intelligence utility can solve it.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-lg shadow-emerald-950"
            >
              Book an Operational Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}