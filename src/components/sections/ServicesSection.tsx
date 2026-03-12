import { motion } from 'framer-motion';

const aztecSpring = { type: "spring" as const, stiffness: 100, damping: 20, mass: 1.2 };

const services = [
  {
    title: "Mobile App Development",
    desc: "High-performance mobile applications for iOS and Android designed to improve customer engagement, accessibility, and digital experience."
  },
  {
    title: "High-Performance Web Development",
    desc: "Native coded websites engineered for speed, scalability, and modern interactive experiences with smooth animations and optimized architecture."
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress platforms with optimized performance, flexible content management, and scalable architecture tailored to business needs."
  },
  {
    title: "Shopify & E-Commerce",
    desc: "High-converting Shopify stores with optimized product presentation, seamless checkout flows, and integrated payment systems."
  },
  {
    title: "AI & Intelligent Systems",
    desc: "AI-powered automation, predictive analytics, chatbots, and intelligent systems that transform business operations and decision making."
  },
  {
    title: "Automation & System Integration",
    desc: "Advanced automation workflows using tools like n8n to connect CRMs, marketing platforms, databases, and internal systems."
  },
  {
    title: "Business Intelligence Dashboards",
    desc: "Real-time dashboards and analytics platforms that visualize key metrics and help leaders make data-driven decisions."
  },
  {
    title: "Data Analytics & Insights",
    desc: "Advanced data analysis and predictive models that uncover patterns, opportunities, and strategic insights."
  }
];
const ServicesSection = () => {
  return (
    <section className="relative z-10 py-32 px-6" id="services">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={aztecSpring}
        >
          Services
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-16 text-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={aztecSpring}
        >
          Advanced digital systems engineered to help businesses scale, automate, and innovate.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="glass-panel p-8 cursor-default"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={aztecSpring}
              whileHover={{ scale: 1.03, y: -8, transition: aztecSpring }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
