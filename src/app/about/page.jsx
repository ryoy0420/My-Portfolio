import React from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation
          brandLogo="https://ucarecdn.com/090e26a0-2323-4245-b5f7-42a350c98425/-/format/auto/"
          brandName="Ryo Yoneyama"
        />
 
        <div className="max-w-4xl mx-auto px-8 py-20 flex-grow">
          <h1 className="text-4xl font-light mb-16">About</h1>
 
          <div className="bg-white rounded-xl shadow-sm p-12 mb-12">
            <div className="flex items-center gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-medium mb-2">米山 凌</h2>
                <p className="text-lg text-gray-600">Ryo Yoneyama</p>
              </div>
            </div>
 
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-700">
                  Personal Info
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user text-gray-400 w-5"></i>
                    <span>21歳</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-venus-mars text-gray-400 w-5"></i>
                    <span>男性</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-gray-400 w-5"></i>
                    <span>宮城県仙台市</span>
                  </li>
                </ul>
              </div>
 
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-700">Career</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-24 flex-shrink-0 text-gray-500 text-sm">
                      現在
                    </div>
                    <div className="text-gray-600">東北大学 在学中</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-24 flex-shrink-0 text-gray-500 text-sm">
                      ～2024.11
                    </div>
                    <div className="text-gray-600">
                      個別指導塾講師（小５～高３を担当）
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-24 flex-shrink-0 text-gray-500 text-sm">
                      2024.10～
                    </div>
                    <div className="text-gray-600">webライターとして活動開始</div>
                  </li>
                </ul>
              </div>
            </div>
 
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                お問い合わせ
              </h3>
              <p className="text-gray-600">
                お仕事のご依頼・ご相談は下記メールアドレスまでお願いいたします。
              </p>
              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <i className="fas fa-envelope text-gray-400"></i>
                <a
                  href="mailto:biz.ryo.ai@gmail.com"
                  className="hover:text-gray-900"
                >
                  biz.ryo.ai@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
 
        <Footer copyrightName="米山凌" />
      </div>
    );
  }