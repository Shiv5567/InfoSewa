
import React from 'react';
import { Post } from '../types';
import PDFViewer from '../components/PDFViewer';
import SEO from '../components/SEO';

interface NoticeDetailProps {
  post: Post;
  onBack: () => void;
}

const NoticeDetail: React.FC<NoticeDetailProps> = ({ post, onBack }) => {
  return (
    <div className="space-y-12">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        slug={post.slug} 
        type="article" 
      />
      
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-slate-500 hover:text-brand-600 transition-all font-black text-xs uppercase tracking-widest"
        >
          <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          Go Back
        </button>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-50 hover:text-brand-600 transition-all">Verified</button>
           <button className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-50 hover:text-brand-600 transition-all">2081 BS</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <article className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-4 mb-10">
                <span className="bg-brand-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.25em] shadow-lg shadow-brand-500/20">
                  {post.category}
                </span>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-12 tracking-tighter leading-[1.1]">
                {post.title}
              </h1>

              <div className="prose prose-slate prose-xl max-w-none">
                <div className="p-10 bg-brand-50 rounded-[2.5rem] border-l-8 border-brand-600 mb-16 relative overflow-hidden group">
                  <p className="text-2xl font-bold text-brand-900 leading-relaxed italic relative z-10">
                    "{post.excerpt}"
                  </p>
                  <svg className="absolute -bottom-4 -right-4 w-32 h-32 text-brand-100 opacity-50 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21Z"/></svg>
                </div>
                <div className="text-slate-700 leading-loose space-y-8 font-medium">
                  {post.content.split('\n').map((para, idx) => (
                    <p key={idx} className="text-lg">{para}</p>
                  ))}
                </div>
              </div>

              {post.pdfUrl && (
                <div className="mt-20 pt-16 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-3xl font-black text-slate-950 flex items-center gap-4">
                      <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      </div>
                      Document View
                    </h3>
                  </div>
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-900/10 border border-slate-100 ring-8 ring-slate-50">
                    <PDFViewer url={post.pdfUrl} />
                  </div>
                </div>
              )}

              <div className="mt-20 flex flex-wrap items-center justify-between gap-10 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white p-1 shadow-xl">
                    <img src="https://picsum.photos/seed/infossewa/200/200" className="w-full h-full object-cover rounded-[1rem]" alt="Team" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-950 tracking-tight">InfosSewa Editorial</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trust Index: 100%</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 px-6 py-4 bg-white hover:bg-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-sm">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100 6 3 3 0 000-6z"></path></svg>
                    Share
                  </button>
                  <button className="flex items-center gap-3 px-6 py-4 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="lg:col-span-4 space-y-12">
          {/* Channel Card */}
          <div className="bg-brand-600 rounded-[3.5rem] p-10 md:p-12 text-white shadow-2xl shadow-brand-600/30 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight">Instant Notice Alerts.</h3>
              <p className="text-brand-100 text-sm mb-10 leading-relaxed font-medium">Join 50K+ candidates receiving notifications on Viber and Telegram.</p>
              <div className="space-y-4">
                <button className="w-full py-5 bg-white text-brand-600 hover:bg-brand-50 rounded-[1.5rem] font-black transition-all flex items-center justify-center gap-4 text-xs uppercase tracking-widest shadow-xl">
                   Join Telegram
                </button>
                <button className="w-full py-5 bg-white/10 hover:bg-white/20 rounded-[1.5rem] font-black transition-all flex items-center justify-center gap-4 text-xs uppercase tracking-widest border border-white/10 backdrop-blur-md">
                   Join Viber
                </button>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
          </div>

          {/* Tags Card */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-100/50">
            <h4 className="text-xl font-black text-slate-950 mb-8 tracking-tight">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['Result 2081', 'Govt Job', 'TU Routine', 'Nepal Police', 'Loksewa', 'TSC News'].map(tag => (
                <span key={tag} className="px-5 py-3 bg-slate-50 hover:bg-brand-50 hover:text-brand-600 transition-all rounded-2xl text-[10px] font-black text-slate-500 cursor-pointer uppercase tracking-widest">
                  #{tag.replace(' ', '')}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Alert */}
          <div className="p-10 text-center">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] leading-loose">
              Found an error in this article? <br/>
              <button className="text-brand-500 mt-2 hover:underline">Report to Editorial Team</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
