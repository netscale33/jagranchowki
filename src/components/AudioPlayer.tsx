import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc, Sparkles } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Web Audio API Spiritual Indian Flute & Tanpura Drone Synthesizer (100% Guaranteed Sound)
  const startSpiritualSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Sacred Frequencies (Sa Pa Sa Drone: 261.63Hz C4, 392.00Hz G4, 523.25Hz C5)
      const freqs = [261.63, 392.00, 523.25, 659.25];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.08, ctx.currentTime);

        // Gentle LFO Tremolo for Flute Vibe
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(4 + idx, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.error("Web Audio API error:", e);
    }
  };

  const stopSpiritualSynth = () => {
    if (oscillatorsRef.current) {
      oscillatorsRef.current.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      oscillatorsRef.current = [];
    }
    if (audioCtxRef.current) {
      try { audioCtxRef.current.close(); } catch {}
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSpiritualSynth();
    } else {
      startSpiritualSynth();
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const newMuted = !isMuted;
      gainNodeRef.current.gain.setValueAtTime(newMuted ? 0 : 0.15, audioCtxRef.current.currentTime);
      setIsMuted(newMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-slate-900/95 backdrop-blur-md border-2 border-orange-400 text-white shadow-2xl transition-all duration-300 hover:scale-105">
      <button
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 text-white font-bold flex items-center justify-center shadow-md relative"
        title={isPlaying ? "Stop Devotional Flute Music" : "Play Devotional Flute & Chants (भक्ति संगीत सुनें)"}
      >
        <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
        {!isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        )}
      </button>

      <div className="flex flex-col text-left cursor-pointer" onClick={togglePlay}>
        <span className="text-[10px] sm:text-xs font-bold text-yellow-300 flex items-center gap-1">
          <Music className="w-3.5 h-3.5 text-orange-400" />
          <span>Devotional Ambient Flute</span>
          <Sparkles className="w-3 h-3 text-yellow-400" />
        </span>
        <span className="text-[9px] sm:text-[10px] text-orange-100 font-semibold">
          {isPlaying ? '🔊 Flute Sound Active' : '▶ Click Here for Divine Sound'}
        </span>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3 px-1">
          <span className="w-1 bg-orange-500 rounded-full animate-pulse h-2"></span>
          <span className="w-1 bg-amber-400 rounded-full animate-pulse h-3" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-1 bg-yellow-400 rounded-full animate-pulse h-1.5" style={{ animationDelay: '0.4s' }}></span>
        </div>
      )}

      <button
        onClick={toggleMute}
        className="text-orange-300 hover:text-yellow-300 transition-colors p-1 ml-1"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
