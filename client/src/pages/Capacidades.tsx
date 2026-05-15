import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function Capacidades() {
  return (
    <Layout>
      <section className="bg-black pt-20 pb-32 overflow-hidden" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative min-h-[1000px] rounded-[3rem] overflow-hidden pt-32 pb-24 px-8 md:px-16"
            style={{ 
              backgroundImage: "url('/images/capabilities-container-bg.png')",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Folder Tab Shape */}
            <div 
              className="absolute top-0 left-0 w-full h-16 bg-transparent"
              style={{ clipPath: 'polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)' }}
            ></div>

            {/* Section 1: Cómo respondemos en campo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="/images/capabilities-image-1.png" 
                  alt="Ejecución en campo" 
                  className="rounded-[2rem] w-full shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8"
              >
                <img 
                  src="/images/capabilities-title-1.png" 
                  alt="Cómo respondemos en campo" 
                  className="w-full max-w-[400px] object-contain"
                />
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/images/capabilities-checks-1.png" 
                      alt="Checkmarks" 
                      className="h-full max-h-[300px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-2 text-white/70">
                    {capabilities[0].items.map((item, i) => (
                      <span key={i} className="text-[11px] md:text-xs font-black uppercase tracking-widest leading-relaxed">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Placeholder for other sections */}
            <div className="text-center text-white/20 uppercase tracking-[1em] font-black py-20">
              PRÓXIMAS SECCIONES EN DESARROLLO
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
