import { MapPin, Phone, Clock, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">ลิงค์ด่วน</h3>
            <div className="rounded-lg overflow-hidden h-48 bg-muted/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4!2d99.8!3d17.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU0JzAwLjAiTiA5OcKwNDgnMDAuMCJF!5e0!3m2!1sth!2sth!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ที่ตั้งร้าน"
              />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                หน้า ธกส. วังชิ้น
              </p>
              <p className="text-muted-foreground">อ.วังชิ้น จ.แพร่</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">ติดต่อ:</p>
                    <p className="text-primary-foreground/80">ช่างอาร์ท วังชิ้น</p>
                    <p className="text-primary-foreground/80">อ.วังชิ้น จ.แพร่ 54160</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">เบอร์โทร:</p>
                    <a href="tel:0834749339" className="text-primary hover:underline block">
                      083-4749339
                    </a>
                    <a href="tel:0959530570" className="text-primary hover:underline block">
                      095-9530570
                    </a>
                  </div>
                </div>
              </div>

              {/* Social & Hours */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Facebook className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Facebook:</p>
                    <a 
                      href="https://facebook.com/อาร์ทยิ่งเจริญแอร์" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      อาร์ท ยิ่งเจริญแอร์
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Line:</p>
                    <a 
                      href="https://line.me/ti/p/0959530570" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      0959530570
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">เวลาทำการ:</p>
                    <p className="text-primary-foreground/80">8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ร้านยิ่งเจริญไฟฟ้า-แอร์ & เซอร์วิส. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
