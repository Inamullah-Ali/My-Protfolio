import { ArrowRight} from 'lucide-react';
import { motion } from 'motion/react';
import DownloadCV from './downloadcv';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground mb-4"
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 font-bold text-5xl"
            >
             Inam-Ullah Ali
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground mb-6"
            >
             Full-Stack Web & Mobile Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground mb-8 max-w-2xl"
            >
             Motivated BSIT student with hands-on experience in modern web development technologies. Skilled in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Firebase. Passionate about building scalable web applications, creating seamless user experiences, and developing efficient, maintainable solutions through clean code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-[0_10px_30px_rgba(124,58,237,0.4)] dark:hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl dark:border-accent"
              >
                <DownloadCV title='Download CV' />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-full blur-2xl dark:from-primary/30 dark:to-primary/10"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-border bg-muted dark:border-primary/30 dark:shadow-[0_0_60px_rgba(124,58,237,0.3)]">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <img src="/images/me.png" alt="pic"  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
