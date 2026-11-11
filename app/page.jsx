"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./luka.module.css";
import { legalEntries, onlinePlan, runningPlans, ticketPlans } from "./luka-data";

const LINE_URL = "https://lin.ee/8lCoeZj";
const INSTAGRAM_URL = "https://www.instagram.com/katoshin_san/?hl=ja";

const navigation = [
  { href: "#trainer", label: "Trainer" },
  { href: "#training", label: "Training" },
  { href: "#pricing", label: "Pricing" },
];

const services = [
  { number: "01", label: "対面トレーニング", detail: "50〜55分のマンツーマン指導" },
  { number: "02", label: "LINEサポート", detail: "食事・練習を継続的にサポート" },
  { number: "03", label: "レッスン予約", detail: "予約枠はLINEでご案内" },
  { number: "04", label: "オンライン指導", detail: "オンラインにも対応（50分）" },
];

type Plan = {
  title: string;
  taxPrice: string;
  price: string;
  unitPrice?: string;
};

function PlanItem({ plan, unit }: { plan: Plan; unit: string }) {
  return (
    <article className={styles.plan}>
      <h4 className={styles.planTitle}>{plan.title}</h4>
      <p className={styles.price}>
        <span>{plan.taxPrice}</span>
        <span className={styles.priceUnit}>円<span> / {unit}</span></span>
      </p>
      <p className={styles.taxNote}>税込 / 税別 {plan.price}円</p>
      {plan.unitPrice && (
        <p className={styles.unitPrice}>1回あたり {plan.unitPrice}円</p>
      )}
    </article>
  );
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTokushoOpen, setIsTokushoOpen] = useState(false);

  return (
    <div className={styles.site}>
      <a href="#main-content" className={styles.skipLink}>本文へ移動</a>

      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.headerInner}`}>
          <a href="#top" className={styles.wordmark} aria-label="LUKA! トップ">
            LUKA<span>!</span>
          </a>
          <div className={styles.headerRight}>
            <nav
              id="main-navigation"
              aria-label="メインナビゲーション"
              className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
            >
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className={styles.headerCta} href={LINE_URL} target="_blank" rel="noopener noreferrer">
              無料相談 <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              className={styles.menuToggle}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={isMenuOpen ? styles.menuLineOpenOne : ""} />
              <span className={isMenuOpen ? styles.menuLineOpenTwo : ""} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>LUKA! — Personal Running Training</p>
              <h1 className={styles.heroTitle}>Running &amp;<br />Workout.</h1>
              <p className={styles.heroLead}>
                健康的な身体づくりや<br className={styles.desktopBreak} />
                マラソンを完走したいあなたへ
              </p>
              <p className={styles.heroDescription}>
                皇居で行うランニングパーソナルトレーニング
              </p>
              <a className={styles.textLink} href="#training">
                指導内容を見る <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className={styles.heroFacts}>
              <div><dt>Based in</dt><dd>皇居周辺 / 東京</dd></div>
              <div><dt>Focus</dt><dd>ランニング・身体づくり</dd></div>
              <div><dt>Style</dt><dd>マンツーマン指導</dd></div>
              <div><dt>Trainer</dt><dd>加藤慎之介</dd></div>
            </dl>
          </div>
        </section>

        <section id="trainer" className={styles.section}>
          <div className={`${styles.wrap} ${styles.trainerGrid}`}>
            <figure className={styles.portrait}>
              <Image
                src="/trainer.webp"
                alt="担当トレーナー 加藤慎之介"
                width={1200}
                height={1800}
                sizes="(max-width: 640px) 70vw, (max-width: 860px) 260px, 300px"
                className={styles.portraitImage}
              />
              <figcaption>Shinnosuke Kato / Personal Trainer</figcaption>
            </figure>
            <div className={styles.trainerCopy}>
              <p className={styles.eyebrow}>Trainer</p>
              <h2 className={styles.sectionTitle}>担当トレーナー</h2>
              <h3 className={styles.trainerName}>加藤慎之介</h3>
              <ul className={styles.credentials}>
                <li>ジュニアオリンピック3位（200m）</li>
                <li>日本選手権出場（100m・200m）</li>
                <li>岐南工業高校 → 東海大学</li>
                <li>100kgのお客様を5カ月で10kg減量＆マラソン完走までサポート</li>
              </ul>
              <p className={styles.bodyCopy}>
                初心者・ダイエット目的・初マラソンの方を中心に、フォーム、筋力、練習計画、食事まで一人ひとりに合わせてサポートしています。
              </p>
              <a className={styles.textLink} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="area" className={`${styles.section} ${styles.sectionCompact}`}>
          <div className={`${styles.wrap} ${styles.splitGrid}`}>
            <div>
              <p className={styles.eyebrow}>Location</p>
              <h2 className={styles.sectionTitle}>対応エリア</h2>
            </div>
            <div>
              <p className={styles.locationName}>皇居周り</p>
              <p className={styles.bodyCopy}>その他の場所は要相談です。</p>
              <p className={styles.note}>
                皇居周辺以外のスポットは要相談です。場所により別途交通費を頂戴します。
              </p>
            </div>
          </div>
        </section>

        <section id="training" className={`${styles.section} ${styles.alternate}`}>
          <div className={styles.wrap}>
            <div className={styles.splitGrid}>
              <div>
                <p className={styles.eyebrow}>Training</p>
                <h2 className={styles.sectionTitle}>指導内容</h2>
              </div>
              <div>
                <p className={styles.statement}>
                  走り方だけでなく、筋力・練習計画・食事までまとめて整え、無理なく続けられる状態を目指します。
                </p>
                <p className={styles.bodyCopy}>
                  マンツーマンで、姿勢・フォーム・動きのクセを確認し、お客様の目標と現在の状態に合った練習方法をご提案します。
                </p>
              </div>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article className={styles.service} key={service.number}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <h3>{service.label}</h3>
                  <p>{service.detail}</p>
                </article>
              ))}
            </div>
            <div className={styles.trainingBottom}>
              <p className={styles.bodyCopy}>
                走るために必要な筋力を整えながら、健康的な身体を目指します。目的や体力に合わせて負荷を調整するため、運動が久しぶりの方もご相談ください。
              </p>
              <p className={styles.bodyCopy}>
                ランニング指導に加えて、3食を抜かない食事の考え方と、継続しやすいトレーニング方法をご案内します。
              </p>
              <p className={styles.bodyCopy}>
                無理な食事制限ではなく、3食を基本にした継続しやすい食事を一緒に考えます。
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.splitGrid}>
              <div>
                <p className={styles.eyebrow}>Pricing</p>
                <h2 className={styles.sectionTitle}>料金表</h2>
              </div>
              <p className={styles.bodyCopy}>
                すべて税込表示です。対面指導・練習メニュー作成・LINEでの継続サポートを、選択したプランに合わせて提供します。
              </p>
            </div>
            <div className={styles.priceGroup}>
              <div className={styles.priceGroupHeading}>
                <h3>ランニングプラン</h3>
                <span className={styles.categoryLabel}>Subscription</span>
              </div>
              <p className={styles.note}>サブスクリプション / 月額プラン</p>
              <div className={styles.planGrid}>
                {runningPlans.map((plan) => <PlanItem key={plan.title} plan={plan} unit="月" />)}
              </div>
            </div>
            <div className={styles.priceGroup}>
              <div className={styles.priceGroupHeading}>
                <h3>回数券プラン</h3>
                <span className={styles.categoryLabel}>Ticket</span>
              </div>
              <div className={`${styles.planGrid} ${styles.twoColumns}`}>
                {ticketPlans.map((plan) => <PlanItem key={plan.title} plan={plan} unit={plan.title} />)}
              </div>
            </div>
            <div className={styles.priceGroup}>
              <div className={styles.priceGroupHeading}>
                <h3>オンライントレーニング</h3>
                <span className={styles.categoryLabel}>Online</span>
              </div>
              <div className={styles.onlinePlan}>
                <PlanItem plan={onlinePlan} unit="月" />
                <p className={styles.onlineDescription}>オンライン指導にも対応（50分）</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className={`${styles.wrap} ${styles.splitGrid}`}>
            <div>
              <p className={styles.eyebrow}>Get in touch</p>
              <h2 className={styles.sectionTitle}>無料相談＆<br />カウンセリング</h2>
              <p className={styles.bodyCopy}>ご相談・ご予約はLINEから。</p>
            </div>
            <div className={styles.contactLinks}>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                <span className={styles.categoryLabel}>LINE</span>
                <span>無料相談をする <span aria-hidden="true">↗</span></span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <span className={styles.categoryLabel}>Instagram</span>
                <span>Instagramを見る <span aria-hidden="true">↗</span></span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.legalSection} aria-label="法定表記">
          <div className={styles.wrap}>
            <button
              type="button"
              className={styles.legalToggle}
              aria-expanded={isTokushoOpen}
              aria-controls="legal-content"
              onClick={() => setIsTokushoOpen((open) => !open)}
            >
              <span>特定商取引法に基づく表記</span>
              <span className={styles.legalPlus} aria-hidden="true">{isTokushoOpen ? "−" : "+"}</span>
            </button>
            <div id="legal-content" hidden={!isTokushoOpen}>
              <dl className={styles.legalList}>
                {legalEntries.map(([title, content]) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{content}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <span>LUKA! Running＆Workout</span>
          <span>Tokyo, Japan</span>
        </div>
      </footer>

      <div className={styles.floatingCta}>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
          <span>無料相談＆カウンセリング</span><span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
