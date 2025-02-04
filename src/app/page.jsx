"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <div className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-8 flex gap-8">
          <main className="flex-grow max-w-4xl">
            <div className="mb-4 text-sm text-gray-500">
              <a
                target="_self"
                href="/works-stem-1"
                className="hover:text-[#004D4D]"
              >
                トップ
              </a>
              <span className="mx-2">＞</span>
              <a
                target="_self"
                href="/works-stem-1"
                className="hover:text-[#004D4D]"
              >
                お知らせ・コラム
              </a>
            </div>

            <article className="bg-white rounded-lg shadow-sm p-8">
              <header className="mb-8">
                <div className="flex gap-2 mb-4">
                  <span className="bg-[#004D4D] text-white px-3 py-1 text-sm rounded">
                    STEAM・STEM教育
                  </span>
                  <span className="bg-[#D4AF37] text-white px-3 py-1 text-sm rounded">
                    ブログ
                  </span>
                </div>
                <h1 className="text-3xl font-medium mb-4 text-[#004D4D] border-b-2 border-[#D4AF37] pb-2">
                  AI時代を生き抜く！家庭でできるSTEM教育のススメ
                </h1>
                <img
                  src="https://ucarecdn.com/3424d936-2d68-4d2e-8773-6ee474ea71f4/-/format/auto/"
                  alt="ロボットのいるオフィス"
                  className="w-full h-[400px] object-cover rounded-lg mb-4"
                />
                <time className="text-gray-500">2025.01.21</time>
              </header>

              <div className="prose max-w-none space-y-8 text-gray-600">
                <p>
                  <strong style={{ color: 'red' }}>「AIによって、約半数の仕事がなくなる」</strong>  <br></br>
                  <br></br>
                  このような噂に、多くの方が不安を感じているのではないでしょうか。しかし、テクノロジーの進化により、新しい可能性も生まれています。

                  <br /><br />その鍵となるのが、<strong style={{ color: 'green' }}>STEM教育</strong>です。<br /><br />

                  科学、技術、工学、数学を統合的に学ぶこのアプローチにより、2030年以降のAI時代を生き抜くために必要不可欠なスキルを育てることができます。この記事では、STEM教育の重要性と家庭での実践方法について、最新の教育トレンドとともにご紹介します。
                </p>
                <div>
                  <h2 className="text-2xl font-medium text-[#004D4D] border-l-4 border-[#D4AF37] pl-4 mb-6">
                    なぜ今、STEM教育が重要なのか？
                  </h2>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    【事実】2030年には消える仕事が〇〇%？！
                  </h3>
                  <p className="mb-4">
                    近年、AI技術の急速な発展により、私たちの働き方や職業環境は大きく変化しています。野村総合研究所(NRI)とオックスフォード大学の研究によると、<strong style={{ color: 'green' }}>日本にある仕事の49%がAIによって代替される可能性がある</strong>とされています
                    <a href="https://www.nri.com/content/900037164.pdf" class="reference" id="1">*1</a>。
                    特に、定型的な業務や単純作業を中心とした職種は、その多くが消滅するリスクに直面しています。
                  </p>
                  <p className="mb-4">
                    このような急速な変化の中で、STEM教育の重要性が世界中で認識されています。STEM（科学・技術・工学・数学）の知識とスキルは、AI時代を生き抜くための必須能力として注目されているのです。
                  </p>
                  <p className="mb-4">
                    実際に、アメリカやヨーロッパでは、すでにSTEM教育を国家戦略として位置づけ、早期教育に力を入れています。日本でも2020年からのプログラミング教育必修化を皮切りに、STEM教育への取り組みが本格化しています。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    AI時代を生き抜くために必要な力とは？
                  </h3>
                  <p className="mb-4">
                    STEM教育が重視される理由は、単にテクノロジースキルの習得だけではありません。STEM教育を通じて培われる<strong style={{ color: 'green' }}>論理的思考力、問題解決能力、創造性</strong>は、AI時代を生き抜くために不可欠なスキルとなります。
                  </p>
                  <p className="mb-4">
                    これらのスキルについてそれぞれ解説いたします。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    論理的思考力と思考力
                  </h4>
                  <p className="mb-4">
                    AI時代において、<strong style={{ color: 'green' }}>論理的思考力は最重要スキル</strong>といっても過言ではありません。STEM教育を通じて養われるこの能力は、複雑な問題を体系的に分析し、効果的な解決策を見出すための基礎となります。
                  </p>
                  <p className="mb-4">
                    科学的な思考プロセスを学ぶことで、子どもたちは<strong style={{ color: 'green' }}>物事を客観的に捉え、因果関係を理解する力を身につける</strong>ことができます。この能力は、将来的なキャリア形成において大きなアドバンテージとなるでしょう。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    問題解決能力
                  </h4>
                  <p className="mb-4">
                    STEM教育の核となる<strong style={{ color: 'green' }}>問題解決能力は、AI時代において人間にしかできない重要なスキル</strong>です。実験や観察を通じて、子どもたちは試行錯誤しながら問題に取り組む姿勢を学びます。
                  </p>
                  <p className="mb-4">
                    この経験は、<strong style={{ color: 'green' }}>未知の課題に直面した際の対応力を育み、創造的な解決策を生み出す</strong>力となります。プログラミング教育などを通じて、小学生のうちから問題解決の プロセスを体験することは、将来的な成長につながります。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    創造性とイノベーション
                  </h4>
                  <p className="mb-4">
                    AI時代において、人間の創造性とイノベーション能力はますます重要になっています。STEM教育は、科学的知識を基礎としながら、<strong style={{ color: 'green' }}>新しいアイデアを生み出す力を育てる</strong>ことが可能です。
                  </p>
                  <p className="mb-4">
                    実験や制作活動を通じて、子どもたちは自由な発想で問題に取り組み、独創的な解決策を見出す経験を積むことができます。この創造的なプロセスは、<strong style={{ color: 'green' }}>将来的なイノベーターとしての素養を育む</strong>ことにつながります。
                  </p>
                  <p className="mb-4">
                    また、STEM教育で培われる創造性は、AIに代替されることのない、人間ならではの価値を生み出す源泉となるのです。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-[#004D4D] border-l-4 border-[#D4AF37] pl-4 mb-6">
                    家庭で始めるSTEM教育：３つのステップ
                  </h2>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    ステップ１：まずは親がSTEM教育を理解する
                  </h3>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    STEM教育とは？４つの分野を解説
                  </h4>
                  <p className="mb-4">
                    STEM教育は、以下の頭文字を組み合わせた教育方法です。
                  </p>
                  <ul className="list-none pl-6 mb-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#004D4D]">S</span>
                      cience（科学）
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#004D4D]">T</span>
                      echnology（技術）
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#004D4D]">E</span>
                      ngineering（工学）
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#004D4D]">M</span>
                      athematics（数学）
                    </li>
                  </ul>
                  <p className="mb-4">
                    これらの分野を横断的に学ぶことで、これらの分野を横断的に学ぶことで、AI時代に必要な総合的な問題解決能力を育成します。
                  </p>
                  <p className="mb-4">
                    STEM教育の特徴は、<strong style={{ color: 'green' }}>各分野を個別に学ぶのではなく、統合的にアプローチ</strong>することです。例えば、ロボットの制作では、
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>科学的な原理</li>
                    <li>プログラミングの技術</li>
                    <li>工学的な設計</li>
                    <li>動きの計算に必要な数学</li>
                  </ul>
                  <p className="mb-4">
                    の理解が必要となります。このような実践的な学びを通じて、子供たちは自然と複数の分野の知識を結びつける力を身につけていきます。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    なぜSTEM教育が子どもの将来に役立つのか？
                  </h4>
                  <p className="mb-4">
                    STEM教育は、2030年以降の未来社会で必要とされる能力を総合的に育成します。特に、AI時代における子育ての重要なポイントとして、創造的思考力と問題解決能力の育成が挙げられます。
                  </p>
                  <p className="mb-4">
                    早期からSTEM教育に触れることで、科学技術への興味関心が自然と育まれ、子どもの才能を多角的に伸ばすことができます。
                  </p>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    ステップ２：家庭でできるSTEM教育の始め方
                  </h3>
                  <img
                    src="https://ucarecdn.com/e6e34d4f-011e-4b37-be2c-798aaea4c05d/-/format/auto/"
                    alt="小学生がプログラミングを学習している様子"
                    className="w-full h-[400px] object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    身の回りのもので科学に触れる
                  </h4>
                  <p className="mb-4">
                    日常生活の中には、STEM教育の素材が豊富に存在します。例えば、料理を通じて化学反応を学んだり、植物の観察を通じて生物の成長過程を理解したりすることができます。
                  </p>
                  <p className="mb-4">
                    また、身近な電化製品の仕組みを考えることで、技術への興味を引き出すことも可能です。これらの活動を通じて、子どもたちは自然と科学的思考を身につけていきます。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    遊びながら学ぶ：おすすめSTEM教材
                  </h4>
                  <p className="mb-4">
                    市販のSTEM教材には、プログラミング教育に特化したロボットキットや、科学実験セットなど、様々な選択肢があります。これらの教材は、遊びながら学べるよう工夫されており、子どもの興味を継続的に維持することができます。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                    無料教材を活用しよう！
                  </h4>
                  <p className="mb-4">
                    インターネット上には、質の高い無料STEM教育教材が豊富に用意されています。オンラインの科学実験動画や、プログラミング学習サイトなど、家庭で気軽に始められる教材を活用することで、効果的な学習環境を整えることができます。
                  </p>
                  <p className="mb-4">
                    無料で使えるプログラミングツールとして代表的なものは以下の3つとその特徴をご紹介します。
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border border-collapse table-auto">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 border">ツール名</th>
                          <th className="px-4 py-2 border">特徴</th>
                          <th className="px-4 py-2 border">料金</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border">Scratch</td>
                          <td className="px-4 py-2 border">
                            MIT開発のビジュアルプログラミング言語。ブロックを組み合わせる直感的な操作性。未就学児〜小学生向け。ScratchJrは未就学児向け。
                          </td>
                          <td className="px-4 py-2 border">無料</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border">Code.org</td>
                          <td className="px-4 py-2 border">
                            マインクラフトやアナ雪など人気キャラを使った学習コース。年齢や習熟度に応じたコース選択可能。家庭でのSTEM教育に最適。
                          </td>
                          <td className="px-4 py-2 border">無料</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border">CodeMonkey</td>
                          <td className="px-4 py-2 border">
                            ゲーム形式でプログラミング基礎を学習。変数、ループ、条件分岐などをストーリー形式で学べる。30ステージまで無料。
                          </td>
                          <td className="px-4 py-2 border">一部無料 (30ステージまで)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    ステップ３：継続的な学習サポートで才能を伸ばす
                  </h3>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                  子どもの興味を引き出す声かけ
                  </h4>
                  <p className="mb-4">
                  「なぜだろう？」「どうしてそうなるの？」といった好奇心を刺激する声かけは、STEM教育において重要な役割を果たします。子どもの疑問を大切にし、一緒に考える姿勢を示すことで、学びへの意欲を高めることができます。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                  成功体験を積み重ねる
                  </h4>
                  <p className="mb-4">
                  STEM教育において、小さな成功体験を積み重ねることは、子どもの自信につながります。難しい課題は段階的に提示し、達成可能な目標を設定することで、学習意欲を持続させることができます。
                  </p>
                  <h4 className="text-lg font-medium text-[#004D4D] mb-2 pl-4 border-l-2 border-[#D4AF37]">
                  親も一緒に楽しむ
                  </h4>
                  <p>
                  STEM教育は、親子で一緒に取り組むことで、より効果的な学習効果が期待できます。実験や観察を共に楽しみ、発見や成功の喜びを分かち合うことで、子どもの学習意欲は更に高まります。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-[#004D4D] border-l-4 border-[#D4AF37] pl-4 mb-6">
                  今日からあなたもSTEM教育を始めよう！
                  </h2>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    【特典】無料STEM教育教材プレゼント
                  </h3>
                  <p className="mb-4">
                  STEM教育を始めるにあたり、最初の一歩を踏み出すためのサポートとして、当社では無料のSTEM教育教材をご用意しております。この教材は、家庭で気軽に始められる実験や観察のアクティビティが満載で、子どもの才能を伸ばすための具体的なガイドラインも含まれています。
                  </p>
                  <p className="mb-4">
                  教材には、日常生活の中で実践できる15種類のSTEM実験と、プログラミング教育の基礎を学べるオンラインコンテンツへのアクセス権が含まれています。小学生でも理解しやすい解説と、step by stepで進められる構成により、親子で楽しみながら学習を進めることができます。
                  </p>
                  <p className="mb-4">
                  さらに、AI時代の子育てに役立つ最新の教育情報や、STEM教育に関する専門家からのアドバイスも定期的に配信されます。子どもの可能性を最大限に引き出すための具体的なヒントと、実践的なアプローチを学ぶことができます。
                  </p>
                  <h3 className="text-xl font-medium text-[#004D4D] mb-4 pl-4 border-l-2 border-[#D4AF37] flex items-center bg-[#004D4D]/5 py-2 rounded-r">
                    <span className="inline-block w-2 h-2 bg-[#D4AF37] mr-2"></span>
                    未来を切り拓く子どもを育てるために
                  </h3>
                  <p className="mb-4">
                  2030年に向けて、私たちの社会は大きな変革期を迎えています。STEM教育は、この変化の激しい時代を生き抜くために必要不可欠な教育アプローチとなっています。
                  </p>
                  <p className="mb-4">
                  科学技術の進歩は加速度的に進み、新しい職業が次々と生まれる一方で、従来の仕事の多くがAIに置き換わっていく可能性があります。このような時代だからこそ、子どもたちには早い段階からSTEM教育を通じて、創造性や問題解決能力を育んでいくことが重要です。
                  </p>
                  <p className="mb-4">
                  家庭でのSTEM教育の実践は、決して難しいものではありません。日々の生活の中で科学的な視点を取り入れ、子どもの好奇心に寄り添いながら、共に学び、成長していく姿勢が大切です。今日から始めるSTEM教育が、確実に子どもたちの未来への可能性を広げていきます。
                  </p>
                </div>
              </div>
            </article>

            <div className="flex justify-between items-center mt-8">
              <a
                href="/works-stem-2"
                className="flex items-center gap-2 text-gray-600 hover:text-[#004D4D] transition-colors"
              >
                <i className="fas fa-arrow-left"></i>
                <span>前の記事</span>
              </a>
              <a
                href="/works-stem-3"
                className="flex items-center gap-2 text-gray-600 hover:text-[#004D4D] transition-colors"
              >
                <span>次の記事</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </main>

          <aside className="w-72 flex-shrink-0">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">カテゴリー</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    target="_self"
                    href="/works-stem-1"
                    className="text-gray-600 hover:text-[#004D4D]"
                  >
                    教材内容
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    href="/works-stem-1"
                    className="text-gray-600 hover:text-[#004D4D]"
                  >
                    幼児教育
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    href="/works-stem-1"
                    className="text-gray-600 hover:text-[#004D4D]"
                  >
                    STEAM・STEM教育
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    href="/works-stem-1"
                    className="text-gray-600 hover:text-[#004D4D]"
                  >
                    イベント
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#004D4D]">
                    ブログ
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    href="/works-stem-1"
                    className="text-gray-600 hover:text-[#004D4D]"
                  >
                    プログラミング教育
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://ucarecdn.com/783ec124-9a56-4617-ac95-c3847a997879/-/format/auto/"
              alt="Future Learning Logo"
              className="h-12 w-12"
            />
            <a
              target="_self"
              href="/works-stem-1"
              className="text-2xl font-bold text-[#004D4D]"
            >
              Future Learning
            </a>
          </div>
          <div className="flex gap-8">
            <a
              target="_self"
              href="/works-stem-1"
              className="text-gray-600 hover:text-[#004D4D]"
            >
              サイエンスキッズとは
            </a>
            <a
              target="_self"
              href="/works-stem-1"
              className="text-gray-600 hover:text-[#004D4D]"
            >
              教材詳細
            </a>
            <a
              target="_self"
              href="/works-stem-1"
              className="text-gray-600 hover:text-[#004D4D]"
            >
              ブログ
            </a>
            <a
              target="_self"
              href="/works-stem-1"
              className="text-gray-600 hover:text-[#004D4D]"
            >
              事業者・教育関係者の方へ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center text-gray-500 text-sm">
          © 2025 Future Learning All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default MainComponent;