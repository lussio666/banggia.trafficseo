"use client";

import { UserPlusIcon, LogInIcon, MessageCircleIcon, XIcon } from "./icons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Liên hệ để đặt hàng
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex flex-row gap-3">
            <a
              href="https://my.trafficseo.net/advertiser/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <UserPlusIcon />
              <span className="md:hidden">Đăng ký</span>
              <span className="hidden md:inline">Đăng ký ngay</span>
            </a>

            <a
              href="https://my.trafficseo.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-white hover:bg-gray-50 text-indigo-600 text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg border-2 border-indigo-600"
            >
              <LogInIcon />
              Đăng nhập
            </a>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Hoặc liên hệ tư vấn trực tiếp:
            </p>
            <div className="flex flex-row gap-3">
              <a
                href="https://t.me/trafficseo_net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-[#59a0dc] hover:bg-[#4a8bc4] text-white text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircleIcon />
                Telegram
              </a>

              <a
                href="https://zalo.me/0982186140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-[#2f57d4] hover:bg-[#2649b0] text-white text-sm font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircleIcon />
                Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
