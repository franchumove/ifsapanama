import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { motion } from "framer-motion";

export default function Capacidades() {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        title="Capacidades"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      {/* Single folder — full width, all designed assets inside */}
      <section className="bg-black pb-0">
        <div
          className="w-full"
          style={{
            backgroundImage: "url('/images/capabilities-container-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            padding: "80px 80px 120px",
          }}
        >

          {/* SECTION 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-24"
          >
            <img
              src="/images/capabilities-title-1.png"
              alt="Cómo respondemos en campo"
              className="flex-1 object-contain"
            />
            <div className="flex gap-4 items-start flex-1">
              <img
                src="/images/capabilities-checks-1.png"
                alt="checks"
                className="w-8 flex-shrink-0 object-contain"
              />
              <div className="flex flex-col gap-4 pt-1">
                {capabilities[0].items.map((item, i) => (
                  <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white/85 leading-tight">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-24"
          >
            <div className="flex gap-4 items-start flex-1 justify-end">
              <div className="flex flex-col gap-4 pt-1 text-right">
                {capabilities[1].items.map((item, i) => (
                  <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white/85 leading-tight">
                    {item}
                  </span>
                ))}
              </div>
              <img
                src="/images/capabilities-checks-2.png"
                alt="checks"
                className="w-8 flex-shrink-0 object-contain"
              />
            </div>
            <img
              src="/images/capabilities-title-2.png"
              alt="Capacidad Técnica y Supervisión"
              className="flex-1 object-contain"
            />
          </motion.div>

          {/* SECTION 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-24"
          >
            <img
              src="/images/capabilities-title-3.png"
              alt="Topografía y Precisión"
              className="flex-1 object-contain"
            />
            <div className="flex gap-4 items-start flex-1">
              <img
                src="/images/capabilities-checks-3.png"
                alt="checks"
                className="w-8 flex-shrink-0 object-contain"
              />
              <div className="flex flex-col gap-4 pt-1">
                {capabilities[2].items.map((item, i) => (
                  <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white/85 leading-tight">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SECTION 4: Maquinaria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-center"
          >
            {/* Gray card + icon */}
            <div className="relative flex-shrink-0 w-[30%]">
              <img
                src="/images/capabilities-maquinaria-bg.png"
                alt=""
                className="w-full object-contain"
              />
              <img
                src="/images/icon-maquinaria.png"
                alt="Maquinaria"
                className="absolute inset-0 m-auto w-20 object-contain"
              />
            </div>
            {/* Content assets only */}
            <div className="flex flex-col gap-4 flex-1">
              <img
                src="/images/capabilities-title-4.png"
                alt="Maquinaria y Apoyo Operativo"
                className="w-full object-contain"
              />
              <img
                src="/images/capabilities-desc-4.png"
                alt="Descripción"
                className="w-full object-contain"
              />
              <img
                src="/images/capabilities-checks-4.png"
                alt="Items maquinaria"
                className="w-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <CTASection
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
      />
    </Layout>
  );
}
