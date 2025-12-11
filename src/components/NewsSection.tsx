import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Wrench, Wind } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "โปรโมชั่นล้างแอร์",
    description: "บริการล้างแอร์ราคาพิเศษ รับประกันความสะอาด พร้อมตรวจเช็คระบบ",
    icon: Wind,
  },
  {
    id: 2,
    title: "ติดตั้งแอร์ใหม่",
    description: "รับติดตั้งแอร์ทุกยี่ห้อ พร้อมรับประกันงานติดตั้ง บริการหลังการขาย",
    icon: Snowflake,
  },
  {
    id: 3,
    title: "ซ่อมแอร์ด่วน",
    description: "บริการซ่อมแอร์ฉุกเฉิน รวดเร็ว ราคาเป็นกันเอง ช่างมืออาชีพ",
    icon: Wrench,
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          ข่าวสารล่าสุด
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" size="sm">
                  อ่านเพิ่มเติม
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
