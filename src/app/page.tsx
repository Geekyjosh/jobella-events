"use client";

import { useEffect, useRef, useState } from "react";


function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6 6l1.8-1.9a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 1.6 1.9Z"/></>,
    mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 4.5ZM8 10h8M8 14h8M8 18h5"/></>,
    palette: <><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h.9A5 5 0 0 0 22 9.8C22 6 17.5 3 12 3Z"/><path d="M7.5 10h.01M10 7h.01M15 7.5h.01M17 10h.01"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    cake: <><path d="M4 11h16v9H4zM3 20h18M8 11V8a2 2 0 0 1 4 0v3M12 11V7a2 2 0 0 1 4 0v4"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></>
  };
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.calendar}</svg>;
}

const services = [
  { number: "01", title: "Event Planning", text: "Thoughtful planning from the first conversation to the final detail.", icon: "clipboard" },
  { number: "02", title: "Event Decoration", text: "Beautiful spaces, considered details and a setting that feels like you.", icon: "palette" },
  { number: "03", title: "Day-of Coordination", text: "Calm, organised coordination so you can be present for every moment.", icon: "clock" },
  { number: "04", title: "Wedding & Engagements", text: "Personalised styling for meaningful ceremonies and celebrations.", icon: "heart" },
  { number: "05", title: "Birthdays & Celebrations", text: "Distinctive experiences for birthdays, anniversaries and intimate occasions.", icon: "cake" },
  { number: "06", title: "Corporate Events", text: "Polished event experiences that reflect your organisation and its people.", icon: "briefcase" },
];

