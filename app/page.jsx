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
    <main
      style={{
        margin: 0,
        fontFamily: 'Arial, Helvetica, sans-serif',
        background: '#fff',
        color: '#111',
      }}
    >
      {showQR && (
        <div
          onClick={() => setShowQR(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,.72)',
            zIndex: 50,
            display: 'grid',
            placeItems: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: 28,
              width: 'min(92vw, 360px)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ margin: '0 0 8px', color: '#e91e63' }}>LINEで申し込む</h3>
            <p style={{ color: '#666', fontSize: 14, marginBottom: 16 }}>
              QRコードを読み取ってください
            </p>
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/ca60d0e4-be51-41d9-81f4-052473ea3f24.jpg"
              alt="LINE QRコード"
              style={{
                width: 220,
                height: 220,
                objectFit: 'cover',
                borderRadius: 16,
              }}
            />
            <button
              onClick={() => setShowQR(false)}
              style={{
                width: '100%',
                marginTop: 18,
                padding: '12px 16px',
                border: 0,
                borderRadius: 999,
                background: '#f3f3f3',
                cursor: 'pointer',
              }}
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
        }}
      >
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

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 24px',
            color: '#fff',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(48px, 12vw, 104px)',
              fontWeight: 900,
              fontStyle: 'italic',
              color: '#ff4081',
              lineHeight: 1,
            }}
          >
            LUKA!
          </div>

          <div
            style={{
              fontSize: 'clamp(28px, 6vw, 64px)',
              fontWeight: 700,
              marginTop: 4,
            }}
          >
            Running＆Workout
          </div>

          <p style={{ marginTop: 18, fontSize: 'clamp(16px, 2.4vw, 26px)' }}>
            マラソン完走・ダイエット・ボディメイクに特化したランニング指導
          </p>

          <div style={{ marginTop: 28 }}>
            <button
              onClick={() => setShowQR(true)}
              style={{
                background: '#ff4081',
                color: '#fff',
                border: 0,
                borderRadius: 999,
                padding: '14px 28px',
                fontSize: 16,
                cursor: 'pointer',
              }}
            >
              LINEで申し込む
            </button>
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
            <p>
              現在はランニングを通してマラソン完走やダイエット・ボディメイクをメインにお客様をサポート中。
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '72px 24px',
          paddingTop: 0,
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 24 }}>対応エリア</h2>

        <div
          style={{
            background: '#fff5f9',
            borderRadius: 24,
            padding: 28,
            lineHeight: 1.9,
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          }}
        >
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 18 }}>
            <li>📍皇居周り</li>
            <li>📍隅田川周り</li>
          </ul>

          <p style={{ marginTop: 14, color: '#666', fontSize: 14 }}>
            （その他スポットは要相談。別途交通費を頂く可能性もあります。）
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '72px 24px',
          paddingTop: 0,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 34,
              margin: 0,
              color: '#e91e63',
              fontWeight: 800,
              letterSpacing: '0.04em',
            }}
          >
            指導内容
          </h2>

          <div
            style={{
              width: 72,
              height: 4,
              background: '#e91e63',
              borderRadius: 999,
              margin: '14px auto 0',
            }}
          />
        </div>

        <div
          style={{
            background: '#fff',
            borderRadius: 28,
            padding: 36,
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            lineHeight: 1.9,
          }}
        >
          <div
            style={{
              borderLeft: '8px solid #e91e63',
              paddingLeft: 18,
              marginBottom: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#e91e63',
                fontSize: 20,
                fontWeight: 800,
                lineHeight: 1.6,
              }}
            >
              ランニング指導を軸に、必要に応じて筋力トレーニングも取り入れます。
            </p>
          </div>

          <p style={{ margin: '0 0 24px', fontSize: 16, color: '#333' }}>
            マンツーマンランニング指導を行っています。遅筋繊維を鍛えると効率的に酸素を利用し脂肪を燃やすため、
            基礎代謝も上がりダイエットにも最適です。
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 16,
              marginBottom: 28,
            }}
          >
            {[
              ['◷', '対面60〜70分対応（ボディメイクプランは90分又は、午前＆午後に分けて対応）'],
              ['💬', 'LINEでの食事案内有り'],
              ['📅', '毎日対応'],
              ['🗓️', '予約 7:00〜21:00'],
              ['📝', 'トレーニングメニュー作成'],
              ['🖥️', 'オンラインコーチングも対応（50分）'],
            ].map(([icon, text], index) => (
              <div
                key={`${icon}-${index}`}
                style={{
                  background: '#fff1f6',
                  borderRadius: 18,
                  padding: '18px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  minHeight: 78,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    borderRadius: 12,
                    background: '#e91e63',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  {icon}
                </div>

                <div
                  style={{
                    color: '#d81b60',
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1.7,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: '0 0 20px', fontSize: 16, color: '#333' }}>
            遅筋繊維は鍛えても筋肥大しないためヒップアップや腹筋の引き締めなど、
            ムキムキになりたくない部位を細く引き締めるのに適しています。
          </p>

          <p style={{ margin: '0 0 24px', fontSize: 16, color: '#333' }}>
            パーソナルランニング指導に加え、食事指導も行いスタミナを上げながらボディメイクも行うプログラムを提供。
          </p>

          <div
            style={{
              background: '#fff1f6',
              borderRadius: 18,
              padding: '22px 16px',
              textAlign: 'center',
              color: '#e91e63',
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            3食抜かずにダイエットを行います。
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, paddingTop: 0 }}>
        <h2 style={{ fontSize: 34, marginBottom: 24 }}>料金表</h2>

        <div style={{ display: 'grid', gap: 40 }}>
          <div>
            <div
              style={{
                fontSize: 14,
                color: '#ff4081',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: 8,
              }}
            >
              SUBSCRIPTION
            </div>

            <h3 style={{ margin: '0 0 18px', fontSize: 28 }}>サブスクリプション</h3>
            <p style={{ margin: '0 0 20px', color: '#666' }}>ランニングプラン</p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
              }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>月4回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  34,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 37,400円)</div>
              </div>

              <div
                style={{
                  background: '#fff5f9',
                  border: '2px solid #ff4081',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 12px 36px rgba(255,64,129,0.16)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    right: 16,
                    background: '#ff4081',
                    color: '#fff',
                    borderRadius: 999,
                    padding: '6px 12px',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  おすすめ
                </div>

                <div style={{ fontSize: 22, fontWeight: 700 }}>月8回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  64,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 70,400円)</div>
              </div>

              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>月12回</div>
                <div style={{ marginTop: 8, color: '#777' }}</div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  90,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 99,000円)</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ margin: '0 0 12px', fontSize: 28 }}>ボディメイクプラン</h3>
            <p style={{ margin: '0 0 20px', color: '#666' }}>
              
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
              }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>月4回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  48,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 52,800円)</div>
              </div>

              <div
                style={{
                  background: '#fff5f9',
                  border: '2px solid #ff4081',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 12px 36px rgba(255,64,129,0.16)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    right: 16,
                    background: '#111',
                    color: '#fff',
                    borderRadius: 999,
                    padding: '6px 12px',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  人気
                </div>

                <div style={{ fontSize: 22, fontWeight: 700 }}>月8回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  92,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 101,200円)</div>
              </div>

              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>月12回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  132,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 145,200円)</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ margin: '0 0 12px', fontSize: 28 }}>一括プラン</h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
              }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>1回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 4, color: '#777' }}>単価 9,500円</div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  9,500円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 10,450円)</div>
              </div>

              <div
                style={{
                  background: '#fff',
                  border: '1px solid #f0d7e3',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>10回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 4, color: '#777' }}>単価 9,000円</div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  90,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 99,000円)</div>
              </div>

              <div
                style={{
                  background: '#fff5f9',
                  border: '2px solid #ff4081',
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: '0 12px 36px rgba(255,64,129,0.16)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    right: 16,
                    background: '#ff4081',
                    color: '#fff',
                    borderRadius: 999,
                    padding: '6px 12px',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  お得
                </div>

                <div style={{ fontSize: 22, fontWeight: 700 }}>20回</div>
                <div style={{ marginTop: 8, color: '#777' }}></div>
                <div style={{ marginTop: 4, color: '#777' }}>単価 8,000円</div>
                <div style={{ marginTop: 20, fontSize: 34, fontWeight: 800, color: '#111' }}>
                  160,000円
                </div>
                <div style={{ marginTop: 6, color: '#666' }}>(税込 176,000円)</div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, #111 0%, #333 100%)',
              color: '#fff',
              borderRadius: 28,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>ONLINE COACHING</div>
            <h3 style={{ margin: '0 0 10px', fontSize: 28 }}>オンラインコーチング</h3>
            <p style={{ margin: '0 0 18px', opacity: 0.85 }}>
              月額プラン / どこでも受けられるオンライン指導
            </p>
            <div style={{ fontSize: 40, fontWeight: 800 }}>20,000円</div>
            <div style={{ marginTop: 6, opacity: 0.85 }}>(税込 22,000円) / 月</div>
          </div>
        </div>
      </section>
    </main>
  );
}
