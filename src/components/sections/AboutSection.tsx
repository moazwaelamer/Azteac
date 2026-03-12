import { motion } from 'framer-motion';

const aztecSpring = { type: "spring" as const, stiffness: 100, damping: 20, mass: 1.2 };

const AboutSection = () => {
  return (
    <section className="relative z-10 py-32 px-6" id="about">
      <motion.div
        className="max-w-5xl mx-auto glass-panel p-12 md:p-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={aztecSpring}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              About AZTEAC
            </h2>
           <p className="text-muted-foreground mt-6 leading-relaxed">
AZTEAC is a technology company focused on building modern digital systems 
that help businesses scale, automate operations, and create powerful digital experiences.

We specialize in high-performance websites, mobile applications, AI-powered systems,
automation infrastructure, and data intelligence platforms that enable companies
to operate faster and make smarter decisions.
</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-label text-accent mb-2">Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
Our mission is to empower businesses with advanced technology solutions that
improve operational efficiency, accelerate growth, and unlock new digital opportunities.
</p>
            </div>
            <div>
              <h3 className="font-label text-accent mb-2">Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A world where technology seamlessly extends human capability — from Earth's 
                surface to the far reaches of our solar system.
              </p>
            </div>
            <div>
              <h3 className="font-label text-accent mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
Our vision is to become a global technology partner helping organizations
transform digitally through intelligent systems, automation, and scalable software.
</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
