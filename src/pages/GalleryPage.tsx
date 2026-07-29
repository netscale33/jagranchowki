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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(212,105,10,0.12)', color: 'var(--c-gold)', border: '1px solid rgba(212,105,10,0.25)' }}>
          <span>🪔 Devotional Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-cream">
          Official Photo & Video Gallery
        </h1>
        <p className="text-xs sm:text-sm font-medium max-w-2xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
          Explore real stage setups, floral Bhawans, and live YouTube performance videos by Shri Sanjeev Batra & Party.
        </p>
        <div className="section-divider mx-auto" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b pb-4" style={{ borderColor: 'var(--c-border)' }}>
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
            className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'text-white bg-saffron shadow-sm'
                : 'text-muted hover:text-cream bg-surface border'
            }`}
            style={{
              borderColor: activeTab === tab.id ? 'var(--c-saffron)' : 'var(--c-border)',
              background: activeTab === tab.id ? 'var(--c-saffron)' : 'var(--c-surface)',
            }}
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
            className="card overflow-hidden cursor-pointer group relative h-64 flex flex-col justify-between"
          >
            <div className="relative w-full h-full overflow-hidden bg-black">
              <img
                src={item.thumbnail || item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="photo-overlay absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1">
                  {item.type === 'video' ? <Video className="w-3 h-3 text-red-400 fill-current" /> : <ImageIcon className="w-3 h-3 text-gold" />}
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-cream group-hover:text-saffron-light transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted line-clamp-2 font-medium">{item.description}</p>
              </div>

              {/* Play Overlay for Video Items */}
              {item.type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border" style={{ background: 'rgba(220,38,38,0.9)', borderColor: 'rgba(255,255,255,0.4)' }}>
                    <Play className="w-5 h-5 fill-current text-white ml-0.5" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold text-cream border" style={{ background: 'rgba(0,0,0,0.6)', borderColor: 'var(--c-border)' }}>
                  View Photo
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 p-4 sm:p-8 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(6px)' }}>
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full card overflow-hidden p-3 space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
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
              <h3 className="text-base font-bold font-display text-gold">{selectedMedia.title}</h3>
              <p className="text-xs text-muted font-medium">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
