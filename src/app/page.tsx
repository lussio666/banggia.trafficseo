"use client";

import { useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeIcon,
  Share2Icon,
  LinkIcon,
  ClockIcon,
  CheckCircle2Icon,
  InfoIcon,
  ZapIcon,
  UserPlusIcon,
  LogInIcon,
  HomeIcon,
} from "@/components/icons";
import ContactModal from "@/components/ContactModal";
import {
  defaultPricingData,
  categories,
  categoryDescriptions,
  formatPrice,
  type PricingData,
  type VersionData,
} from "@/lib/pricingData";

const categoryIcons = {
  search: SearchIcon,
  direct: GlobeIcon,
  social: Share2Icon,
  backlink: LinkIcon,
};

export default function TrafficPricing() {
  const [activeVersion, setActiveVersion] = useState<1 | 2 | 3>(1);
  const [isSpecialWeb, setIsSpecialWeb] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pricingData] = useState<PricingData>(defaultPricingData);

  const currentData: VersionData =
    activeVersion === 1
      ? pricingData.v1
      : activeVersion === 2
        ? pricingData.v2
        : pricingData.v3;

  return (
    <div className="min-h-screen bg-gray-50 p-3 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="mb-4 md:mb-6">
            <a
              href="https://trafficseo.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://trafficseo.net/wp-content/uploads/2022/08/logo-v2-300.png"
                alt="TrafficSEO Logo"
                width={300}
                height={80}
                className="mx-auto h-16 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                unoptimized
              />
            </a>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Bảng Giá Traffic User Tại TrafficSEO.net
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Giải pháp tăng trưởng traffic thật & tối ưu SEO bền vững
          </p>
        </div>

        {/* Controls: Version Tabs Only - Centered & Sticky */}
        <div className="sticky top-2 z-10 flex justify-center mb-6">
          <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100 inline-flex">
            <div className="flex bg-gray-100 p-1 rounded-lg">
              {([1, 2, 3] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveVersion(v)}
                  className={`px-4 md:px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 whitespace-nowrap ${activeVersion === v
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  Version {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Version Info */}
        <div className="mb-4 bg-indigo-50 border border-indigo-100 rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <ZapIcon className="w-5 h-5 text-indigo-600" />
                {currentData.title}
              </h2>
              <p className="text-indigo-700 text-sm md:text-base mb-3 md:mb-4 min-h-[80px] md:min-h-[50px]">
                {currentData.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {currentData.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-white text-indigo-600 text-[10px] md:text-xs font-medium border border-indigo-100 shadow-sm"
                  >
                    <CheckCircle2Icon className="w-3 h-3 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            {(activeVersion === 2 || activeVersion === 3) && (
              <div className="bg-white/60 p-3 md:p-4 rounded-lg border border-indigo-100 flex flex-col justify-center min-w-[150px] md:min-w-[200px]">
                <div className="text-[10px] md:text-xs text-indigo-500 font-semibold uppercase tracking-wider mb-1">
                  Thời gian bước 2
                </div>
                <div className="text-xl md:text-2xl font-bold text-indigo-800">
                  {currentData.step2Time}
                </div>
                <div className="text-[10px] md:text-xs text-indigo-600 mt-1">
                  Duyệt trang nội bộ
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Web Type Toggle - Centered above Pricing Grid */}
        <div className="flex justify-center mb-4">
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 inline-flex items-center gap-2 md:gap-3">
            <span
              className={`text-xs md:text-sm font-medium ${!isSpecialWeb ? "text-indigo-600" : "text-gray-400"
                }`}
            >
              Web Thường
            </span>
            <button
              onClick={() => setIsSpecialWeb(!isSpecialWeb)}
              className={`relative w-12 h-6 md:w-14 md:h-7 rounded-full transition-colors duration-300 focus:outline-none ${isSpecialWeb ? "bg-indigo-600" : "bg-gray-300"
                }`}
            >
              <div
                className={`absolute top-1 left-1 bg-white w-4 h-4 md:w-5 md:h-5 rounded-full shadow-md transform transition-transform duration-300 ${isSpecialWeb ? "translate-x-6 md:translate-x-7" : "translate-x-0"
                  }`}
              />
            </button>
            <span
              className={`text-xs md:text-sm font-medium ${isSpecialWeb ? "text-indigo-600" : "text-gray-400"
                }`}
            >
              Web Khác
            </span>

            <Tooltip content="Lĩnh vực hoặc nghành nghề của website" placement="bottom">
              <span className="ml-1 cursor-help">
                <InfoIcon className="w-4 h-4 text-gray-400" />
              </span>
            </Tooltip>
          </div>
        </div>

        {/* Pricing Layout - Responsive Grid with Rotating Border */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-6 pb-6 px-4 md:px-0">
          {categories.map((cat) => {
            const IconComponent = categoryIcons[cat.key];
            return (
              <div
                key={cat.key}
                className="rainbow-card shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className={`${cat.bg} p-3 md:p-5 border-b ${cat.border}`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-2">
                    <div
                      className={`p-1.5 md:p-2 bg-white rounded-lg shadow-sm ${cat.color}`}
                    >
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className={`font-bold text-base md:text-lg ${cat.color} break-words`}>
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 ml-1 hidden md:block">
                    {categoryDescriptions[cat.key]}
                  </p>
                </div>

                {/* Price List */}
                <div className="p-1 md:p-2 flex-1 flex flex-col">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-xs md:text-xs font-medium text-gray-400 p-2 md:p-3 pb-1 md:pb-2">
                          Giây
                        </th>
                        <th className="text-right text-xs md:text-xs font-medium text-gray-400 p-2 md:p-3 pb-1 md:pb-2">
                          Giá/view
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.prices[cat.key]?.map((tier, idx) => {
                        const price = isSpecialWeb ? tier.special : tier.normal;
                        const oldPrice = isSpecialWeb
                          ? tier.oldSpecial
                          : tier.oldNormal;
                        const timeVal = parseInt(tier.time);
                        const isLong = timeVal >= 150;
                        const showOldPrice = oldPrice && oldPrice !== price;

                        return (
                          <tr
                            key={idx}
                            className="group border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors h-[52px] md:h-[60px]"
                          >
                            <td className="p-2 md:p-3 h-[52px] md:h-[60px] align-middle">
                              <div className="flex items-center gap-1 md:gap-2 h-full">
                                <ClockIcon
                                  className={`w-3 h-3 ${isLong ? "text-indigo-400" : "text-gray-400"
                                    }`}
                                />
                                <span className="font-semibold text-gray-700 text-sm md:text-sm">
                                  {tier.time}
                                </span>
                              </div>
                            </td>
                            <td className="p-2 md:p-3 text-right h-[52px] md:h-[60px] align-middle">
                              <div className="flex flex-col items-end justify-center h-full">
                                {showOldPrice && (
                                  <span className="text-[10px] md:text-[10px] text-gray-400 line-through decoration-gray-400 leading-tight mb-0.5">
                                    {formatPrice(oldPrice)}
                                  </span>
                                )}
                                {tier.label ? (
                                  <span className="text-xs md:text-xs text-indigo-600 font-medium">
                                    {tier.label}
                                  </span>
                                ) : (
                                  <span className="font-bold text-sm md:text-sm leading-none text-red-600">
                                    {formatPrice(price)}
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {(!currentData.prices[cat.key] ||
                        currentData.prices[cat.key].length === 0) && (
                          <tr className="h-[52px] md:h-[60px]">
                            <td
                              colSpan={2}
                              className="p-4 text-center text-gray-400 text-xs italic h-[52px] md:h-[60px] align-middle"
                            >
                              Chưa có thông tin
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                </div>

                {/* CTA Button */}
                <div className="p-3 md:p-4 mt-auto border-t border-gray-100 mx-1">
                  <Button
                    onPress={() => setShowModal(true)}
                    className={`w-full py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-sm transition-colors duration-200 ${cat.btnColor} text-white`}
                    radius="lg"
                  >
                    Mua ngay
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 md:mt-10 text-center">
          <p className="text-xs md:text-sm text-gray-400 px-4 mb-6 md:mb-8">
            Giá trên được áp dụng từ ngày 01/12/2025 cho đến khi có thông báo mới
            nhất.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
            <a
              href="https://my.trafficseo.net/advertiser/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <UserPlusIcon />
              Đăng ký ngay
            </a>
            <a
              href="https://my.trafficseo.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 text-sm md:text-base font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg border-2 border-indigo-600 whitespace-nowrap"
            >
              <LogInIcon />
              Đăng nhập
            </a>
          </div>

          {/* Trở về trang chủ */}
          <div className="mt-6 text-center">
            <a
              href="https://trafficseo.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors"
            >
              <HomeIcon />
              Trở về Trang chủ
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
