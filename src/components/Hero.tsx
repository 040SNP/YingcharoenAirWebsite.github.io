import { Phone, Sparkles, Zap, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import shop1 from "@/assets/shop1.jpg";
import shop2 from "@/assets/shop2.jpg";
import shop3 from "@/assets/shop3.jpg";
import shop4 from "@/assets/shop4.jpg";
import shop5 from "@/assets/shop5.jpg";

const shopImages = [
  { src: shop1, alt: "หน้าร้านยิ่งเจริญแอร์ - พัดลม" },
  { src: shop2, alt: "สินค้าไฟฟ้าหลากหลาย" },
  { src: shop3, alt: "เครื่องใช้ไฟฟ้าในครัว" },
  { src: shop4, alt: "อุปกรณ์เครื่องเสียง" },
  { src: shop5, alt: "อุปกรณ์ไฟฟ้าและสายไฟ" },
];

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 gradient-hero min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-medium/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-sky-light/30 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} />
        
        {/* Animated lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-medium/20 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">บริการครบวงจร</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="inline-block animate-fade-in" style={{ animationDelay: "0.1s" }}>ร้านยิ่งเจริญไฟฟ้า&แอร์</span>
              <span className="block text-gradient animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
                เซอร์วิส
                <span className="absolute -right-2 -top-2">
                  <Wind className="w-8 h-8 text-primary/60 animate-spin-slow" />
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in flex items-center gap-3" style={{ animationDelay: "0.3s" }}>
              <span className="flex items-center gap-1">
                <Zap className="w-5 h-5 text-primary" />
                จำหน่าย
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>ติดตั้ง</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>ซ่อม</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>ล้าง</span>
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-lg animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s" }}>
              บริการติดตั้งเดินสายไฟฟ้าภายใน-ภายนอก แอร์ กล้องวงจรปิด ดาวเทียม 
              เครื่องทำน้ำอุ่น และอุปกรณ์ไฟฟ้าทุกชนิด
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button size="lg" className="gap-2 group relative overflow-hidden" asChild>
                <a href="tel:0834749339">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/10 to-primary-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  โทร. 083-4749339
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group relative overflow-hidden border-primary/30 hover:border-primary" asChild>
                <a href="tel:0959530570">
                  <span className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">โทร. 095-9530570</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated glow rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-sky-medium/40 to-primary/30 rounded-3xl blur-2xl animate-pulse opacity-60" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sky-light/30 rounded-2xl blur-xl animate-float" />
              
              {/* Floating icons around carousel */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float border border-primary/20" style={{ animationDelay: "0s" }}>
                <Wind className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center animate-float border border-sky-medium/30" style={{ animationDelay: "0.7s" }}>
                <Zap className="w-5 h-5 text-sky-dark" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center animate-float border border-primary/20" style={{ animationDelay: "1.4s" }}>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                  }),
                ]}
                className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-background/80 backdrop-blur-sm"
              >
                <CarouselContent>
                  {shopImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] overflow-hidden relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Image caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm text-foreground font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-background/90 hover:bg-background hover:scale-110 transition-transform" />
                <CarouselNext className="right-2 bg-background/90 hover:bg-background hover:scale-110 transition-transform" />
              </Carousel>
              
              {/* Decorative dots with animation */}
              <div className="flex justify-center gap-3 mt-6">
                {shopImages.map((_, index) => (
                  <div
                    key={index}
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-sky-dark animate-pulse shadow-sm shadow-primary/30"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
