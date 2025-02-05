"use client";
import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation
        brandLogo="https://ucarecdn.com/090e26a0-2323-4245-b5f7-42a350c98425/-/format/auto/"
        brandName="Ryo Yoneyama"
      />
      <section className="relative h-[600px]">
        <img
          src="https://ucarecdn.com/98887636-a544-4dc6-a1cb-f6d0470802ab/-/format/auto/"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute left-32 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-8 rounded-3xl max-w-2xl shadow-xl z-10">
          <p className="text-gray-800 leading-relaxed font-medium text-2xl">
            あなたのアイデアや想いを言葉で形にし、
            <br />
            読者の心に響く新しい価値を創造します。
            <br />
            文章があなたの可能性を描き出します。
          </p>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-center text-3xl mb-16 font-light">Category</h2>
        <div className="flex justify-center gap-20 px-8 max-w-6xl mx-auto">
          <div className="text-center w-72">
            <div className="mb-4">
              <i className="fas fa-pencil-alt text-4xl text-gray-600"></i>
            </div>
            <h3 className="text-xl mb-2">教育</h3>
            <p className="text-sm text-gray-500">EDUCATION</p>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              大学受験の経験、塾講師の経験をもとに、読者に寄り添った記事の執筆をいたします。学生向けの記事だけでなく、保護者向けの記事など幅広く対応いたします。
            </p>
          </div>
          <div className="text-center w-72">
            <div className="mb-4">
              <i className="fas fa-flask text-4xl text-gray-600"></i>
            </div>
            <h3 className="text-xl mb-2">科学技術</h3>
            <p className="text-sm text-gray-500">SCIENCE & TECHNOLOGY</p>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              理系学部での学びとAIツールの活用により、最新の科学技術トレンドを分かりやすく解説いたします。専門的な内容を一般読者向けに翻訳する記事作成を得意としています。
            </p>
          </div>
          <div className="text-center w-72">
            <div className="mb-4">
              <i className="fas fa-gamepad text-4xl text-gray-600"></i>
            </div>
            <h3 className="text-xl mb-2">ゲーム</h3>
            <p className="text-sm text-gray-500">GAME</p>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              5歳ごろからずっとゲームとともに生きてきました。RPGからアクション、シミュレーションまで幅広くプレイしていますので、経験に基づいた記事を執筆できます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-3xl mb-16 font-light">Service</h2>
        <div className="flex flex-wrap justify-center gap-8 px-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-3xl">
            <div className="grid grid-cols-2 gap-6 text-gray-600">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <i className="fas fa-pencil-alt text-gray-400"></i>
                  SEOライティング
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-image text-gray-400"></i>
                  画像の選定、挿入
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-edit text-gray-400"></i>
                  編集、校正、校閲
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <i className="fab fa-wordpress text-gray-400"></i>
                  WordPress入稿
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-key text-gray-400"></i>
                  キーワード選定
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-palette text-gray-400"></i>
                  アイキャッチや図解の作成
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center pb-8">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
        >
          <i className="fas fa-arrow-up"></i>
          トップへ戻る
        </button>
      </div>

      <Footer copyrightName="米山凌" />
    </div>
  );
}