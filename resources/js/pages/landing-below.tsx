import React, { useRef } from 'react';

export default function LandingBelow() {
  const revTrackRef = useRef<HTMLDivElement>(null);
  const taTrackRef = useRef<HTMLDivElement>(null);

  const scrollRev = (dir: 'prev' | 'next') => {
    const track = revTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.rev-card-item');
    const scrollAmount = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: dir === 'prev' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const scrollTa = (dir: 'prev' | 'next') => {
    const track = taTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.ta-card-item');
    const scrollAmount = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: dir === 'prev' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      {/* Photo Slider */}
          <section id="hero-slider" className="photo-slider-wrapper">
            <div className="photo-slider-track">
              <div className="photo-slider-list">
                <div className="photo-slider-item"><picture><source srcSet="/new/DJI_0069-compress.avif" type="image/avif" /><img src="/new/DJI_0069-compress.webp" alt="Menjangan Island aerial view" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/Menjangan-Island-1.avif" type="image/avif" /><img src="/new/Menjangan-Island-1.webp" alt="Wild deer in crystal water at Menjangan Island" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-3.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-3.webp" alt="Menjangan temple cliff and traditional boat" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-4.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-4.webp" alt="Tour boats and deers on Menjangan beach" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-5.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-5.webp" alt="Menjangan Island scenery and mountains" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
              </div>
              <div className="photo-slider-list" aria-hidden="true">
                <div className="photo-slider-item"><picture><source srcSet="/new/DJI_0069-compress.avif" type="image/avif" /><img src="/new/DJI_0069-compress.webp" alt="Menjangan Island aerial view" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/Menjangan-Island-1.avif" type="image/avif" /><img src="/new/Menjangan-Island-1.webp" alt="Wild deer in crystal water at Menjangan Island" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-3.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-3.webp" alt="Menjangan temple cliff and traditional boat" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-4.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-4.webp" alt="Tour boats and deers on Menjangan beach" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
                <div className="photo-slider-item"><picture><source srcSet="/new/menjanganislandtrip-Slider-mobile-5.avif" type="image/avif" /><img src="/new/menjanganislandtrip-Slider-mobile-5.webp" alt="Menjangan Island scenery and mountains" width={320} height={220} loading="lazy" decoding="async" /></picture></div>
              </div>
            </div>
          </section>

          {/* Real Guests, Real Reviews Section (8 Cards Carousel) */}
          <section id="guest-reviews-carousel" style={{ background: '#f0f7fc', padding: '56px 20px 48px', borderBottom: '1px solid var(--color-divider)', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3.2vw, 36px)', color: '#0f274a', margin: '0 0 8px' }}>
                  <span data-l="en">Real Guests, Real Reviews</span>
                  <span data-l="id">Tamu Asli, Ulasan Nyata</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#3b82f6', margin: '0 0 24px', fontWeight: 500 }}>
                  <span data-l="en">More than a thousand guests have reviewed their trip with us on Google. Here is what they said.</span>
                  <span data-l="id">Lebih dari seribu tamu telah mengulas perjalanan mereka bersama kami di Google. Inilah pendapat mereka.</span>
                </p>

                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', letterSpacing: '0.08em', color: '#111827', textTransform: 'uppercase' }}>
                    EXCELLENT
                  </div>
                  <div style={{ color: '#f59e0b', fontSize: '22px', letterSpacing: '3px', lineHeight: 1 }}>
                    ★★★★★
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    <span data-l="en">Based on 958 reviews</span>
                    <span data-l="id">Berdasarkan 958 ulasan</span>
                  </div>
                  <div style={{ marginTop: '4px' }}>
                    <svg viewBox="0 0 272 92" width="80" height="28" aria-label="Google">
                      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
                      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
                      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.45zm-8.99 21.01c0-7.81-5.21-13.44-11.84-13.44-6.72 0-12.35 5.63-12.35 13.44 0 7.72 5.63 13.35 12.35 13.35 6.63 0 11.84-5.63 11.84-13.35z" />
                      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-13.61-8.15l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" />
                      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.8.36 34.83.36 15.86 16.32.31 35.3.31c10.42 0 17.73 4.03 23.36 9.41l-6.64 6.64c-3.95-3.7-9.24-6.55-16.72-6.55-13.44 0-24.11 10.84-24.11 24.28 0 13.44 10.67 24.28 24.11 24.28 8.65 0 13.53-3.44 16.63-6.55 1.76-1.76 2.94-4.28 3.36-7.73H35.29v-.68z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Carousel Track with Navigation Buttons */}
              <div className="rev-carousel-container">
                <button
                  id="rev-prev-btn"
                  className="rev-arrow-btn rev-arrow-prev"
                  aria-label="Previous reviews"
                  onClick={() => scrollRev('prev')}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <div id="rev-cards-carousel" className="rev-cards-track" ref={revTrackRef}>
                  {/* Card 1: Belle Weerts */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#5ba3e0' }}>B</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Belle Weerts</span>
                        <span className="rev-user-date">1 month ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">We had a very nice snorkling experience! The guide was good and it was a beautiful experience. We saw seaturtles and many of th...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 2: hhh_j */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#e05375' }}>h</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">hhh_j</span>
                        <span className="rev-user-date">1 month ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">It was a truly perfect trip! They helped us find so many beautiful corals, fish, and turtles. And the underwater scenery was absolutel...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 3: Jack Hennesey Cleary */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#6d28d9' }}>J</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Jack Hennesey Cleary</span>
                        <span className="rev-user-date">1 month ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">I did two dives here last week and after diving all around Bali for the last several days I can now say that this was my favourite. I'm sorry I...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 4: Areta Herwendra */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#0d9488' }}>A</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Areta Herwendra</span>
                        <span className="rev-user-date">1 month ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">Pelayanannya bagus bangettttt, makasih bli Suma udh sabar sama kitaa semua</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more" style={{ visibility: 'hidden' }}>Read more</a>
                  </div>

                  {/* Card 5: Nanang Hidayat */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#0f766e' }}>N</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Nanang Hidayat</span>
                        <span className="rev-user-date">1 month ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">Super sekali pelayanan trip nya sangat memuaskan teruntuk private trip bersama teman-teman. Sangat rekomen untuk yang mau...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 6: Bianca */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#064e3b' }}>B</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Bianca</span>
                        <span className="rev-user-date">2 months ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">We hebben een hele leuke safari trip gedaan! Erg genoten en leuke open auto en van alles gezien met de gids en chauffeur! Veel zwarte...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 7: Sab Voyage */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <div className="rev-avatar" style={{ background: '#ea580c' }}>S</div>
                      <div className="rev-user-info">
                        <span className="rev-user-name">Sab Voyage</span>
                        <span className="rev-user-date">2 months ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">Spectaculaire !!!<br /><br />Je remercie énormément notre guide Putu et notre capitaine pour cette...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 8: Dorota Bi */}
                  <div className="rev-card-item">
                    <div className="rev-card-header">
                      <img src="/testimoni1/dorota-bi.webp" alt="Dorota Bi" className="rev-avatar" loading="lazy" decoding="async" style={{ objectFit: 'cover' }} />
                      <div className="rev-user-info">
                        <span className="rev-user-name">Dorota Bi</span>
                        <span className="rev-user-date">2 months ago</span>
                      </div>
                      <div className="rev-google-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z" /><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" /></svg>
                      </div>
                    </div>
                    <div className="rev-stars-row">
                      <span className="rev-stars">★★★★★</span>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p className="rev-text">An excellent team. Great organization, professional, and punctual, which is very important to me. Thank you for a great day of...</p>
                    <a href="#guest-reviews-carousel" className="rev-read-more">Read more</a>
                  </div>
                </div>

                <button
                  id="rev-next-btn"
                  className="rev-arrow-btn rev-arrow-next"
                  aria-label="Next reviews"
                  onClick={() => scrollRev('next')}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Trustindex badge */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 4px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#dcfce7', color: '#166534', fontSize: '11.5px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px' }}>
                  <span>Verified by Trustindex</span>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div style={{ display: 'grid', justifyItems: 'center', gap: '10px', marginTop: '36px' }}>
                <a
                  className="cta"
                  href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20read%20your%20reviews%20and%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                  </svg>
                  <span data-l="en">Book with Confidence on WhatsApp</span>
                  <span data-l="id">Booking Praktis via WhatsApp</span>
                </a>
                <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                  <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                  <span>
                    <span data-l="en">5-star reviews · Insurance 100% · Licensed operator</span>
                    <span data-l="id">Ulasan bintang 5 · Asuransi 100% · Operator berlisensi</span>
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* Three Ways Into The Water / Snorkeling Trip Section */}
          <section id="snorkeling-intro" className="snorkeling-grid-section">
            <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '10px' }}>
                  <span data-l="en">THREE WAYS INTO THE WATER</span>
                  <span data-l="id">TIGA CARA MENIKMATI MENJANGAN</span>
                </div>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 3.4vw, 42px)', color: '#0f274a', margin: '0 0 14px' }}>
                  <span data-l="en">Menjangan Snorkeling Trip &amp; Diving</span>
                  <span data-l="id">Menjangan Snorkeling Trip &amp; Diving</span>
                </h2>
                <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '15px', lineHeight: 1.6, color: '#475569' }}>
                  <span data-l="en">Explore crystal-clear waters, vibrant coral reefs, and incredible tropical marine life with our experienced local guides. As a legally licensed local operator, we are committed to providing safe, professional, and unforgettable ocean adventures.</span>
                  <span data-l="id">Jelajahi perairan sebening kristal, terumbu karang yang hidup, dan biota laut tropis bersama pemandu lokal berpengalaman kami. Sebagai operator berlisensi resmi, kami berkomitmen memberikan petualangan laut yang aman, profesional, dan tak terlupakan.</span>
                </p>
              </div>

              <div className="snorkeling-split-layout">
                {/* 3x3 Photo Gallery */}
                <div className="snorkeling-gallery-grid">
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-01.avif" type="image/avif" /><img src="/new/snorkeling-01.webp" alt="Snorkeling at coral garden Menjangan" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-02.avif" type="image/avif" /><img src="/new/snorkeling-02.webp" alt="Snorkeler swimming with tropical fish" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-03.avif" type="image/avif" /><img src="/new/snorkeling-03.webp" alt="Child snorkeling Menjangan Island" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-04.avif" type="image/avif" /><img src="/new/snorkeling-04.webp" alt="Wild deer on the beach Menjangan" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-05.avif" type="image/avif" /><img src="/new/snorkeling-05.webp" alt="Sea turtle swimming in crystal clear water" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-06.avif" type="image/avif" /><img src="/new/snorkeling-06.webp" alt="Clownfish anemone reef" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-07.avif" type="image/avif" /><img src="/new/snorkeling-07.webp" alt="Snorkeling above vibrant reef" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-08.avif" type="image/avif" /><img src="/new/snorkeling-08.webp" alt="Aerial view of turquoise lagoon" loading="lazy" decoding="async" /></picture></div>
                  <div className="snorkeling-gallery-item"><picture><source srcSet="/new/snorkeling-09.avif" type="image/avif" /><img src="/new/snorkeling-09.webp" alt="White sand beach Menjangan" loading="lazy" decoding="async" /></picture></div>
                </div>

                {/* Right: Snorkeling Details */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: '#0f274a', color: '#ffffff', padding: '6px 14px', borderRadius: '6px', alignSelf: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11.5px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>01 SNORKELING</span>
                    <span style={{ opacity: 0.75, fontSize: '11.5px', marginLeft: '6px' }}>· <span data-l="en">All levels - non-swimmers welcome</span><span data-l="id">Semua level - ramah pemula</span></span>
                  </div>

                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 2.3vw, 29px)', color: '#0f274a', lineHeight: 1.25, margin: '0 0 14px' }}>
                    <span data-l="en">Snorkeling Menjangan Island: Half-Day Trip, Everything Included</span>
                    <span data-l="id">Snorkeling Pulau Menjangan: Trip Setengah Hari, Semua Termasuk</span>
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#475569', margin: '0 0 24px' }}>
                    <span data-l="en">Crystal-clear turquoise water, vibrant coral reefs, and the wild deer of Menjangan's white-sand beaches.</span>
                    <span data-l="id">Air biru kehijauan yang sebening kristal, terumbu karang hidup yang memukau, dan rusa liar di pantai pasir putih Menjangan.</span>
                  </p>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '14px' }}>
                    <span data-l="en">THE TRIP</span>
                    <span data-l="id">DETAIL TRIP</span>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Explore two beautiful snorkeling spots inside West Bali National Park</span><span data-l="id">Jelajahi dua titik snorkeling terindah di Taman Nasional Bali Barat</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Picnic lunch on the white-sand beach, with Menjangan's famous wild deer nearby</span><span data-l="id">Makan siang piknik di pantai pasir putih, bersama rusa liar khas Menjangan di sekitar</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Shared boat departs 9:00 AM daily, or take a private boat at a time that suits you</span><span data-l="id">Perahu bersama berangkat jam 09.00 WITA setiap hari, atau pilih perahu privat sesuai waktu Anda</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Your guide is in the water with you, showing you the reef and keeping you comfortable</span><span data-l="id">Pemandu Anda mendampingi di air, menunjukkan keindahan terumbu karang dan memastikan keamanan Anda</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">First time snorkeling, or travelling with children? No swimming experience needed</span><span data-l="id">Baru pertama kali snorkeling, atau bersama anak-anak? Tidak perlu pengalaman berenang</span></span>
                    </div>
                  </div>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '12px' }}>
                    <span data-l="en">INCLUDED</span>
                    <span data-l="id">SUDAH TERMASUK</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Full gear</span><span data-l="id">Alat lengkap</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Guide in the water</span><span data-l="id">Pemandu di air</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Insurance</span><span data-l="id">Asuransi</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
                  </div>

                  <div style={{ display: 'grid', justifyItems: 'start', gap: '10px', marginTop: '24px' }}>
                    <a
                      className="cta"
                      href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20the%20Snorkeling%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                      </svg>
                      <span data-l="en">Book the Snorkeling Trip</span>
                      <span data-l="id">Booking Trip Snorkeling</span>
                    </a>
                    <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                      <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                      <span>
                        <span data-l="en">5-star reviews · Insurance 100% · Licensed operator</span>
                        <span data-l="id">Ulasan bintang 5 · Asuransi 100% · Operator berlisensi</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scuba Diving Section (02 SCUBA DIVING) */}
          <section id="scuba-diving-section" className="snorkeling-grid-section" style={{ borderTop: 'none' }}>
            <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
              <div className="snorkeling-split-layout">
                {/* Left: Scuba Details */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: '#0f274a', color: '#ffffff', padding: '6px 14px', borderRadius: '6px', alignSelf: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11.5px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>02 SCUBA DIVING</span>
                    <span style={{ opacity: 0.75, fontSize: '11.5px', marginLeft: '6px' }}>· <span data-l="en">Certified divers · Open Water and above</span><span data-l="id">Penyelam bersertifikat · Open Water ke atas</span></span>
                  </div>

                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 2.3vw, 29px)', color: '#0f274a', lineHeight: 1.25, margin: '0 0 14px' }}>
                    <span data-l="en">Scuba Diving Menjangan Island: Visit 2 Beautiful Dive Spots</span>
                    <span data-l="id">Scuba Diving Pulau Menjangan: Kunjungi 2 Spot Selam Terbaik</span>
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#475569', margin: '0 0 24px' }}>
                    <span data-l="en">Spectacular coral walls and colourful reef life, at one of Bali’s most beautiful dive destinations.</span>
                    <span data-l="id">Dinding karang spektakuler dan kehidupan terumbu karang yang memukau, di salah satu destinasi selam terindah di Bali.</span>
                  </p>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '14px' }}>
                    <span data-l="en">THE TRIP</span>
                    <span data-l="id">DETAIL TRIP</span>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Two dives around Menjangan Island, at sites chosen on the morning for the best conditions</span><span data-l="id">Dua kali penyelaman di sekitar Pulau Menjangan, di spot terbaik yang dipilih pagi hari sesuai kondisi</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">For certified divers from Open Water (Level 1) and above</span><span data-l="id">Untuk penyelam bersertifikat dari level Open Water (Level 1) ke atas</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Wall, boat and drift dives at 3 to 25 metres, with gentle currents</span><span data-l="id">Penyelaman dinding (wall dive), perahu, dan drift dive pada kedalaman 3 hingga 25 meter dengan arus tenang</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">In good conditions the visibility reaches up to 30 metres</span><span data-l="id">Pada kondisi prima, jarak pandang dalam air mencapai hingga 30 meter</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">A comfortable surface interval on the beach between the two dives</span><span data-l="id">Jeda permukaan (surface interval) yang nyaman di pantai di antara dua sesi penyelaman</span></span>
                    </div>
                  </div>

                  <div style={{ background: '#f0f7ff', borderLeft: '3.5px solid #2563eb', padding: '12px 16px', borderRadius: '6px', marginBottom: '24px', fontSize: '13px', lineHeight: 1.6, color: '#334155' }}>
                    <strong style={{ color: '#0f274a' }}><span data-l="en">Eleven dive sites:</span><span data-l="id">Sebelas spot selam:</span></strong> Pos I · Mangrove Point · Underwater Cave · Pos II · Bat Cave · Temple Wall · Coral Garden · Sandy Slope · Dream Wall · Anchor Wreck · Eel Garden
                  </div>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '12px' }}>
                    <span data-l="en">INCLUDED</span>
                    <span data-l="id">SUDAH TERMASUK</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="trip-tag-pill"><span data-l="en">Gear and tanks</span><span data-l="id">Alat &amp; tabung</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Certified dive guide</span><span data-l="id">Pemandu selam bersertifikat</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Diving insurance</span><span data-l="id">Asuransi selam</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
                  </div>

                  <div style={{ display: 'grid', justifyItems: 'start', gap: '10px', marginTop: '24px' }}>
                    <a
                      className="cta"
                      href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20the%20Scuba%20Diving%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                      </svg>
                      <span data-l="en">Book the Scuba Diving Trip</span>
                      <span data-l="id">Booking Trip Scuba Diving</span>
                    </a>
                    <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                      <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                      <span>
                        <span data-l="en">5-star reviews · Certified divemaster · Gear included</span>
                        <span data-l="id">Ulasan bintang 5 · Divemaster bersertifikat · Alat lengkap</span>
                      </span>
                    </span>
                  </div>
                </div>

                {/* Right: 3x3 Photo Gallery */}
                <div className="snorkeling-gallery-grid">
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-01.webp" alt="Scuba diver photographing coral reef Menjangan" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-02.webp" alt="Diver swimming with sea turtle" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-03.webp" alt="Vibrant reef and anthias fish" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-04.webp" alt="Diver exploring reef wall" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-05.webp" alt="Divers near big sea fan" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-06.webp" alt="Diver beside gorgonian coral" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-07.webp" alt="Diver above colorful corals" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-08.webp" alt="Diver admiring huge sea fan" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/scuba-09.webp" alt="Sunbeams penetrating underwater cave dive site" loading="lazy" decoding="async" /></div>
                </div>
              </div>
            </div>
          </section>

          {/* Discovery Scuba Diving Section (03 DISCOVERY SCUBA DIVING) */}
          <section id="discovery-scuba-section" className="snorkeling-grid-section" style={{ borderTop: 'none' }}>
            <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
              <div className="snorkeling-split-layout">
                {/* 7-Photo Gallery */}
                <div className="snorkeling-gallery-grid">
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-01.webp" alt="Beginner scuba diving Menjangan Island" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-02.webp" alt="Diver swimming over coral garden" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-03.webp" alt="Try scuba diver next to sea fan" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-04.webp" alt="Sea turtle swimming alongside diver" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-05.webp" alt="Try scuba diver giving peace sign underwater" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item"><img src="/new/discovery-06.webp" alt="First time diver with instructor nearby" loading="lazy" decoding="async" /></div>
                  <div className="snorkeling-gallery-item" style={{ gridColumn: 2 }}><img src="/new/discovery-07.webp" alt="Discovery scuba diver in shallow clear water" loading="lazy" decoding="async" /></div>
                </div>

                {/* Right: Discovery Scuba Details */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: '#0f274a', color: '#ffffff', padding: '6px 14px', borderRadius: '6px', alignSelf: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11.5px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>03 DISCOVERY SCUBA DIVING</span>
                    <span style={{ opacity: 0.75, fontSize: '11.5px', marginLeft: '6px' }}>· <span data-l="en">Total beginners · no certification</span><span data-l="id">Pemula total · tanpa sertifikasi</span></span>
                  </div>

                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 2.3vw, 29px)', color: '#0f274a', lineHeight: 1.25, margin: '0 0 14px' }}>
                    <span data-l="en">Never Dived Before? Discovery Scuba Diving at Menjangan, No Certification Needed</span>
                    <span data-l="id">Belum Pernah Menyelam? Discovery Scuba Diving di Menjangan, Tanpa Perlu Sertifikasi</span>
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#475569', margin: '0 0 24px' }}>
                    <span data-l="en">Also known as Try Scuba. Nervous about your first breath underwater? This trip is built for that.</span>
                    <span data-l="id">Juga dikenal sebagai Try Scuba. Ragu atau gugup untuk bernapas pertama kali di bawah air? Trip ini dirancang khusus untuk Anda.</span>
                  </p>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '14px' }}>
                    <span data-l="en">THE TRIP</span>
                    <span data-l="id">DETAIL TRIP</span>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">No certification, diving experience or swimming ability needed</span><span data-l="id">Tidak perlu sertifikasi, pengalaman menyelam, ataupun kemampuan berenang</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">Two shallow dives at 3 to 5 metres, with your instructor beside you throughout</span><span data-l="id">Dua kali penyelaman dangkal di kedalaman 3 hingga 5 meter, didampingi penuh oleh instruktur Anda</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">About 4 hours, including the briefing and lunch</span><span data-l="id">Durasi sekitar 4 jam, sudah termasuk sesi briefing dan makan siang</span></span>
                    </div>
                    <div className="trip-check-item">
                      <svg viewBox="0 0 24 24" className="trip-check-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span><span data-l="en">The experience itself, not a certification course</span><span data-l="id">Fokus menikmati pengalaman menyelam sesungguhnya, bukan kursus sertifikasi</span></span>
                    </div>
                  </div>

                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '12px' }}>
                    <span data-l="en">INCLUDED</span>
                    <span data-l="id">SUDAH TERMASUK</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="trip-tag-pill"><span data-l="en">Instructor with you</span><span data-l="id">Instruktur mendampingi</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Full gear in your size</span><span data-l="id">Alat lengkap sesuai ukuran</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Insurance</span><span data-l="id">Asuransi</span></span>
                    <span className="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
                  </div>

                  <div style={{ display: 'grid', justifyItems: 'start', gap: '10px', marginTop: '24px' }}>
                    <a
                      className="cta"
                      href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20the%20Try%20Scuba%20Diving%20experience%20at%20Menjangan.%20Please%20send%20me%20the%20price%20and%20availability."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                      </svg>
                      <span data-l="en">Book Discovery Scuba Diving</span>
                      <span data-l="id">Booking Discovery Scuba</span>
                    </a>
                    <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                      <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                      <span>
                        <span data-l="en">No experience needed · 100% guided · Safe for beginners</span>
                        <span data-l="id">Tanpa pengalaman · 100% didampingi · Aman untuk pemula</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about-us" style={{ background: '#f0f7fc', padding: '68px 24px 72px', borderBottom: '1px solid var(--color-divider)' }}>
            <div className="about-us-grid" style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '52px', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/new/diving-menjangan-island1.webp" alt="Local diver swimming along Menjangan reef" width={460} height={345} loading="lazy" decoding="async" style={{ width: '100%', maxWidth: '460px', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '10px' }}>
                  <span data-l="en">ABOUT US</span>
                  <span data-l="id">TENTANG KAMI</span>
                </div>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 38px)', color: '#0f274a', lineHeight: 1.2, margin: '0 0 20px' }}>
                  <span data-l="en">A Local Operation on the West Bali Coast</span>
                  <span data-l="id">Operator Lokal di Pesisir Bali Barat</span>
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#334155', margin: '0 0 16px' }}>
                  <span data-l="en">We are based in Pejarakan, on the coast road between Pemuteran and Banyuwedang Harbour, and we work with guides who grew up along this stretch of water. They learned these reefs before they ever guided on them, and they know which wall the turtles favour and how the tide runs at each site.</span>
                  <span data-l="id">Kami berbasis di Pejarakan, di jalan pesisir antara Pemuteran dan Pelabuhan Banyuwedang, serta bekerja bersama pemandu lokal yang tumbuh besar di pesisir ini. Mereka telah mengenal terumbu karang ini jauh sebelum menjadi pemandu, dan sangat memahami dinding karang favorit penyu serta pola arus di setiap spot.</span>
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#334155', margin: '0 0 28px' }}>
                  <span data-l="en">Booking with us keeps the work on this coast. We keep groups small, maintain our own gear, and support the reef restoration efforts the area is known for.</span>
                  <span data-l="id">Memesan bersama kami turut memberdayakan perekonomian pesisir lokal. Kami menjaga kapasitas grup tetap kecil, merawat peralatan sendiri, dan mendukung upaya pelestarian terumbu karang di kawasan ini.</span>
                </p>
                <div className="about-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#ffffff', border: '1px solid rgba(15, 26, 48, 0.08)', borderRadius: '999px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, color: '#1e293b', boxShadow: '0 1px 4px rgba(15, 26, 48, 0.04)' }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                    <span><span data-l="en">Licensed operator</span><span data-l="id">Operator berlisensi</span></span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#ffffff', border: '1px solid rgba(15, 26, 48, 0.08)', borderRadius: '999px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, color: '#1e293b', boxShadow: '0 1px 4px rgba(15, 26, 48, 0.04)' }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span><span data-l="en">10+ years on this coast</span><span data-l="id">10+ tahun pengalaman di pesisir ini</span></span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#ffffff', border: '1px solid rgba(15, 26, 48, 0.08)', borderRadius: '999px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, color: '#1e293b', boxShadow: '0 1px 4px rgba(15, 26, 48, 0.04)' }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span><span data-l="en">Max 10 per boat</span><span data-l="id">Maksimal 10 per perahu</span></span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#ffffff', border: '1px solid rgba(15, 26, 48, 0.08)', borderRadius: '999px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, color: '#1e293b', boxShadow: '0 1px 4px rgba(15, 26, 48, 0.04)' }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                    <span><span data-l="en">Reef conservation</span><span data-l="id">Konservasi terumbu karang</span></span>
                  </div>
                </div>

                <div style={{ display: 'grid', justifyItems: 'start', gap: '10px', marginTop: '24px' }}>
                  <a
                    className="cta"
                    href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20with%20your%20local%20team%20at%20Menjangan."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                    </svg>
                    <span data-l="en">Chat with Our Local Team</span>
                    <span data-l="id">Hubungi Tim Lokal Kami</span>
                  </a>
                  <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                    <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                    <span>
                      <span data-l="en">Direct local operator · Fast response on WhatsApp</span>
                      <span data-l="id">Operator lokal langsung · Respon cepat di WhatsApp</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* How to Book & Why Book With Us Section */}
          <section id="how-to-book-why-us" style={{ background: '#eef6fc', padding: '68px 24px 76px', borderBottom: '1px solid var(--color-divider)' }}>
            <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 36px)', color: '#0f274a', margin: '0 0 8px' }}>
                  <span data-l="en">How to Book Your Menjangan Island Tour</span>
                  <span data-l="id">Cara Memesan Tur Pulau Menjangan</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', margin: 0 }}>
                  <span data-l="en">Three steps, and we handle the rest.</span>
                  <span data-l="id">Tiga langkah mudah, sisanya kami yang urus.</span>
                </p>
              </div>

              {/* 3 Steps */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
                <div style={{ background: '#ffffff', borderRadius: '14px', padding: '36px 24px 30px', boxShadow: '0 4px 18px rgba(15, 26, 48, 0.05)', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ position: 'absolute', top: '18px', left: '24px', fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: '34px', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>1</span>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#0f274a', display: 'grid', placeItems: 'center', color: '#ffffff', marginBottom: '18px' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '18px', color: '#0f274a', margin: '0 0 10px' }}>
                    <span data-l="en">Message Us</span>
                    <span data-l="id">Hubungi Kami</span>
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                    <span data-l="en">Send us your dates, group size and which trip you have in mind. WhatsApp is fastest, and we usually reply within the hour.</span>
                    <span data-l="id">Kirimkan tanggal, jumlah peserta, dan paket trip yang diinginkan. WhatsApp paling cepat, dan kami membalas dalam hitungan menit.</span>
                  </p>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '14px', padding: '36px 24px 30px', boxShadow: '0 4px 18px rgba(15, 26, 48, 0.05)', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ position: 'absolute', top: '18px', left: '24px', fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: '34px', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>2</span>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#0f274a', display: 'grid', placeItems: 'center', color: '#ffffff', marginBottom: '18px' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '18px', color: '#0f274a', margin: '0 0 10px' }}>
                    <span data-l="en">We Confirm the Details</span>
                    <span data-l="id">Kami Konfirmasi Detailnya</span>
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                    <span data-l="en">We check availability, adjust the itinerary if you want something different, and send you the full plan with timings and price.</span>
                    <span data-l="id">Kami cek ketersediaan, sesuaikan jadwal sesuai keinginan Anda, dan kirimkan rencana lengkap beserta rincian waktu dan harga.</span>
                  </p>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '14px', padding: '36px 24px 30px', boxShadow: '0 4px 18px rgba(15, 26, 48, 0.05)', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ position: 'absolute', top: '18px', left: '24px', fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: '34px', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>3</span>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#0f274a', display: 'grid', placeItems: 'center', color: '#ffffff', marginBottom: '18px' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 17h20M2 7h20"></path></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '18px', color: '#0f274a', margin: '0 0 10px' }}>
                    <span data-l="en">Show Up and Get In</span>
                    <span data-l="id">Datang dan Nikmati Trip</span>
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                    <span data-l="en">Transfer, boat, gear, park permit, guide and lunch are all arranged. You just need to turn up ready to get in the water.</span>
                    <span data-l="id">Antar jemput, perahu, alat, tiket taman nasional, pemandu, dan makan siang sudah siap. Anda tinggal datang siap menyelam.</span>
                  </p>
                </div>
              </div>

              {/* Part 2: Why Book With Us */}
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 36px)', color: '#0f274a', margin: '0 0 8px' }}>
                  <span data-l="en">Why Book With Us</span>
                  <span data-l="id">Mengapa Memilih Kami</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', margin: 0 }}>
                  <span data-l="en">What you get on every trip, without asking for it.</span>
                  <span data-l="id">Kelebihan dan jaminan kenyamanan di setiap perjalanan Anda.</span>
                </p>
              </div>

              {/* 6 Feature Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">Not a Middleman</span>
                      <span data-l="id">Langsung Operator, Bukan Perantara</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">We are based on this coast and run the trips ourselves. No agency markup, no handing you over to someone else at the harbour.</span>
                      <span data-l="id">Kami berbasis langsung di pesisir ini dan menjalankan trip sendiri. Tanpa biaya perantara, tanpa dioper ke pihak lain di dermaga.</span>
                    </p>
                  </div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">Safety First, Always</span>
                      <span data-l="id">Keselamatan Selalu Utama</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">Life jackets for everyone, a briefing before you enter, and a guide in the water with the group the whole time. Non-swimmers welcome.</span>
                      <span data-l="id">Pelampung untuk semua, briefing sebelum masuk air, dan pemandu mendampingi di air sepanjang waktu. Ramah pemula.</span>
                    </p>
                  </div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">Small Groups</span>
                      <span data-l="id">Grup Kecil &amp; Eksklusif</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">Maximum ten people per boat, and two divers per guide on dive trips. You get attention in the water, not a queue.</span>
                      <span data-l="id">Maksimal 10 orang per perahu, dan 2 penyelam per pemandu untuk trip diving. Perhatian penuh di air tanpa antre.</span>
                    </p>
                  </div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">One Price, Everything In</span>
                      <span data-l="id">Satu Harga, Semua Termasuk</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">Boat, national park entrance, gear, guide, lunch and insurance are all in the quoted price. Nothing gets added at the jetty.</span>
                      <span data-l="id">Perahu, tiket taman nasional, alat, pemandu, makan siang, dan asuransi sudah termasuk. Bebas biaya tambahan.</span>
                    </p>
                  </div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 17h20M2 7h20"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">The Right Sites, Not the Nearest</span>
                      <span data-l="id">Spot Terbaik, Bukan yang Terdekat</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">Eleven dive sites around the island and conditions that change daily. We pick where to take you on the morning, not from a fixed list.</span>
                      <span data-l="id">11 titik selam di sekitar pulau dengan kondisi dinamis. Kami memilih spot terbaik di pagi hari sesuai kondisi laut.</span>
                    </p>
                  </div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '22px 20px', boxShadow: '0 3px 14px rgba(15, 26, 48, 0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', margin: '0 0 6px' }}>
                      <span data-l="en">Private or Share, Year Round</span>
                      <span data-l="id">Trip Privat atau Bersama, Sepanjang Tahun</span>
                    </h4>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#475569', margin: 0 }}>
                      <span data-l="en">Share boats leave at 9am daily. Private trips run any time between 7am and 3pm, including last-minute bookings.</span>
                      <span data-l="id">Trip bersama berangkat jam 09.00 WITA setiap hari. Trip privat fleksibel berangkat kapan saja antara 07.00–15.00 WITA.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div style={{ display: 'grid', justifyItems: 'center', gap: '10px', marginTop: '48px' }}>
                <a
                  className="cta"
                  href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                  </svg>
                  <span data-l="en">Start Step 1: Message Us on WhatsApp</span>
                  <span data-l="id">Mulai Langkah 1: Hubungi via WhatsApp</span>
                </a>
                <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                  <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                  <span>
                    <span data-l="en">Free consultation · No upfront commitment</span>
                    <span data-l="id">Konsultasi gratis · Tanpa komitmen di awal</span>
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* As featured on and trusted by Section */}
          <section id="featured-trusted-by" style={{ background: '#f8fafc', padding: '56px 24px 48px', borderBottom: '1px solid var(--color-divider)', textAlign: 'center' }}>
            <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#0f274a', margin: '0 0 10px' }}>
                <span data-l="en">As featured on and trusted by</span>
                <span data-l="id">Telah Diliput dan Dipercaya Oleh</span>
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', margin: '0 0 36px' }}>
                <span data-l="en">Thousands of travellers have found Menjangan Island through us. Here is where they found us first.</span>
                <span data-l="id">Ribuan wisatawan telah menemukan Pulau Menjangan bersama kami. Di sinilah mereka pertama kali menemukan kami.</span>
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(24px, 4vw, 56px)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.2s ease' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                  </div>
                  <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '19px', color: '#0f274a', letterSpacing: '-0.02em' }}>Tripadvisor</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.2s ease' }}>
                  <img src="/uploads/wp/Bali-Untold-Logo-Final-1-300x90-1.webp" alt="Bali Untold" width={107} height={32} loading="lazy" decoding="async" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.2s ease' }}>
                  <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 900, fontSize: '23px', color: '#0f274a', letterSpacing: '-0.04em' }}>TRAppe<span style={{ color: '#2563eb' }}>.</span></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.2s ease' }}>
                  <img src="/uploads/wp/GetYourGuide_Logo.svg_.webp" alt="GetYourGuide" width={150} height={38} loading="lazy" decoding="async" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.2s ease' }}>
                  <img src="/uploads/wp/yandexmaps-removebg-previewnorm.webp" alt="Yandex Maps" width={120} height={32} loading="lazy" decoding="async" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </section>

          {/* More from Tripadvisor Section (10 Cards Carousel) */}
          <section id="more-tripadvisor-reviews" style={{ background: '#eef6fc', padding: '64px 24px 72px', borderBottom: '1px solid var(--color-divider)' }}>
            <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', color: '#0f274a', margin: '0 0 8px' }}>
                  <span data-l="en">More from Tripadvisor</span>
                  <span data-l="id">Lebih Banyak dari Tripadvisor</span>
                </h2>
                <p style={{ fontSize: '14.5px', color: '#475569', margin: '0 0 24px' }}>
                  <span data-l="en">Another 200+ reviews from travellers who have been out on the water with us.</span>
                  <span data-l="id">200+ ulasan lainnya dari wisatawan yang telah berpetualang di laut bersama kami.</span>
                </p>

                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '15px', color: '#0f274a', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    EXCELLENT
                  </div>
                  <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', marginBottom: '6px' }}>
                    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '8px' }}>
                    <span data-l="en">Based on 193 reviews</span>
                    <span data-l="id">Berdasarkan 193 ulasan</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0f274a', fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '14.5px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff' }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                    </div>
                    <span>Tripadvisor</span>
                  </div>
                </div>
              </div>

              {/* 10-Card Carousel Track */}
              <div style={{ position: 'relative', maxWidth: '1160px', margin: '0 auto' }}>
                <button
                  id="ta-prev-btn"
                  type="button"
                  aria-label="Previous Tripadvisor review"
                  className="rev-arrow-btn rev-arrow-prev"
                  onClick={() => scrollTa('prev')}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <div id="ta-cards-carousel" className="ta-cards-track" ref={taTrackRef}>
                  {/* Card 1: Isabelle S */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/issabela s.webp" alt="Isabelle S avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Isabelle S</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Superbe sortie snorkeling !</strong> Deux spots magnifiques remplis de poissons colorés.Le guide Putu était vraiment au top, t...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 2: ahn */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/ahn.webp" alt="ahn avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>ahn</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Make your perfect day!</strong> It was a truly perfect trip! They helped us find so many beautiful corals, fish, and turtles, and the...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 3: Baukje d */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/belle-w.webp" alt="Baukje d avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Baukje d</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Highly recommended</strong> Highly recommend this organisation, great snorkelling trip with respect to nature. Using...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 4: Torste */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/dani fee.webp" alt="Torste avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Torste</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Ein absolutes Highlight !</strong> Ein unvergessliches Schnorchelerlebnis rund um Menjangan Island – absolute...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 5: nicole p */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/fanny-s.webp" alt="nicole p avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>nicole p</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Journée enchantée</strong> Mon conjoint, mon frère et ma fille de 5 ans avons passé une superbe journée 🤩 Snorkeling Mejangan...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 6: Thomas L */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/jarin wa.webp" alt="Thomas L avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Thomas L</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Memories from Bali</strong> Really good expérience Really good picture too for the memories
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 7: Sylvie F */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/severine.webp" alt="Sylvie F avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Sylvie F</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Magnifique sortie en famille</strong> Snorkeling Menjangan Island Nous avons passé un merveilleux moment en famille de snorkeling à...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 8: Achille S */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/elin giorgina.webp" alt="Achille S avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Achille S</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      Les guides sont très bienveillants, ils prennent le temps de biens expliquer les consignes et sont toujours à l'écoute...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 9: Cecilia A */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/maria grando.webp" alt="Cecilia A avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Cecilia A</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Excellent snorkeling at Menjangan Island</strong> Amazing experience at Menjangan Island! The underwater world was...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>

                  {/* Card 10: Linda W */}
                  <div className="ta-card-item">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/testimoni1/dorota-bi.webp" alt="Linda W avatar" loading="lazy" decoding="async" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '13.5px', color: '#0f274a' }}>Linda W</span>
                      </div>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00aa6c', display: 'grid', placeItems: 'center', color: '#ffffff', flexShrink: 0 }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa6c', display: 'inline-block' }}></span>
                      </div>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    </div>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#334155', margin: '0 0 12px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <strong style={{ color: '#0f274a' }}>Outstanding Value</strong> Pick up and return journey went smoothly. Staff were punctual, efficient, professional and very...
                    </p>
                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="rev-read-more">Read more</a>
                  </div>
                </div>

                <button
                  id="ta-next-btn"
                  type="button"
                  aria-label="Next Tripadvisor review"
                  className="rev-arrow-btn rev-arrow-next"
                  onClick={() => scrollTa('next')}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>

              {/* WhatsApp CTA Button */}
              <div style={{ display: 'grid', justifyItems: 'center', gap: '10px', marginTop: '36px' }}>
                <a
                  className="cta"
                  href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20Menjangan%20Island%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                  </svg>
                  <span data-l="en">Check Trip Dates &amp; Availability</span>
                  <span data-l="id">Cek Tanggal &amp; Ketersediaan Trip</span>
                </a>
                <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                  <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                  <span>
                    <span data-l="en">Top rated on Tripadvisor · Instant booking confirmation</span>
                    <span data-l="id">Peringkat teratas di Tripadvisor · Konfirmasi instan</span>
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions Section */}
          <section id="faq" style={{ background: '#f0f7fc', padding: '68px 24px 76px', borderBottom: '1px solid var(--color-divider)' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3.2vw, 36px)', color: '#0f274a', margin: '0 0 10px' }}>
                  <span data-l="en">Frequently Asked Questions</span>
                  <span data-l="id">Pertanyaan yang Sering Diajukan</span>
                </h2>
                <p style={{ fontSize: '14.5px', color: '#475569', margin: 0 }}>
                  <span data-l="en">The things people ask us most before booking. Anything else, just message us.</span>
                  <span data-l="id">Hal-hal yang paling sering ditanyakan sebelum memesan. Ada pertanyaan lain? Hubungi kami langsung.</span>
                </p>
              </div>

              <div>
                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Do I need to be able to swim?</span><span data-l="id">Apakah saya harus bisa berenang?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">No, you don't need to be able to swim. For snorkeling trips, we provide properly fitted life jackets and our guides stay in the water with you at all times holding a safety float ring. For first-time divers (Discovery Scuba Diving), your certified instructor stays right beside you the whole time controlling your buoyancy and movement.</span>
                    <span data-l="id">Tidak, Anda tidak harus bisa berenang. Untuk trip snorkeling, kami menyediakan pelampung pas badan dan pemandu kami selalu mendampingi Anda di air dengan ban pelampung keselamatan. Untuk pemula yang ingin mencoba diving (Discovery Scuba Diving), instruktur bersertifikat akan mendampingi langsung dan mengatur peralatan serta pergerakan Anda.</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Do I need a diving certificate?</span><span data-l="id">Apakah saya memerlukan sertifikat menyelam?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">You only need a certificate (Open Water Diver or higher) for the certified Scuba Diving package. For Snorkeling and Discovery Scuba Diving (Try Scuba), no certification or prior experience is required at all.</span>
                    <span data-l="id">Anda hanya membutuhkan sertifikat selam (Open Water Diver ke atas) untuk paket Certified Scuba Diving. Untuk Snorkeling dan Discovery Scuba Diving (Try Scuba), sama sekali tidak memerlukan sertifikasi ataupun pengalaman sebelumnya.</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Where are you based, and where does the boat leave from?</span><span data-l="id">Di mana lokasi Anda, dan dari mana perahu berangkat?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">We are based in Pejarakan / Banyuwedang on the West Bali coast road. All our boat trips depart directly from Banyuwedang Harbour, which is the closest harbor to Menjangan Island (about a 25–30 minute boat ride).</span>
                    <span data-l="id">Kami berbasis di Pejarakan / Banyuwedang di jalur pesisir Bali Barat. Semua perahu kami berangkat langsung dari Pelabuhan Banyuwedang, pelabuhan terdekat menuju Pulau Menjangan (sekitar 25–30 menit perjalanan perahu).</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Is hotel pick-up included?</span><span data-l="id">Apakah antar-jemput hotel sudah termasuk?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">Yes, free return hotel pick-up is included for all accommodations in the Pemuteran and Banyuwedang areas. If you are staying further away (such as Lovina, Munduk, or South Bali), we can easily arrange private car transfers for a small additional fee.</span>
                    <span data-l="id">Ya, antar-jemput hotel pulang-pergi gratis sudah termasuk untuk seluruh penginapan di area Pemuteran dan Banyuwedang. Jika Anda menginap lebih jauh (seperti Lovina, Munduk, atau Bali Selatan), kami dapat mengatur transfer mobil privat dengan biaya tambahan terjangkau.</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Is Menjangan Island suitable for families with children?</span><span data-l="id">Apakah Pulau Menjangan cocok untuk keluarga dengan anak-anak?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">Absolutely. The waters around Menjangan Island are calm with gentle currents and exceptionally clear visibility, making it one of the best and safest snorkeling spots in Bali for kids and families. Children also love meeting the wild deer on the island's white sandy beaches!</span>
                    <span data-l="id">Sangat cocok. Perairan di sekitar Pulau Menjangan sangat tenang dengan arus lembut dan visibilitas yang sangat jernih, menjadikannya salah satu spot snorkeling teraman dan terbaik di Bali untuk anak-anak dan keluarga. Anak-anak juga sangat senang bertemu rusa liar di pantai pasir putih pulau!</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">When is the best time to visit?</span><span data-l="id">Kapan waktu terbaik untuk berkunjung?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">Menjangan Island can be visited year-round thanks to its sheltered location. The dry season from April to November generally offers the calmest seas and best underwater visibility (often 20–30+ metres), but good trips run throughout the entire year. Shared boats depart daily at 9:00 AM.</span>
                    <span data-l="id">Pulau Menjangan dapat dikunjungi sepanjang tahun karena lokasinya yang terlindung. Musim kemarau dari April hingga November umumnya menawarkan laut paling tenang dan visibilitas bawah laut terbaik (hingga 20–30+ meter), namun trip tetap berjalan lancar sepanjang tahun. Perahu bersama berangkat setiap hari pukul 09.00 WITA.</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">Are your guides experienced?</span><span data-l="id">Apakah pemandu Anda berpengalaman?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">Yes. All our guides and divemasters are local professionals who grew up along this coast with 10+ years of experience on Menjangan's reefs. They are officially certified, trained in first aid and safety, and know every reef wall and sea life habit around the island.</span>
                    <span data-l="id">Ya. Seluruh pemandu dan divemaster kami adalah tenaga profesional lokal yang tumbuh besar di pesisir ini dengan 10+ tahun pengalaman di terumbu karang Menjangan. Mereka berlisensi resmi, terlatih dalam keselamatan & P3K, serta sangat memahami setiap titik selam dan biota laut di sekitar pulau.</span>
                  </div>
                </details>

                <details className="faq-accordion-item">
                  <summary className="faq-accordion-summary">
                    <span><span data-l="en">How do I book, and can I have a private trip?</span><span data-l="id">Bagaimana cara memesan, dan bisakah pesan trip privat?</span></span>
                    <span className="faq-accordion-icon">+</span>
                  </summary>
                  <div className="faq-accordion-body">
                    <span data-l="en">Booking is simple—just send us a message via WhatsApp with your preferred date, number of people, and package. We confirm your booking quickly without hidden fees. Both daily shared boats (9:00 AM) and flexible private boat charters (departing anytime from 7:00 AM to 3:00 PM) are available.</span>
                    <span data-l="id">Pemesanan sangat mudah—cukup kirim pesan melalui WhatsApp berisi tanggal, jumlah peserta, dan pilihan paket. Kami akan mengonfirmasi dengan cepat tanpa biaya tersembunyi. Tersedia opsi perahu bersama (berangkat 09.00 WITA) maupun perahu privat fleksibel (berangkat kapan saja antara 07.00–15.00 WITA).</span>
                  </div>
                </details>
              </div>

              {/* WhatsApp CTA Button */}
              <div style={{ display: 'grid', justifyItems: 'center', gap: '10px', marginTop: '40px' }}>
                <a
                  className="cta"
                  href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20have%20a%20question%20about%20the%20Menjangan%20Island%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '21px', height: '21px', flex: 'none' }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                  </svg>
                  <span data-l="en">Have Another Question? Ask Us on WhatsApp</span>
                  <span data-l="id">Punya Pertanyaan Lain? Tanya Kami di WhatsApp</span>
                </a>
                <span className="micro" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px', fontSize: '12px', fontWeight: 600, color: '#48536b' }}>
                  <span style={{ color: '#FFC107', letterSpacing: '1px' }}>★★★★★</span>
                  <span>
                    <span data-l="en">Friendly local support · Direct answer from our team</span>
                    <span data-l="id">Layanan ramah · Jawaban langsung dari tim kami</span>
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* Ready to see it for yourself? Section */}
          <section id="final-cta" style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
            <img src="/new/menjanganislandtrip.webp" alt="Menjangan Island coral and scuba diver" width={1920} height={1080} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10, 25, 48, 0.2) 0%, rgba(10, 25, 48, 0.7) 45%, rgba(10, 25, 48, 0.92) 100%)' }}></div>
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '1160px', width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ maxWidth: '520px', color: '#ffffff' }}>
                <h2 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 46px)', lineHeight: 1.15, color: '#ffffff', margin: '0 0 16px' }}>
                  <span data-l="en">Ready to see it for yourself?</span>
                  <span data-l="id">Siap Menyaksikan Keindahannya Sendiri?</span>
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 28px' }}>
                  <span data-l="en">Tell us your dates and we will do the rest. Boat, gear, park permit, guide and lunch are all arranged before you arrive.</span>
                  <span data-l="id">Kirimkan tanggal Anda dan kami akan siapkan sisanya. Perahu, alat, tiket taman, pemandu, dan makan siang sudah siap sebelum Anda tiba.</span>
                </p>
                <div>
                  <a
                    id="btn-final-cta-wa"
                    href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25d366', color: '#ffffff', padding: '14px 28px', borderRadius: '8px', fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 4px 18px rgba(37, 211, 102, 0.35)', transition: 'transform 0.15s, background 0.15s' }}
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                    </svg>
                    <span data-l="en">Book via WhatsApp</span>
                    <span data-l="id">Booking via WhatsApp</span>
                  </a>
                </div>
                <div style={{ marginTop: '20px', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  <span data-l="en">Free pickup along the coast · Small groups · No booking fee</span>
                  <span data-l="id">Antar jemput gratis di sepanjang pesisir · Grup kecil · Tanpa biaya pemesanan</span>
                </div>
              </div>
            </div>
          </section>
      {/* Modern Dark Navy Footer */}
        <footer style={{ background: '#103860', color: '#ffffff', padding: '68px 24px 36px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start', marginBottom: '56px' }}>
              <div>
                <a href="#top" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '18px' }}>
                  <img src="/new/New-Logo-Menjangan-Snorkeling-Trip-Diving-putih.webp" alt="Menjangan Snorkeling Trip &amp; Diving" width={240} height={68} loading="lazy" decoding="async" style={{ height: '68px', width: 'auto', display: 'block' }} />
                </a>

                <h3 style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 800, fontSize: '14.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', margin: '0 0 12px' }}>
                  MENJANGAN SNORKELING TRIP &amp; DIVING
                </h3>

                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#cbd5e1', margin: '0 0 24px', maxWidth: '480px' }}>
                  <span data-l="en">A licensed local operator on the north-west coast of Bali, running snorkeling and scuba diving trips at Menjangan Island.</span>
                  <span data-l="id">Operator lokal berlisensi resmi di pesisir barat laut Bali, melayani trip snorkeling dan scuba diving di Pulau Menjangan.</span>
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#cbd5e1' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" /></svg>
                    <span>Jl. Banyuwedang, Banjar Dinas Batu Ampar, Pejarakan, Gerokgak, Buleleng, Bali 81155</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <a href="https://wa.me/6281238578042" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+62 812-3857-8042</a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <a href="https://www.instagram.com/menjanganislandtrip/" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none' }}>@menjanganislandtrip</a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>
                      <span data-l="en">Departures from Banyuwedang Harbour · shared boat 9:00 daily · private trips 7:00–15:00</span>
                      <span data-l="id">Keberangkatan dari Pelabuhan Banyuwedang · perahu bersama 09.00 setiap hari · trip privat 07.00–15.00</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Google Maps Embed Card */}
              <div style={{ background: '#ffffff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 6px 24px rgba(0, 0, 0, 0.28)', height: '290px', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.722668351543!2d114.5701623!3d-8.138403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd167098485295f%3A0xcc7667d0a2732e88!2sMenjangan%20Snorkeling%20Trip%20%26%20Diving!5e0!3m2!1sen!2sid!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Menjangan Snorkeling Trip &amp; Diving Location Map"
                ></iframe>
              </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', fontSize: '12.5px', color: '#94a3b8' }}>
              <div>
                &copy; 2026 Menjangan Snorkeling Trip &amp; Diving. All rights reserved.
              </div>
              <div>
                <span data-l="en">Licensed operator · Insured · Max 10 guests per boat</span>
                <span data-l="id">Operator berlisensi · Berasuransi · Maks 10 tamu per perahu</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp CTA */}
        <a
          id="whatsapp-button"
          href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 60, width: '60px', height: '60px', borderRadius: '50%', background: '#25D366', display: 'grid', placeItems: 'center', boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)', textDecoration: 'none' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '40px', height: '40px', flex: 'none', fill: '#FFFFFF' }}>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
          </svg>
        </a>
    </>
  );
}
