import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ConferenceCarousel.module.css';

function ConferenceCarouselSlide({ children }) {
  return <div className={styles.slide}>{children}</div>;
}

function ConferenceCarouselCover({ title, dates, imageStyle, tag }) {
  return (
    <ConferenceCarouselSlide>
      <div className={styles.hdr}>news</div>
      <div className={styles.coverImg} style={imageStyle}>
        <span className={styles.coverTag}>{tag}</span>
      </div>
      <h2 className={styles.coverTitle}>{title}</h2>
      <p className={styles.coverDates}>{dates}</p>
    </ConferenceCarouselSlide>
  );
}

function ConferenceCarouselPaper({ title, type, typeEmoji, authors, award, day, time, room, session }) {
  return (
    <ConferenceCarouselSlide>
      <div className={styles.hdr}>news</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.type}>
        <span>{typeEmoji}</span> {type}
        {award && <span className={styles.award}>{award}</span>}
      </p>
      <p className={styles.authors}>{authors}</p>
      <hr className={styles.rule} />
      <div className={styles.session}>
        <p className={styles.when}>{day}</p>
        <p className={styles.when}>{time}</p>
        {room && <p className={styles.room}>{room}</p>}
        <p className={styles.where}>{session}</p>
      </div>
      <hr className={styles.rule} />
    </ConferenceCarouselSlide>
  );
}

// Helpers: load scripts dynamically (for downloading slides)
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function ensureLibs() {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
}

// Render a single slide to a canvas/blob
async function renderSlide(slideEl, scale = 2) {
  // eslint-disable-next-line no-undef
  const canvas = await html2canvas(slideEl, {
    scale,
    backgroundColor: null,
    useCORS: true,
  });
  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
}

// Download helpers
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Make the carousel work
function ConferenceCarousel({ children }) {
  const [current, setCurrent] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const trackRef = useRef(null);
  const touchRef = useRef({ sx: 0, sy: 0 });
  const menuRef = useRef(null);
  const slides = React.Children.toArray(children);
  const total = slides.length;

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') { goTo(current - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); e.preventDefault(); }
    };
    el.addEventListener('keydown', handler);
    return () => el.removeEventListener('keydown', handler);
  }, [current, goTo]);

  const onTouchStart = (e) => {
    touchRef.current = { sx: e.touches[0].clientX, sy: e.touches[0].clientY };
  };

  const onTouchEnd = (e) => {
    const { sx, sy } = touchRef.current;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      dx < 0 ? goTo(current + 1) : goTo(current - 1);
    }
  };

  // Get all slide DOM elements
  const getSlideEls = () => {
    if (!trackRef.current) return [];
    return Array.from(trackRef.current.querySelectorAll(`.${styles.slideWrapper}`));
  };

  // Download current slide as PNG
  const downloadCurrent = async () => {
    setDownloading(true);
    try {
      await ensureLibs();
      const els = getSlideEls();
      const blob = await renderSlide(els[current]);
      downloadBlob(blob, `slide-${current + 1}.png`);
    } catch (err) {
      console.error('Download failed:', err);
    }
    setDownloading(false);
  };

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Conference contributions"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <div className={styles.ctr}>{current + 1} / {total}</div>

      <div
        ref={trackRef}
        className={styles.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={styles.slideWrapper}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${total}`}
            aria-hidden={i !== current}
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowL}`}
        onClick={(e) => { e.preventDefault(); goTo(current - 1); }}
        disabled={current === 0}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowR}`}
        onClick={(e) => { e.preventDefault(); goTo(current + 1); }}
        disabled={current === total - 1}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className={styles.bottomBar}>
        <div className={styles.dots} role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className={styles.dlWrap} ref={menuRef}>
          <button
            type="button"
            className={styles.dlBtn}
            onClick={downloadCurrent}
            disabled={downloading}
            aria-label="Download current slide"
            title="Download current slide"
          >
            {downloading ? '⏳' : '⤓'}
          </button>
        </div>
      </div>
    </div>
  );
}

export { ConferenceCarousel, ConferenceCarouselCover, ConferenceCarouselPaper, ConferenceCarouselSlide };
export default ConferenceCarousel;
