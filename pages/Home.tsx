
import React from 'react';
import { MOCK_POSTS } from '../constants.tsx';
import SEO from '../components/SEO.tsx';
import { Category } from '../types.ts';

interface HomeProps {
  onNavigate: (slug: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const latestNotices = MOCK_POSTS.slice(0, 6);

  return (
    <div className="space-y-12">
      <SEO 
        title="Nepal's Information Portal" 
        description="Access official government notices, university exam results, and career guidance in Nepal with InfosSewa." 
      />

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
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
        <section className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-brand-600 rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">Priority Updates</h2>
            </div>
          </div>

          <div className="space-y-6">
            {latestNotices.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-brand-100/10 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate(post.slug)}
              >
                <div className="w-full sm:w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src={`https://picsum.photos/seed/${post.id}/300/300`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <p className="text-slate-500 line-clamp-1 text-xs font-medium">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="lg:col-span-4">
          <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 sticky top-24">
            <h3 className="text-lg font-black text-slate-950 mb-6">Main Hubs</h3>
            <div className="flex flex-col gap-3">
              {Object.entries(Category).map(([key, cat], idx) => (
                <div key={key} className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-transparent hover:border-brand-100 hover:shadow-lg transition-all cursor-pointer">
                  <span className="text-sm font-black text-slate-900 group-hover:text-brand-600">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
