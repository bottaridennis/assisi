/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  Users, 
  Home, 
  Euro, 
  ArrowRight, 
  MapPin, 
  Info, 
  CreditCard,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Image as ImageIcon,
  Quote,
  Sun,
  Moon,
  Church
} from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "./martinophuc-assisi-city-7150594_1920.jpg";
import programImg from "./achir-basilica-of-saint-francis-of-assisi-6583462_1920.jpg";
import dennisImg from "./Dennis.png";
import aliceImg from "./Alice.png";
import edoardoImg from "./Edoardo.png";
import pietroImg from "./Pietro.png";
import vittorioImg from "./Vittorio.png";
import davideImg from "./Davide.png";
import lucaImg from "./Luca.png";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const targetDate = new Date("2026-06-26T00:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SectionBackground = ({ color = "olive", variant = 1 }: { color?: "olive" | "accent", variant?: 1 | 2 | 3 }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        animate={{
          scale: variant === 1 ? [1, 1.2, 1] : [1.2, 1, 1.2],
          rotate: variant === 2 ? [0, 180, 0] : [0, 90, 0],
          x: variant === 3 ? [0, 100, 0] : [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20 + variant * 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-20 ${
          color === "olive" ? "bg-olive" : "bg-accent"
        }`}
      />
      <motion.div
        animate={{
          scale: variant === 2 ? [1, 1.3, 1] : [1.2, 1, 1.2],
          rotate: variant === 1 ? [0, -180, 0] : [0, -90, 0],
          x: variant === 2 ? [0, -100, 0] : [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25 + variant * 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-[120px] opacity-20 ${
          color === "olive" ? "bg-accent" : "bg-olive"
        }`}
      />
      {variant === 3 && (
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-warm-bg selection:bg-accent/20 overflow-x-hidden relative">
      {/* Continuous Motion Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-olive/30 blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-olive rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-olive/20 group-hover:rotate-12 transition-transform">
              <Church className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight">Assisi</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollTo('programma')} className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Il Viaggio</button>
            <button onClick={() => scrollTo('animatori')} className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Animatori</button>
            <button onClick={() => scrollTo('iniziative')} className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Iniziative</button>
            <button onClick={() => scrollTo('faq')} className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Domande</button>
            
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center text-olive hover:bg-olive/20 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCVJwaBD4GWnxG_Xf5qbcZ_xGYVSn-HKPculYxrV9VYWaKBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="accent-button !py-3 !px-8 text-sm"
            >
              Iscriviti
            </a>
          </div>
          {/* Mobile Menu Button (Placeholder for now, could add a sheet later) */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center text-olive"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCVJwaBD4GWnxG_Xf5qbcZ_xGYVSn-HKPculYxrV9VYWaKBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="accent-button !py-2 !px-5 text-xs"
            >
              Iscriviti
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={heroImg} 
            alt="Assisi Panorama" 
            className="w-full h-full object-cover object-left md:object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-bg via-warm-bg/80 via-warm-bg/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-bg"></div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl w-full" data-aos="fade-up">
          <div className="max-w-3xl">
            <div className="mt-12 md:mt-20">
              <span className="inline-block px-5 py-2 bg-accent/20 backdrop-blur-xl rounded-2xl text-accent text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8 border border-accent/30 shadow-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.05)]" data-aos="fade-down" data-aos-delay="200">
                Pellegrinaggio
              </span>
              <h1 className="text-6xl md:text-[10rem] text-foreground font-serif font-black leading-[0.85] mb-8 md:mb-10 tracking-tighter [text-shadow:0_1px_4px_rgba(0,0,0,0.05)]" data-aos="fade-right" data-aos-delay="400">
                Assisi <br />
                <span className="italic font-light text-accent [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">Insieme</span>
              </h1>
              <p className="text-lg md:text-3xl text-muted font-serif italic max-w-2xl mb-10 md:mb-14 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                "Un campo fatto di strada, gruppo, condivisione e tempo vissuto bene."
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="800">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeCVJwaBD4GWnxG_Xf5qbcZ_xGYVSn-HKPculYxrV9VYWaKBw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="accent-button flex items-center gap-4 group w-full sm:w-auto justify-center !py-4 md:!py-5 !px-8 md:!px-12 text-lg md:text-xl shadow-2xl shadow-accent/40"
                >
                  Iscriviti ora
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollTo('programma')}
                  className="bg-card-bg/40 backdrop-blur-xl text-foreground border border-border rounded-2xl px-8 md:px-12 py-4 md:py-5 font-bold hover:bg-card-bg/60 transition-all w-full sm:w-auto text-lg md:text-xl shadow-2xl"
                >
                  Scopri il viaggio
                </button>
              </div>
            </div>

            {/* Countdown */}
            <div 
              className="grid grid-cols-2 gap-4 md:gap-8 max-w-sm mt-12 md:mt-20"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {[
                { label: "Giorni", value: timeLeft.days },
                { label: "Ore", value: timeLeft.hours }
              ].map((item, i) => (
                <div key={i} className="bg-card-bg/40 backdrop-blur-2xl border border-border rounded-[32px] md:rounded-[40px] p-6 md:p-8 text-foreground shadow-2xl group hover:bg-card-bg/60 transition-colors">
                  <div className="text-4xl md:text-6xl font-serif font-black tabular-nums mb-1 md:mb-2 text-accent">{item.value}</div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted font-black">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted cursor-pointer"
          onClick={() => scrollTo('programma')}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Programma Section */}
      <section id="programma" className="py-32 px-6 relative">
        <SectionBackground color="olive" variant={1} />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                Campo Pace <br />
                <span className="italic text-olive">In Cammino</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-12 max-w-lg">
                Un’esperienza pensata per adolescenti e giovani dalla terza media in poi, per vivere insieme giorni intensi, semplici e pieni di significato.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Calendar, label: "Date", value: "26 - 28 Giugno" },
                  { icon: Users, label: "Destinatari", value: "Dai 13 anni in su" },
                  { icon: Home, label: "Alloggio", value: "Suore Missionarie Gesù Bambino" },
                  { icon: Euro, label: "Costo", value: "140 € (Caparra 40 €)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="w-12 h-12 rounded-2xl bg-olive/20 flex items-center justify-center text-olive shrink-0">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                      >
                        <item.icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.label}</h4>
                      <p className="text-sm text-muted">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="relative"
              data-aos="fade-left"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2"
              >
                <img 
                  src={programImg} 
                  alt="Assisi Basilica" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-olive/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-olive/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animatori Section */}
      <section id="animatori" className="py-32 bg-card-bg/30 relative">
        <SectionBackground color="accent" variant={2} />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">I Soprannomi</span>
            <h2 className="text-5xl md:text-8xl mb-8 leading-none">Gli <span className="italic text-olive">Animatori</span></h2>
            <p className="text-xl font-serif italic text-muted mb-24">Pronti a camminare insieme a te in questa avventura.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            {[
              { name: "Dennis Bottari", nickname: "Dede", image: dennisImg },
              { name: "Alice Mele", nickname: "Pomo", image: aliceImg },
              { name: "Vittorio Pettene", nickname: "Ciola", image: vittorioImg },
              { name: "Edoardo Taddei", nickname: "Sommo", image: edoardoImg },
              { name: "Pietro Cannalire", nickname: "Canna", image: pietroImg },
              { name: "Davide Praga", nickname: "Prague", image: davideImg },
              { name: "Luca Molinari", nickname: "", image: lucaImg }
            ].map((animator, i) => (
              <div 
                key={animator.name}
                className="group"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="mb-8 relative">
                  <div className="w-32 h-32 md:w-56 md:h-56 mx-auto rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-border shadow-2xl group-hover:rotate-3">
                    <img 
                      src={animator.image} 
                      alt={animator.name} 
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-3xl mb-2 font-serif">{animator.name}</h3>
                <p className="text-[10px] md:text-xs text-accent font-black uppercase tracking-[0.3em]">
                  {animator.nickname || "Team Assisi"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iniziative Section */}
      <section id="iniziative" className="py-32 px-6 relative">
        <SectionBackground color="olive" variant={3} />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Autofinanziamento</span>
            <h2 className="text-4xl md:text-7xl mb-6">Sostieni il <span className="italic text-olive">Viaggio</span></h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-serif italic">Iniziative e volantini per raccogliere fondi e camminare tutti insieme verso Assisi.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Biciclettata",
                date: "Domenica 14 Giugno",
                desc: "Una biciclettata con offerta minima di 10€ per partecipare",
                image: "https://picsum.photos/seed/cake/800/1131" // A4 aspect ratio
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-card-bg rounded-[40px] overflow-hidden border border-border shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-[1/1.414] relative overflow-hidden bg-muted/10">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <button className="bg-white text-black rounded-xl py-3 font-bold flex items-center justify-center gap-2">
                        Scarica Volantino <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                      <Calendar className="w-4 h-4" /> {item.date}
                    </div>
                    <h3 className="text-2xl mb-3">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-olive/10 relative">
        <SectionBackground color="accent" variant={1} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl mb-4">Domande <span className="italic text-olive">Frequenti</span></h2>
            <p className="text-muted font-serif italic text-lg">Tutto quello che c'è da sapere, senza giri di parole.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Cosa devo portare?",
                a: "Sacco a pelo o lenzuola, federa per cuscino, asciugamani e tutto il necessario per l'igiene personale. Scarpe comode per camminare (fondamentali!) e un k-way per ogni evenienza."
              },
              {
                q: "Come ci muoviamo?",
                a: "Il viaggio di andata e ritorno sarà in pullman GT. Ad Assisi ci muoveremo prevalentemente a piedi per vivere appieno lo spirito del pellegrinaggio."
              },
              {
                q: "Cosa mangiamo?",
                a: "La quota include la pensione completa presso la struttura delle suore. Cibo semplice, buono e condiviso. Segnalaci eventuali allergie nel modulo di iscrizione."
              },
              {
                q: "Posso venire anche se non conosco nessuno?",
                a: "Assolutamente sì! Il campo è fatto apposta per creare nuovi legami. Nessuno resta solo, promesso."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-card-bg rounded-3xl p-8 shadow-sm border border-border"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-olive/20 flex items-center justify-center text-olive shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-3">{item.q}</h4>
                    <p className="text-muted leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 w-40 h-40 text-olive/5 -z-0" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-12 italic font-serif leading-tight">
              "Assisi non è un posto dove vai, è un posto dove torni. Ogni volta con un pezzo di cuore in più."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive/20"></div>
              <div className="text-left">
                <p className="font-semibold">Un partecipante</p>
                <p className="text-xs text-muted uppercase tracking-widest">Edizione 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-32 px-6 relative">
        <SectionBackground color="olive" variant={2} />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <Info className="w-6 h-6 text-olive" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl">Informazioni Utili</h2>
                </div>
                <p className="text-muted mb-12 leading-relaxed">
                  Qui ci sono le cose concrete da sapere. Quelle vere. Quelle che evitano il classico caos da “pensavo fosse diverso” che puntualmente compare quando la gente legge a metà.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  <div data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-olive" />
                      <h4 className="font-semibold">Iscrizioni</h4>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      Entro il <strong>20 febbraio</strong>, tramite il QR code presente nel materiale informativo o il link in questo sito.
                    </p>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-olive" />
                      <h4 className="font-semibold">Pagamento</h4>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      Costo totale di 140 € a persona, con caparra di 40 € da versare al momento dell'iscrizione.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="bg-olive text-white rounded-[32px] p-8 h-full shadow-xl shadow-olive/20">
                <h3 className="text-3xl mb-8 font-serif italic !text-white">Dati per il bonifico</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Intestato a</p>
                    <p className="font-medium">Chiesa parrocchiale San Giovanni Battista Oppeano</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">IBAN</p>
                    <p className="font-mono text-lg break-all">IT 90 Q 02008 59630 000003770179</p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <MapPin className="w-4 h-4" />
                      </motion.div>
                      <span>Oppeano, Verona</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-olive/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,128,0,0.1)_0%,transparent_70%)]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-olive/20 rounded-full blur-[100px] -z-0"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="zoom-in">
          <div>
            <h2 className="text-4xl md:text-7xl mb-8">Assisi ci aspetta</h2>
            <p className="text-xl text-muted mb-12 font-serif italic">
              Tutto il resto lo farà il gruppo, il cammino e la voglia di esserci sul serio.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCVJwaBD4GWnxG_Xf5qbcZ_xGYVSn-HKPculYxrV9VYWaKBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="accent-button !px-12 !py-5 text-lg inline-flex items-center gap-3"
            >
              Iscriviti entro il 20 febbraio
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif italic text-lg mb-1">© Insieme verso Assisi</p>
            <p className="text-xs text-muted uppercase tracking-widest">Powered by dennisbottari.it</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted hover:text-olive transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted hover:text-olive transition-colors">Contatti</a>
            <a href="#" className="text-sm text-muted hover:text-olive transition-colors">Social</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
