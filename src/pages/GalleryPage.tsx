import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import type { GalleryItem } from '../types';
import { DiyaGlow } from '../components/DiyaGlow';
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
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-bold shadow-sm">
          <DiyaGlow size="sm" />
          <span>Devotional Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900">
          Official Photo & Video Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Explore real stage setups, floral Bhawans, and live YouTube performance videos by Shri Sanjeev Batra & Party.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-orange-200 pb-4">
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
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-orange-600 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-orange-50 border border-orange-200'
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
            className="bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-md spiritual-card-hover cursor-pointer group relative h-72 flex flex-col justify-between"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-widest flex items-center gap-1">
                  {item.type === 'video' ? <Video className="w-3 h-3 text-red-400 fill-current" /> : <ImageIcon className="w-3 h-3 text-yellow-300" />}
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-yellow-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-orange-100 line-clamp-2">{item.description}</p>
              </div>

              {/* Play Overlay for Video Items */}
              {item.type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl border-2 border-white group-hover:scale-115 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  View Photo
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-2 border-orange-400 p-4 space-y-4 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
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
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold font-heading text-orange-700">{selectedMedia.title}</h3>
              <p className="text-xs text-slate-600">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
