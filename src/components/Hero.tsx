import { Phone, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 gradient-hero min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              ร้านยิ่งเจริญแอร์
              <span className="block text-gradient">วังชิ้น</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              จำหน่าย - ติดตั้ง - ซ่อม - ล้าง
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              บริการติดตั้งเดินสายไฟฟ้าภายใน-ภายนอก แอร์ กล้องวงจรปิด ดาวเทียม 
              เครื่องทำน้ำอุ่น และอุปกรณ์ไฟฟ้าทุกชนิด
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:0834749339">
                  <Phone className="w-5 h-5" />
                  โทร. 083-4749339
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0959530570">
                  โทร. 095-9530570
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                  <Snowflake className="w-32 h-32 text-primary" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-sky-medium rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <Snowflake className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-20 left-0 w-16 h-16 bg-sky-light rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Snowflake className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
