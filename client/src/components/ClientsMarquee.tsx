import { motion } from "framer-motion";

export function ClientsMarquee() {
  const logos = Array.from({ length: 9 }).map((_, i) => `/images/clientes/cliente-${i + 1}.png`);
  
  // We duplicate the logos array to create an infinite scroll effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase">
          Nuestros Clientes
        </h2>
        <p className="text-white/60 mt-4 uppercase tracking-widest text-sm font-bold">
          Empresas que confían en nosotros
        </p>
      </div>
      
      {/* Left/Right fading gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-[300vw] sm:w-[200vw] lg:w-[150vw]">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust speed
          }}
        >
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-8 md:px-12 lg:px-16 w-[200px] md:w-[250px] lg:w-[300px]">
              <img 
                src={logo} 
                alt={`Cliente ${index + 1}`} 
                className={`w-full h-auto object-contain ${logo.includes('cliente-9') ? 'scale-[1.3]' : ''}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
