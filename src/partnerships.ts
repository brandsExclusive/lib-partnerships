export interface Partnership {
  accountFields: string[];
  bonusUnit: string;
  brandName: string;
  code: string;
  color: string;
  confirmationText: string;
  currencyCodes: string[];
  hasBurn: boolean;
  hasEarn: boolean;
  icon: string;
  iconReversed: string;
  joinUrl: string;
  landingPage: string;
  numberMaxLength: number;
  prefix: string;
  programLogo: string;
  programName: string;
  regionCodes: string[];
  reverseLogo: string;
  landingPageLogo: string;
  rewardConversion: number;
  rewardCurrency: string;
  rewardName: string;
  rewardPer: string;
}

export const Qantas: Partnership = {
  accountFields: [
    "account_id",
    "last_name",
  ],
  bonusUnit: "point",
  brandName: "Qantas",
  code: "qantas",
  color: "#E5242A",
  confirmationText: "Your Qantas Points will land in your Frequent Flyer account in 30 days.",
  currencyCodes: [
    "AUD",
  ],
  hasBurn: true,
  hasEarn: true,
  icon: "Qantas_2x_f6vhzx",
  iconReversed: "qantas_logo_reversed",
  joinUrl: "https://www.qantaspoints.com/join-now?code=LUXURYESCAPES",
  landingPage: "qantas-frequent-flyer",
  landingPageLogo: "Qantas-Luxury-Escapes_z3mtse",
  numberMaxLength: 14,
  prefix: "qff",
  programLogo: "QffLogo_2x_i99mv5",
  programName: "Qantas frequent flyer",
  regionCodes: [
    "AU",
  ],
  reverseLogo: "QffLogoReverse_2x_sxllsy",
  rewardConversion: 1,
  rewardCurrency: "AUD",
  rewardName: "Qantas Points",
  rewardPer: "$1",
};

export const KrisFlyer: Partnership = {
  accountFields: [
    "account_id",
    "first_name",
    "last_name",
  ],
  bonusUnit: "mile",
  brandName: "Singapore Airlines",
  code: "krisFlyer",
  color: "#1D4886",
  confirmationText: "Your miles will land in your KrisFlyer account in 30 days.",
  currencyCodes: [
    "CNY",
    "GBP",
    "HKD",
    "IDR",
    "JPY",
    "KRW",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "TWD",
    "USD",
    "VND",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "krisFlyer_2x_afsst6",
  iconReversed: "krisFlyer_2x_afsst6",
  joinUrl: "https://www.singaporeair.com/en_UK/ppsclub-krisflyer/registration-form/",
  landingPage: "kris-flyer",
  landingPageLogo: "KrisFlyer-Luxury-Escapes_xhzlwg",
  numberMaxLength: 10,
  prefix: "kfp",
  programLogo: "krisFlyerLogo_2x_md61qq",
  programName: "KrisFlyer",
  regionCodes: [
    "CN",
    "GB",
    "HK",
    "ID",
    "JP",
    "KR",
    "MY",
    "NZ",
    "PH",
    "SG",
    "TH",
    "TW",
    "US",
    "VN",
  ],
  reverseLogo: "krisFlyerLogoReverse_2x_gaivta",
  rewardConversion: 1,
  rewardCurrency: "USD",
  rewardName: "KrisFlyer miles",
  rewardPer: "$1 USD",
};

// Images Pending from AMANDA
export const Vistara: Partnership = {
  accountFields: [
    "account_id",
    "first_name",
    "last_name",
  ],
  bonusUnit: "point",
  brandName: "Vistara",
  code: "vistara",
  color: "#582c4f",
  confirmationText: "Your points will land in your Vistara account in 40 days.",
  currencyCodes: [
    "INR",
  ],
  hasBurn: false,
  hasEarn: true,
  icon: "krisFlyer_2x_afsst6",
  iconReversed: "krisFlyer_2x_afsst6",
  joinUrl: "https://www.airvistara.com/trip/register",
  landingPage: "club-vistara",
  landingPageLogo: "KrisFlyer-Luxury-Escapes_xhzlwg",
  numberMaxLength: 14,
  prefix: "cvp",
  programLogo: "krisFlyerLogo_2x_md61qq",
  programName: "Club Vistara",
  regionCodes: [
    "IN",
  ],
  reverseLogo: "krisFlyerLogoReverse_2x_gaivta",
  rewardConversion: 0.2,
  rewardCurrency: "INR",
  rewardName: "CV Points",
  rewardPer: "₹20",
};
