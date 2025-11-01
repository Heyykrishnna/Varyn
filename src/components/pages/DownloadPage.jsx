import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Gamepad2, Download, Play, X } from 'lucide-react';
import { TfiApple } from "react-icons/tfi";
import { GiConsoleController } from "react-icons/gi";
import Radio from '../downloadpage';

function DownloadModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden border border-white/15" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 z-10 inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 text-white">
          <X className="h-5 w-5" />
        </button>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function DownloadPage() {
  const [platform, setPlatform] = useState('pc');
  const [open, setOpen] = useState(false);
  const [images] = useState([
    'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a9a7a209-baf4-4b2d-8658-c92b73723f1f.png',
    'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/db77143d-4c6a-48d7-8ee5-a7f382fb4e0e.png',
    'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9c0e5d2a-a352-4b73-875d-a4adf4ba7c1b.png',
    'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/89f3987d-52c1-40ee-ba00-c83734e45b95.png',
    'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/07941fc7-5b03-4f81-9885-346604072ec2.png',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const prevImage = () => {
    setAnimating(true);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setAnimating(true);
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none " />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Download</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Choose your platform and get started. Cross-play supported where available.</p>

        <Radio
          className="mt-8"
          options={[
            { value: 'pc', label: 'PC', icon: Monitor },
            { value: 'mac', label: 'MAC', icon: TfiApple },
            { value: 'console', label: 'Console', icon: GiConsoleController },
            { value: 'mobile', label: 'Mobile', icon: Smartphone },
          ]}
          value={platform}
          onChange={setPlatform}
        />

        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-black/40 overflow-hidden max-w-full">
          {platform === 'pc' && (
            <div>
              <div className="text-lg font-semibold">PC</div>
              <div className="mt-1 text-sm text-white/70">Windows 10+, 8 GB RAM, GTX 1060 or better recommended.</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> Download Launcher</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Steam</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Epic</a>
              </div>
            </div>
          )}
          {platform === 'mac' && (
            <div>
              <div className="text-lg font-semibold">MAC</div>
              <div className="mt-1 text-sm text-white/70">Sonoma or later, 8 GB RAM, M3 or better recommended.</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> Download .dmg</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Steam</a>
              </div>
            </div>
          )}
          {platform === 'console' && (
            <div>
              <div className="text-lg font-semibold">Console</div>
              <div className="mt-1 text-sm text-white/70">PlayStation and Xbox supported. Requires online subscription for multiplayer.</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> PlayStation Store</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Xbox Store</a>
              </div>
            </div>
          )}
          {platform === 'mobile' && (
            <div>
              <div className="text-lg font-semibold">Mobile</div>
              <div className="mt-1 text-sm text-white/70">iOS 14+/Android 9+. Cross-progression not supported on mobile.</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> App Store</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Google Play</a>
              </div>
            </div>
          )}
        </div>
        <div>
          <button onClick={() => setOpen(true)} className="mt-16 inline-flex items-center gap-2 rounded-md border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5">
            <Play className="h-4 w-4" /> How to Download?
          </button>
        </div>
        <section className="mt-32 max-w-3xl mx-auto">
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-0 z-10 ml-2 rounded-full bg-black hover:bg-black/60 text-white p-2 transition-colors duration-300"
              aria-label="Previous Image"
            >
              &#8592;
            </button>
            <div className={`overflow-hidden w-full aspect-square rounded-lg transition-opacity duration-500 ease-in-out ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out ${animating ? 'scale-105' : 'scale-100'}`}
                style={{ transformOrigin: 'center center' }}
              />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-0 z-10 mr-2 rounded-full bg-black hover:bg-black/60 text-white p-2 transition-colors duration-300"
              aria-label="Next Image"
            >
              &#8594;
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAnimating(true);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === idx ? 'bg-blue-600' : 'bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
