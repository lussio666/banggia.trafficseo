export interface PriceTier {
  time: string;
  normal: number;
  special: number;
  oldNormal?: number;
  oldSpecial?: number;
  label?: string;
}

export interface VersionData {
  title: string;
  description: string;
  features: string[];
  step2Time?: string;
  prices: {
    search: PriceTier[];
    direct: PriceTier[];
    social: PriceTier[];
    backlink: PriceTier[];
  };
}

export interface PricingData {
  v1: VersionData;
  v2: VersionData;
  v3: VersionData;
}

export const defaultPricingData: PricingData = {
  v1: {
    title: "Version 1",
    description: "Loại 1 bước: User tìm kiếm từ khóa, click vào website của bạn, tìm và click vào nút lấy mã, chờ XX giây đếm ngược để lấy mã.",
    features: ["1 Bước đơn giản", "Traffic thực 100%", "Đếm ngược tại site"],
    prices: {
      search: [
        { time: '60s', normal: 1100, special: 1540, oldNormal: 1100, oldSpecial: 1320 },
        { time: '120s', normal: 1540, special: 1980, oldNormal: 1320, oldSpecial: 1540 },
        { time: '150s', normal: 1760, special: 2200, oldNormal: 1540, oldSpecial: 1760 },
        { time: '200s', normal: 1980, special: 2420, oldNormal: 1980, oldSpecial: 2200 },
      ],
      direct: [
        { time: '60s', normal: 660, special: 990, oldNormal: 550, oldSpecial: 660 },
        { time: '120s', normal: 880, special: 1320, oldNormal: 770, oldSpecial: 880 },
        { time: '150s', normal: 990, special: 1540, oldNormal: 880, oldSpecial: 990 },
        { time: '200s', normal: 1100, special: 1760, oldNormal: 990, oldSpecial: 1100 },
      ],
      social: [
        { time: '60s', normal: 880, special: 1100, oldNormal: 770, oldSpecial: 880 },
        { time: '120s', normal: 1320, special: 1540, oldNormal: 990, oldSpecial: 1100 },
        { time: '150s', normal: 1540, special: 1760, oldNormal: 1100, oldSpecial: 1320 },
        { time: '200s', normal: 1760, special: 1980, oldNormal: 1540, oldSpecial: 1760 },
      ],
      backlink: [
        { time: '60s', normal: 990, special: 1320, oldNormal: 880, oldSpecial: 990 },
        { time: '120s', normal: 1320, special: 1760, oldNormal: 1100, oldSpecial: 1320 },
        { time: '150s', normal: 1540, special: 1980, oldNormal: 1320, oldSpecial: 1540 },
        { time: '200s', normal: 1760, special: 2200, oldNormal: 1760, oldSpecial: 1980 },
      ]
    }
  },
  v2: {
    title: "Version 2",
    description: "Loại 2 bước: User tìm kiếm từ khóa, click vào website của bạn, tìm và click vào nút lấy mã, chờ XX giây đếm ngược, sau đó click ngẫu nhiên link nội bộ và chờ tiếp YY giây để lấy mã.",
    features: ["2 Bước xác thực", "Tăng Pageview/Session", "Giảm tỷ lệ thoát"],
    step2Time: "15s",
    prices: {
      search: [
        { time: '60s', normal: 1540, special: 1980, oldNormal: 1540, oldSpecial: 1760 },
        { time: '120s', normal: 1980, special: 2200, oldNormal: 1760, oldSpecial: 1980 },
        { time: '150s', normal: 2200, special: 2420, oldNormal: 1980, oldSpecial: 2200 },
        { time: '200s', normal: 2420, special: 2640, oldNormal: 2420, oldSpecial: 2640 },
      ],
      direct: [
        { time: '60s', normal: 770, special: 1100, oldNormal: 770, oldSpecial: 880 },
        { time: '120s', normal: 990, special: 1540, oldNormal: 990, oldSpecial: 1100 },
        { time: '150s', normal: 1100, special: 1760, oldNormal: 1100, oldSpecial: 1320 },
        { time: '200s', normal: 1320, special: 1980, oldNormal: 1320, oldSpecial: 1540 },
      ],
      social: [
        { time: '60s', normal: 990, special: 1320, oldNormal: 990, oldSpecial: 1100 },
        { time: '120s', normal: 1320, special: 1760, oldNormal: 1320, oldSpecial: 1540 },
        { time: '150s', normal: 1540, special: 1980, oldNormal: 1540, oldSpecial: 1760 },
        { time: '200s', normal: 1760, special: 2200, oldNormal: 1760, oldSpecial: 1980 },
      ],
      backlink: [
        { time: '60s', normal: 1100, special: 1540, oldNormal: 1100, oldSpecial: 1320 },
        { time: '120s', normal: 1540, special: 1980, oldNormal: 1540, oldSpecial: 1760 },
        { time: '150s', normal: 1760, special: 2200, oldNormal: 1760, oldSpecial: 1980 },
        { time: '200s', normal: 1980, special: 2420, oldNormal: 1980, oldSpecial: 2200 },
      ]
    }
  },
  v3: {
    title: "Version 3",
    description: "Sẽ kết hợp giữa Version 1 và Version 2, nhưng thêm tính năng lướt trang mới đếm ngược để lấy mã, giúp user trải nghiệm trên website tốt hơn cho seo.",
    features: ["Nâng cao trải nghiệm", "Tương tác sâu", "Tối ưu hóa SEO"],
    step2Time: "15s",
    prices: {
      search: [
        { time: '60s', normal: 1760, special: 2200, oldNormal: 1540, oldSpecial: 1760 },
        { time: '120s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '150s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '200s', label: 'Liên hệ', normal: 0, special: 0 },
      ],
      direct: [
        { time: '60s', normal: 990, special: 1320, oldNormal: 770, oldSpecial: 880 },
        { time: '120s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '150s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '200s', label: 'Liên hệ', normal: 0, special: 0 },
      ],
      social: [
        { time: '60s', normal: 1320, special: 1540, oldNormal: 990, oldSpecial: 1100 },
        { time: '120s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '150s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '200s', label: 'Liên hệ', normal: 0, special: 0 },
      ],
      backlink: [
        { time: '60s', normal: 1540, special: 1980, oldNormal: 1100, oldSpecial: 1320 },
        { time: '120s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '150s', label: 'Liên hệ', normal: 0, special: 0 },
        { time: '200s', label: 'Liên hệ', normal: 0, special: 0 },
      ]
    }
  }
};

export const categories = [
  { key: 'search' as const, name: 'Search Traffic', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', btnColor: 'bg-blue-600 hover:bg-blue-700' },
  { key: 'direct' as const, name: 'Direct Traffic', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', btnColor: 'bg-green-600 hover:bg-green-700' },
  { key: 'social' as const, name: 'Social Traffic', color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200', btnColor: 'bg-pink-600 hover:bg-pink-700' },
  // { key: 'backlink' as const, name: 'Backlink Traffic', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', btnColor: 'bg-purple-600 hover:bg-purple-700' },
];

export const categoryDescriptions: Record<string, string> = {
  search: 'Traffic từ tìm kiếm Google',
  direct: 'Truy cập trực tiếp vào Web',
  social: 'Nguồn từ Facebook, Youtube...',
  backlink: 'Referral từ site vệ tinh',
};

export const formatPrice = (price: number): string => {
  if (price === 0) return "Liên hệ";
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};
