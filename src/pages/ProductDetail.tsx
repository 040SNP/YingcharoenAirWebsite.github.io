import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import productAir from "@/assets/product-air.jpg";
import productCctv from "@/assets/product-cctv.jpg";
import productSatellite from "@/assets/product-satellite.jpg";
import productWaterHeater from "@/assets/product-water-heater.jpg";
import productElectrical from "@/assets/product-electrical.jpg";

const products = [
  {
    id: 1,
    slug: "air-conditioner",
    title: "แอร์",
    description: "จำหน่ายและติดตั้งแอร์ทุกยี่ห้อ รับประกันคุณภาพ",
    image: productAir,
    details: {
      name: "Mitsubishi Heavy Duty – SRK13YLV-S (Inverter)",
      specs: [
        { label: "ประเภท", value: "แอร์ติดผนัง (Inverter) – ระบบทำความเย็นเพียงอย่างเดียว (cooling only)" },
        { label: "ขนาดทำความเย็น", value: "~3.5 kW หรือประมาณ 13,000 BTU/hr เหมาะกับห้องขนาด ~12–16 ตร.ม." },
        { label: "พลังไฟฟ้า", value: "ใช้ไฟ 1 Phase 220–240V, 50Hz / กำลังไฟขณะทำงานประมาณ 0.98 kW" },
        { label: "สารทำความเย็น", value: "R410A (มาตรฐานทั่วไปของแอร์อินเวอร์เตอร์)" },
      ],
      dimensions: [
        { label: "ชุดภายใน (Indoor)", value: "~268 × 790 × 213 mm (สูง×กว้าง×ลึก) / น้ำหนัก ~9.5 kg" },
        { label: "ชุดภายนอก (Outdoor)", value: "~595 × 780(+62) × 290 mm / น้ำหนัก ~32 kg" },
      ],
      performance: [
        { label: "EER (Cooling Efficiency)", value: "~3.57 (ค่าประสิทธิภาพการทำงาน)" },
        { label: "ระดับเสียงภายนอก", value: "ประมาณ 62 dB(A)" },
      ],
      features: [
        "ตั้งเวลาทำงาน Timer On/Off",
        "Auto-Restart เมื่อไฟดับ ระบบจะกลับมาทำงานตามเดิมเมื่อติดไฟใหม่",
        "ควบคุมผ่านรีโมทไร้สาย (ปุ่มเรืองแสงสว่าง)",
        "โหมด Sleep / Night Mode ช่วยควบคุมอุณหภูมิช่วงนอนหลับ",
      ],
    },
  },
  {
    id: 2,
    slug: "cctv",
    title: "กล้องวงจรปิด",
    description: "ติดตั้งกล้องวงจรปิด CCTV ดูผ่านมือถือได้",
    image: productCctv,
    details: {
      name: "กล้องวงจรปิด Hi-view",
      models: [
        {
          name: "HW-33MPT302-4G",
          specs: [
            "ความละเอียด 3 ล้านพิกเซล",
            "รองรับการเชื่อมต่อ 4G และ Wi-Fi",
            "Mini Speed Dome (PT) หมุนได้ 355 องศา ก้มเงยได้ 90 องศา",
            "Night Colors (บันทึกภาพสี 24 ชั่วโมง) และแจ้งเตือนความเคลื่อนไหว",
            "มีไมโครโฟนและลำโพงในตัว รองรับการสื่อสารสองทาง",
          ],
        },
        {
          name: "Hiview HA-754B20M",
          specs: [
            "ความละเอียด 2 ล้านพิกเซล (1920x1080P)",
            "กล้อง 4 in 1 รองรับ AHD/TVI/CVI/CVBS",
            "มีไมโครโฟนในตัว บันทึกภาพพร้อมเสียง ระยะเสียง 7 เมตร",
            "อินฟราเรดระยะ 20 เมตร",
            "กันน้ำและฝุ่นมาตรฐาน IP66",
          ],
        },
        {
          name: "Hiview Night Colors",
          specs: [
            "ความละเอียด 2 ล้านพิกเซล",
            "รองรับ 4 ระบบในตัวเดียว (AHD / TVI / CVI / CVBS)",
            "ใช้ไฟ Warm Light 3000K/3500K และ Smart IR เพื่อให้ภาพสีในที่มืด",
            "เหมาะสำหรับติดตั้งภายนอกอาคาร",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    slug: "satellite",
    title: "ดาวเทียม",
    description: "ติดตั้งจานดาวเทียม รับชมช่องรายการมากมาย",
    image: productSatellite,
    details: {
      name: "จานดาวเทียม PSI OK",
      description: "จานดาวเทียมขนาดเล็ก (Offset) ระบบ KU-Band ยอดนิยมของ PSI มีหน้าจานขนาด 60 ซม. และ 35 ซม. (OKD)",
      highlights: [
        "ขนาดเล็ก กะทัดรัด ประหยัดพื้นที่ ติดตั้งง่าย",
        "รับสัญญาณดี ให้ภาพคมชัดในระบบ KU-Band",
        "ใช้ได้กับกล่องรับสัญญาณดาวเทียมทุกรุ่น (PSI, IPM, GMMZ, Sunbox, etc.)",
        "รับชมฟรีทีวีไทยได้ครบถ้วน เช่น ช่อง 3, 5, 7, 9, NBT, TPBS",
        "มีหัว LNB ให้เลือก: OK-1 (1 ขั้ว), OK-2 (2 ขั้ว), OK-4 (4 ขั้ว) เพื่อเพิ่มจุดรับชม",
      ],
    },
  },
  {
    id: 4,
    slug: "water-heater",
    title: "เครื่องทำน้ำอุ่น",
    description: "จำหน่ายและติดตั้งเครื่องทำน้ำอุ่นทุกรุ่น",
    image: productWaterHeater,
    details: {
      name: "Turbora รุ่น P-4500E",
      specs: [
        { label: "กำลังไฟ", value: "4,500 วัตต์" },
        { label: "ถังน้ำร้อน", value: "ทำจากวัสดุทนทาน ไม่เป็นสนิม" },
        { label: "ระบบตัดไฟอัตโนมัติ", value: "ELCB ป้องกันกระแสไฟรั่ว" },
        { label: "มาตรฐาน", value: "มอก. 1693-2547 และประหยัดไฟเบอร์ 5 ระดับ 5 ดาว" },
      ],
      features: [
        "ป้องกันไฟกระชาก",
        "ระบบความปลอดภัย 9 ระดับ",
      ],
    },
  },
  {
    id: 5,
    slug: "electrical",
    title: "อุปกรณ์ไฟฟ้า",
    description: "จำหน่ายอุปกรณ์ไฟฟ้าครบวงจร",
    image: productElectrical,
    details: {
      name: "CHANG รุ่น U-6 ขนาด 6 ช่อง",
      description: "ตู้ควบคุมไฟฟ้าพร้อมติดตั้งที่มาพร้อมเมนเบรกเกอร์กันดูด (RCBO) 1 ตัว และลูกเซอร์กิตอีก 5 ตัว (รวมเป็น 6 ช่อง)",
      specs: [
        { label: "ยี่ห้อ", value: "CHANG (ช้าง)" },
        { label: "รุ่น", value: "U-6 (6 ช่อง)" },
        { label: "อุปกรณ์ในชุด", value: "ตู้ + เมนกันดูด (RCBO) + ลูกย่อย 5 ตัว (รวม 6 ช่องใช้งาน)" },
        { label: "ขนาดลูกย่อย", value: "16A (1 ตัว), 20A (3 ตัว), 32A (2 ตัว)" },
      ],
      features: [
        "ตัวกล่องเป็นเหล็กทนทาน",
        "ฝาหน้าสลับได้",
        "คุณภาพดี ได้มาตรฐาน",
      ],
    },
  },
];

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">ไม่พบสินค้า</h1>
          <Link to="/#products">
            <Button>กลับหน้าหลัก</Button>
          </Link>
        </div>
      </div>
    );
  }

  const { details } = product;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/10 py-6">
        <div className="container mx-auto px-4">
          <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            กลับหน้าสินค้า
          </Link>
          <h1 className="text-3xl font-bold text-foreground">{details.name || product.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">{product.title}</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Description */}
            {'description' in details && details.description && (
              <div className="bg-secondary/30 p-4 rounded-lg">
                <p className="text-muted-foreground">{details.description}</p>
              </div>
            )}

            {/* Specs */}
            {'specs' in details && Array.isArray(details.specs) && details.specs.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                  📋 ข้อมูลทางเทคนิค
                </h3>
                <div className="bg-card border border-border rounded-lg divide-y divide-border">
                  {details.specs.map((spec: any, index: number) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:gap-4 p-3">
                      <span className="font-medium text-primary min-w-[160px]">{spec.label}:</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions */}
            {'dimensions' in details && details.dimensions && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                  📐 ขนาดและน้ำหนัก
                </h3>
                <div className="bg-card border border-border rounded-lg divide-y divide-border">
                  {details.dimensions.map((dim: any, index: number) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:gap-4 p-3">
                      <span className="font-medium text-primary min-w-[160px]">{dim.label}:</span>
                      <span className="text-muted-foreground">{dim.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Performance */}
            {'performance' in details && details.performance && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                  🌬️ ประสิทธิภาพและเสียง
                </h3>
                <div className="bg-card border border-border rounded-lg divide-y divide-border">
                  {details.performance.map((perf: any, index: number) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:gap-4 p-3">
                      <span className="font-medium text-primary min-w-[160px]">{perf.label}:</span>
                      <span className="text-muted-foreground">{perf.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {'features' in details && details.features && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                  ✨ ฟังก์ชันและคุณสมบัติ
                </h3>
                <ul className="space-y-2 bg-card border border-border rounded-lg p-4">
                  {details.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {'highlights' in details && details.highlights && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                  ⭐ จุดเด่น
                </h3>
                <ul className="space-y-2 bg-card border border-border rounded-lg p-4">
                  {details.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CCTV Models */}
            {'models' in details && details.models && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2 text-lg">
                  📹 รุ่นที่มีจำหน่าย
                </h3>
                {details.models.map((model: any, modelIndex: number) => (
                  <div key={modelIndex} className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-3">{model.name}</h4>
                    <ul className="space-y-1">
                      {model.specs.map((spec: string, specIndex: number) => (
                        <li key={specIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <p className="text-foreground mb-4">สนใจสินค้าหรือต้องการสอบถามเพิ่มเติม</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:083-4749339">
                  <Button className="w-full sm:w-auto">โทร 083-4749339</Button>
                </a>
                <a href="tel:095-9530570">
                  <Button variant="outline" className="w-full sm:w-auto">โทร 095-9530570</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
