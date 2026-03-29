import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ── Tooth SVG Icon
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 2C10 2 4 5 4 12c0 4 2 7 3 10 1 4 1 8 2 12 0 2 1 6 3 6s3-4 4-7c.5-2 1-4 4-4s3.5 2 4 4c1 3 2 7 4 7s3-4 3-6c1-4 1-8 2-12 1-3 3-6 3-10 0-7-6-10-10-10-2 0-3 1-6 1s-4-3-6-3z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ── Star Rating
const STARS = [1, 2, 3, 4, 5];
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} stars`}>
      {STARS.slice(0, count).map((n) => (
        <Star
          key={n}
          className="w-4 h-4 fill-current text-gold"
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

// ── Nav
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <ToothIcon className="w-8 h-8 text-teal" />
          <span className="font-serif text-xl font-bold text-teal-dark">
            RJ Dental Care
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-teal transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-teal-dark text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-teal transition-colors"
          data-ocid="nav.primary_button"
        >
          Book Appointment
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-border"
          >
            <nav
              className="flex flex-col px-6 py-4 gap-4"
              onClick={() => setMobileOpen(false)}
              onKeyDown={(e) => e.key === "Enter" && setMobileOpen(false)}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-teal"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full bg-teal-dark text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full text-center"
                data-ocid="nav.primary_button"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/dental-hero.dim_1400x800.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.15 0.05 200 / 0.92) 0%, oklch(0.25 0.06 200 / 0.75) 45%, oklch(0.35 0.07 200 / 0.20) 70%, transparent 100%)",
        }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5">
              <Star
                className="w-4 h-4 fill-current text-gold"
                aria-hidden="true"
              />
              <span className="text-white font-bold text-sm">5.0</span>
              <span className="text-white/80 text-sm">· 103 reviews</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Exceptional Dental Care in Chennai
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10">
            Painless treatments with modern techniques and affordable fees. Your
            comfort and smile are our top priorities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-teal text-white font-semibold uppercase tracking-wide text-sm px-8 py-4 rounded-full hover:bg-teal-dark transition-colors shadow-lg text-center"
              data-ocid="hero.primary_button"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold uppercase tracking-wide text-sm px-8 py-4 rounded-full hover:bg-white/25 transition-colors text-center"
              data-ocid="hero.secondary_button"
            >
              Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Women-Owned Clinic
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Open Today
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Why Choose Us
const features = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 24l6 6 10-12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Experienced Doctor",
    desc: "Dr. Raksha brings years of expertise in all areas of dental care, from routine cleanings to complex restorations.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M18 20s1-4 6-4 6 4 6 4-1 4-6 4-6-4-6-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 24v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Painless Treatment",
    desc: "We use modern anaesthesia techniques and gentle handling to ensure a completely comfortable, pain-free experience.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 22h16M16 28h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 10v-4M18 6h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Affordable Fees",
    desc: "Quality dental care should be accessible to all. We offer competitive pricing without compromising on quality.",
  },
];

function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Dedicated to Your Dental Health
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center flex flex-col items-center"
            >
              <div className="text-teal mb-4">{f.icon}</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Services
const services = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M24 6C14 6 8 13 8 20c0 4 2 7 4 9 2 3 2 7 3 11 0 2 1 5 3 5s3-3 3-6c.5-2 1-3 3-3s2.5 1 3 3c0 3 1 6 3 6s3-3 3-5c1-4 1-8 3-11 2-2 4-5 4-9 0-7-6-14-16-14z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 18a4 4 0 008 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Root Canal Treatment",
    desc: "Painless procedure to save infected or badly damaged teeth, preserving your natural smile.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M12 36c0-8 4-16 12-16s12 8 12 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M8 38h32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 20V10M19 14l5-4 5 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Teeth Scaling & Cleaning",
    desc: "Professional deep-cleaning to remove tartar and plaque buildup for a fresh, healthy mouth.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="14"
          width="28"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M18 24h12M24 18v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tooth Filling",
    desc: "Composite resin fillings that match your tooth colour, restoring function and appearance.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M18 10c-4 0-8 3-8 8 0 3 2 5 3 7 1.5 2.5 2 6 3 9 .5 2 1 4 2.5 4s2.5-2.5 3-5c.5-1.5 1-2.5 2.5-2.5s2 1 2.5 2.5c.5 2.5 1.5 5 3 5s2-2 2.5-4c1-3 1.5-6.5 3-9 1-2 3-4 3-7 0-5-4-8-8-8-2 0-3 .5-5 .5S20 10 18 10z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="22"
          x2="32"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tooth Extraction",
    desc: "Safe, minimally painful removal of teeth when necessary, with aftercare guidance.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M24 8C13 8 6 16 6 24s7 16 18 16 18-8 18-16S35 8 24 8z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 24s2-5 8-5 8 5 8 5-2 5-8 5-8-5-8-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Teeth Whitening",
    desc: "Professional in-clinic whitening for a noticeably brighter, more confident smile.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Our Dental Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-teal mb-4">{s.icon}</div>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                {s.desc}
              </p>
              <a
                href="#contact"
                className="text-teal text-xs font-semibold hover:text-teal-dark transition-colors"
                data-ocid="services.link"
              >
                Learn More &rsaquo;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reviews
const reviews = [
  {
    name: "Rekhamonika",
    initials: "RR",
    time: "1 month ago",
    text: "Give best treatment for my teeth. Well qualified doctors and qualified equipments. Am very satisfied thank you so much.",
  },
  {
    name: "Priyadarshini Priya",
    initials: "PP",
    time: "3 years ago",
    text: "Best treatment with calm and perfect environment. Clinic was well maintained and organised. Treatment was completely painless. Clarity in explaining the treatment was excellent.",
  },
  {
    name: "Ash Sid",
    initials: "AS",
    time: "3 years ago",
    text: "The doc patiently listened to my problem and gave a fine treatment protocol. The clinic is very clean and well maintained. Hygienic equipment are used. Highly recommended! Thank you Dr. Raksha.",
  },
];

function Reviews() {
  const [active, setActive] = useState(0);
  const prev = () =>
    setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-aqua-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Patient Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating count={5} />
            <span className="font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm">· 103 reviews</span>
          </div>
        </motion.div>

        <div className="hidden md:grid grid-cols-3 gap-6 mt-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 shadow-card border border-border flex flex-col"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <StarRating count={5} />
              <p className="text-sm text-foreground leading-relaxed mt-4 flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl p-7 shadow-card border border-border"
              data-ocid={`reviews.item.${active + 1}`}
            >
              <StarRating count={5} />
              <p className="text-sm text-foreground leading-relaxed mt-4 italic">
                &ldquo;{reviews[active].text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">
                  {reviews[active].initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {reviews[active].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {reviews[active].time}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center hover:bg-teal hover:text-white hover:border-teal transition-colors"
              aria-label="Previous review"
              data-ocid="reviews.pagination_prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  type="button"
                  key={r.name}
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-teal" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center hover:bg-teal hover:text-white hover:border-teal transition-colors"
              aria-label="Next review"
              data-ocid="reviews.pagination_next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Team
function Team() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Meet Your Dentist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-card border border-border overflow-hidden max-w-3xl mx-auto"
        >
          <img
            src="/assets/generated/doctor-raksha.dim_400x500.jpg"
            alt="Dr. Raksha"
            className="w-full md:w-56 h-72 md:h-auto object-cover object-top flex-shrink-0"
          />
          <div className="p-8 md:py-10 md:pr-10">
            <Badge className="bg-teal/10 text-teal border-teal/20 mb-4 text-xs uppercase tracking-wide">
              Lead Dentist
            </Badge>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Dr. Raksha
            </h3>
            <p className="text-teal text-sm font-medium mb-4">
              BDS, MDS — General &amp; Restorative Dentistry
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Dr. Raksha is the heart of RJ Dental Care, known for her patient,
              gentle approach and commitment to pain-free treatments. Patients
              consistently praise her clarity in explaining procedures and her
              warm, reassuring demeanor.
            </p>
            <a
              href="#contact"
              className="inline-flex bg-teal text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-teal-dark transition-colors"
              data-ocid="team.primary_button"
            >
              Book with Dr. Raksha
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Contact
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Visit Us or Book an Appointment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plot No C, 219/41, Balasubramanian Salai,
                  <br />
                  near Siva Vishnu Temple, Periyar Nagar West,
                  <br />
                  Perambur, Chennai, Tamil Nadu 600082
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+919345358386"
                  className="text-teal font-medium text-sm hover:text-teal-dark transition-colors"
                  data-ocid="contact.link"
                >
                  093453 58386
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-teal" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Working Hours
                </h4>
                <div className="text-muted-foreground text-sm space-y-0.5">
                  <p>Mon – Sat: 9:00 AM – 2:00 PM</p>
                  <p>Mon – Sat: 5:00 PM – 9:00 PM</p>
                  <p className="text-amber-600 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 rounded-full px-4 py-2 text-sm font-medium">
              <Heart className="w-4 h-4" aria-hidden="true" />
              Women-Owned Business
            </div>

            <a
              href="tel:+919345358386"
              className="inline-flex bg-teal text-white text-sm font-semibold uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-teal-dark transition-colors shadow-md"
              data-ocid="contact.primary_button"
            >
              Call to Book Appointment
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-card min-h-[360px] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.50 0.08 200) 0%, oklch(0.60 0.07 195) 50%, oklch(0.70 0.05 190) 100%)",
            }}
          >
            <div className="text-center text-white px-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>
              <p className="font-serif text-xl font-bold mb-2">
                RJ Dental Care
              </p>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Plot No C, 219/41, Balasubramanian Salai,
                <br />
                Periyar Nagar West, Perambur,
                <br />
                Chennai, Tamil Nadu 600082
              </p>
              <a
                href="https://maps.google.com/?q=RJ+Dental+Care+Perambur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-white text-teal font-semibold text-sm uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                data-ocid="contact.link"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Footer
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ToothIcon className="w-7 h-7 text-teal" />
              <span className="font-serif text-lg font-bold text-teal-dark">
                RJ Dental Care
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your Smile, Our Priority. Providing exceptional dental care in
              Perambur, Chennai.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-teal mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Plot No C, 219/41, Balasubramanian Salai, Perambur, Chennai
                  600082
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 text-teal flex-shrink-0"
                  aria-hidden="true"
                />
                <a href="tel:+919345358386" className="hover:text-teal">
                  093453 58386
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Clinic Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star
                  className="w-4 h-4 text-gold fill-current"
                  aria-hidden="true"
                />
                <span>5.0 Rating · 103 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500" aria-hidden="true" />
                <span>Women-Owned Business</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal" aria-hidden="true" />
                <span>Mon–Sat: 9AM–2PM &amp; 5PM–9PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} RJ Dental Care. All rights reserved.</span>
          <span>
            Built with{" "}
            <Heart
              className="w-3 h-3 text-pink-500 inline mx-0.5"
              aria-hidden="true"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ── App
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
