import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { motion } from "framer-motion";

export default function Capacidades() {
  return (
    <Layout>
      <section className="bg-black pt-28 pb-40 overflow-hidden flex flex-col items-center">
        {/* Single folder container — everything lives inside */}
        <div
          className="relative w-full max-w-[1100px] flex flex-col pt-40 pb-32 px-12 md:px-24"
          style={{
            backgroundImage: "url('/images/capabilities-container-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            minHeight: "2400px",
          }}
        >

          {/* ── SECTION 1: Cómo respondemos en campo ─────────────────────
               Layout: [Photo LEFT] [checks | title+items RIGHT] */}
          <div className="grid grid-cols-2 gap-16 items-center mb-40">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/capabilities-image-1.png"
                alt="Ejecución en campo"
                className="rounded-[2rem] w-full shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <img
                src="/images/capabilities-title-1.png"
                alt="Cómo respondemos en campo"
                className="w-full object-contain"
              />
              <div className="flex gap-6 items-start">
                {/* Checks LEFT of text (inner side toward photo) */}
                <img
                  src="/images/capabilities-checks-1.png"
                  alt="checkmarks"
                  className="w-10 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col gap-5">
                  {capabilities[0].items.map((item, i) => (
                    <span key={i} className="text-[12px] font-black uppercase tracking-widest text-white leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── SECTION 2: Capacidad Técnica y Supervisión ───────────────
               Layout: [title+items | checks RIGHT] [Photo RIGHT] */}
          <div className="grid grid-cols-2 gap-16 items-center mb-40">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <img
                src="/images/capabilities-title-2.png"
                alt="Capacidad Técnica y Supervisión"
                className="w-full object-contain"
              />
              <div className="flex gap-6 items-start justify-end">
                <div className="flex flex-col gap-5">
                  {capabilities[1].items.map((item, i) => (
                    <span key={i} className="text-[12px] font-black uppercase tracking-widest text-white leading-tight text-right">
                      {item}
                    </span>
                  ))}
                </div>
                {/* Checks RIGHT of text (inner side toward photo) */}
                <img
                  src="/images/capabilities-checks-2.png"
                  alt="checkmarks"
                  className="w-10 flex-shrink-0 object-contain"
                />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/capabilities-image-1.png"
                alt="Capacidad Técnica"
                className="rounded-[2rem] w-full shadow-2xl"
              />
            </motion.div>
          </div>

          {/* ── SECTION 3: Topografía y Precisión ────────────────────────
               Layout: [Photo LEFT] [checks | title+items RIGHT] */}
          <div className="grid grid-cols-2 gap-16 items-center mb-40">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/capabilities-image-1.png"
                alt="Topografía y Precisión"
                className="rounded-[2rem] w-full shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <img
                src="/images/capabilities-title-3.png"
                alt="Topografía y Precisión"
                className="w-full object-contain"
              />
              <div className="flex gap-6 items-start">
                {/* Checks LEFT of text (inner side toward photo) */}
                <img
                  src="/images/capabilities-checks-3.png"
                  alt="checkmarks"
                  className="w-10 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col gap-5">
                  {capabilities[2].items.map((item, i) => (
                    <span key={i} className="text-[12px] font-black uppercase tracking-widest text-white leading-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── SECTION 4: Maquinaria y Apoyo Operativo ──────────────────
               Layout: [gray card with orange icon LEFT] [title+desc+checks RIGHT] */}
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Gray card with orange icon */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <img
                src="/images/capabilities-maquinaria-bg.png"
                alt="Maquinaria"
                className="w-full object-contain"
              />
              <img
                src="/images/icon-maquinaria.png"
                alt="Icono maquinaria"
                className="absolute w-28 object-contain"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
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
                alt="Puntos operativos maquinaria"
                className="w-full object-contain"
              />
            </motion.div>
          </div>

        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
