import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Gamepad2, Download, Play, X, Pause, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';
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

function ImageModal({ open, onClose, image }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white">
          <X className="h-6 w-6" />
        </button>
        <img src={image} alt="Full size" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const intervalRef = useRef(null);

  const prevImage = () => {
    setAnimating(true);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setAnimating(true);
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToImage = (index) => {
    setAnimating(true);
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isPlaying]);

  // Handle touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextImage();
    }
    if (touchStart - touchEnd < -75) {
      prevImage();
    }
  };

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragEnd = e.clientX;
    if (dragStart - dragEnd > 50) {
      nextImage();
    }
    if (dragStart - dragEnd < -50) {
      prevImage();
    }
  };

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, isPlaying]);

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
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative flex items-center justify-center group">
              <button
                onClick={prevImage}
                className="absolute left-0 z-10 ml-2 rounded-full bg-black/70 hover:bg-black/90 text-white p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous Image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden w-full aspect-square rounded-lg transition-all duration-500 ease-in-out cursor-grab active:cursor-grabbing ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsDragging(false)}
              >
                <img
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out ${animating ? 'scale-105' : 'scale-100'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                  style={{ transformOrigin: 'center center' }}
                  draggable="false"
                />
              </div>
              
              <button
                onClick={nextImage}
                className="absolute right-0 z-10 mr-2 rounded-full bg-black/70 hover:bg-black/90 text-white p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next Image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Control Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={togglePlayPause}
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setFullscreenImage(images[currentIndex])}
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white p-2 rounded-full transition-colors duration-300"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ 
                  width: `${((currentIndex + 1) / images.length) * 100}%`
                }}
              />
            </div>

            {/* Dot Indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Toggle Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                {showThumbnails ? 'Hide' : 'Show'} Thumbnails
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${showThumbnails ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Thumbnails Grid */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showThumbnails ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                      currentIndex === idx 
                        ? 'ring-2 ring-blue-600 ring-offset-2 ring-offset-black scale-105' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentIndex === idx && (
                      <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="mt-6 text-center text-xs text-white/50">
              Use arrow keys to navigate • Space to play/pause • Click image for fullscreen
            </div>
          </div>
        </section>
      </div>

      <DownloadModal open={open} onClose={() => setOpen(false)} />
      <ImageModal 
        open={!!fullscreenImage} 
        onClose={() => setFullscreenImage(null)} 
        image={fullscreenImage} 
      />
    </section>
  );
}