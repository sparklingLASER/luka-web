'use client';

import { useEffect, useState } from 'react';

const images = [
  'https://ucarecdn.com/b2a966ca-4cae-4957-a7db-bb4422eb6473/-/format/auto/',
  'https://ucarecdn.com/cdf14445-1c9e-455b-994c-cdd42d93e419/-/quality/best/-/format/auto/',
  'https://ucarecdn.com/7b3af292-24da-4a95-819d-e7ba2fed011c/-/quality/best/-/format/auto/',
  'https://ucarecdn.com/fab3fb29-3619-431c-ac83-fb93d654ea44/-/quality/best/-/format/auto/',
  'https://ucarecdn.com/c151e40a-9f1c-45cf-806e-6c5ede935d9f/-/quality/best/-/format/auto/',
];

const sectionStyle = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '72px 24px',
};

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      {showQR && (
        <div
          onClick={() => setShowQR(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.72)', zIndex: 50, display: 'grid', placeItems: 'center', padding: 24 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 24, padding: 28, width: 'min(92vw, 360px)', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px', color: '#e91e63' }}>LINEで申し込む</h3>
            <p style={{ color: '#666', fontSize: 14, marginBottom: 16 }}>QRコードを読み取ってください</p>
            <img src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/ca60d0e4-be51-41d9-81f4-052473ea3f24.jpg" alt="LINE QRコード" style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: 16 }} />
            <button onClick={() => setShowQR(false)} style={{ width: '100%', marginTop: 18, padding: '12px 16px', border: 0, borderRadius: 999, background: '#f3f3f3', cursor: 'pointer' }}>閉じる</button>
          </div>
        </div>
      )}

      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`LUKA! ${index + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.35)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(48px, 12vw, 104px)', fontWeight: 900, fontStyle: 'italic', color: '#ff4081', lineHeight: 1 }}>LUKA!</div>
          <div style={{ fontSize: 'clamp(28px, 6vw, 64px)', fontWeight: 700, marginTop: 4 }}>Running＆Workout</div>
          <p style={{ marginTop: 18, fontSize: 'clamp(16px, 2.4vw, 26px)' }}>マラソン完走・ダイエット・ボディメイクに特化したランニング指導</p>
          <div style={{ marginTop: 28 }}>
            <button onClick={() => setShowQR(true)} style={{ background: '#ff4081', color: '#fff', border: 0, borderRadius: 999, padding: '14px 28px', fontSize: 16, cursor: 'pointer' }}>LINEで申し込む</button>
          </div>
        </div>
      </section>

     <section style={sectionStyle}>
  <h2 style={{ fontSize: 34, marginBottom: 24 }}>担当トレーナー</h2>
  <div
    style={{
      background: '#fff5f9',
      borderRadius: 24,
      padding: 28,
      lineHeight: 1.9,
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 24,
      alignItems: 'center',
    }}
  >
    <img
      src="/trainer.jpg"
      alt="担当トレーナー"
      style={{
        width: '100%',
        maxWidth: 300,
        aspectRatio: '3 / 4',
        objectFit: 'cover',
        borderRadius: 20,
      }}
    />

    <div>
      <h3 style={{ marginTop: 0, fontSize: 24 }}>加藤慎之介</h3>
      <ul>
        <li>ジュニアオリンピック3位（200m）</li>
        <li>日本選手権出場（100m・200m）</li>
        <li>岐南工業高校 → 東海大学</li>
        <li>100kgのお客様を5カ月で-10kg＆東京マラソン完走までサポート</li>
      </ul>
      <p>現在はランニングを通してマラソン完走やダイエット・ボディメイクをメインにお客様をサポート中。</p>
    </div>
  </div>
</section>


      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", paddingTop: 0 }}>
  <h2 style={{ fontSize: 34, marginBottom: 24 }}>対応エリア</h2>

  <div
    style={{
      background: "#fff5f9",
      borderRadius: 24,
      padding: 28,
      lineHeight: 1.9,
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    }}
  >
    <ul style={{ margin: 0, paddingLeft: 20, fontSize: 18 }}>
      <li>📍皇居周り</li>
      <li>📍隅田川周り</li>
    </ul>
    <p style={{ marginTop: 14, color: "#666", fontSize: 14 }}>
      （その他スポットは要相談。別途交通費を頂く可能性もあります。）
    </p>
  </div>
</section>

function ContentIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg {...common}>
        <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5A8.38 8.38 0 0 1 8 19.2L3 20.5l1.3-4.7A8.38 8.38 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5 8.5 8.5 0 0 1 21 12Z" />
        <path d="M8.5 12h.01" />
        <path d="M12 12h.01" />
        <path d="M15.5 12h.01" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  if (type === "clipboard") {
    return (
      <svg {...common}>
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4.5h6" />
        <path d="M9 8h6" />
      </svg>
    );
  }

  if (type === "monitor") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 17v3" />
      </svg>
    );
  }

  return null;
}

function InfoCard({ icon, text }) {
  return (
    <div className="guide-info-card">
      <div className="guide-info-icon">
        <ContentIcon type={icon} />
      </div>
      <div className="guide-info-text">{text}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* 他のセクション */}

      <section className="guide-section">
        <div className="guide-heading-wrap">
          <h2 className="guide-heading">指導内容</h2>
          <div className="guide-heading-line" />
        </div>

        <div className="guide-main-card">
          <div className="guide-lead">
            ランニング指導を軸に、必要に応じて筋力トレーニングも取り入れます。
          </div>

          <p className="guide-text top">
            マンツーマンランニング指導を行っています。遅筋繊維を鍛えると効率的に酸素を利用し脂肪を燃やすため基礎代謝も上がりダイエットにも最適です。
          </p>

          <div className="guide-grid">
            <InfoCard
              icon="clock"
              text="対面60〜70分対応（ボディメイクプランは90分又は、午前＆午後に分けて対応）"
            />
            <InfoCard
              icon="message"
              text="LINEでの食事案内有り"
            />
            <InfoCard
              icon="calendar"
              text="毎日対応"
            />
            <InfoCard
              icon="calendar"
              text="予約 7:00〜21:00"
            />
            <InfoCard
              icon="clipboard"
              text="トレーニングメニュー作成"
            />
            <InfoCard
              icon="monitor"
              text="オンラインコーチングも対応（50分）"
            />
          </div>

          <p className="guide-text">
            遅筋繊維は鍛えても筋肥大しないためヒップアップや腹筋の引き締めなどムキムキになりたくない部位を細く引き締めるのに適しています。
          </p>

          <p className="guide-text">
            パーソナルランニング指導に加え、食事指導も行いスタミナを上げながらボディメイクも行うプログラムを提供。
          </p>

          <div className="guide-bottom-box">
            3食抜かずにダイエットを行います。
          </div>
        </div>
      </section>

      <style jsx>{`
        .guide-section {
          padding: 88px 24px 110px;
          background:
            radial-gradient(circle at top, rgba(255, 72, 140, 0.06), transparent 38%),
            linear-gradient(to bottom, #fffefe, #fff9fc);
        }

        .guide-heading-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 44px;
        }

        .guide-heading {
          margin: 0;
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ea2d78;
          line-height: 1.1;
        }

        .guide-heading-line {
          width: 88px;
          height: 6px;
          border-radius: 999px;
          background: #ea2d78;
          margin-top: 16px;
        }

        .guide-main-card {
          width: min(940px, 100%);
          margin: 0 auto;
          background: #ffffff;
          border-radius: 28px;
          padding: 52px 52px 46px;
          box-shadow:
            0 20px 60px rgba(233, 45, 120, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .guide-lead {
          position: relative;
          font-size: 24px;
          font-weight: 800;
          line-height: 1.55;
          color: #ea2d78;
          padding-left: 28px;
          margin-bottom: 30px;
        }

        .guide-lead::before {
          content: "";
          position: absolute;
          left: 0;
          top: 6px;
          width: 8px;
          height: calc(100% - 12px);
          border-radius: 999px;
          background: #ea2d78;
        }

        .guide-text {
          margin: 0;
          font-size: 17px;
          line-height: 2;
          color: #333;
        }

        .guide-text.top {
          margin-bottom: 26px;
        }

        .guide-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px 18px;
          margin-bottom: 28px;
        }

        .guide-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 86px;
          padding: 18px 18px;
          background: linear-gradient(180deg, #fff1f6 0%, #ffeaf2 100%);
          border-radius: 18px;
        }

        .guide-info-icon {
          flex: 0 0 40px;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #ea2d78;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 18px rgba(234, 45, 120, 0.18);
        }

        .guide-info-text {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.7;
          color: #d81b68;
        }

        .guide-text + .guide-text {
          margin-top: 20px;
        }

        .guide-bottom-box {
          margin-top: 28px;
          background: linear-gradient(180deg, #fff1f6 0%, #ffeaf2 100%);
          border-radius: 18px;
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 18px 20px;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.6;
          color: #ea2d78;
        }

        @media (max-width: 900px) {
          .guide-main-card {
            padding: 36px 24px 30px;
            border-radius: 24px;
          }

          .guide-lead {
            font-size: 20px;
            padding-left: 22px;
          }

          .guide-grid {
            grid-template-columns: 1fr;
          }

          .guide-info-card {
            min-height: 78px;
          }
        }

        @media (max-width: 640px) {
          .guide-section {
            padding: 64px 16px 80px;
          }

          .guide-heading {
            font-size: 36px;
          }

          .guide-heading-line {
            width: 72px;
            height: 5px;
            margin-top: 12px;
          }

          .guide-main-card {
            padding: 28px 18px 24px;
            border-radius: 22px;
          }

          .guide-lead {
            font-size: 18px;
            margin-bottom: 22px;
          }

          .guide-text {
            font-size: 15px;
            line-height: 1.9;
          }

          .guide-info-text {
            font-size: 15px;
          }

          .guide-bottom-box {
            font-size: 17px;
            min-height: 70px;
          }
        }
      `}</style>
    </>
  );
}



     <section style={{ ...sectionStyle, paddingTop: 0 }}>
  <h2 style={{ fontSize: 34, marginBottom: 24 }}>料金表</h2>

  <div style={{ display: 'grid', gap: 40 }}>
    <div>
      <div style={{ fontSize: 14, color: '#ff4081', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>
        SUBSCRIPTION
      </div>
      <h3 style={{ margin: '0 0 18px', fontSize: 28 }}>サブスクリプション</h3>
      <p style={{ margin: '0 0 20px', color: '#666' }}>ランニングプラン</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月4回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 8,500円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>34,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 37,400円)</div>
        </div>

        <div style={{ background: '#fff5f9', border: '2px solid #ff4081', borderRadius: 24, padding: 24, boxShadow: '0 12px 36px rgba(255,64,129,0.16)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -12, right: 16, background: '#ff4081', color: '#fff', borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 700 }}>
            おすすめ
          </div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月8回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 8,000円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>64,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 70,400円)</div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月12回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 7,500円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>90,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 99,000円)</div>
        </div>
      </div>
    </div>

    <div>
      <h3 style={{ margin: '0 0 12px', fontSize: 28 }}>ボディメイクプラン</h3>
      <p style={{ margin: '0 0 20px', color: '#666' }}>ランニング＆筋力トレーニング / ※ジム利用料含む</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月4回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 12,000円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>48,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 52,800円)</div>
        </div>

        <div style={{ background: '#fff5f9', border: '2px solid #ff4081', borderRadius: 24, padding: 24, boxShadow: '0 12px 36px rgba(255,64,129,0.16)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -12, right: 16, background: '#111', color: '#fff', borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 700 }}>
            人気
          </div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月8回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 11,500円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>92,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 101,200円)</div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>月12回</div>
          <div style={{ marginTop: 8, color: '#777' }}>単価 11,000円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>132,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 145,200円)</div>
        </div>
      </div>
    </div>

    <div>
      <h3 style={{ margin: '0 0 12px', fontSize: 28 }}>一括プラン</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>1回</div>
          <div style={{ marginTop: 8, color: '#777' }}>※ジム利用料金別</div>
          <div style={{ marginTop: 4, color: '#777' }}>単価 9,500円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>9,500円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 10,450円)</div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #f0d7e3', borderRadius: 24, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>10回</div>
          <div style={{ marginTop: 8, color: '#777' }}>※ジム利用料金別</div>
          <div style={{ marginTop: 4, color: '#777' }}>単価 9,000円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>90,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 99,000円)</div>
        </div>

        <div style={{ background: '#fff5f9', border: '2px solid #ff4081', borderRadius: 24, padding: 24, boxShadow: '0 12px 36px rgba(255,64,129,0.16)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -12, right: 16, background: '#ff4081', color: '#fff', borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 700 }}>
            お得
          </div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>20回</div>
          <div style={{ marginTop: 8, color: '#777' }}>※ジム利用料無料</div>
          <div style={{ marginTop: 4, color: '#777' }}>単価 8,000円</div>
          <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>160,000円</div>
          <div style={{ marginTop: 6, color: '#666' }}>(税込 176,000円)</div>
        </div>
      </div>
    </div>

    <div style={{ background: 'linear-gradient(135deg, #111 0%, #333 100%)', color: '#fff', borderRadius: 28, padding: 28 }}>
      <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>ONLINE COACHING</div>
      <h3 style={{ margin: '0 0 10px', fontSize: 28 }}>オンラインコーチング</h3>
      <p style={{ margin: '0 0 18px', opacity: 0.85 }}>月額プラン / どこでも受けられるオンライン指導</p>
      <div style={{ fontSize: 40, fontWeight: 800 }}>20,000円</div>
      <div style={{ marginTop: 6, opacity: 0.85 }}>(税込 22,000円) / 月</div>
    </div>
  </div>
</section>
    </main>
  );
}
