// فيديوهات تعريف المنتجات — ملفات فيديو حقيقية مصوّرة داخل معرض ACTES.
// لكل منتج فيديو خاص به، مع نقاط زمنية تُظهر المواصفة لحظة ذكرها في التعليق الصوتي.
// كل قيمة هنا مأخوذة حرفياً من الكتالوج/الداتاشيت الرسمي للمنتج — ممنوع إضافة أي قيمة غير موثقة.
// لإضافة فيديو منتج جديد: ارفع ملف mp4 إلى src/assets/showroom/<id>.mp4 وصورة البوستر <id>.jpg، ثم أضف مدخلاً هنا بنفس معرف المنتج.

import lipowerVideo from "@/assets/showroom/lipower-bz6248smh.mp4.asset.json";
import lipowerPoster from "@/assets/showroom/lipower-bz6248smh.jpg";
import suntechVideo from "@/assets/showroom/suntech-stp595s-c72-nsh.mp4.asset.json";
import suntechPoster from "@/assets/showroom/suntech-stp595s-c72-nsh.jpg";
import pylontechVideo from "@/assets/showroom/pylontech-rv12314.mp4.asset.json";
import pylontechPoster from "@/assets/showroom/pylontech-rv12314.jpg";
import deyeVideo from "@/assets/showroom/deye-sun-3-6k-sg04lp1.mp4.asset.json";
import deyePoster from "@/assets/showroom/deye-sun-3-6k-sg04lp1.jpg";
import hithiumVideo from "@/assets/showroom/hithium-heroee-maxpower-16.mp4.asset.json";
import hithiumPoster from "@/assets/showroom/hithium-heroee-maxpower-16.jpg";
import suntech720Video from "@/assets/showroom/suntech-stp720s-d66-nsh.mp4.asset.json";
import suntech720Poster from "@/assets/showroom/suntech-stp720s-d66-nsh.jpg";
import deye12kVideo from "@/assets/showroom/deye-sun-7-6-12k-sg02lp1.mp4.asset.json";
import deye12kPoster from "@/assets/showroom/deye-sun-7-6-12k-sg02lp1.jpg";
import deye20kVideo from "@/assets/showroom/deye-sun-14-20k-sg05lp3.mp4.asset.json";
import deye20kPoster from "@/assets/showroom/deye-sun-14-20k-sg05lp3.jpg";
import deye50kVideo from "@/assets/showroom/deye-sun-29-9-50k-sg01hp3.mp4.asset.json";
import deye50kPoster from "@/assets/showroom/deye-sun-29-9-50k-sg01hp3.jpg";
import deye80kVideo from "@/assets/showroom/deye-sun-60-80k-sg02hp3.mp4.asset.json";
import deye80kPoster from "@/assets/showroom/deye-sun-60-80k-sg02hp3.jpg";
import solis8kVideo from "@/assets/showroom/solis-s6-eh2p-5-8k.mp4.asset.json";
import solis8kPoster from "@/assets/showroom/solis-s6-eh2p-5-8k.jpg";
import solis20kVideo from "@/assets/showroom/solis-s6-eh3p-12-20k-h.mp4.asset.json";
import solis20kPoster from "@/assets/showroom/solis-s6-eh3p-12-20k-h.jpg";
import solis50kVideo from "@/assets/showroom/solis-s6-eh3p-29-9-50k-h.mp4.asset.json";
import solis50kPoster from "@/assets/showroom/solis-s6-eh3p-29-9-50k-h.jpg";
import solis125kVideo from "@/assets/showroom/solis-s6-eh3p-75-125k.mp4.asset.json";
import solis125kPoster from "@/assets/showroom/solis-s6-eh3p-75-125k.jpg";

/** بطاقة مواصفة تظهر على الفيديو من الثانية `at` حتى `until`. */
export type VideoCue = { at: number; until: number; label: string; value: string };

export type ProductVideo = {
  src: string;
  poster: string;
  cues: VideoCue[];
};

