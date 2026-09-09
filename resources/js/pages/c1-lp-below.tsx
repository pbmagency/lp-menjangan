import type { MouseEventHandler } from 'react';

type C1BelowFoldProps = {
    showMoreReviews: MouseEventHandler<HTMLButtonElement>;
};

export default function C1BelowFold({ showMoreReviews }: C1BelowFoldProps) {
    return (
        <>
                <div
                    style={{
                        borderBottom: '1px solid var(--line)',
                        background: '#FFFFFF',
                        padding: '26px 24px',
                    }}
                >
                    <blockquote
                        className="wrap"
                        style={{
                            margin: '0',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '14px',
                            maxWidth: '900px',
                            textAlign: 'left',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '800',
                                fontSize: '38px',
                                lineHeight: '0.8',
                                color: 'var(--brand)',
                                flex: 'none',
                            }}
                        >
                            “
                        </span>
                        <span
                            style={{
                                fontSize: '15px',
                                lineHeight: '1.6',
                                color: 'var(--body)',
                            }}
                        >
                            <span data-l="en">
                                Menjangan Snorkeling Trip &amp; Diving is the
                                only locally owned tour operator in Banyuwedang
                                with an officially licensed Diving Center permit
                                and Jasa Raharja insurance coverage.
                            </span>
                            <span data-l="id">
                                Menjangan Snorkeling Trip &amp; Diving adalah
                                satu-satunya operator tur milik warga lokal di
                                Banyuwedang yang memiliki izin Diving Center
                                resmi dan perlindungan asuransi Jasa Raharja.
                            </span>
                        </span>
                    </blockquote>
                </div>

                <div
                    style={{
                        borderBottom: '1px solid var(--line)',
                        background: 'var(--wash)',
                        padding: '22px 24px',
                    }}
                >
                    <div
                        className="wrap"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '18px 34px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '11px',
                                fontWeight: '800',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--body)',
                            }}
                        >
                            <span data-l="en">Trusted by</span>
                            <span data-l="id">Dipercaya oleh</span>
                        </span>
                        <img
                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/logo.svg"
                            alt="Tripadvisor"
                            width={120}
                            height={26}
                            loading="lazy"
                            decoding="async"
                            style={{
                                height: '26px',
                                width: 'auto',
                                opacity: '0.75',
                            }}
                        />
                        <img
                            src="https://menjanganislandtrip.com/wp-content/uploads/2026/08/GetYourGuide_Logo.svg_.webp"
                            alt="GetYourGuide"
                            width={140}
                            height={28}
                            loading="lazy"
                            decoding="async"
                            style={{
                                height: '28px',
                                width: 'auto',
                                opacity: '0.75',
                            }}
                        />
                        <img
                            src="https://menjanganislandtrip.com/wp-content/uploads/2026/08/Bali-Untold-Logo-Final-1-300x90-1.webp"
                            alt="Bali Untold"
                            width={100}
                            height={30}
                            loading="lazy"
                            decoding="async"
                            style={{
                                height: '30px',
                                width: 'auto',
                                opacity: '0.75',
                            }}
                        />
                        <img
                            src="/uploads/wp/yandexmaps-removebg-previewnorm.webp"
                            alt="Yandex Maps"
                            width={120}
                            height={26}
                            loading="lazy"
                            decoding="async"
                            style={{
                                height: '26px',
                                width: 'auto',
                                opacity: '0.75',
                            }}
                        />
                    </div>
                </div>

                <section className="sec" style={{ background: '#FFFFFF' }}>
                    <div className="wrap">
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            <span data-l="en">The problem</span>
                            <span data-l="id">Masalahnya</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 3.4vw, 44px)',
                                maxWidth: '26ch',
                                marginBottom: '14px',
                            }}
                        >
                            <span data-l="en">
                                Most Menjangan Trips Go Wrong Before Anyone
                                Reaches the Water
                            </span>
                            <span data-l="id">
                                Banyak Trip Menjangan Bermasalah Sebelum Tamu
                                Sampai ke Air
                            </span>
                        </h2>
                        <p
                            style={{
                                maxWidth: '56ch',
                                fontSize: '16px',
                                color: 'var(--body)',
                                marginBottom: '30px',
                            }}
                        >
                            <span data-l="en">
                                You came to see the reef, not to chase quotes
                                and fees. This is how most people lose the day
                                instead.
                            </span>
                            <span data-l="id">
                                Anda datang untuk melihat reef, bukan mengejar
                                harga dan biaya tambahan. Beginilah cara banyak
                                orang justru kehilangan harinya.
                            </span>
                        </p>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '24px',
                                alignItems: 'start',
                            }}
                        >
                            <picture style={{ display: 'block' }}>
                                <source
                                    type="image/avif"
                                    srcSet="/c1/problem-reef-480.avif 480w, /c1/problem-reef-800.avif 800w"
                                    sizes="(max-width: 900px) calc(100vw - 36px), 50vw"
                                />
                                <img
                                    src="/c1/problem-reef.webp"
                                    alt="Coral reef and fish at Menjangan Island"
                                    width={800}
                                    height={600}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        minHeight: '300px',
                                        objectFit: 'cover',
                                        borderRadius: '14px',
                                    }}
                                />
                            </picture>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit, minmax(220px, 1fr))',
                                    gap: '18px',
                                }}
                            >
                                <div
                                    className="card"
                                    style={{ borderTop: '4px solid #d9534f' }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '17px',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span data-l="en">Slow replies</span>
                                        <span data-l="id">Balasan lambat</span>
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <span data-l="en">
                                            Long forms, a reply tomorrow, boat
                                            already full, and your one free day
                                            is gone.
                                        </span>
                                        <span data-l="id">
                                            Formulir panjang, balasan besok,
                                            boat sudah penuh, dan satu hari
                                            bebas Anda habis.
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className="card"
                                    style={{ borderTop: '4px solid #d9534f' }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '17px',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Hidden extra costs
                                        </span>
                                        <span data-l="id">
                                            Biaya tambahan tersembunyi
                                        </span>
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <span data-l="en">
                                            The quote looked cheap, then the
                                            park fee, gear, lunch and transfer
                                            arrive one by one.
                                        </span>
                                        <span data-l="id">
                                            Harganya terlihat murah, lalu izin
                                            taman nasional, alat, makan siang
                                            dan transfer datang satu per satu.
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className="card"
                                    style={{ borderTop: '4px solid #d9534f' }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '17px',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Crowded boats, no guide in the water
                                        </span>
                                        <span data-l="id">
                                            Boat penuh, guide tidak di air
                                        </span>
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <span data-l="en">
                                            A packed boat, the guide stays on
                                            deck, and you go home without seeing
                                            a single turtle.
                                        </span>
                                        <span data-l="id">
                                            Boat penuh, guide tinggal di dek,
                                            dan Anda pulang tanpa melihat satu
                                            penyu pun.
                                        </span>
                                    </p>
                                </div>
                                <div
                                    className="card"
                                    style={{ borderTop: '4px solid #d9534f' }}
                                >
                                    <h4
                                        style={{
                                            fontSize: '17px',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <span data-l="en">
                                            No clear answer on safety
                                        </span>
                                        <span data-l="id">
                                            Tidak ada jawaban jelas soal
                                            keamanan
                                        </span>
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <span data-l="en">
                                            You say you cannot swim, and nobody
                                            answers straight about life jackets
                                            or insurance.
                                        </span>
                                        <span data-l="id">
                                            Anda bilang tidak bisa berenang, dan
                                            tidak ada jawaban lugas soal life
                                            jacket atau asuransi.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20a%20straight%20answer%20on%20price%20and%20availability%20for%20Menjangan%20Island."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Ask Us Directly on WhatsApp
                                </span>
                                <span data-l="id">
                                    Tanya Langsung via WhatsApp
                                </span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    className="sec"
                    style={{ background: 'var(--brand)', color: '#FFFFFF' }}
                >
                    <div
                        className="wrap"
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '44px',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <div
                                className="kicker"
                                style={{
                                    color: '#a9bde0',
                                    marginBottom: '12px',
                                }}
                            >
                                <span data-l="en">The solution</span>
                                <span data-l="id">Solusinya</span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(28px, 3.4vw, 44px)',
                                    color: '#FFFFFF',
                                    maxWidth: '22ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    You Message Us. We Handle the Whole Day.
                                </span>
                                <span data-l="id">
                                    Anda Chat Kami. Sisanya Kami yang Urus.
                                </span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: '#dbe2ee',
                                    maxWidth: '50ch',
                                    marginBottom: '26px',
                                }}
                            >
                                <span data-l="en">
                                    These are our own boats and our own guides,
                                    so you deal with the people who actually
                                    take you out. Here is what that changes for
                                    you.
                                </span>
                                <span data-l="id">
                                    Ini boat kami sendiri dan guide kami
                                    sendiri, jadi Anda berhubungan langsung
                                    dengan orang yang membawa Anda ke laut.
                                    Inilah bedanya untuk Anda.
                                </span>
                            </p>
                            <div
                                style={{
                                    display: 'grid',
                                    gap: '14px',
                                    marginBottom: '28px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <span
                                        style={{
                                            flex: 'none',
                                            width: '26px',
                                            height: '26px',
                                            borderRadius: '50%',
                                            background: 'var(--cta)',
                                            color: '#FFFFFF',
                                            display: 'grid',
                                            placeItems: 'center',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        <span data-l="en">
                                            You bring nothing and pay nothing
                                            extra, right down to lunch and the
                                            park fee
                                        </span>
                                        <span data-l="id">
                                            Anda tidak perlu membawa apa pun dan
                                            tidak ada biaya tambahan, sampai
                                            makan siang dan izin taman nasional
                                        </span>
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <span
                                        style={{
                                            flex: 'none',
                                            width: '26px',
                                            height: '26px',
                                            borderRadius: '50%',
                                            background: 'var(--cta)',
                                            color: '#FFFFFF',
                                            display: 'grid',
                                            placeItems: 'center',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        <span data-l="en">
                                            A guide beside you in the water who
                                            finds the turtles and takes your
                                            photos
                                        </span>
                                        <span data-l="id">
                                            Guide mendampingi di air, mencarikan
                                            penyu dan mengambil foto Anda
                                        </span>
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <span
                                        style={{
                                            flex: 'none',
                                            width: '26px',
                                            height: '26px',
                                            borderRadius: '50%',
                                            background: 'var(--cta)',
                                            color: '#FFFFFF',
                                            display: 'grid',
                                            placeItems: 'center',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        <span data-l="en">
                                            Nervous or cannot swim? People like
                                            you get in the water with us every
                                            day
                                        </span>
                                        <span data-l="id">
                                            Ragu atau tidak bisa berenang? Tamu
                                            seperti Anda masuk air bersama kami
                                            setiap hari
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyItems: 'start',
                                    gap: '10px',
                                }}
                            >
                                <a
                                    className="cta"
                                    href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20the%20price%20and%20availability%20for%20a%20Menjangan%20Island%20trip."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        style={{
                                            width: '21px',
                                            height: '21px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                    </svg>
                                    <span data-l="en">
                                        Ask About Your Dates
                                    </span>
                                    <span data-l="id">Tanya Tanggal Anda</span>
                                </a>
                                <span
                                    className="micro"
                                    style={{ color: '#cfd8ea' }}
                                >
                                    <span className="st">★★★★★</span>
                                    <span>
                                        <span data-l="en">
                                            5-star reviews · Insurance 100% ·
                                            Licensed operator
                                        </span>
                                        <span data-l="id">
                                            Ulasan bintang 5 · Asuransi 100% ·
                                            Operator berlisensi
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '12px',
                            }}
                        >
                            <img
                                src="/uploads/wp/GOPR9465-scaled-1.webp"
                                alt="Coral garden at Menjangan Island"
                                width={600}
                                height={300}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '180px',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                    gridColumn: 'span 2',
                                }}
                            />
                            <img
                                src="/uploads/wp/Turtles-Menjangan-Island-350x350.webp"
                                alt="Turtle at Menjangan Island"
                                width={350}
                                height={170}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: '170px',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                            <img
                                src="/uploads/wp/GOPR9548-scaled-1.webp"
                                alt="Diver along the reef wall"
                                width={480}
                                height={170}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: '170px',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="trips"
                    className="sec"
                    style={{
                        background: 'var(--wash)',
                        borderBottom: '1px solid var(--line)',
                    }}
                >
                    <div className="wrap">
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            <span data-l="en">Choose your trip</span>
                            <span data-l="id">Pilih trip Anda</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 3.4vw, 44px)',
                                maxWidth: '24ch',
                                marginBottom: '14px',
                            }}
                        >
                            <span data-l="en">
                                Three Ways Into the Water. Pick by Experience,
                                Not by Price.
                            </span>
                            <span data-l="id">
                                Tiga Cara Masuk ke Air. Pilih Sesuai Pengalaman,
                                Bukan Harga.
                            </span>
                        </h2>
                        <p
                            style={{
                                maxWidth: '56ch',
                                fontSize: '16px',
                                color: 'var(--body)',
                                marginBottom: '30px',
                            }}
                        >
                            <span data-l="en">
                                Every trip runs about four hours, includes lunch
                                on the beach, and never carries more than ten
                                guests.
                            </span>
                            <span data-l="id">
                                Setiap trip berlangsung sekitar empat jam,
                                termasuk makan siang di pantai, dan tidak pernah
                                membawa lebih dari sepuluh tamu.
                            </span>
                        </p>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(290px, 1fr))',
                                gap: '22px',
                            }}
                        >
                            <a
                                href="#snorkeling"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow:
                                        '0 4px 16px rgba(23, 35, 63, 0.07)',
                                    display: 'grid',
                                }}
                            >
                                <img
                                    src="/uploads/wp/GOPR9548-scaled-1.webp"
                                    alt="Snorkeling above the reef at Menjangan"
                                    width={480}
                                    height={200}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div style={{ padding: '22px' }}>
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        01 Snorkeling
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '22px',
                                            margin: '8px 0 10px',
                                        }}
                                    >
                                        <span data-l="en">
                                            For anyone who wants to see the reef
                                        </span>
                                        <span data-l="id">
                                            Untuk siapa pun yang ingin melihat
                                            reef
                                        </span>
                                    </h3>
                                    <ul
                                        style={{
                                            paddingLeft: '18px',
                                            display: 'grid',
                                            gap: '6px',
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <li>
                                            <span data-l="en">
                                                Two reef points, guide in the
                                                water
                                            </span>
                                            <span data-l="id">
                                                Dua titik reef, guide di dalam
                                                air
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                All levels, non-swimmers welcome
                                            </span>
                                            <span data-l="id">
                                                Semua level, non-perenang bisa
                                                ikut
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                Gear, lunch and life jacket
                                                included
                                            </span>
                                            <span data-l="id">
                                                Alat, makan siang dan life
                                                jacket termasuk
                                            </span>
                                        </li>
                                    </ul>
                                    <div
                                        style={{
                                            marginTop: '16px',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        <span data-l="en">
                                            See the snorkeling trip →
                                        </span>
                                        <span data-l="id">
                                            Lihat trip snorkeling →
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#scuba-diving"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow:
                                        '0 4px 16px rgba(23, 35, 63, 0.07)',
                                    display: 'grid',
                                }}
                            >
                                <img
                                    src="/uploads/scuba/new_scuba.webp"
                                    alt="Scuba diving at Menjangan Island"
                                    width={500}
                                    height={200}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div style={{ padding: '22px' }}>
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        02 Scuba Diving
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '22px',
                                            margin: '8px 0 10px',
                                        }}
                                    >
                                        <span data-l="en">
                                            For certified divers, Open Water and
                                            above
                                        </span>
                                        <span data-l="id">
                                            Untuk penyelam bersertifikasi, Open
                                            Water ke atas
                                        </span>
                                    </h3>
                                    <ul
                                        style={{
                                            paddingLeft: '18px',
                                            display: 'grid',
                                            gap: '6px',
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <li>
                                            <span data-l="en">
                                                Two dives, 3 to 25 m, wall and
                                                drift
                                            </span>
                                            <span data-l="id">
                                                Dua kali dive, 3 sampai 25 m,
                                                wall dan drift
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                Eleven sites, visibility to 30 m
                                            </span>
                                            <span data-l="id">
                                                Sebelas dive site, visibility
                                                hingga 30 m
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                Two divers per guide
                                            </span>
                                            <span data-l="id">
                                                Dua penyelam per guide
                                            </span>
                                        </li>
                                    </ul>
                                    <div
                                        style={{
                                            marginTop: '16px',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        <span data-l="en">
                                            See the dive trip →
                                        </span>
                                        <span data-l="id">
                                            Lihat trip diving →
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="#try-scuba"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    background: '#FFFFFF',
                                    border: '2px solid var(--cta)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow:
                                        '0 6px 20px rgba(79, 174, 85, 0.16)',
                                    display: 'grid',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '14px',
                                        left: '14px',
                                        background: 'var(--cta)',
                                        color: '#FFFFFF',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        padding: '6px 10px',
                                        borderRadius: '6px',
                                    }}
                                >
                                    <span data-l="en">Most booked</span>
                                    <span data-l="id">
                                        Paling banyak dipesan
                                    </span>
                                </span>
                                <img
                                    src="/uploads/try_scuba/new_try_scuba.webp"
                                    alt="First-time divers at Menjangan Island"
                                    width={480}
                                    height={200}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div style={{ padding: '22px' }}>
                                    <div
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        03 Try Scuba Diving
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: '22px',
                                            margin: '8px 0 10px',
                                        }}
                                    >
                                        <span data-l="en">
                                            For a first dive, with no
                                            certification
                                        </span>
                                        <span data-l="id">
                                            Untuk dive pertama, tanpa
                                            sertifikasi
                                        </span>
                                    </h3>
                                    <ul
                                        style={{
                                            paddingLeft: '18px',
                                            display: 'grid',
                                            gap: '6px',
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                        }}
                                    >
                                        <li>
                                            <span data-l="en">
                                                Two shallow dives, 3 to 5 m
                                            </span>
                                            <span data-l="id">
                                                Dua dive dangkal, 3 sampai 5 m
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                Instructor beside you throughout
                                            </span>
                                            <span data-l="id">
                                                Instruktur mendampingi sepanjang
                                                dive
                                            </span>
                                        </li>
                                        <li>
                                            <span data-l="en">
                                                No experience, no swimming
                                                needed
                                            </span>
                                            <span data-l="id">
                                                Tanpa pengalaman, tanpa harus
                                                bisa berenang
                                            </span>
                                        </li>
                                    </ul>
                                    <div
                                        style={{
                                            marginTop: '16px',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                            color: 'var(--brand)',
                                        }}
                                    >
                                        <span data-l="en">
                                            See the beginner dive →
                                        </span>
                                        <span data-l="id">
                                            Lihat dive untuk pemula →
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="snorkeling"
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(360px, 1fr))',
                        alignItems: 'stretch',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            minHeight: '520px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/uploads/snorkeling/53EB5B71-90A5-4B43-B247-FCF43536ABBD.webp"
                            alt="Snorkeling at Menjangan Island"
                            width={800}
                            height={600}
                            loading="lazy"
                            decoding="async"
                            style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                padding: '24px',
                                background:
                                    'linear-gradient(180deg, transparent, rgba(15, 26, 48, 0.82))',
                                color: '#FFFFFF',
                                fontSize: '11px',
                                fontWeight: '800',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span data-l="en">
                                Coral garden, inside the national park
                            </span>
                            <span data-l="id">
                                Coral garden, di dalam taman nasional
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: 'clamp(34px, 5vw, 72px)',
                            display: 'grid',
                            alignContent: 'center',
                            gap: '22px',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: 'var(--brand-100)',
                                    borderLeft: '5px solid var(--brand)',
                                    padding: '10px 16px',
                                    marginBottom: '16px',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '20px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    01
                                </span>
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '12px',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand-700)',
                                    }}
                                >
                                    Snorkeling
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 38px)',
                                    maxWidth: '24ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    Snorkeling Menjangan Island: Half-Day Trip,
                                    Everything Included
                                </span>
                                <span data-l="id">
                                    Snorkeling Pulau Menjangan: Trip Setengah
                                    Hari, Semua Termasuk
                                </span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--body)',
                                    maxWidth: '54ch',
                                }}
                            >
                                <span data-l="en">
                                    Crystal-clear turquoise water, vibrant coral
                                    reefs, and the wild deer of Menjangan’s
                                    white-sand beaches.
                                </span>
                                <span data-l="id">
                                    Air turquoise yang jernih, terumbu karang
                                    yang hidup, dan rusa liar di pantai putih
                                    Menjangan.
                                </span>
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '22px',
                            }}
                        >
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">The trip</span>
                                    <span data-l="id">Detail trip</span>
                                </h4>
                                <ul
                                    style={{
                                        paddingLeft: '18px',
                                        display: 'grid',
                                        gap: '7px',
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <li>
                                        <span data-l="en">
                                            Explore two beautiful snorkeling
                                            spots inside the national park
                                        </span>
                                        <span data-l="id">
                                            Menjelajahi dua titik snorkeling
                                            terbaik di dalam taman nasional
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Picnic lunch on the white-sand
                                            beach, with Menjangan’s famous wild
                                            deer roaming nearby
                                        </span>
                                        <span data-l="id">
                                            Makan siang piknik di pantai
                                            berpasir putih, dengan rusa liar
                                            Menjangan yang terkenal di
                                            sekitarnya
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Shared boat departs 9:00 AM daily,
                                            or take a private boat with a
                                            flexible departure time
                                        </span>
                                        <span data-l="id">
                                            Share boat berangkat 9.00 setiap
                                            hari, atau private boat dengan jam
                                            keberangkatan fleksibel
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Our experienced guide is in the
                                            water with you, showing you the reef
                                            and keeping you comfortable
                                        </span>
                                        <span data-l="id">
                                            Guide kami yang berpengalaman
                                            mendampingi di air, menunjukkan reef
                                            dan menjaga kenyamanan Anda
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            First-time snorkeler or travelling
                                            with children? No swimming
                                            experience needed
                                        </span>
                                        <span data-l="id">
                                            Baru pertama snorkeling atau membawa
                                            anak? Tidak perlu pengalaman
                                            berenang
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">Included</span>
                                    <span data-l="id">Termasuk</span>
                                </h4>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '7px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Boat and crew</span>
                                        <span data-l="id">Boat dan kru</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Park permit</span>
                                        <span data-l="id">
                                            Izin taman nasional
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Full gear</span>
                                        <span data-l="id">Alat lengkap</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Guide in water</span>
                                        <span data-l="id">Guide di air</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Lunch and water</span>
                                        <span data-l="id">
                                            Makan siang dan air
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Insurance</span>
                                        <span data-l="id">Asuransi</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Free pick-up</span>
                                        <span data-l="id">
                                            Penjemputan gratis
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '10px',
                            }}
                        >
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Anemone-fish-Menjangan-Island-350x350.webp"
                                    alt="Anemone fish at Menjangan Island"
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    Anemone fish
                                </figcaption>
                            </figure>
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Colorful-coral-Menjangan-Island-350x350.webp"
                                    alt="Colourful coral at Menjangan Island"
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">Colourful coral</span>
                                    <span data-l="id">Coral berwarna</span>
                                </figcaption>
                            </figure>
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Tons-of-fishes-At-Menjangan-Island-350x350.webp"
                                    alt="Schools of fish at Menjangan Island"
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">Schools of fish</span>
                                    <span data-l="id">Ribuan ikan</span>
                                </figcaption>
                            </figure>
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Turtles-Menjangan-Island-350x350.webp"
                                    alt="Turtle at Menjangan Island"
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">Turtles</span>
                                    <span data-l="id">Penyu</span>
                                </figcaption>
                            </figure>
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Wild-Deers-at-Menjangan-Island-350x350.webp"
                                    alt="Wild deer on Menjangan Island"
                                    width={350}
                                    height={350}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">Wild deer</span>
                                    <span data-l="id">Rusa liar</span>
                                </figcaption>
                            </figure>
                            <figure style={{ margin: '0' }}>
                                <img
                                    src="/uploads/wp/Snorkeling-Menjangan-Island-4.webp"
                                    alt="Snorkeling with the guide"
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <figcaption
                                    style={{
                                        marginTop: '6px',
                                        fontSize: '12px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">Guide in the water</span>
                                    <span data-l="id">Guide di air</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Snorkeling%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '21px',
                                        height: '21px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Book the Snorkeling Trip
                                </span>
                                <span data-l="id">Booking Trip Snorkeling</span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                            <a
                                href="#try-scuba"
                                style={{ fontSize: '14px', fontWeight: '700' }}
                            >
                                <span data-l="en">
                                    First time in the water? Try Scuba Diving →
                                </span>
                                <span data-l="id">
                                    Pertama kali di air? Coba Try Scuba Diving →
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="scuba-diving"
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(360px, 1fr))',
                        alignItems: 'stretch',
                        background: 'var(--wash)',
                        borderTop: '1px solid var(--line)',
                        borderBottom: '1px solid var(--line)',
                    }}
                >
                    <div
                        style={{
                            padding: 'clamp(34px, 5vw, 72px)',
                            display: 'grid',
                            alignContent: 'center',
                            gap: '22px',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: 'var(--brand-100)',
                                    borderLeft: '5px solid var(--brand)',
                                    padding: '10px 16px',
                                    marginBottom: '16px',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '20px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    02
                                </span>
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '12px',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand-700)',
                                    }}
                                >
                                    Scuba Diving
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 38px)',
                                    maxWidth: '24ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    Scuba Diving Menjangan Island: Visit 2
                                    Beautiful Dive Spots
                                </span>
                                <span data-l="id">
                                    Scuba Diving Pulau Menjangan: Kunjungi 2
                                    Dive Spot Terbaik
                                </span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--body)',
                                    maxWidth: '54ch',
                                }}
                            >
                                <span data-l="en">
                                    Spectacular coral walls and colourful reef
                                    life, at one of Bali’s most beautiful dive
                                    destinations.
                                </span>
                                <span data-l="id">
                                    Dinding coral spektakuler dan reef berwarna,
                                    di salah satu destinasi diving terindah di
                                    Bali.
                                </span>
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '22px',
                            }}
                        >
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">The trip</span>
                                    <span data-l="id">Detail trip</span>
                                </h4>
                                <ul
                                    style={{
                                        paddingLeft: '18px',
                                        display: 'grid',
                                        gap: '7px',
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <li>
                                        <span data-l="en">
                                            Explore 2 dive sites around
                                            Menjangan Island
                                        </span>
                                        <span data-l="id">
                                            Menjelajahi 2 dive site di sekitar
                                            Pulau Menjangan
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Suitable for certified divers from
                                            Open Water (Level 1) and above
                                        </span>
                                        <span data-l="id">
                                            Untuk penyelam bersertifikasi Open
                                            Water (Level 1) ke atas
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            In good conditions the visibility
                                            reaches up to 30 metres
                                        </span>
                                        <span data-l="id">
                                            Pada kondisi baik, visibility
                                            mencapai hingga 30 meter
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Approx. 5-hour experience, including
                                            a comfortable surface interval on
                                            the beach
                                        </span>
                                        <span data-l="id">
                                            Durasi sekitar 5 jam, termasuk
                                            surface interval yang nyaman di
                                            pantai
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">Included</span>
                                    <span data-l="id">Termasuk</span>
                                </h4>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '7px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Gear and tanks</span>
                                        <span data-l="id">Alat dan tabung</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Boat and crew</span>
                                        <span data-l="id">Boat dan kru</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Park permit</span>
                                        <span data-l="id">
                                            Izin taman nasional
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Certified dive guide
                                        </span>
                                        <span data-l="id">
                                            Dive guide bersertifikasi
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Lunch and water</span>
                                        <span data-l="id">
                                            Makan siang dan air
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Diving insurance
                                        </span>
                                        <span data-l="id">Asuransi diving</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: '#FFFFFF',
                                            border: '1px solid var(--line)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Free pick-up</span>
                                        <span data-l="id">
                                            Penjemputan gratis
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <figure
                            style={{
                                margin: '0',
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '12px',
                                padding: '14px',
                            }}
                        >
                            <img
                                src="/uploads/wp/Menjangan-Island-West-Bali-National-park.webp"
                                alt="Map of the eleven dive sites around Menjangan Island"
                                width={800}
                                height={400}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '6px',
                                }}
                            />
                            <figcaption
                                style={{
                                    marginTop: '10px',
                                    fontSize: '12px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Pos I, Mangrove Point, Underwater Cave, Pos
                                    II, Bat Cave, Temple Wall, Coral Garden,
                                    Sandy Slope, Dream Wall, Anchor Wreck, Eel
                                    Garden
                                </span>
                                <span data-l="id">
                                    Pos I, Mangrove Point, Underwater Cave, Pos
                                    II, Bat Cave, Temple Wall, Coral Garden,
                                    Sandy Slope, Dream Wall, Anchor Wreck, Eel
                                    Garden
                                </span>
                            </figcaption>
                        </figure>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '10px',
                            }}
                        >
                            <img
                                src="/uploads/wp/Scuba-Diving-Menjangan-7.webp"
                                alt="Wall dive at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/wp/Scuba-Diving-Menjangan-4.webp"
                                alt="Diver over coral at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/wp/Scuba-Diving-Menjangan-5.webp"
                                alt="Reef life at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/wp/Scuba-Diving-Menjangan-3.webp"
                                alt="Divers descending at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Scuba%20Diving%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '21px',
                                        height: '21px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Book the Dive Trip</span>
                                <span data-l="id">Booking Trip Diving</span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                            <a
                                href="#try-scuba"
                                style={{ fontSize: '14px', fontWeight: '700' }}
                            >
                                <span data-l="en">
                                    New to diving? Try it first →
                                </span>
                                <span data-l="id">
                                    Belum pernah diving? Coba dulu →
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        style={{
                            position: 'relative',
                            minHeight: '520px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/uploads/scuba/_2111638.webp"
                            alt="Scuba diving at Menjangan Island"
                            width={800}
                            height={600}
                            loading="lazy"
                            decoding="async"
                            style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                padding: '24px',
                                background:
                                    'linear-gradient(180deg, transparent, rgba(15, 26, 48, 0.82))',
                                color: '#FFFFFF',
                                fontSize: '11px',
                                fontWeight: '800',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span data-l="en">
                                Wall dive, 3 to 25 m, gentle current
                            </span>
                            <span data-l="id">
                                Wall dive, 3 sampai 25 m, arus tenang
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    id="try-scuba"
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(360px, 1fr))',
                        alignItems: 'stretch',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            minHeight: '520px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/uploads/try_scuba/_1310850.webp"
                            alt="Beginner divers with the instructor at Menjangan"
                            width={800}
                            height={600}
                            loading="lazy"
                            decoding="async"
                            style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                padding: '24px',
                                background:
                                    'linear-gradient(180deg, transparent, rgba(15, 26, 48, 0.82))',
                                color: '#FFFFFF',
                                fontSize: '11px',
                                fontWeight: '800',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span data-l="en">
                                Beginner dives, 3 to 5 m, instructor beside you
                            </span>
                            <span data-l="id">
                                Dive pemula, 3 sampai 5 m, instruktur
                                mendampingi
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: 'clamp(34px, 5vw, 72px)',
                            display: 'grid',
                            alignContent: 'center',
                            gap: '22px',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: 'var(--brand-100)',
                                    borderLeft: '5px solid var(--brand)',
                                    padding: '10px 16px',
                                    marginBottom: '16px',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '20px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    03
                                </span>
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '12px',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand-700)',
                                    }}
                                >
                                    Try Scuba Diving
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 38px)',
                                    maxWidth: '24ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    Never Dived Before? Try Scuba Diving at
                                    Menjangan, No Certification Needed
                                </span>
                                <span data-l="id">
                                    Belum Pernah Diving? Coba Scuba Diving di
                                    Menjangan, Tanpa Sertifikasi
                                </span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--body)',
                                    maxWidth: '54ch',
                                }}
                            >
                                <span data-l="en">
                                    Nervous about your first breath underwater?
                                    This trip is built for that.
                                </span>
                                <span data-l="id">
                                    Ragu dengan napas pertama di bawah air? Trip
                                    ini dibuat untuk itu.
                                </span>
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '22px',
                            }}
                        >
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">The trip</span>
                                    <span data-l="id">Detail trip</span>
                                </h4>
                                <ul
                                    style={{
                                        paddingLeft: '18px',
                                        display: 'grid',
                                        gap: '7px',
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <li>
                                        <span data-l="en">
                                            No certification or experience
                                            needed
                                        </span>
                                        <span data-l="id">
                                            Tanpa sertifikasi atau pengalaman
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            Two shallow dives, 3–5 m
                                        </span>
                                        <span data-l="id">
                                            Dua dive dangkal, 3–5 m
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            ± 4 hours with briefing and lunch
                                        </span>
                                        <span data-l="id">
                                            ± 4 jam termasuk briefing dan makan
                                            siang
                                        </span>
                                    </li>
                                    <li>
                                        <span data-l="en">
                                            The experience itself, not a course
                                        </span>
                                        <span data-l="id">
                                            Pengalaman mencoba, bukan kursus
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        fontSize: '13px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: 'var(--brand)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span data-l="en">Included</span>
                                    <span data-l="id">Termasuk</span>
                                </h4>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '7px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Instructor with you
                                        </span>
                                        <span data-l="id">
                                            Instruktur mendampingi
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">
                                            Full gear in your size
                                        </span>
                                        <span data-l="id">
                                            Alat sesuai ukuran
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Boat and crew</span>
                                        <span data-l="id">Boat dan kru</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Park permit</span>
                                        <span data-l="id">
                                            Izin taman nasional
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Lunch and water</span>
                                        <span data-l="id">
                                            Makan siang dan air
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Insurance</span>
                                        <span data-l="id">Asuransi</span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            background: 'var(--brand-100)',
                                            color: 'var(--brand-700)',
                                            padding: '6px 10px',
                                            borderRadius: '999px',
                                        }}
                                    >
                                        <span data-l="en">Free pick-up</span>
                                        <span data-l="id">
                                            Penjemputan gratis
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '10px',
                            }}
                        >
                            <img
                                src="/uploads/try_scuba_new/try-scuba-1.webp"
                                alt="First breaths in shallow water"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/try_scuba_new/try-scuba-2.webp"
                                alt="Instructor beside a beginner diver"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/try_scuba_new/try-scuba-3.webp"
                                alt="Shallow reef at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/try_scuba_new/try-scuba-4.webp"
                                alt="Guests in the water at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/try_scuba_new/try-scuba-5.webp"
                                alt="Calm clear water at Menjangan"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="/uploads/try_scuba_new/try-scuba-6.webp"
                                alt="Guests on their first dive"
                                width={350}
                                height={350}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Try%20Scuba%20Diving%20experience%20at%20Menjangan.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '21px',
                                        height: '21px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Book Your First Dive</span>
                                <span data-l="id">
                                    Booking Dive Pertama Anda
                                </span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                            <a
                                href="#scuba-diving"
                                style={{ fontSize: '14px', fontWeight: '700' }}
                            >
                                <span data-l="en">
                                    Already certified? See the full dive trip →
                                </span>
                                <span data-l="id">
                                    Sudah bersertifikasi? Lihat trip diving →
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    style={{ padding: '74px 24px', background: 'var(--wash)' }}
                >
                    <div className="wrap">
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '32px',
                            }}
                        >
                            <div
                                className="kicker"
                                style={{
                                    justifyContent: 'center',
                                    marginBottom: '12px',
                                }}
                            >
                                <span data-l="en">Why us</span>
                                <span data-l="id">Kenapa kami</span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 38px)',
                                    maxWidth: '26ch',
                                    margin: '0 auto',
                                }}
                            >
                                <span data-l="en">
                                    Why Choose Menjangan Island Trip?
                                </span>
                                <span data-l="id">
                                    Kenapa Memilih Menjangan Island Trip?
                                </span>
                            </h2>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(230px, 1fr))',
                                gap: '18px',
                            }}
                        >
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderTop: '3px solid var(--brand)',
                                    borderRadius: '12px',
                                    padding: '26px 22px',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '16px',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        letterSpacing: '0.1em',
                                        color: '#9aa5bb',
                                    }}
                                >
                                    01
                                </span>
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '10px',
                                        background: 'var(--brand-100)',
                                        color: 'var(--brand)',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    >
                                        <path d="M3 10.5 12 4l9 6.5"></path>
                                        <path d="M5 10v10h14V10"></path>
                                        <path d="M9.5 20v-5h5v5"></path>
                                    </svg>
                                </span>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        lineHeight: '1.25',
                                        marginBottom: '8px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    <span data-l="en">100% Locally Owned</span>
                                    <span data-l="id">
                                        100% Milik Warga Lokal
                                    </span>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Your booking supports families in
                                        Menjangan Village directly, not an
                                        outside agency.
                                    </span>
                                    <span data-l="id">
                                        Booking Anda langsung mendukung keluarga
                                        di Desa Menjangan, bukan agensi luar.
                                    </span>
                                </p>
                            </div>
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderTop: '3px solid var(--brand)',
                                    borderRadius: '12px',
                                    padding: '26px 22px',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '16px',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        letterSpacing: '0.1em',
                                        color: '#9aa5bb',
                                    }}
                                >
                                    02
                                </span>
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '10px',
                                        background: 'var(--brand-100)',
                                        color: 'var(--brand)',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    >
                                        <circle cx="12" cy="8" r="3.4"></circle>
                                        <path d="M5 20a7 7 0 0 1 14 0"></path>
                                    </svg>
                                </span>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        lineHeight: '1.25',
                                        marginBottom: '8px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    <span data-l="en">First Class Service</span>
                                    <span data-l="id">
                                        Pelayanan Kelas Utama
                                    </span>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        From booking to drop-off, our local team
                                        shapes the day around what you want.
                                    </span>
                                    <span data-l="id">
                                        Dari booking hingga diantar kembali, tim
                                        lokal kami menyesuaikan trip dengan
                                        keinginan Anda.
                                    </span>
                                </p>
                            </div>
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderTop: '3px solid var(--brand)',
                                    borderRadius: '12px',
                                    padding: '26px 22px',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '16px',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        letterSpacing: '0.1em',
                                        color: '#9aa5bb',
                                    }}
                                >
                                    03
                                </span>
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '10px',
                                        background: 'var(--brand-100)',
                                        color: 'var(--brand)',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    >
                                        <rect
                                            x="4"
                                            y="4"
                                            width="16"
                                            height="16"
                                            rx="2"
                                        ></rect>
                                        <path d="M8.5 12.5l2.5 2.5 4.5-5"></path>
                                    </svg>
                                </span>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        lineHeight: '1.25',
                                        marginBottom: '8px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    <span data-l="en">
                                        Easy Booking &amp; All-Inclusive
                                    </span>
                                    <span data-l="id">
                                        Booking Mudah &amp; Semua Termasuk
                                    </span>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        No deposit, no forms, everything
                                        included, and a free shuttle from nearby
                                        hotels.
                                    </span>
                                    <span data-l="id">
                                        Tanpa deposit, tanpa formulir, semua
                                        termasuk, dan antar-jemput gratis dari
                                        hotel sekitar.
                                    </span>
                                </p>
                            </div>
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderTop: '3px solid var(--brand)',
                                    borderRadius: '12px',
                                    padding: '26px 22px',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '16px',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        letterSpacing: '0.1em',
                                        color: '#9aa5bb',
                                    }}
                                >
                                    04
                                </span>
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '10px',
                                        background: 'var(--brand-100)',
                                        color: 'var(--brand)',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    >
                                        <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"></path>
                                        <path d="M9.5 12.2l1.8 1.8 3.4-3.6"></path>
                                    </svg>
                                </span>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        lineHeight: '1.25',
                                        marginBottom: '8px',
                                        color: 'var(--brand)',
                                    }}
                                >
                                    <span data-l="en">
                                        We Care &amp; Protect Menjangan
                                    </span>
                                    <span data-l="id">
                                        Kami Menjaga Menjangan
                                    </span>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        The ocean is our home. Choosing us
                                        protects the coral and marine life here.
                                    </span>
                                    <span data-l="id">
                                        Laut adalah rumah kami. Memilih kami
                                        berarti melindungi coral dan biota laut
                                        di sini.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="sec"
                    style={{
                        background: 'var(--wash)',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <div className="wrap">
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            <span data-l="en">The day</span>
                            <span data-l="id">Jalannya hari</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                marginBottom: '26px',
                            }}
                        >
                            <span data-l="en">
                                How the Trip Runs, Start to Finish
                            </span>
                            <span data-l="id">
                                Bagaimana Trip Berjalan, Awal sampai Akhir
                            </span>
                        </h2>
                        <div
                            style={{
                                display: 'grid',
                                gap: '0',
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '14px',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    padding: '16px 20px',
                                    borderBottom: '1px solid var(--line)',
                                }}
                            >
                                <span
                                    style={{
                                        flex: 'none',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        color: 'var(--brand)',
                                        minWidth: '74px',
                                    }}
                                >
                                    30 min
                                </span>
                                <span
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Boat from Banyuwedang Harbour to
                                        Menjangan Island
                                    </span>
                                    <span data-l="id">
                                        Boat dari Pelabuhan Banyuwedang ke Pulau
                                        Menjangan
                                    </span>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    padding: '16px 20px',
                                    borderBottom: '1px solid var(--line)',
                                }}
                            >
                                <span
                                    style={{
                                        flex: 'none',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        color: 'var(--brand)',
                                        minWidth: '74px',
                                    }}
                                >
                                    45 to 60 min
                                </span>
                                <span
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        First spot, snorkeling or first dive
                                    </span>
                                    <span data-l="id">
                                        Spot pertama, snorkeling atau dive
                                        pertama
                                    </span>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    padding: '16px 20px',
                                    borderBottom: '1px solid var(--line)',
                                }}
                            >
                                <span
                                    style={{
                                        flex: 'none',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        color: 'var(--brand)',
                                        minWidth: '74px',
                                    }}
                                >
                                    1 hour
                                </span>
                                <span
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Picnic lunch on the beach and a short
                                        walk to the wild deer
                                    </span>
                                    <span data-l="id">
                                        Makan siang piknik di pantai dan jalan
                                        singkat melihat rusa liar
                                    </span>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    padding: '16px 20px',
                                    borderBottom: '1px solid var(--line)',
                                }}
                            >
                                <span
                                    style={{
                                        flex: 'none',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        color: 'var(--brand)',
                                        minWidth: '74px',
                                    }}
                                >
                                    45 to 60 min
                                </span>
                                <span
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Second spot, snorkeling or second dive
                                    </span>
                                    <span data-l="id">
                                        Spot kedua, snorkeling atau dive kedua
                                    </span>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    padding: '16px 20px',
                                }}
                            >
                                <span
                                    style={{
                                        flex: 'none',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        color: 'var(--brand)',
                                        minWidth: '74px',
                                    }}
                                >
                                    30 min
                                </span>
                                <span
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Boat back to the harbour, end of service
                                    </span>
                                    <span data-l="id">
                                        Boat kembali ke pelabuhan, akhir layanan
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Book This Day on WhatsApp
                                </span>
                                <span data-l="id">
                                    Booking Hari Ini via WhatsApp
                                </span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                        <p
                            style={{
                                marginTop: '14px',
                                fontSize: '13px',
                                color: 'var(--body)',
                            }}
                        >
                            <span data-l="en">
                                Lunch box with four choices: fried rice, fried
                                noodles, chicken sandwich or a fruit box. Towels
                                provided.
                            </span>
                            <span data-l="id">
                                Lunch box dengan empat pilihan: nasi goreng, mie
                                goreng, chicken sandwich atau fruit box. Handuk
                                disediakan.
                            </span>
                        </p>
                    </div>
                </section>

                <section className="sec" style={{ background: '#FFFFFF' }}>
                    <div className="wrap">
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            <span data-l="en">On price</span>
                            <span data-l="id">Soal harga</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                maxWidth: '24ch',
                                marginBottom: '12px',
                            }}
                        >
                            <span data-l="en">
                                Everything Included, Nothing Added Later
                            </span>
                            <span data-l="id">
                                Semua Termasuk, Tanpa Tambahan di Kemudian Hari
                            </span>
                        </h2>
                        <p
                            style={{
                                maxWidth: '56ch',
                                fontSize: '16px',
                                color: 'var(--body)',
                                marginBottom: '26px',
                            }}
                        >
                            <span data-l="en">
                                What is in our price, next to what is commonly
                                charged separately elsewhere. No specific
                                operator is referred to.
                            </span>
                            <span data-l="id">
                                Perbandingan umum atas hal yang biasanya tidak
                                termasuk di tempat lain. Tidak merujuk operator
                                tertentu.
                            </span>
                        </p>
                        <div
                            style={{
                                overflow: 'hidden',
                                border: '1px solid var(--line)',
                                borderRadius: '14px',
                            }}
                        >
                            <table
                                className="cmp"
                                style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: '14px',
                                }}
                            >
                                <thead>
                                    <tr
                                        style={{
                                            background: 'var(--brand)',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '14px 16px',
                                                fontSize: '13px',
                                                letterSpacing: '0.06em',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            <span data-l="en">
                                                What you pay for
                                            </span>
                                            <span data-l="id">
                                                Yang Anda bayar
                                            </span>
                                        </th>
                                        <th
                                            style={{
                                                padding: '14px 12px',
                                                width: '22%',
                                                fontSize: '13px',
                                                letterSpacing: '0.06em',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            <span data-l="en">Us</span>
                                            <span data-l="id">Kami</span>
                                        </th>
                                        <th
                                            style={{
                                                padding: '14px 12px',
                                                width: '22%',
                                                fontSize: '13px',
                                                letterSpacing: '0.06em',
                                                textTransform: 'uppercase',
                                                color: '#c3cde5',
                                            }}
                                        >
                                            <span data-l="en">Others</span>
                                            <span data-l="id">Lainnya</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Official insurance
                                            </span>
                                            <span data-l="id">
                                                Asuransi resmi
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">Sometimes</span>
                                            <span data-l="id">Kadang</span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                            background: 'var(--wash)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                National park permit
                                            </span>
                                            <span data-l="id">
                                                Izin taman nasional
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Charged on the day
                                            </span>
                                            <span data-l="id">
                                                Dibayar di hari trip
                                            </span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Guide in the water
                                            </span>
                                            <span data-l="id">
                                                Guide di dalam air
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Watches from the deck
                                            </span>
                                            <span data-l="id">
                                                Mengawasi dari boat
                                            </span>
                                        </td>
                                    </tr>

                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Gear and lunch
                                            </span>
                                            <span data-l="id">
                                                Alat dan makan siang
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">Extra</span>
                                            <span data-l="id">Tambahan</span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                            background: 'var(--wash)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Hotel pick-up nearby
                                            </span>
                                            <span data-l="id">
                                                Penjemputan hotel sekitar
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">Rarely</span>
                                            <span data-l="id">Jarang</span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Booking reply time
                                            </span>
                                            <span data-l="id">
                                                Waktu balas booking
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            <span data-l="en">
                                                Within the hour
                                            </span>
                                            <span data-l="id">
                                                Dalam satu jam
                                            </span>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                One to two days
                                            </span>
                                            <span data-l="id">
                                                Satu sampai dua hari
                                            </span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                            background: 'var(--wash)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Who runs the boat
                                            </span>
                                            <span data-l="id">
                                                Siapa menjalankan boat
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            <span data-l="en">
                                                Us, no agent
                                            </span>
                                            <span data-l="id">
                                                Kami, tanpa agen
                                            </span>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Resold by an agent
                                            </span>
                                            <span data-l="id">
                                                Dijual ulang oleh agen
                                            </span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Dive site choice
                                            </span>
                                            <span data-l="id">
                                                Pemilihan dive site
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            <span data-l="en">
                                                11 sites, picked daily
                                            </span>
                                            <span data-l="id">
                                                11 spot, dipilih harian
                                            </span>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Fixed nearest spot
                                            </span>
                                            <span data-l="id">
                                                Spot terdekat saja
                                            </span>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            borderBottom:
                                                '1px solid var(--line)',
                                            background: 'var(--wash)',
                                        }}
                                    >
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                padding: '13px 16px',
                                                fontWeight: '700',
                                                color: 'var(--ink)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Non-swimmers accepted
                                            </span>
                                            <span data-l="id">
                                                Non-perenang diterima
                                            </span>
                                        </th>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--cta-dark)',
                                                fontWeight: '800',
                                            }}
                                        >
                                            ✓
                                        </td>
                                        <td
                                            style={{
                                                textAlign: 'center',
                                                padding: '13px 12px',
                                                color: 'var(--body)',
                                            }}
                                        >
                                            <span data-l="en">
                                                Usually refused
                                            </span>
                                            <span data-l="id">
                                                Umumnya ditolak
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip%20with%20everything%20included."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Book the All-Inclusive Trip
                                </span>
                                <span data-l="id">
                                    Booking Trip Semua Termasuk
                                </span>
                            </a>
                            <span className="micro">
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <img
                        src="/uploads/wp/519396628_743465071978357_2561587557975164201_n.webp"
                        alt="Boat at Menjangan Island"
                        width={1200}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: '0',
                            background: 'rgba(15, 26, 48, 0.84)',
                        }}
                    ></div>
                    <div
                        className="wrap"
                        style={{
                            position: 'relative',
                            padding: '66px 24px',
                            color: '#FFFFFF',
                        }}
                    >
                        <div
                            className="kicker"
                            style={{ color: '#a9bde0', marginBottom: '12px' }}
                        >
                            <span data-l="en">Small groups</span>
                            <span data-l="id">Kelompok kecil</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3.4vw, 42px)',
                                color: '#FFFFFF',
                                maxWidth: '22ch',
                                marginBottom: '12px',
                            }}
                        >
                            <span data-l="en">
                                Your Own Small Group on the Reef
                            </span>
                            <span data-l="id">
                                Kelompok Kecil Anda Sendiri di Reef
                            </span>
                        </h2>
                        <p
                            style={{
                                maxWidth: '54ch',
                                fontSize: '16px',
                                color: '#dbe2ee',
                                marginBottom: '22px',
                            }}
                        >
                            <span data-l="en">
                                We keep every boat intimate, so the reef feels
                                like yours. Dates go quickly for private trips
                                and in high season.
                            </span>
                            <span data-l="id">
                                Setiap boat kami jaga tetap intim, sehingga reef
                                terasa milik Anda. Tanggal cepat terisi untuk
                                trip privat dan musim ramai.
                            </span>
                        </p>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20Menjangan%20Island%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '21px',
                                        height: '21px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Check Available Dates</span>
                                <span data-l="id">
                                    Cek Tanggal yang Tersedia
                                </span>
                            </a>
                            <span
                                className="micro"
                                style={{ color: '#cfd8ea' }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    id="reviews"
                    style={{
                        padding: '76px 24px',
                        borderTop: '1px solid var(--color-divider)',
                    }}
                >
                    <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
                        <div
                            style={{
                                fontSize: '11px',
                                fontWeight: '800',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--brand)',
                                marginBottom: '12px',
                            }}
                        >
                            <span data-l="en">Guest reviews</span>
                            <span data-l="id">Ulasan tamu</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                marginBottom: '22px',
                            }}
                        >
                            <span data-l="en">What Guests Say</span>
                            <span data-l="id">Kata Tamu Kami</span>
                        </h2>
                        <div
                            style={{
                                display: 'grid',
                                gap: '26px',
                                marginBottom: '30px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    margin: '0 0 6px',
                                }}
                            >
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '18px 26px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            fontWeight: '800',
                                            fontSize: '24px',
                                            letterSpacing: '0.01em',
                                            color: '#17233f',
                                        }}
                                    >
                                        Excellent
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '4px',
                                            margin: '10px 0 8px',
                                        }}
                                    >
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Tripadvisor/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '15px',
                                            color: '#17233f',
                                        }}
                                    >
                                        <span data-l="en">
                                            Based on{' '}
                                            <strong
                                                style={{
                                                    borderBottom:
                                                        '2px solid #17233f',
                                                }}
                                            >
                                                196 reviews
                                            </strong>
                                        </span>
                                        <span data-l="id">
                                            Berdasarkan{' '}
                                            <strong
                                                style={{
                                                    borderBottom:
                                                        '2px solid #17233f',
                                                }}
                                            >
                                                196 ulasan
                                            </strong>
                                        </span>
                                    </div>
                                    <img
                                        src="https://cdn.trustindex.io/assets/platform/Tripadvisor/logo.svg"
                                        alt="Tripadvisor"
                                        loading="lazy"
                                        style={{
                                            height: '30px',
                                            width: 'auto',
                                            marginTop: '14px',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            id="ta-grid"
                            className="rev-grid"
                            data-collapsed="1"
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '20px',
                                marginBottom: '30px',
                            }}
                        >
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f0/48/default-avatar-2020-15.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Fanni S
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            1 week ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        highly recommend!
                                    </strong>
                                    We did many times snorkling tours but this
                                    was truely the top one!! Instead of rushing
                                    from spots to spots every in between.
                                </blockquote>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Severine L
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        Snorkeling Menjangan Island Au top
                                    </strong>
                                    Super sortie super guide Snorkeling
                                    Menjangan Island.
                                </blockquote>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/59/default-avatar-2020-24.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            mariagh
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        Absolutely worth it!
                                    </strong>
                                    An incredible experience. An unforgettable
                                    snorkeling trip; the hours flew by. A truly
                                    wonderful excursion.
                                </blockquote>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/a7/default-avatar-2020-44.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Belle W
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        Nice snorking experience menjanan!
                                    </strong>
                                    It was a very nice snorkling experience. We
                                    saw many sea animals and coral reef, and
                                    many sea turtles! The guide was great.
                                </blockquote>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/a3/default-avatar-2020-38.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            ahn
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        Make your perfect day!
                                    </strong>
                                    It was a truly perfect trip! They helped us
                                    find so many beautiful corals, fish, and
                                    turtles, and the underwater world was
                                    stunning.
                                </blockquote>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/11/default-avatar-2020-23.jpg?w=84&h=84&s=1"
                                        alt=""
                                        width={42}
                                        height={42}
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#d7dbe3',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Isabelle S
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            flex: 'none',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="11"
                                            fill="#34E0A1"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="3.1"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="1.3"
                                        ></circle>
                                        <circle
                                            cx="8.4"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                        <circle
                                            cx="15.6"
                                            cy="12"
                                            r="1.1"
                                            fill="#000"
                                        ></circle>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '3px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            fill="none"
                                            stroke="#00A680"
                                            strokeWidth="2.4"
                                        ></circle>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4.6"
                                            fill="#00A680"
                                        ></circle>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                        ></path>
                                        <path
                                            fill="#ffffff"
                                            d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                        ></path>
                                    </svg>
                                </div>
                                <blockquote
                                    style={{
                                        margin: '0',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        color: '#2c3a57',
                                    }}
                                >
                                    <strong
                                        style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        Fantastic snorkeling trip!
                                    </strong>
                                    Two magnificent spots teeming with colorful
                                    fish. Our guide, Putu, was absolutely
                                    fantastic. Contact them.
                                </blockquote>
                            </figure>
                        </div>
                        <div
                            className="rev-more"
                            style={{
                                display: 'none',
                                justifyContent: 'center',
                                margin: '-8px 0 30px',
                            }}
                        >
                            <button
                                type="button"
                                onClick={showMoreReviews}
                                data-more="ta-grid"
                                style={{
                                    cursor: 'pointer',
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderRadius: '999px',
                                    padding: '12px 22px',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    color: 'var(--brand)',
                                }}
                            >
                                <span data-l="en">
                                    Show more Tripadvisor reviews
                                </span>
                                <span data-l="id">
                                    Lihat ulasan Tripadvisor lainnya
                                </span>
                            </button>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gap: '26px',
                                marginBottom: '30px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    margin: '0 0 6px',
                                }}
                            >
                                <div
                                    style={{
                                        background: '#FFFFFF',
                                        padding: '18px 26px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            fontWeight: '800',
                                            fontSize: '24px',
                                            letterSpacing: '0.01em',
                                            color: '#17233f',
                                        }}
                                    >
                                        Excellent
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '4px',
                                            margin: '10px 0 8px',
                                        }}
                                    >
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                        <img
                                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                                            alt=""
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '15px',
                                            color: '#17233f',
                                        }}
                                    >
                                        <span data-l="en">
                                            Based on{' '}
                                            <strong
                                                style={{
                                                    borderBottom:
                                                        '2px solid #17233f',
                                                }}
                                            >
                                                963 reviews
                                            </strong>
                                        </span>
                                        <span data-l="id">
                                            Berdasarkan{' '}
                                            <strong
                                                style={{
                                                    borderBottom:
                                                        '2px solid #17233f',
                                                }}
                                            >
                                                963 ulasan
                                            </strong>
                                        </span>
                                    </div>
                                    <img
                                        src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                                        alt="Google"
                                        loading="lazy"
                                        style={{
                                            height: '30px',
                                            width: 'auto',
                                            marginTop: '14px',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            id="g-grid"
                            className="rev-grid"
                            data-collapsed="1"
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '20px',
                            }}
                        >
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjW-6b9dWJYlqucqyOG9MKBwePsZDQk6FMk2lCZxhY9Z1lN2FcE=w80-h80-c-rp-mo-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Elin Georgina-Davies
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            2 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        I had an absolutely amazing time! The
                                        guides were excellent! Snorkeling
                                        Menjangan Island was so fun - highly
                                        recommend!
                                    </blockquote>
                                </div>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjUe8F2EkfzifVFcolV6LH52P7urkwIJt9u-9YQRxgiRzuqEgGSdQw=w80-h80-c-rp-mo-ba12-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            maria granado
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        Excursión más que recomendable. Es una
                                        experiencia de 10, el snorkel
                                        increíble!!
                                    </blockquote>
                                </div>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjUgzw8YO1c-9yxVJE9LfznY21SbYhGGmVDACzq2_Aej_Lwncso5=w80-h80-c-rp-mo-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Belle Weerts
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            3 weeks ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        We had a very nice snorkling experience!
                                        The guide was good and it was a
                                        beautiful experience. We saw seaturtles
                                        and many of the coral reef creatures.
                                    </blockquote>
                                </div>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjUCE8D9Pwc9axxHrG56ukqSfb4rK47-_CY7Bbuoy9bdoxFaE_wk=w80-h80-c-rp-mo-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Dorota Bi
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            1 month ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        An excellent team. Great organization,
                                        professional, and punctual, which is
                                        very important to me.
                                    </blockquote>
                                    <img
                                        src="https://lh3.googleusercontent.com/grass-cs/ACvplmN0F688vz7pcjK7rWBotBrjwYdgxt3yNKpUKc1NcqR8N3c_nXSquDA0pq1sbHSNK5VlOEi8fZ33Z43MiTrO6t7XtJj34oPkxuAO556A-OhlHlmkfGRVMBM2lNWpeLQhXd4oy_GhSGBVNi2F=s720"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '96px',
                                            height: '96px',
                                            objectFit: 'cover',
                                            borderRadius: '6px',
                                            flex: 'none',
                                        }}
                                    />
                                </div>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjWgkfdm69EosFB2aGTOvOG8fJAhDiDs-6kjQHwAfen3aB7WXMDY-g=w80-h80-c-rp-mo-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Jarin Wadiwalla
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            2 months ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        We had a really amazing snorkeling trip
                                        on Sunday. Menjangan island is so
                                        breathtaking with clear water and
                                        beautiful corals.
                                    </blockquote>
                                    <img
                                        src="https://lh3.googleusercontent.com/grass-cs/ACvplmMCUCuR_cnlLsCrSrLpnA43TnI-KfpQ24pZhStNBWiiJBa3x9CUtPBxT8VxQUWqvIqJeCvhMbWHKjFOrTGUwvRNlzZFBlqS4WoTK08N6dXCRxzjBmfZfCcHdAfFUkvMTXKSwGF8dG35El-k=s720"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '96px',
                                            height: '96px',
                                            objectFit: 'cover',
                                            borderRadius: '6px',
                                            flex: 'none',
                                        }}
                                    />
                                </div>
                            </figure>
                            <figure
                                style={{
                                    margin: '0',
                                    padding: '22px',
                                    background: 'var(--color-neutral-100)',
                                    borderRadius: '10px',
                                    display: 'grid',
                                    gap: '12px',
                                    alignContent: 'start',
                                }}
                            >
                                <figcaption
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/a-/ALV-UjVJ8Strw93g2L49uX9DtEMZiOV1ryLELOcVnSLnIL3HI7fC6wHxAw=w80-h80-c-rp-mo-ba12-br100"
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            background: '#93c5ef',
                                            flex: 'none',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'grid',
                                            flex: '1',
                                            minWidth: '0',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                color: '#17233f',
                                            }}
                                        >
                                            Dani Fee
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--color-neutral-600)',
                                            }}
                                        >
                                            4 months ago
                                        </span>
                                    </span>
                                    <svg
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path
                                            fill="#4285F4"
                                            d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.1c-.2 2-1.5 5-4.4 7l6.7 5.2c4-3.7 6.7-9.2 6.7-15.7z"
                                        ></path>
                                        <path
                                            fill="#34A853"
                                            d="M24 46c6 0 11-2 14.4-5.8l-6.7-5.2c-1.8 1.3-4.3 2.2-7.7 2.2-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.7 40.9 15.2 46 24 46z"
                                        ></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M11.3 27.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .7-4.4l-7-5.5C2.9 16.5 2 20.1 2 23.5s.9 7 2.3 9.9l7-5.5z"
                                        ></path>
                                        <path
                                            fill="#EA4335"
                                            d="M24 9.9c4.2 0 7 1.8 8.6 3.3l6-5.8C34.9 4 30 2 24 2 15.2 2 7.7 7.1 4.3 13.6l7 5.5C13.1 13.8 18.1 9.9 24 9.9z"
                                        ></path>
                                    </svg>
                                </figcaption>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="#FBBC05"
                                        style={{
                                            width: '17px',
                                            height: '17px',
                                        }}
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            marginLeft: '4px',
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{
                                                width: '15px',
                                                height: '15px',
                                                flex: 'none',
                                            }}
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M12 1.5l2.1 1.6 2.6-.4 1.2 2.4 2.4 1.2-.4 2.6L21.5 12l-1.6 2.1.4 2.6-2.4 1.2-1.2 2.4-2.6-.4L12 22.5l-2.1-1.6-2.6.4-1.2-2.4-2.4-1.2.4-2.6L2.5 12l1.6-2.1-.4-2.6 2.4-1.2 1.2-2.4 2.6.4z"
                                            ></path>
                                            <path
                                                fill="#ffffff"
                                                d="M10.6 15.2l-2.9-2.9 1.2-1.2 1.7 1.7 4-4 1.2 1.2z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <blockquote
                                        style={{
                                            margin: '0',
                                            flex: '1',
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#2c3a57',
                                        }}
                                    >
                                        Perfect snorkeling day at Menjangan
                                        Island. Beautiful corals, many fish,
                                        turtels... Good food and good service!
                                    </blockquote>
                                </div>
                            </figure>
                        </div>
                        <div
                            className="rev-more"
                            style={{
                                display: 'none',
                                justifyContent: 'center',
                                margin: '-8px 0 30px',
                            }}
                        >
                            <button
                                type="button"
                                onClick={showMoreReviews}
                                data-more="g-grid"
                                style={{
                                    cursor: 'pointer',
                                    background: '#FFFFFF',
                                    border: '1px solid var(--line)',
                                    borderRadius: '999px',
                                    padding: '12px 22px',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    color: 'var(--brand)',
                                }}
                            >
                                <span data-l="en">
                                    Show more Google reviews
                                </span>
                                <span data-l="id">
                                    Lihat ulasan Google lainnya
                                </span>
                            </button>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '34px',
                                textAlign: 'center',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20read%20your%20reviews%20and%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Book Your Trip on WhatsApp
                                </span>
                                <span data-l="id">
                                    Booking Trip via WhatsApp
                                </span>
                            </a>
                            <span
                                className="micro"
                                style={{ justifyContent: 'center' }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    className="sec"
                    style={{
                        background: 'var(--wash)',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <div
                        className="wrap"
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <div
                                className="kicker"
                                style={{ marginBottom: '12px' }}
                            >
                                <span data-l="en">About us</span>
                                <span data-l="id">Tentang kami</span>
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(26px, 3vw, 38px)',
                                    maxWidth: '24ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    A Local Operation on the West Bali Coast
                                </span>
                                <span data-l="id">
                                    Operasi Lokal di Pesisir Bali Barat
                                </span>
                            </h2>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--body)',
                                    maxWidth: '54ch',
                                    marginBottom: '14px',
                                }}
                            >
                                <span data-l="en">
                                    We are based in Pejarakan, between Pemuteran
                                    and Banyuwedang Harbour, and our guides grew
                                    up along this stretch of water.
                                </span>
                                <span data-l="id">
                                    Kami berbasis di Pejarakan, antara Pemuteran
                                    dan Pelabuhan Banyuwedang, dan guide kami
                                    tumbuh di sepanjang perairan ini.
                                </span>
                            </p>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--body)',
                                    maxWidth: '54ch',
                                    marginBottom: '22px',
                                }}
                            >
                                <span data-l="en">
                                    Booking with us keeps the work on this
                                    coast. We keep groups small, maintain our
                                    own gear, and support the reef restoration
                                    the area is known for.
                                </span>
                                <span data-l="id">
                                    Booking bersama kami berarti pekerjaannya
                                    tetap di pesisir ini. Kami menjaga kelompok
                                    tetap kecil, merawat alat sendiri, dan
                                    mendukung restorasi reef yang dikenal di
                                    area ini.
                                </span>
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        background: '#FFFFFF',
                                        border: '1px solid var(--line)',
                                        color: 'var(--brand-700)',
                                        padding: '8px 12px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    <span data-l="en">Licensed operator</span>
                                    <span data-l="id">Operator berlisensi</span>
                                </span>
                                <span
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        background: '#FFFFFF',
                                        border: '1px solid var(--line)',
                                        color: 'var(--brand-700)',
                                        padding: '8px 12px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    <span data-l="en">
                                        10+ years on this coast
                                    </span>
                                    <span data-l="id">
                                        10+ tahun di pesisir ini
                                    </span>
                                </span>
                                <span
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        background: '#FFFFFF',
                                        border: '1px solid var(--line)',
                                        color: 'var(--brand-700)',
                                        padding: '8px 12px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    <span data-l="en">Max 10 per boat</span>
                                    <span data-l="id">Maks. 10 per boat</span>
                                </span>
                                <span
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        background: '#FFFFFF',
                                        border: '1px solid var(--line)',
                                        color: 'var(--brand-700)',
                                        padding: '8px 12px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    <span data-l="en">Reef conservation</span>
                                    <span data-l="id">Konservasi reef</span>
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    justifyItems: 'start',
                                    gap: '10px',
                                    marginTop: '30px',
                                }}
                            >
                                <a
                                    className="cta"
                                    href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20with%20your%20local%20team%20at%20Menjangan."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            flex: 'none',
                                        }}
                                    >
                                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                    </svg>
                                    <span data-l="en">
                                        Book With the Local Team
                                    </span>
                                    <span data-l="id">
                                        Booking dengan Tim Lokal
                                    </span>
                                </a>
                                <span className="micro">
                                    <span className="st">★★★★★</span>
                                    <span>
                                        <span data-l="en">
                                            5-star reviews · Insurance 100% ·
                                            Licensed operator
                                        </span>
                                        <span data-l="id">
                                            Ulasan bintang 5 · Asuransi 100% ·
                                            Operator berlisensi
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <img
                            src="/uploads/wp/diving-menjangan-island1.webp"
                            alt="Diver at Menjangan Island"
                            loading="lazy"
                            decoding="async"
                            width={460}
                            height={345}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '460px',
                                margin: '0 auto',
                            }}
                        />
                    </div>
                </section>

                <section className="sec" style={{ background: '#FFFFFF' }}>
                    <div className="wrap">
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            <span data-l="en">How to book</span>
                            <span data-l="id">Cara booking</span>
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                marginBottom: '26px',
                            }}
                        >
                            <span data-l="en">
                                Three Steps, and We Handle the Rest
                            </span>
                            <span data-l="id">
                                Tiga Langkah, Sisanya Kami Urus
                            </span>
                        </h2>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(240px, 1fr))',
                                gap: '20px',
                            }}
                        >
                            <div className="card">
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--brand)',
                                        color: '#FFFFFF',
                                        fontWeight: '800',
                                        marginBottom: '14px',
                                    }}
                                >
                                    1
                                </span>
                                <h4
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <span data-l="en">Message us</span>
                                    <span data-l="id">Chat kami</span>
                                </h4>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Send your dates, group size and trip. We
                                        reply within the hour.
                                    </span>
                                    <span data-l="id">
                                        Kirim tanggal, jumlah orang dan trip.
                                        Kami balas dalam satu jam.
                                    </span>
                                </p>
                            </div>
                            <div className="card">
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--brand)',
                                        color: '#FFFFFF',
                                        fontWeight: '800',
                                        marginBottom: '14px',
                                    }}
                                >
                                    2
                                </span>
                                <h4
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <span data-l="en">
                                        We confirm the details
                                    </span>
                                    <span data-l="id">
                                        Kami konfirmasi detailnya
                                    </span>
                                </h4>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        We check availability and send the plan,
                                        timings and price.
                                    </span>
                                    <span data-l="id">
                                        Kami cek ketersediaan dan kirim rencana,
                                        jadwal serta harga.
                                    </span>
                                </p>
                            </div>
                            <div className="card">
                                <span
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--brand)',
                                        color: '#FFFFFF',
                                        fontWeight: '800',
                                        marginBottom: '14px',
                                    }}
                                >
                                    3
                                </span>
                                <h4
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <span data-l="en">Show up and get in</span>
                                    <span data-l="id">
                                        Datang dan masuk air
                                    </span>
                                </h4>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--body)',
                                    }}
                                >
                                    <span data-l="en">
                                        Transfer, boat, gear, permit, guide and
                                        lunch are arranged.
                                    </span>
                                    <span data-l="id">
                                        Transfer, boat, alat, izin, guide dan
                                        makan siang sudah diatur.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '10px',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20start%20step%201%20and%20book%20a%20Menjangan%20Island%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Start With Step 1</span>
                                <span data-l="id">Mulai dari Langkah 1</span>
                            </a>
                            <span
                                className="micro"
                                style={{ justifyContent: 'center' }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    className="sec"
                    style={{
                        background: 'var(--wash)',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <div className="wrap" style={{ maxWidth: '860px' }}>
                        <div
                            className="kicker"
                            style={{ marginBottom: '12px' }}
                        >
                            FAQ
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(26px, 3vw, 38px)',
                                marginBottom: '24px',
                            }}
                        >
                            <span data-l="en">Asked Most Before Booking</span>
                            <span data-l="id">
                                Paling Sering Ditanya Sebelum Booking
                            </span>
                        </h2>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                                marginBottom: '12px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        Where are you based, and where does the
                                        boat leave from?
                                    </span>
                                    <span data-l="id">
                                        Di mana lokasi Anda, dan dari mana boat
                                        berangkat?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Our office is on Jl. Banyuwedang in
                                    Pejarakan, on the north-west coast of Bali.
                                    Boats leave from Banyuwedang Harbour and the
                                    crossing takes around 30 minutes.
                                </span>
                                <span data-l="id">
                                    Kantor kami di Jl. Banyuwedang, Pejarakan,
                                    pesisir barat laut Bali. Boat berangkat dari
                                    Pelabuhan Banyuwedang dan penyeberangan
                                    sekitar 30 menit.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Most guests stay in Pemuteran, about fifteen
                                    minutes east, or at a resort closer to
                                    Banyuwedang. We collect you from wherever
                                    you are staying.
                                </span>
                                <span data-l="id">
                                    Sebagian besar tamu menginap di Pemuteran,
                                    sekitar lima belas menit ke timur, atau di
                                    resor yang lebih dekat ke Banyuwedang. Kami
                                    menjemput Anda di tempat menginap.
                                </span>
                            </p>
                        </details>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                                marginBottom: '12px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        Is hotel pick-up included?
                                    </span>
                                    <span data-l="id">
                                        Apakah penjemputan hotel termasuk?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Yes, for anywhere along this stretch of
                                    coast: Pemuteran, Banyuwedang, Pejarakan and
                                    the resorts inside West Bali National Park,
                                    at no extra cost.
                                </span>
                                <span data-l="id">
                                    Ya, untuk seluruh area pesisir ini:
                                    Pemuteran, Banyuwedang, Pejarakan dan resor
                                    di dalam Taman Nasional Bali Barat, tanpa
                                    biaya tambahan.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    From Lovina, Munduk, Ubud or the airport we
                                    can arrange a transfer at a fixed price.
                                    Tell us where you are staying and we confirm
                                    the pickup time.
                                </span>
                                <span data-l="id">
                                    Dari Lovina, Munduk, Ubud atau bandara kami
                                    dapat mengatur transfer dengan harga tetap.
                                    Sebutkan lokasi menginap Anda dan kami
                                    konfirmasi jam penjemputan.
                                </span>
                            </p>
                        </details>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                                marginBottom: '12px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        Is Menjangan suitable for families with
                                        children?
                                    </span>
                                    <span data-l="id">
                                        Apakah Menjangan cocok untuk keluarga
                                        dengan anak?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Yes. The water is calm and sheltered and the
                                    reef starts in the shallows, so children see
                                    plenty without going deep.
                                </span>
                                <span data-l="id">
                                    Ya. Airnya tenang dan terlindung, dan reef
                                    sudah mulai di area dangkal, sehingga
                                    anak-anak bisa melihat banyak tanpa turun
                                    jauh.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Life jackets are provided for everyone and a
                                    guide stays in the water throughout.
                                    Non-swimmers are welcome. With small
                                    children, a private boat gives more control
                                    over pace.
                                </span>
                                <span data-l="id">
                                    Life jacket disediakan untuk semua dan guide
                                    selalu berada di air. Non-perenang bisa
                                    ikut. Dengan anak kecil, private boat
                                    memberi kendali lebih atas ritme trip.
                                </span>
                            </p>
                        </details>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                                marginBottom: '12px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        When is the best time to visit?
                                    </span>
                                    <span data-l="id">
                                        Kapan waktu terbaik untuk berkunjung?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    We run trips year round. Conditions are most
                                    reliable in the dry season, roughly April to
                                    November, when the water is clearest.
                                </span>
                                <span data-l="id">
                                    Kami menjalankan trip sepanjang tahun.
                                    Kondisi paling stabil pada musim kemarau,
                                    sekitar April hingga November, saat air
                                    paling jernih.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    This coast sits in the rain shadow of the
                                    mountains, so it gets far less rainfall than
                                    the south of Bali. Mornings are calmer than
                                    afternoons whatever the month.
                                </span>
                                <span data-l="id">
                                    Pesisir ini berada di balik pegunungan
                                    sehingga curah hujannya jauh lebih rendah
                                    daripada Bali selatan. Pagi lebih tenang
                                    daripada sore, bulan apa pun.
                                </span>
                            </p>
                        </details>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                                marginBottom: '12px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        Are your guides experienced?
                                    </span>
                                    <span data-l="id">
                                        Apakah guide Anda berpengalaman?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Our guides grew up on this coast and have
                                    worked these reefs and trails for years.
                                    Dive guides are certified and park tours are
                                    led by licensed park guides.
                                </span>
                                <span data-l="id">
                                    Guide kami tumbuh di pesisir ini dan sudah
                                    bertahun-tahun bekerja di reef serta jalur
                                    ini. Dive guide bersertifikasi dan tur taman
                                    nasional dipandu guide berlisensi.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Groups stay small, a maximum of ten people
                                    per boat and two divers per guide, so nobody
                                    follows at a distance.
                                </span>
                                <span data-l="id">
                                    Kelompok tetap kecil, maksimal sepuluh orang
                                    per boat dan dua penyelam per guide,
                                    sehingga tidak ada yang tertinggal jauh.
                                </span>
                            </p>
                        </details>
                        <details
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--line)',
                                borderRadius: '10px',
                            }}
                        >
                            <summary
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    color: 'var(--brand-800)',
                                }}
                            >
                                <span style={{ flex: '1' }}>
                                    <span data-l="en">
                                        How do I book, and can I have a private
                                        trip?
                                    </span>
                                    <span data-l="id">
                                        Bagaimana cara booking, dan bisakah trip
                                        privat?
                                    </span>
                                </span>
                                <span
                                    className="plus"
                                    style={{
                                        flex: 'none',
                                        fontSize: '18px',
                                        color: 'var(--brand)',
                                        transition: 'transform 0.15s ease',
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            <p
                                style={{
                                    padding: '0 20px 10px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Message us on WhatsApp with your dates,
                                    group size and which trip you want. We
                                    usually reply within the hour with
                                    availability, price and pickup time.
                                </span>
                                <span data-l="id">
                                    Chat kami di WhatsApp dengan tanggal, jumlah
                                    orang dan trip yang diinginkan. Biasanya
                                    kami balas dalam satu jam berisi
                                    ketersediaan, harga dan jam penjemputan.
                                </span>
                            </p>
                            <p
                                style={{
                                    padding: '0 20px 20px',
                                    fontSize: '15px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Share boats leave at 9 AM. A private boat
                                    lets you choose your own departure between 7
                                    AM and 3 PM and adjust the itinerary.
                                </span>
                                <span data-l="id">
                                    Share boat berangkat jam 9 pagi. Private
                                    boat memungkinkan Anda memilih keberangkatan
                                    antara jam 7 pagi dan 3 sore serta
                                    menyesuaikan itinerary.
                                </span>
                            </p>
                        </details>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '10px',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20have%20a%20question%20about%20the%20Menjangan%20Island%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">
                                    Ask Your Question on WhatsApp
                                </span>
                                <span data-l="id">Tanyakan via WhatsApp</span>
                            </a>
                            <span
                                className="micro"
                                style={{ justifyContent: 'center' }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <img
                        src="/uploads/wp/GOPR9465-scaled-1.webp"
                        alt="Reef at Menjangan Island"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={500}
                        style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: '0',
                            background: 'rgba(15, 26, 48, 0.86)',
                        }}
                    ></div>
                    <div
                        className="wrap"
                        style={{
                            position: 'relative',
                            padding: '84px 24px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 3.8vw, 48px)',
                                color: '#FFFFFF',
                                maxWidth: '24ch',
                                margin: '0 auto 14px',
                            }}
                        >
                            <span data-l="en">
                                Book Your Trip to Menjangan Island
                            </span>
                            <span data-l="id">
                                Booking Trip Anda ke Pulau Menjangan
                            </span>
                        </h2>
                        <p
                            style={{
                                maxWidth: '54ch',
                                margin: '0 auto 26px',
                                fontSize: '16px',
                                color: '#dbe2ee',
                            }}
                        >
                            <span data-l="en">
                                Send your date, package and group size. We reply
                                with the price and confirmation.
                            </span>
                            <span data-l="id">
                                Kirim tanggal, paket dan jumlah tamu. Kami balas
                                dengan harga dan konfirmasi.
                            </span>
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '17px 30px',
                                    fontSize: '16px',
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Chat to Book Your Trip</span>
                                <span data-l="id">Chat untuk Booking Trip</span>
                            </a>
                            <span
                                className="micro"
                                style={{
                                    color: '#cfd8ea',
                                    justifyContent: 'center',
                                }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <footer
                    style={{
                        padding: '56px 24px 90px',
                        background: '#FFFFFF',
                        borderTop: '1px solid var(--line)',
                    }}
                >
                    <div
                        className="wrap"
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(290px, 1fr))',
                            gap: '32px',
                        }}
                    >
                        <div>
                            <img
                                src="/c1/logo-menjangan-128.webp"
                                alt="Menjangan Snorkeling Trip and Diving"
                                width={56}
                                height={56}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    height: '56px',
                                    width: 'auto',
                                    marginBottom: '14px',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: 'var(--body)',
                                    marginBottom: '14px',
                                }}
                            >
                                Jl. Banyuwedang, Banjar Dinas Batu Ampar,
                                Pejarakan, Gerokgak, Buleleng, Bali 81155
                            </p>
                            <div
                                style={{
                                    display: 'grid',
                                    gap: '6px',
                                    fontSize: '14px',
                                    fontWeight: '700',
                                }}
                            >
                                <a
                                    href="https://wa.me/6281238578042"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp +62 812 3857 8042
                                </a>
                                <a
                                    href="https://www.instagram.com/menjanganislandtrip/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>
                            <p
                                style={{
                                    marginTop: '14px',
                                    fontSize: '14px',
                                    color: 'var(--body)',
                                }}
                            >
                                <span data-l="en">
                                    Departures from Banyuwedang Harbour. Share
                                    boat 09:00 daily, private trips 07:00 to
                                    15:00.
                                </span>
                                <span data-l="id">
                                    Keberangkatan dari Pelabuhan Banyuwedang.
                                    Share boat 09.00 harian, trip privat 07.00
                                    sampai 15.00.
                                </span>
                            </p>
                        </div>
                        <div
                            style={{
                                border: '1px solid var(--line)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                minHeight: '280px',
                            }}
                        >
                            <iframe
                                title="Map, Menjangan Snorkeling Trip and Diving"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7899.2736786193855!2d114.5633388!3d-8.1384031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd16953a2c836a7%3A0xcc76350305365688!2sMenjangan%20Snorkeling%20Trip%20%26%20Diving!5e0!3m2!1sen!2sid!4v1787021088694!5m2!1sen!2sid"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '280px',
                                    border: '0',
                                    display: 'block',
                                }}
                            ></iframe>
                        </div>
                    </div>
                </footer>
        </>
    );
}
