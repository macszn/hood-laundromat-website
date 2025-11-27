import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-laundry.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern laundromat with professional washing machines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Premium Laundry Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            The Hood<br />
            <span className="text-primary">Laundromat</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Super Clean • Fresh • Quick
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            Professional laundry and cleaning services for individuals and organizations. 
            We specialize in washing, ironing, dry cleaning, and professional cleaning services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-400">
            <Button
              size="lg"
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft text-lg px-8"
            >
              <a href="tel:0542866969" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Book Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
