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
      <section className="bg-black pt-28 pb-40 overflow-hidden min-h-screen flex flex-col items-center">
        <div 
          className="relative w-full max-w-[1100px] min-h-[2200px] flex flex-col pt-40 px-12 md:px-24"
          style={{ 
            backgroundImage: "url('/images/capabilities-container-bg.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Section 1: Cómo respondemos en campo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-48">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Ejecución en campo" 
                className="rounded-[2.5rem] w-full shadow-2xl border-4 border-white/5"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <img 
                src="/images/capabilities-title-1.png" 
                alt="Cómo respondemos en campo" 
                className="w-full max-w-[420px] object-contain"
              />
              
              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12">
                  <img 
                    src="/images/capabilities-checks-1.png" 
                    alt="Checkmarks" 
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 gap-6">
                  {capabilities[0].items.map((item, i) => (
                    <span key={i} className="text-[12px] md:text-[13px] font-black uppercase tracking-widest text-white leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Capacidad Técnica */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-48">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-end text-right gap-10"
            >
              <img 
                src="/images/capabilities-title-2.png" 
                alt="Capacidad Técnica y Supervisión" 
                className="w-full max-w-[420px] object-contain"
              />
              
              <div className="flex gap-8 justify-end">
                <div className="flex flex-col justify-between py-1 gap-6">
                  {capabilities[1].items.map((item, i) => (
                    <span key={i} className="text-[12px] md:text-[13px] font-black uppercase tracking-widest text-white/80 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex-shrink-0 w-12">
                  <img 
                    src="/images/capabilities-checks-2.png" 
                    alt="Checkmarks" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Capacidad Técnica" 
                className="rounded-[2.5rem] w-full shadow-2xl opacity-60 grayscale border-4 border-white/5"
              />
            </motion.div>
          </div>

          {/* Section 3: Topografía */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-48">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img 
                src="/images/capabilities-image-1.png" 
                alt="Topografía" 
                className="rounded-[2.5rem] w-full shadow-2xl opacity-60 grayscale border-4 border-white/5"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 pl-4"
            >
              <img 
                src="/images/capabilities-title-3.png" 
                alt="Topografía y Precisión" 
                className="w-full max-w-[420px] object-contain"
              />
              
              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12">
                  <img 
                    src="/images/capabilities-checks-3.png" 
                    alt="Checkmarks" 
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 gap-6">
                  {capabilities[2].items.map((item, i) => (
                    <span key={i} className="text-[12px] md:text-[13px] font-black uppercase tracking-widest text-white/80 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