const gallery = [
  { title: "Wedding celebrations", category: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85" },
  { title: "Beautifully considered details", category: "Event styling", image: "https://images.unsplash.com/photo-1519225421980-888cbf7b6d2b?auto=format&fit=crop&w=900&q=85" },
  { title: "An evening to remember", category: "Private celebrations", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIntroSlide, setActiveIntroSlide] = useState(0);
  const introTouchStart = useRef<number | null>(null);
  const introImages = [1, 2, 3, 4, 5].map((number) => `/images/events/event-image${number}.webp`);
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const filteredGallery = activeFilter === "All" ? gallery : gallery.filter((item) => item.category === activeFilter);
  const galleryFilters = ["All", ...Array.from(new Set(gallery.map((item) => item.category)))];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIntroSlide((current) => (current + 1) % introImages.length), 2000);
    return () => window.clearInterval(timer);
  }, [introImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setLightboxIndex(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [lightboxIndex]);

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = [
      "Hello Jobella Events, I would like to make an event enquiry.",
      "Name: " + form.get("name"),
      "Email: " + form.get("email"),
      "Phone: " + form.get("phone"),
      "Event type: " + form.get("eventType"),
      "Event date: " + (form.get("eventDate") || "Not decided"),
      "Venue/location: " + (form.get("venue") || "Not decided"),
      "Estimated guests: " + (form.get("guests") || "Not sure"),
      "Budget: " + (form.get("budget") || "Not specified"),
      "Details: " + (form.get("details") || "Not provided")
    ].join("\n");
    window.open("https://wa.me/2348053090312?text=" + encodeURIComponent(details), "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="topbar" aria-label="Contact Jobella Events">
        <div className="topbar-track">
          <div className="topbar-group">
            <a href="tel:+2348053090312"><Icon name="phone" />Call or WhatsApp: 0805 309 0312</a>
            <span className="topbar-separator" aria-hidden="true" />
            <a href="mailto:jobellaevents.ng@gmail.com"><Icon name="mail" />jobellaevents.ng@gmail.com</a>
            <span className="topbar-separator" aria-hidden="true" />
            <span><Icon name="pin" />Lagos, Nigeria</span>
            <span className="topbar-separator" aria-hidden="true" />
          </div>
          <div className="topbar-group" aria-hidden="true">
            <a href="tel:+2348053090312" tabIndex={-1}><Icon name="phone" />Call or WhatsApp: 0805 309 0312</a>
            <span className="topbar-separator" />
            <a href="mailto:jobellaevents.ng@gmail.com" tabIndex={-1}><Icon name="mail" />jobellaevents.ng@gmail.com</a>
            <span>•</span>
            <span><Icon name="pin" />Lagos, Nigeria</span>
            <span>•</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#" aria-label="Jobella Events and More home">
            <span className="brand-mark">J<span>B</span></span>
            <span className="brand-name">JOBELLA<small>EVENTS &amp; MORE</small></span>
          </a>
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a><a href="#about">About us</a><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href="#contact"><Icon name="calendar" />Plan your event</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">EVENT PLANNING · DECORATION · STYLING</p>
          <h1>Beautifully planned.<br /><em>Unforgettable</em> moments.</h1>
          <p className="hero-copy">We bring your ideas to life with thoughtful planning, elegant styling and seamless coordination for celebrations that feel truly yours.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contact">Start planning <Icon name="calendar" /></a><a className="text-link text-link-light" href="#portfolio">Explore our work <Icon name="arrow" /></a></div>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span>Creating moments worth remembering</span></div>
      </section>

      <section className="intro section-pad reveal-on-scroll" id="about">
        <div className="container intro-grid">
          <div className="intro-image-wrap intro-carousel" aria-label="Jobella event photographs" onTouchStart={(event) => { introTouchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { if (introTouchStart.current === null) return; const distance = event.changedTouches[0].clientX - introTouchStart.current; if (Math.abs(distance) > 40) setActiveIntroSlide((current) => (current + (distance < 0 ? 1 : introImages.length - 1)) % introImages.length); introTouchStart.current = null; }}>
            {introImages.map((image, index) => <img key={image} className={index === activeIntroSlide ? "intro-image intro-slide is-active" : "intro-image intro-slide"} src={image} alt={`Jobella event photograph ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" aria-hidden={index !== activeIntroSlide} />)}
            <div className="intro-carousel-controls" aria-label="Choose event photograph">
              <button type="button" aria-label="Previous photograph" onClick={() => setActiveIntroSlide((current) => (current + introImages.length - 1) % introImages.length)}>‹</button>
              <div>{introImages.map((image, index) => <button key={image} type="button" className={index === activeIntroSlide ? "intro-dot active" : "intro-dot"} aria-label={`Show photograph ${index + 1}`} aria-pressed={index === activeIntroSlide} onClick={() => setActiveIntroSlide(index)} />)}</div>
              <button type="button" aria-label="Next photograph" onClick={() => setActiveIntroSlide((current) => (current + 1) % introImages.length)}>›</button>
            </div>
          </div>
          <div className="intro-copy">
            <p className="eyebrow">WELCOME TO JOBELLA</p>
            <h2>We create the setting.<br /><em>You make the memories.</em></h2>
            <p>Jobella Events &amp; More is an event planning, decoration and styling company based in Lagos, Nigeria. We transform ideas, spaces and special occasions into beautiful, memorable experiences.</p>
            <p>From intimate celebrations to grand occasions, every event is thoughtfully curated around your vision, personality and expectations.</p>
            <a className="text-link" href="#contact">Get to know us <Icon name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="services section-pad reveal-on-scroll" id="services">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">WHAT WE DO</p><h2>Thoughtful planning.<br /><em>Beautiful execution.</em></h2></div>
            <p>From the big picture to the smallest finishing touch, we bring creativity and care to every part of your event.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-icon"><Icon name={service.icon} /></span></article>)}
          </div>
          <div className="service-foot"><span>Need something more specific?</span><a className="text-link" href="#contact">Tell us about your event <Icon name="arrow" /></a></div>
        </div>
      </section>

      <section className="portfolio section-pad reveal-on-scroll" id="portfolio">
        <div className="container">
          <div className="section-heading portfolio-heading">
            <div><p className="eyebrow">A LOOK AT THE POSSIBILITIES</p><h2>Made for moments<br /><em>that matter.</em></h2></div>
            <p>Every celebration has its own character. Our approach is to make the atmosphere as special as the occasion itself.</p>
          </div>
          <div className="gallery-filters" aria-label="Filter event gallery">
            {galleryFilters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? "gallery-filter active" : "gallery-filter"} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
          </div>
          <div className="gallery-grid">
            {filteredGallery.map((item, index) => <button type="button" className={index === 0 ? "gallery-item gallery-feature" : "gallery-item"} key={item.title} onClick={() => setLightboxIndex(gallery.findIndex((photo) => photo.title === item.title))} aria-label={"View " + item.title}><img src={item.image} alt={item.title} loading="lazy" decoding="async" /><span className="gallery-overlay"><span>{item.category}</span><strong>{item.title}</strong></span></button>)}
          </div>
          <p className="portfolio-note">Photography shown is illustrative. Jobella's event portfolio can be added here as project photographs are supplied.</p>
        </div>
      </section>

      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Event photograph preview" onClick={() => setLightboxIndex(null)}><button type="button" className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close image preview">×</button><button type="button" className="lightbox-nav previous" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + gallery.length - 1) % gallery.length); }}>‹</button><img src={gallery[lightboxIndex].image} alt={gallery[lightboxIndex].title} onClick={(event) => event.stopPropagation()} /><button type="button" className="lightbox-nav next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length); }}>›</button><p>{gallery[lightboxIndex].title}</p></div>}

      <section className="transformation section-pad reveal-on-scroll">
        <div className="container transformation-grid">
          <div><p className="eyebrow">THE TRANSFORMATION</p><h2>From an empty space<br /><em>to a moment that stays.</em></h2><p className="transformation-copy">A thoughtful event comes together through creative direction, careful planning and details that bring a space to life.</p><a className="text-link" href="#contact">Let's plan your event <Icon name="arrow" /></a></div>
          <div className="transformation-visual"><img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85" alt="Elegant celebration venue styled for an event" loading="lazy" /><span>Thoughtfully styled. Beautifully remembered.</span></div>
        </div>
      </section>

      <section className="approach section-pad reveal-on-scroll">
        <div className="container approach-grid">
          <div><p className="eyebrow eyebrow-light">THE JOBELLA APPROACH</p><h2>Good events don't<br />happen by chance.</h2><p className="approach-copy">They come together through clear communication, creative thinking and careful coordination. We make the process feel as considered as the celebration.</p><a className="button button-gold" href="#contact">Let's plan together <Icon name="calendar" /></a></div>
          <div className="process-list">
            <div><span>01</span><section><h3>We listen</h3><p>We learn about your occasion, ideas, priorities and budget.</p></section></div>
            <div><span>02</span><section><h3>We create</h3><p>We develop the concept, styling direction and event plan.</p></section></div>
            <div><span>03</span><section><h3>We coordinate</h3><p>We bring the details, people and timing together.</p></section></div>
            <div><span>04</span><section><h3>You celebrate</h3><p>Enjoy the moment while we take care of the details.</p></section></div>
          </div>
        </div>
      </section>

      <section className="testimonials section-pad reveal-on-scroll"><div className="container testimonial-inner"><p className="eyebrow">CLIENT EXPERIENCES</p><h2>Good experiences<br /><em>deserve to be shared.</em></h2><div className="review-note"><span className="testimonial-quote">“</span><h3>Your story could be featured here.</h3><p>This space is reserved for genuine feedback from Jobella clients. Reviews will only be published with the client's permission.</p><a className="text-link" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%20would%20like%20to%20share%20feedback.">Share your experience <Icon name="arrow" /></a></div></div></section>

      <section className="values section-pad reveal-on-scroll">
        <div className="container values-inner"><p className="eyebrow">OUR PURPOSE</p><h2>Celebrations with meaning.<br /><em>Experiences made personal.</em></h2><div className="purpose-grid"><article><span>OUR MISSION</span><h3>Bringing your vision to life.</h3><p>To bring clients’ visions to life through creative planning, beautiful designs, seamless coordination and excellent service.</p></article><article><span>OUR VISION</span><h3>Setting a standard for memorable events.</h3><p>To become a leading event planning and decoration brand recognised for creativity, elegance, innovation and excellence.</p></article></div><div className="value-list"><span>Transparency</span><span>Creativity</span><span>Innovation</span><span>Professionalism</span><span>Integrity &amp; reliability</span></div></div>
      </section>
      <section className="why-us section-pad reveal-on-scroll"><div className="container"><div className="section-heading"><div><p className="eyebrow">WHY JOBELLA</p><h2>Care in every detail.<br /><em>Confidence throughout.</em></h2></div><p>We combine creative thinking with practical coordination, keeping your priorities at the centre of the experience.</p></div><div className="why-grid"><article><strong>01</strong><h3>Personalised creativity</h3><p>Ideas and styling shaped around your occasion, taste and priorities.</p></article><article><strong>02</strong><h3>Clear communication</h3><p>Open conversations and thoughtful planning from the first enquiry.</p></article><article><strong>03</strong><h3>Reliable coordination</h3><p>Careful attention to schedules, details and the people bringing it all together.</p></article><article><strong>04</strong><h3>Professional service</h3><p>A considered approach that respects your event, time and budget.</p></article></div></div></section>

      <section className="faq section-pad reveal-on-scroll"><div className="container faq-grid"><div><p className="eyebrow">GOOD TO KNOW</p><h2>A few things<br /><em>you may be wondering.</em></h2><p>Have another question? Send us a message and we'll be happy to help.</p><a className="text-link" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%20have%20a%20question.">Ask us on WhatsApp <Icon name="arrow" /></a></div><div className="faq-list">{[["What types of events do you handle?","We plan and style weddings, engagements, birthdays, anniversaries, bridal showers, corporate events, intimate celebrations and more."],["How do I get started?","Send an enquiry with your event type, preferred date, location and a few details. Our team can then discuss your requirements and next steps."],["How much does event planning or decoration cost?","Pricing depends on the event type, guest count, venue, styling requirements and scope of coordination. Contact us for a tailored discussion and quote."],["How far in advance should I book?","As early as you can, especially for weddings and larger celebrations. If your date is approaching soon, contact us to discuss availability."],["Can you work with my budget and preferred style?","Share your estimated budget, inspiration and priorities so we can discuss a suitable approach."]].map(([question, answer], index) => <article className="faq-item" key={question}><button type="button" onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{question}</span><b>{faqOpen === index ? "−" : "+"}</b></button>{faqOpen === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="contact section-pad reveal-on-scroll" id="contact">
        <div className="container contact-grid">
          <div><p className="eyebrow eyebrow-light">LET'S MAKE IT HAPPEN</p><h2>Tell us what<br /><em>you're celebrating.</em></h2><p>Share a little about your event and let's start shaping an experience that feels just right.</p><a className="button button-gold" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%27d%20like%20to%20make%20an%20event%20enquiry."><Icon name="message" />Enquire on WhatsApp</a></div>
          <div className="contact-details"><div><span><Icon name="phone" />CALL / WHATSAPP</span><a href="tel:+2348053090312">+234 805 309 0312</a></div><div><span><Icon name="mail" />EMAIL</span><a href="mailto:jobellaevents.ng@gmail.com">jobellaevents.ng@gmail.com</a></div><div><span><Icon name="pin" />LOCATION</span><p>Lagos, Nigeria</p></div><div><span><Icon name="instagram" />FOLLOW OUR WORK</span><a href="https://www.instagram.com/jobellaevents/" target="_blank" rel="noreferrer">Instagram <Icon name="instagram" /></a></div></div>
          <form className="enquiry-form" onSubmit={submitEnquiry}><p className="eyebrow eyebrow-light">EVENT ENQUIRY</p><h3>Let's start with the details.</h3><div className="form-grid"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="+234..." /></label><label>What are you celebrating?<select name="eventType" required defaultValue=""><option value="" disabled>Select event type</option><option>Wedding</option><option>Engagement</option><option>Birthday</option><option>Anniversary</option><option>Corporate event</option><option>Bridal shower</option><option>Private celebration</option><option>Other</option></select></label><label>Event date<input name="eventDate" type="date" /></label><label>Venue / location<input name="venue" placeholder="Venue or area" /></label><label>Estimated guests<select name="guests" defaultValue=""><option value="">Select guest count</option><option>Below 50</option><option>50–100</option><option>101–200</option><option>201–500</option><option>Above 500</option><option>Not sure yet</option></select></label><label>Estimated budget<input name="budget" placeholder="e.g. ₦2,000,000" /></label><label className="form-full">Tell us a little more<textarea name="details" rows={4} placeholder="Your ideas, preferred style and what you need help with..." /></label></div><button className="button button-gold" type="submit"><Icon name="message" />Send enquiry via WhatsApp</button><small>Submitting opens WhatsApp with your enquiry details for you to review and send.</small></form>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%27d%20like%20to%20make%20an%20event%20enquiry." target="_blank" rel="noreferrer" aria-label="Chat with Jobella on WhatsApp"><Icon name="message" /></a>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand brand-footer" href="#"><span className="brand-mark">J<span>B</span></span><span className="brand-name">JOBELLA<small>EVENTS &amp; MORE</small></span></a><span>© Jobella Events &amp; More Ltd. All rights reserved.</span></div></footer>
    </main>
  );
}
