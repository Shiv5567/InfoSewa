
import React from 'react';
import { MOCK_POSTS } from '../constants';
import SEO from '../components/SEO';
import { Category } from '../types';

interface HomeProps {
  onNavigate: (slug: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const latestNotices = MOCK_POSTS.slice(0, 6); // Show more on top

  return (
    <div className="space-y-12">
      <SEO 
        title="Nepal's Information Portal" 
        description="Access official government notices, university exam results, and career guidance in Nepal with InfosSewa." 
      />

      {/* Compact Hero Section */}
      <section className="hero-gradient relative pt-24 pb-16 px-6 sm:px-12 md:rounded-b-[4rem] overflow-hidden -mx-6 md:-mx-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4">
              Infos<span className="text-brand-400">Sewa</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium max-w-md">
              The smartest way to track government notices and results in Nepal.
            </p>
          </div>

          {/* Reduced Search Bar into Small Icon/Input */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl group focus-within:ring-2 focus-within:ring-brand-500 transition-all">
            <div className="pl-3 text-slate-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-white text-sm font-semibold focus:outline-none w-32 md:w-48 placeholder:text-slate-600 transition-all"
            />
            <button className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Main Content Layout: Priority Updates + Sidebar Categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
        
        {/* Left Side: Priority Latest Updates (Main Feed) */}
        <section className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-brand-600 rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">Priority Updates</h2>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">
              Live Feed
            </span>
          </div>

          <div className="space-y-6">
            {latestNotices.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-brand-100/10 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate(post.slug)}
              >
                <div className="w-full sm:w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/300/300`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-black text-brand-600 uppercase tracking-widest bg-brand-50 px-2 py-0.5 rounded">
                      {post.category.split(' ')[0]}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 line-clamp-1 text-xs font-medium">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-brand-600 text-[10px] font-black uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 font-bold text-sm hover:border-brand-200 hover:text-brand-600 transition-all">
            Load More Updates
          </button>
        </section>

        {/* Right Side: Vertical Main Hubs Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 sticky top-24">
            <h3 className="text-lg font-black text-slate-950 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              Main Hubs
            </h3>
            
            <div className="flex flex-col gap-3">
              {Object.entries(Category).map(([key, cat], idx) => (
                <div 
                  key={key} 
                  className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-transparent hover:border-brand-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${idx === 0 ? 'bg-orange-50 text-orange-600' : idx === 1 ? 'bg-brand-50 text-brand-600' : idx === 2 ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-900 leading-none group-hover:text-brand-600 transition-colors">{cat}</span>
                    <span className="text-[10px] font-bold text-slate-400 mt-1">Explore Hub</span>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 ml-auto group-hover:text-brand-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                </div>
              ))}
            </div>

            {/* Newsletter Mini Card */}
            <div className="mt-8 bg-brand-600 rounded-3xl p-5 text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="text-sm font-black mb-2">Notice Alert</h4>
                <p className="text-[10px] font-medium text-brand-100 mb-4 leading-relaxed">
                  Join 50k+ users getting alerts on Telegram.
                </p>
                <button className="w-full bg-white text-brand-600 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                  Join Community
                </button>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl"></div>
            </div>
          </div>
        </aside>
      </div>

      {/* Simplified Preparation Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-12">
        <div className="bg-slate-950 rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-[9px] font-black uppercase tracking-[0.3em] mb-4">
              Prep Portal
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
              Ace Your Next <span className="text-brand-500">Examination.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-brand-600/20 active:scale-95">
                Model Questions
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">
                Subject Notes
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden md:block">
            <div className="w-48 h-48 bg-white/5 rounded-3xl rotate-6 flex items-center justify-center p-2">
              <img src="https://picsum.photos/seed/learn/300/300" className="w-full h-full object-cover rounded-2xl opacity-60" alt="Learn" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
