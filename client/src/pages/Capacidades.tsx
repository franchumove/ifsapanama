import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { motion } from "framer-motion";

export default function Capacidades() {
  return (
    <Layout>
      {/* Hero — matches the reference's header photo area */}
      <Hero
        title="Capacidades"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      {/* Single folder container — ALL 4 sections live inside */}
      <section className="bg-black pb-32 flex justify-center">
        <div
          className="relative w-full max-w-[560px] flex flex-col pt-16 pb-20 px-10"
          style={{
            backgroundImage: "url('/images/capabilities-container-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            minHeight: "1800px",
          }}
        >

          {/* ── SECTION 1 ─────────────────────────────────────────────────
               [Photo LEFT ~160px]  [title + checks|items RIGHT] */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-20"
          >
            {/* Photo */}
            <img
              src="/images/capabilities-image-1.png"
              alt="Ejecución en campo"
              className="w-[155px] flex-shrink-0 rounded-xl shadow-lg"
            />

            {/* Content */}
            <div className="flex flex-col gap-5 flex-1">
              <img
                src="/images/capabilities-title-1.png"
                alt="Cómo respondemos en campo"
                className="w-full object-contain"
              />
              {/* checks col + items text side by side */}
              <div className="flex gap-3 items-start mt-2">
                <img
                  src="/images/capabilities-checks-1.png"
                  alt="checks"
                  className="w-7 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col gap-3">
                  {capabilities[0].items.map((item, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-white/80 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── SECTION 2 ─────────────────────────────────────────────────
               [title + items|checks LEFT]  [Photo RIGHT ~160px] */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-20"
          >
            {/* Content — right-aligned, text before photo */}
            <div className="flex flex-col gap-5 flex-1">
              <img
                src="/images/capabilities-title-2.png"
                alt="Capacidad Técnica y Supervisión"
                className="w-full object-contain"
              />
              {/* items text + checks col (checks on RIGHT, inner side toward photo) */}
              <div className="flex gap-3 items-start mt-2 justify-end">
                <div className="flex flex-col gap-3 text-right">
                  {capabilities[1].items.map((item, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-white/80 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
                <img
                  src="/images/capabilities-checks-2.png"
                  alt="checks"
                  className="w-7 flex-shrink-0 object-contain"
                />
              </div>
            </div>

            {/* Photo */}
            <img
              src="/images/capabilities-image-1.png"
              alt="Capacidad Técnica"
              className="w-[155px] flex-shrink-0 rounded-xl shadow-lg"
            />
          </motion.div>

          {/* ── SECTION 3 ─────────────────────────────────────────────────
               [Photo LEFT ~160px]  [title + checks|items RIGHT] */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start mb-20"
          >
            {/* Photo */}
            <img
              src="/images/capabilities-image-1.png"
              alt="Topografía y Precisión"
              className="w-[155px] flex-shrink-0 rounded-xl shadow-lg"
            />

            {/* Content */}
            <div className="flex flex-col gap-5 flex-1">
              <img
                src="/images/capabilities-title-3.png"
                alt="Topografía y Precisión"
                className="w-full object-contain"
              />
              <div className="flex gap-3 items-start mt-2">
                <img
                  src="/images/capabilities-checks-3.png"
                  alt="checks"
                  className="w-7 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col gap-3">
                  {capabilities[2].items.map((item, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-white/80 leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── SECTION 4: Maquinaria ──────────────────────────────────────
               Full-width gray card (folder cut corner), icon inside + content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 items-center"
            style={{
              backgroundImage: "url('/images/capabilities-maquinaria-bg.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              padding: "28px 24px",
            }}
          >
            {/* Orange icon */}
            <img
              src="/images/icon-maquinaria.png"
              alt="Maquinaria"
              className="w-20 flex-shrink-0 object-contain"
            />

            {/* Content images */}
            <div className="flex flex-col gap-3 flex-1">
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
                alt="Items"
                className="w-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
