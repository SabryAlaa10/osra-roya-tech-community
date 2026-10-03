import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { GALLERY_ITEMS } from '../data/royaData';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activePhoto = GALLERY_ITEMS[activeIndex];

  useEffect(() => {
    if (isPaused || selectedPhoto || GALLERY_ITEMS.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % GALLERY_ITEMS.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, selectedPhoto]);

  const showPhoto = (index: number) => {
    setActiveIndex((index + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section className="w-full max-w-7xl mx-auto scroll-mt-24 px-4 md:px-8 py-16" id="gallery">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="font-label-sm text-xs uppercase font-mono text-[#4cd7f6] tracking-widest mb-1">
          {language === 'ar'
            ? 'لحظات لا تُنسى • MEMORIES & MOMENTS'
            : 'MEMORIES & MOMENTS'}
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1]">
          {language === 'ar' ? 'معرض الصور والفعاليات' : 'Photo Gallery & Events'}
        </h2>
        <p className="font-body-md text-sm md:text-base text-[#bcc9cd] max-w-xl mt-2">
          {language === 'ar'
            ? 'توثيق رحلاتنا الميدانية، المعسكرات التدريبية وحضورنا المؤتمرات التقنية في القاهرة والمحافظات.'
            : 'Documenting field expeditions, coding bootcamps, and high-impact attendance at national tech summits.'}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e18] shadow-xl">
        <button
          type="button"
          onClick={() => setSelectedPhoto(activePhoto)}
          className="group relative flex aspect-[16/9] max-h-[640px] min-h-[300px] w-full items-center justify-center bg-[#0a0e18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#4cd7f6]"
          aria-label={language === 'ar' ? `عرض الصورة: ${activePhoto.title}` : `View photo: ${activePhoto.title}`}
        >
          <img
            key={activePhoto.id}
            src={activePhoto.imageUrl}
            alt={activePhoto.title}
            className="h-full w-full object-contain"
            decoding="async"
          />
          <span dir="ltr" className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-[#0a0e18]/80 px-2.5 py-1 text-xs font-mono text-[#dfe2f1]">
            {String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY_ITEMS.length).padStart(2, '0')}
          </span>
        </button>

        <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="min-w-0 text-right sm:flex-1">
            <h3 className="font-headline-md text-base font-bold leading-relaxed text-[#dfe2f1] sm:text-lg">
              {activePhoto.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#bcc9cd] sm:text-sm">
              {activePhoto.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-center sm:self-auto">
            <button
              type="button"
              onClick={() => showPhoto(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1c1f2a] text-[#dfe2f1] transition-colors hover:border-[#4cd7f6]/50 hover:text-[#4cd7f6]"
              aria-label={language === 'ar' ? 'الصورة السابقة' : 'Previous photo'}
            >
              {language === 'ar' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1c1f2a] text-[#dfe2f1] transition-colors hover:border-[#4cd7f6]/50 hover:text-[#4cd7f6]"
              aria-label={isPaused ? (language === 'ar' ? 'تشغيل العرض' : 'Play slideshow') : (language === 'ar' ? 'إيقاف العرض' : 'Pause slideshow')}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play size={17} /> : <Pause size={17} />}
            </button>
            <button
              type="button"
              onClick={() => showPhoto(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1c1f2a] text-[#dfe2f1] transition-colors hover:border-[#4cd7f6]/50 hover:text-[#4cd7f6]"
              aria-label={language === 'ar' ? 'الصورة التالية' : 'Next photo'}
            >
              {language === 'ar' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2" aria-label={language === 'ar' ? 'اختيار صورة' : 'Choose a photo'}>
        {GALLERY_ITEMS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => showPhoto(index)}
            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[#4cd7f6]' : 'w-2.5 bg-[#869397]/50 hover:bg-[#bcc9cd]'}`}
            aria-label={language === 'ar' ? `الصورة ${index + 1}` : `Photo ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain bg-[#0a0e18]"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="p-6 text-right">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#4cd7f6]/10 text-[#4cd7f6] text-xs font-mono font-bold">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs font-mono text-[#869397]">
                  {selectedPhoto.year}
                </span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#dfe2f1] mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="font-body-md text-sm text-[#bcc9cd] leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
