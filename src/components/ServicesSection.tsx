import { Wrench, Settings, Droplets } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ติดตั้ง",
    description: "บริการติดตั้งแอร์และอุปกรณ์ไฟฟ้าทุกชนิด โดยทีมช่างมืออาชีพ รับประกันงานติดตั้ง",
    icon: Settings,
  },
  {
    id: 2,
    title: "ซ่อม",
    description: "บริการซ่อมแอร์และอุปกรณ์ไฟฟ้า แก้ไขปัญหาได้ตรงจุด ราคาเป็นกันเอง",
    icon: Wrench,
  },
  {
    id: 3,
    title: "ล้าง",
    description: "บริการล้างแอร์แบบล้างลึก ทำความสะอาดคอยล์ร้อน-คอยล์เย็น พร้อมเติมน้ำยา",
    icon: Droplets,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          บริการของเรา
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-24 h-24 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
