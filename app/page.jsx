"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  // 1枚目：青い服のトレーナーと歩く写真
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663510938442/rNEfBOsUZZCtJHai.jpg",
  // 2枚目：二人で走っている写真
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663510938442/vHvCUOWGkElgrHkB.jpg",
  // 3枚目：女性の写真
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663510938442/lJXuluxNSHVGpHEi.jpg",
  // 4枚目：青い服で走っている写真
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663510938442/ADttdtEXlroBzMqV.jpg",
  // 5枚目：皇居のお堀沿いを走る写真
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663510938442/cyodKfLkbBjiaRGZ.webp",
];

const LINE_URL = "https://lin.ee/8lCoeZj";
const INSTAGRAM_URL = "https://www.instagram.com/katoshin_san/?hl=ja";

const sectionStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "72px 24px",
};

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTokushoOpen, setIsTokushoOpen] = useState(false);

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
        paddingBottom: 100,
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#fff",
        color: "#111",
      }}
    >
      {/* 画面固定の追尾CTAボタン */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 32px)",
          maxWidth: 480,
        }}
      >
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#ff4081",
            color: "#fff",
            border: 0,
            borderRadius: 999,
            padding: "16px 24px",
            fontSize: "clamp(14px, 4vw, 18px)",
            fontWeight: 800,
            textAlign: "center",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(255, 64, 129, 0.5)",
            letterSpacing: "0.02em",
          }}
        >
          💬 無料相談＆カウンセリング
        </a>
      </div>

      {/* ヒーローセクション */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
        }}
      >
        {images.map((img, index) => (
          <div
            key={img}
            style={{
              position: "absolute",
              inset: 0,
              opacity: currentImage === index ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          >
            <Image
              src={img}
              alt={`LUKA! メイン画像 ${index + 1}`}
              fill
              priority={index === 0}
              unoptimized
              style={{
                objectFit: "cover",
                objectPosition: index === 0 ? "center 20%" : "center",
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.35)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: "clamp(48px, 12vw, 104px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "#ff4081",
              lineHeight: 1,
            }}
          >
            LUKA!
          </div>

          <div
            style={{
              fontSize: "clamp(28px, 6vw, 64px)",
              fontWeight: 700,
              marginTop: 4,
            }}
          >
            Running＆Workout
          </div>

          <p
            style={{
              marginTop: 18,
              fontSize: "clamp(16px, 2.4vw, 26px)",
              lineHeight: 1.7,
            }}
          >
            走ると痛い。でも、マラソンを完走したいあなたへ
            <br />
            皇居で行うランニングパーソナルトレーニング
          </p>
        </div>
      </section>

      {/* 担当トレーナー */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 34, marginBottom: 24 }}>担当トレーナー</h2>

        <div
          style={{
            background: "#fff5f9",
            borderRadius: 24,
            padding: 28,
            lineHeight: 1.9,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 300,
              aspectRatio: "3 / 4",
              margin: "0 auto",
            }}
          >
            <Image
              src="/trainer.jpg"
              alt="担当トレーナー 加藤慎之介"
              fill
              style={{ objectFit: "cover", borderRadius: 20 }}
            />
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: 24 }}>加藤慎之介</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>ジュニアオリンピック3位（200m）</li>
              <li>日本選手権出場（100m・200m）</li>
              <li>岐南工業高校 → 東海大学</li>
              <li>100kgのお客様を5カ月で10kg減量＆マラソン完走までサポート</li>
            </ul>
            <p>
              初心者・ダイエット目的・初マラソンの方を中心に、フォーム、筋力、練習計画、食事まで一人ひとりに合わせてサポートしています。
            </p>

            {/* Instagramリンクボタン */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
                padding: "10px 20px",
                borderRadius: 999,
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(220, 39, 67, 0.25)",
              }}
            >
              <span>📷</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section
        style={{
          ...sectionStyle,
          paddingTop: 0,
        }}
      >
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
            <li>📍皇居周り（その他の場所は要相談）</li>
          </ul>

          <p style={{ marginTop: 14, color: "#666", fontSize: 14 }}>
            皇居周辺以外のスポットは要相談です。場所により別途交通費を頂戴します。
          </p>
        </div>
      </section>

      {/* 指導内容 */}
      <section style={{ ...sectionStyle, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 34,
              margin: 0,
              color: "#e91e63",
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            指導内容
          </h2>
          <div
            style={{
              width: 72,
              height: 4,
              background: "#e91e63",
              borderRadius: 999,
              margin: "14px auto 0",
            }}
          />
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 28,
            padding: 36,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            lineHeight: 1.9,
          }}
        >
          <div
            style={{
              borderLeft: "8px solid #e91e63",
              paddingLeft: 18,
              marginBottom: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#e91e63",
                fontSize: 20,
                fontWeight: 800,
                lineHeight: 1.6,
              }}
            >
              走り方だけでなく、筋力・練習計画・食事までまとめて整え、無理なく続けられる状態を目指します。
            </p>
          </div>

          <p style={{ margin: "0 0 24px", fontSize: 16, color: "#333" }}>
            マンツーマンで、姿勢・フォーム・動きのクセを確認し、お客様の目標と現在の状態に合った練習方法をご提案します。痛みがある場合は無理に走らず、必要に応じて医療機関への相談もご案内します。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            {[
              ["◷", "対面50〜55分（ボディメイクプランは90分）"],
              ["💬", "LINEで食事・練習をサポート"],
              ["🗓️", "予約枠はLINEでご案内"],
              ["📝", "目標に合わせたメニュー作成"],
              ["🖥️", "オンライン指導にも対応（50分）"],
            ].map(([icon, text], index) => (
              <div
                key={index}
                style={{
                  background: "#fff1f6",
                  borderRadius: 18,
                  padding: "18px 16px",
                  display: "flex",
                  alignItems: "center",
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
                    background: "#e91e63",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    color: "#d81b60",
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

          <p style={{ margin: "0 0 20px", fontSize: 16, color: "#333" }}>
            走るために必要な筋力を整えながら、ヒップアップやお腹まわりの引き締めなど、健康的なボディメイクを目指します。目的や体力に合わせて負荷を調整するため、運動が久しぶりの方もご相談ください。
          </p>

          <p style={{ margin: "0 0 24px", fontSize: 16, color: "#333" }}>
            ランニング指導に加えて、3食を抜かない食事の考え方と、継続しやすいトレーニング方法をご案内します。
          </p>

          <p
            style={{ margin: 0, fontSize: 16, color: "#333", fontWeight: 700 }}
          >
            無理な食事制限ではなく、3食を基本にした継続しやすい食事を一緒に考えます。
          </p>
        </div>
      </section>

      {/* 料金表　*/}
      <section style={{ ...sectionStyle, paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 34,
              margin: 0,
              color: "#e91e63",
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            料金表
          </h2>
          <p
            style={{
              margin: "14px auto 0",
              maxWidth: 720,
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            すべて税込表示です。対面指導・練習メニュー作成・LINEでの継続サポートを、選択したプランに合わせて提供します。
          </p>
          <div
            style={{
              width: 72,
              height: 4,
              background: "#e91e63",
              borderRadius: 999,
              margin: "14px auto 0",
            }}
          />
        </div>

        {/* 通い放題プラン */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, color: "#e91e63", marginBottom: 16 }}>
            通い放題プラン
          </h3>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(180deg, #fff7fb 0%, #fff 100%)",
                border: "2px solid #ff7eb3",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(233,30,99,0.12)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: 20,
                  background: "#e91e63",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  padding: "6px 12px",
                  borderRadius: 999,
                  letterSpacing: "0.04em",
                }}
              >
                おすすめ
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#d81b60",
                  marginBottom: 8,
                  lineHeight: 1.7,
                }}
              >
                回数制限なしでしっかり通いたい方におすすめ！
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#666",
                  marginBottom: 10,
                  lineHeight: 1.7,
                }}
              >
                税込110,000円 ÷ 来店回数
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: 4,
                  marginTop: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#111",
                    lineHeight: 1,
                  }}
                >
                  100,000
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#111",
                    marginBottom: 3,
                  }}
                >
                  円 / 月
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#999",
                  marginTop: 6,
                  marginBottom: 6,
                }}
              >
                （税込 110,000円）
              </div>
              <div style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}>
                月14回以上のご利用で、ランニングプラン月12回より1回あたりがお得
              </div>
            </div>
          </div>
        </div>

        {/* ランニングプラン */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, color: "#e91e63", marginBottom: 16 }}>
            ランニングプラン（サブスクリプション）
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "月2回",
                price: "18,000",
                taxPrice: "19,800",
                unitPrice: "9,900",
              },
              {
                title: "月4回",
                price: "34,000",
                taxPrice: "37,400",
                unitPrice: "9,350",
              },
              {
                title: "月8回",
                price: "64,000",
                taxPrice: "70,400",
                unitPrice: "8,800",
              },
              {
                title: "月12回",
                price: "90,000",
                taxPrice: "99,000",
                unitPrice: "8,250",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                style={{
                  background: "#fff",
                  border: "2px solid #fff1f6",
                  borderRadius: 24,
                  padding: 24,
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#666",
                    marginBottom: 12,
                  }}
                >
                  {plan.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: 4,
                    marginTop: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#111",
                      lineHeight: 1,
                    }}
                  >
                    {plan.taxPrice}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#111",
                      marginBottom: 3,
                    }}
                  >
                    円 / 月
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#999",
                    marginTop: 6,
                    marginBottom: 6,
                  }}
                >
                  （税別 {plan.price}円）
                </div>
                <div
                  style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}
                >
                  1回あたり {plan.unitPrice}円 / 回
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ボディメイクプラン */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, color: "#e91e63", marginBottom: 16 }}>
            ボディメイクプラン（サブスクリプション）
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "月2回",
                price: "25,455",
                taxPrice: "28,000",
                unitPrice: "14,000",
              },
              {
                title: "月4回",
                price: "48,000",
                taxPrice: "52,800",
                unitPrice: "13,200",
              },
              {
                title: "月8回",
                price: "92,000",
                taxPrice: "101,200",
                unitPrice: "12,650",
              },
              {
                title: "月12回",
                price: "132,000",
                taxPrice: "145,200",
                unitPrice: "12,100",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                style={{
                  background: "#fff",
                  border: "2px solid #fff1f6",
                  borderRadius: 24,
                  padding: 24,
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#666",
                    marginBottom: 12,
                  }}
                >
                  {plan.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: 4,
                    marginTop: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#111",
                      lineHeight: 1,
                    }}
                  >
                    {plan.taxPrice}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#111",
                      marginBottom: 3,
                    }}
                  >
                    円 / 月
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#999",
                    marginTop: 6,
                    marginBottom: 6,
                  }}
                >
                  （税別 {plan.price}円）
                </div>
                <div
                  style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}
                >
                  1回あたり {plan.unitPrice}円 / 回
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 単発・回数券プラン */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, color: "#e91e63", marginBottom: 16 }}>
            単発・回数券プラン
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {/* 1回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: "#666" }}>
                1回
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.2,
                  marginTop: 12,
                }}
              >
                9,500{" "}
                <span style={{ fontSize: 16, fontWeight: 500, marginLeft: 2 }}>
                  円
                </span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#999",
                  marginTop: 4,
                  marginBottom: 6,
                }}
              >
                (税込 10,450円)
              </div>
              <div style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}>
                1回あたり 10,450円 / 回
              </div>
            </div>

            {/* 10回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#666",
                  marginBottom: 18,
                }}
              >
                10回
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#111",
                    lineHeight: 1,
                  }}
                >
                  90,000
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#111",
                    marginBottom: 3,
                  }}
                >
                  円 / 10回
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#999",
                  marginTop: 6,
                  marginBottom: 6,
                }}
              >
                （税込 99,000円）
              </div>
              <div style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}>
                1回あたり 9,900円 / 回
              </div>
            </div>

            {/* 20回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#666",
                  marginBottom: 18,
                }}
              >
                20回
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#111",
                    lineHeight: 1,
                  }}
                >
                  160,000
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#111",
                    marginBottom: 3,
                  }}
                >
                  円 / 20回
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#999",
                  marginTop: 6,
                  marginBottom: 6,
                }}
              >
                （税込 176,000円）
              </div>
              <div style={{ fontSize: 13, color: "#e91e63", fontWeight: 700 }}>
                1回あたり 8,800円 / 回
              </div>
            </div>
          </div>
        </div>

        {/* オンライントレーニング */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, color: "#e91e63", marginBottom: 16 }}>
            オンライントレーニング
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {/* 月2回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#666",
                  marginBottom: 12,
                }}
              >
                月2回 オンライントレーニング
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                17,500{" "}
                <span style={{ fontSize: 16, fontWeight: 500, marginLeft: 2 }}>
                  円 / 月
                </span>
              </div>
              <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>
                （税込 19,250円）
              </div>
            </div>

            {/* 月4回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#666",
                  marginBottom: 12,
                }}
              >
                月4回 オンライントレーニング
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                30,000{" "}
                <span style={{ fontSize: 16, fontWeight: 500, marginLeft: 2 }}>
                  円 / 月
                </span>
              </div>
              <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>
                （税込 33,000円）
              </div>
            </div>

            {/* 月8回 */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff1f6",
                borderRadius: 24,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#666",
                  marginBottom: 12,
                }}
              >
                月8回　オンライントレーニング
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                54,000{" "}
                <span style={{ fontSize: 16, fontWeight: 500, marginLeft: 2 }}>
                  円 / 月
                </span>
              </div>
              <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>
                （税込 59,400円）
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特定商取引法に基づく表記 */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px 24px",
          borderTop: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => setIsTokushoOpen((prev) => !prev)}
          aria-expanded={isTokushoOpen}
          style={{
            background: "#f8f8f8",
            color: "#555",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.2s ease",
          }}
        >
          <span>特定商取引法に基づく表記</span>
          <span
            style={{
              fontSize: 12,
              transform: isTokushoOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            ▼
          </span>
        </button>

        {isTokushoOpen && (
          <div
            style={{
              marginTop: 24,
              background: "#fafafa",
              borderRadius: 16,
              padding: "24px 28px",
              fontSize: 14,
              lineHeight: 1.8,
              color: "#444",
              textAlign: "left",
              border: "1px solid #eee",
            }}
          >
            <dl style={{ margin: 0 }}>
              {[
                ["販売事業者名（屋号）", "LUKA! Running＆Workout"],
                ["運営責任者", "加藤慎之介"],
                [
                  "所在地",
                  "お問合せ先メールアドレスにてご請求をいただければ、遅滞なく開示いたします。",
                ],
                [
                  "電話番号",
                  "お問合せ先メールアドレスにてご請求をいただければ、遅滞なく開示いたします。",
                ],
                ["メールアドレス", "mikubeautyrun@gmail.com"],
                [
                  "販売価格",
                  "各プラン・お申し込みページに表示された金額（税込）となります。",
                ],
                [
                  "引き渡し時期（役務の提供時期）",
                  "決済確認後、初回レッスンの予約日から役務を提供します。オンラインサービスは案内後、予約日時に提供します。",
                ],
                ["お支払い方法", "クレジットカード決済（Square）、銀行振込"],
                [
                  "代金の支払時期",
                  "【クレジットカード決済】ご利用のカード会社の引落日となります。\n【銀行振込】お申し込み後、指定の期日までにお振込みください（原則、レッスン開始前までのご入金となります）。",
                ],
                [
                  "キャンセル・返金に関しまして",
                  "キャンセル・返金条件は、お申し込み時にご案内する利用規約・予約規定をご確認ください。お申し込み完了後の途中解約・中途キャンセルについては、規定に基づき対応します。",
                ],
              ].map(([title, content], idx, arr) => (
                <div
                  key={title}
                  style={{
                    paddingBottom: 16,
                    marginBottom: idx === arr.length - 1 ? 0 : 16,
                    borderBottom:
                      idx === arr.length - 1 ? "none" : "1px solid #eaeaea",
                  }}
                >
                  <dt
                    style={{ fontWeight: 700, color: "#111", marginBottom: 4 }}
                  >
                    ■ {title}
                  </dt>
                  <dd style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    {content}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>
    </main>
  );
}
