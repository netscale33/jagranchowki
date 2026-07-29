import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import type { GalleryItem } from '../types';
import { X, Play, Image as ImageIcon, Video } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_DATA
    : activeTab === 'video'
    ? GALLERY_DATA.filter((item) => item.type === 'video')
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  return (
    <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-orange-950 text-xs font-bold shadow-sm">
          <span>🪔 Devotional Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
          Official Photo & Video Gallery
        </h1>
        <p className="text-xs sm:text-sm font-medium max-w-2xl mx-auto text-slate-600">
          Explore real stage setups, floral Bhawans, and live YouTube performance videos by Shri Sanjeev Batra & Party.
        </p>
        <div className="section-line mx-auto" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
        {[
          { id: 'all', label: 'All Media' },
          { id: 'video', label: '🎥 YouTube Videos' },
          { id: 'chowki', label: 'Mata Ki Chowki' },
          { id: 'jagran', label: 'Bhagwati Jagran' },
          { id: 'jhanki', label: 'Live Jhankiyan' },
          { id: 'khatu', label: 'Khatu Shyam' },
          { id: 'sai', label: 'Sai Sandhya' },
          { id: 'sunderkand', label: 'Sunderkand' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-1.5 rounded text-xs font-bold transition-colors ${
              activeTab === tab.id
                ? 'bg-[#C84B26] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMedia(item)}
            className="card-light overflow-hidden cursor-pointer group relative h-64 flex flex-col justify-between"
          >
            <div className="relative w-full h-full overflow-hidden bg-slate-100">
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1">
                  {item.type === 'video' ? <Video className="w-3 h-3 text-red-400 fill-current" /> : <ImageIcon className="w-3 h-3 text-amber-300" />}
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-orange-100 line-clamp-2 font-medium">{item.description}</p>
              </div>

              {/* Play Overlay for Video Items */}
              {item.type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md border border-white">
                    <Play className="w-5 h-5 fill-current text-white ml-0.5" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold text-white bg-black/60 border border-white/20">
                  View Photo
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-150">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-amber-300 p-3 space-y-3 shadow-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
              {selectedMedia.type === 'video' ? (
                <iframe
                  className="w-full h-full"
                  src={`${selectedMedia.url}?autoplay=1`}
                  title={selectedMedia.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="text-center space-y-1 py-1">
              <h3 className="text-base font-bold font-display text-slate-900">{selectedMedia.title}</h3>
              <p className="text-xs text-slate-600 font-medium">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
