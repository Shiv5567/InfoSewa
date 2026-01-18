
import React, { useState, useEffect } from 'react';
import Home from './pages/Home.tsx';
import NoticeDetail from './pages/NoticeDetail.tsx';
import { MOCK_POSTS, SITE_NAME } from './constants.tsx';
import { Post } from './types.ts';

// Extend window for Netlify Identity
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

const App: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const post = MOCK_POSTS.find(p => p.slug === hash);
      if (post) {
        setCurrentPost(post);
        window.scrollTo(0, 0);
      } else {
        setCurrentPost(null);
      }
      setIsMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (slug: string) => {
    window.location.hash = `/${slug}`;
  };

  const goHome = () => {
    window.location.hash = '/';
  };

  const openAdmin = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open();
    } else {
      window.location.href = '/admin/';
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none">
        <header className={`mx-auto transition-all duration-500 pointer-events-auto ${scrolled ? 'max-w-5xl mt-4 px-4' : 'max-w-full mt-0 px-0'}`}>
          <div className={`flex items-center justify-between transition-all duration-500 overflow-hidden ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-3xl h-16 px-6 border border-white/50' : 'bg-transparent h-20 px-8 sm:px-12'}`}>
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={goHome}
            >
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black shadow-lg shadow-brand-500/20 group-hover:rotate-12 transition-all">
                IS
              </div>
              <span className={`font-black text-xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                {SITE_NAME}
              </span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-1">
              {['Home', 'Notices', 'Exams', 'Results'].map((item) => (
                <button 
                  key={item}
                  onClick={item === 'Home' ? goHome : undefined}
                  className={`px-4 py-2 font-bold text-sm rounded-xl transition-all ${scrolled ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50' : 'text-slate-600 md:text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={openAdmin}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${scrolled ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/20 hover:bg-brand-700' : 'bg-white text-slate-900 shadow-xl hover:bg-slate-50'}`}
              >
                Admin Panel
              </button>
              <button 
                className={`lg:hidden p-2 rounded-xl ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-900 md:text-white hover:bg-white/10'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-950/40 backdrop-blur-md lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col gap-6">
              {['Home', 'Government Notices', 'Exam Results', 'Career Articles'].map(item => (
                <button key={item} className="text-left font-bold text-lg text-slate-900 border-b border-slate-50 pb-2">{item}</button>
              ))}
              <button onClick={openAdmin} className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold mt-4 shadow-xl shadow-brand-500/20">Admin Login</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow pt-0">
        {currentPost ? (
          <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
            <NoticeDetail post={currentPost} onBack={goHome} />
          </div>
        ) : (
          <Home onNavigate={navigateTo} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">IS</div>
                <span className="text-2xl font-black text-white tracking-tighter">{SITE_NAME}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                Nepal's premier digital gateway for students and aspirants. Reliable, verified, and timely.
              </p>
              <div className="flex gap-4">
                {['fb', 'tw', 'in', 'yt'].map(s => (
                  <div key={s} className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all cursor-pointer group">
                    <span className="text-xs font-black uppercase tracking-widest">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={goHome} className="hover:text-brand-400 transition-colors">Information Home</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Notice Archive</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Exam Results</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Scholarships</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button className="hover:text-brand-400 transition-colors">About InfosSewa</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Terms of Use</button></li>
                <li><button className="hover:text-brand-400 transition-colors">Contact Support</button></li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-4xl border border-slate-900">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Updates Alert</h4>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 transition-all text-white"
                />
                <button className="bg-white text-slate-950 font-black py-3 rounded-2xl text-sm hover:bg-brand-50 transition shadow-lg">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              &copy; 2024 INFOSSEWA NETWORK &bull; KATHMANDU, NEPAL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