export const PRODUCT_VIDEOS: Record<string, ProductVideo> = {
  "lipower-bz6248smh": {
    src: lipowerVideo.url,
    poster: lipowerPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "6.2 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Single Phase" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "48 Vdc" },
      { at: 7.4, until: 10, label: "أقصى كفاءة تحويل", value: "98%" },
    ],
  },
  "suntech-stp595s-c72-nsh": {
    src: suntechVideo.url,
    poster: suntechPoster,
    cues: [
      { at: 0.5, until: 3.4, label: "القدرة القصوى Pmax", value: "595 W" },
      { at: 3.4, until: 6.0, label: "نوع الخلية", value: "N-Type TOPCon ثنائي الوجه" },
      { at: 6.0, until: 8.0, label: "كفاءة اللوح", value: "23.0%" },
      { at: 8.0, until: 10, label: "عدد الخلايا", value: "144 خلية نصفية" },
    ],
  },
  "pylontech-rv12314": {
    src: pylontechVideo.url,
    poster: pylontechPoster,
    cues: [
      { at: 0.5, until: 3.0, label: "الجهد المقنن", value: "12.8 V" },
      { at: 3.0, until: 5.6, label: "السعة", value: "314 Ah" },
      { at: 5.6, until: 7.8, label: "الطاقة", value: "4.02 kWh" },
      { at: 7.8, until: 10, label: "عمر الدورات", value: "6000+ دورة" },
    ],
  },
  "deye-sun-3-6k-sg04lp1": {
    src: deyeVideo.url,
    poster: deyePoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "3 – 6 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Single Phase Hybrid" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "48 Vdc" },
      { at: 7.4, until: 10, label: "أقصى كفاءة تحويل", value: "97.6%" },
    ],
  },
  "hithium-heroee-maxpower-16": {
    src: hithiumVideo.url,
    poster: hithiumPoster,
    cues: [
      { at: 0.5, until: 3.0, label: "الجهد المقنن", value: "51.2 V" },
      { at: 3.0, until: 5.6, label: "الطاقة", value: "16.08 kWh" },
      { at: 5.6, until: 7.8, label: "عمر الدورات", value: "11000 دورة" },
      { at: 7.8, until: 10, label: "التوسعة", value: "حتى 16 وحدة على التوازي" },
    ],
  },
  "suntech-stp720s-d66-nsh": {
    src: suntech720Video.url,
    poster: suntech720Poster,
    cues: [
      { at: 0.5, until: 3.4, label: "القدرة القصوى Pmax", value: "720 W" },
      { at: 3.4, until: 6.0, label: "نوع الخلية", value: "N-Type TOPCon زجاج-زجاج ثنائي الوجه" },
      { at: 6.0, until: 8.0, label: "كفاءة اللوح", value: "23.2%" },
      { at: 8.0, until: 10, label: "عدد الخلايا", value: "132 خلية" },
    ],
  },
  "deye-sun-7-6-12k-sg02lp1": {
    src: deye12kVideo.url,
    poster: deye12kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "7.6 – 12 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Single Phase Hybrid" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "40–60 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.6%" },
    ],
  },
  "deye-sun-14-20k-sg05lp3": {
    src: deye20kVideo.url,
    poster: deye20kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "14 – 20 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase Hybrid — 3L+N+PE" },
      { at: 5.4, until: 7.4, label: "أقصى جهد PV", value: "800 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.6%" },
    ],
  },
  "deye-sun-29-9-50k-sg01hp3": {
    src: deye50kVideo.url,
    poster: deye50kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "29.9 – 50 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase — 3L/N/PE" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "160–800 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.60%" },
    ],
  },
  "deye-sun-60-80k-sg02hp3": {
    src: deye80kVideo.url,
    poster: deye80kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "60 – 80 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase Hybrid — 3L+N+PE" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "160–1000 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.60%" },
    ],
  },
  "solis-s6-eh2p-5-8k": {
    src: solis8kVideo.url,
    poster: solis8kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "5 – 8 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Split Phase — L+N+PE/2L+PE" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "40–60 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "96.0%" },
    ],
  },
};

export function getProductVideo(productId: string): ProductVideo | null {
  return PRODUCT_VIDEOS[productId] ?? null;
}
