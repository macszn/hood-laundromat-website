import clothWashImg from "@/assets/cloth-wash.jpg";
import dryCleanImg from "@/assets/dry-clean.jpg";
import clothIronImg from "@/assets/cloth-iron.jpg";
import clothParkingImg from "@/assets/cloth-parking.jpg";
import pickupDeliveryImg from "@/assets/pickup-delivery.jpg";
import fumigationImg from "@/assets/fumigation.jpg";
import hospitalCleaningImg from "@/assets/hospital-cleaning.jpg";
import contractCleaningImg from "@/assets/contract-cleaning.jpg";
import schoolCleaningImg from "@/assets/school-cleaning.jpg";
import hotelCleaningImg from "@/assets/hotel-cleaning.jpg";
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";

const services = [
  {
    title: "Cloth Wash",
    description: "Professional washing services using premium detergents and modern equipment for spotless results.",
    image: clothWashImg,
  },
  {
    title: "Dry Clean",
    description: "Expert dry cleaning for delicate fabrics and special garments, handled with utmost care.",
    image: dryCleanImg,
  },
  {
    title: "Cloth Iron",
    description: "Precision ironing services for crisp, wrinkle-free clothes that look professionally pressed.",
    image: clothIronImg,
  },
  {
    title: "Cloth Parking",
    description: "Secure storage and organization services for your cleaned and pressed garments.",
    image: clothParkingImg,
  },
  {
    title: "Pick and Drop-up",
    description: "Convenient pickup and delivery service right to your doorstep for hassle-free laundry.",
    image: pickupDeliveryImg,
  },
  {
    title: "Fumigation",
    description: "Professional fumigation services using safe and effective methods for pest control.",
    image: fumigationImg,
  },
  {
    title: "Hospital Cleaning",
    description: "Specialized sterile cleaning services for medical facilities maintaining health standards.",
    image: hospitalCleaningImg,
  },
  {
    title: "Contract Cleaning",
    description: "Large-scale professional cleaning contracts for corporate and commercial properties.",
    image: contractCleaningImg,
  },
  {
    title: "School Cleaning",
    description: "Comprehensive cleaning services for educational institutions ensuring safe learning environments.",
    image: schoolCleaningImg,
  },
  {
    title: "Hotel Cleaning",
    description: "Premium housekeeping services for hotels maintaining luxury standards and guest satisfaction.",
    image: hotelCleaningImg,
  },
  {
    title: "House Cleaning",
    description: "Thorough residential cleaning services making your home spotless and comfortable.",
    image: houseCleaningImg,
  },
  {
    title: "Office Cleaning",
    description: "Professional office cleaning services creating clean and productive work environments.",
    image: officeCleaningImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laundry and cleaning solutions tailored to meet your every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
