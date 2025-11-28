import { Award, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Service",
    description: "Premium quality cleaning and laundry services using the best equipment and techniques",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals dedicated to delivering exceptional results every time",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    description: "Quick turnaround times without compromising on quality or attention to detail",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Serving individuals and organizations with integrity and professionalism",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At The Hood Laundromat, we offer premium laundry and cleaning services for individuals 
            and organizations. We specialize in washing, ironing, dry cleaning, and professional 
            cleaning services for homes, schools, hotels, and offices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Why Choose The Hood Laundromat?
          </h3>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto mb-6">
            We understand the importance of clean, fresh clothes and spotless spaces. Our commitment 
            to excellence, combined with state-of-the-art equipment and eco-friendly products, ensures 
            that every item we handle receives the care it deserves. Whether you're an individual looking 
            for personal laundry services or an organization needing contract cleaning, we're here to 
            exceed your expectations.
          </p>
          <p className="text-xl font-semibold text-primary">
            Super Clean • Fresh • Quick
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
