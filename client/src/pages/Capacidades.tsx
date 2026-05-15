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

      {/* Folder — full-width background, all sections inside */}
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

          {/* ── SECTION 1: Cómo respondemos en campo ──────────────────────
               Photo LEFT (35%) | title + checks+items RIGHT (65%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-10 items-start mb-24"
          >
            <img
              src="/images/capabilities-image-1.png"
              alt="Ejecución en campo"
              className="w-[35%] flex-shrink-0 rounded-2xl shadow-xl"
            />
            <div className="flex flex-col gap-6 flex-1">
              <img
                src="/images/capabilities-title-1.png"
                alt="Cómo respondemos en campo"
                className="w-full object-contain"
              />
              <div className="flex gap-4 items-start">
                <img
                  src="/images/capabilities-checks-1.png"
                  alt="checkmarks"
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
            </div>
          </motion.div>

          {/* ── SECTION 2: Capacidad Técnica y Supervisión ─────────────────
               title + items+checks LEFT (65%) | Photo RIGHT (35%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-10 items-start mb-24"
          >
            <div className="flex flex-col gap-6 flex-1">
              <img
                src="/images/capabilities-title-2.png"
                alt="Capacidad Técnica y Supervisión"
                className="w-full object-contain"
              />
              <div className="flex gap-4 items-start justify-end">
                <div className="flex flex-col gap-4 pt-1 text-right">
                  {capabilities[1].items.map((item, i) => (
                    <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white/85 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
                <img
                  src="/images/capabilities-checks-2.png"
                  alt="checkmarks"
                  className="w-8 flex-shrink-0 object-contain"
                />
              </div>
            </div>
            <img
              src="/images/capabilities-image-1.png"
              alt="Capacidad Técnica"
              className="w-[35%] flex-shrink-0 rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* ── SECTION 3: Topografía y Precisión ─────────────────────────
               Photo LEFT (35%) | title + checks+items RIGHT (65%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-10 items-start mb-24"
          >
            <img
              src="/images/capabilities-image-1.png"
              alt="Topografía y Precisión"
              className="w-[35%] flex-shrink-0 rounded-2xl shadow-xl"
            />
            <div className="flex flex-col gap-6 flex-1">
              <img
                src="/images/capabilities-title-3.png"
                alt="Topografía y Precisión"
                className="w-full object-contain"
              />
              <div className="flex gap-4 items-start">
                <img
                  src="/images/capabilities-checks-3.png"
                  alt="checkmarks"
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
            </div>
          </motion.div>

          {/* ── SECTION 4: Maquinaria y Apoyo Operativo ───────────────────
               Gray card with icon LEFT | title + desc + checks RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-10 items-center"
          >
            {/* Gray card with orange excavator icon centered on it */}
            <div className="w-[35%] flex-shrink-0 relative">
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

            {/* Content assets — all images, no text rendered */}
            <div className="flex flex-col gap-4 flex-1">
              <img
                src="/images/capabilities-title-4.png"
                alt="Maquinaria y Apoyo Operativo"
                className="w-full object-contain"
              />
              <img
                src="/images/capabilities-desc-4.png"
                alt="Descripción maquinaria"
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

      {/* CTA */}
      <CTASection
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
      />
    </Layout>
  );
}
