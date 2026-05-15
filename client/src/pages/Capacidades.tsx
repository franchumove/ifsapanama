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
      <section className="bg-black py-20 min-h-screen flex justify-center items-start overflow-hidden" data-testid="section-capabilities">
        <div 
          className="relative w-full max-w-4xl min-h-[1800px] pt-40 pb-32 px-12 md:px-20"
          style={{ 
            backgroundImage: "url('/images/capabilities-container-bg.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Section 1: Cómo respondemos en campo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Ejecución en campo" 
                className="rounded-[1.5rem] w-full shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 pt-4"
            >
              <img 
                src="/images/capabilities-title-1.png" 
                alt="Cómo respondemos en campo" 
                className="w-full max-w-[320px] mb-10 object-contain"
              />
              
              <div className="flex items-stretch gap-6">
                <div className="flex-shrink-0 w-10">
                  <img 
                    src="/images/capabilities-checks-1.png" 
                    alt="Checkmarks" 
                    className="h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  {capabilities[0].items.map((item, i) => (
                    <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white/80 leading-relaxed py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Placeholder based on mockup structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-2 lg:order-1 pt-4 text-right"
            >
              <h2 className="font-heading font-black text-4xl text-white mb-10 uppercase tracking-tighter">
                CAPACIDAD TÉCNICA Y SUPERVISIÓN
              </h2>
              <div className="flex flex-col items-end gap-4 text-white/60">
                {capabilities[1].items.map((item, i) => (
                  <span key={i} className="text-[11px] font-black uppercase tracking-widest leading-relaxed">
                    {item} ✓
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Capacidad Técnica" 
                className="rounded-[1.5rem] w-full shadow-2xl opacity-50 grayscale"
              />
            </motion.div>
          </div>

          {/* Section 3: Placeholder for Topografía */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-40">
            <div className="lg:col-span-5">
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Topografía" 
                className="rounded-[1.5rem] w-full shadow-2xl opacity-50 grayscale"
              />
            </div>
            <div className="lg:col-span-7 pt-4">
              <h2 className="font-heading font-black text-4xl text-white mb-10 uppercase tracking-tighter">
                TOPOGRAFÍA Y PRECISIÓN
              </h2>
              <div className="space-y-6">
                {capabilities[2].items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/60">
                    <span className="text-white/40">✓</span>
                    <span className="text-[11px] font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
