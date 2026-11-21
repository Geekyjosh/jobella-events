
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
          <nav className="main-nav" aria-label="Main navigation">
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

      <section className="intro section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-image-wrap">
            <img className="intro-image" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=85" alt="Elegant event table setting with floral details" />
            <div className="image-note"><strong>Every detail matters.</strong><span>From the first idea to the final flourish.</span></div>
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

      <section className="services section-pad" id="services">
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

      <section className="portfolio section-pad" id="portfolio">
        <div className="container">
          <div className="section-heading portfolio-heading">
            <div><p className="eyebrow">A LOOK AT THE POSSIBILITIES</p><h2>Made for moments<br /><em>that matter.</em></h2></div>
            <p>Every celebration has its own character. Our approach is to make the atmosphere as special as the occasion itself.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <article className={index === 0 ? "gallery-item gallery-feature" : "gallery-item"} key={item.title}><img src={item.image} alt={item.title} /><div className="gallery-overlay"><span>{item.category}</span><h3>{item.title}</h3></div></article>)}
          </div>
          <p className="portfolio-note">Photography shown is illustrative. Jobella's event portfolio can be added here as project photographs are supplied.</p>
        </div>
      </section>

      <section className="transformation section-pad">
        <div className="container transformation-grid">
          <div><p className="eyebrow">THE TRANSFORMATION</p><h2>From an empty space<br /><em>to a moment that stays.</em></h2><p className="transformation-copy">A thoughtful event comes together through creative direction, careful planning and details that bring a space to life.</p><a className="text-link" href="#contact">Let's plan your event <Icon name="arrow" /></a></div>
          <div className="transformation-visual"><img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85" alt="Elegant celebration venue styled for an event" loading="lazy" /><span>Thoughtfully styled. Beautifully remembered.</span></div>
        </div>
      </section>

      <section className="approach section-pad">
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

      <section className="testimonials section-pad">
        <div className="container testimonial-inner"><p className="eyebrow">THE JOBELLA PROMISE</p><h2>Every detail deserves<br /><em>thought and care.</em></h2><div className="testimonial-card"><span className="testimonial-quote">“</span><p>We believe the experience should feel as special as the occasion itself — from the first conversation to the final detail.</p><span className="testimonial-caption">THE JOBELLA APPROACH</span></div></div>
      </section>

      <section className="values section-pad">
        <div className="container values-inner"><p className="eyebrow">WHAT GUIDES US</p><h2>Creativity with purpose.<br /><em>Excellence in every detail.</em></h2><div className="value-list"><span>Transparency</span><span>Creativity</span><span>Innovation</span><span>Professionalism</span><span>Integrity &amp; reliability</span></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="container contact-grid">
          <div><p className="eyebrow eyebrow-light">LET'S MAKE IT HAPPEN</p><h2>Tell us what<br /><em>you're celebrating.</em></h2><p>Share a little about your event and let's start shaping an experience that feels just right.</p><a className="button button-gold" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%27d%20like%20to%20make%20an%20event%20enquiry."><Icon name="message" />Enquire on WhatsApp</a></div>
          <div className="contact-details"><div><span><Icon name="phone" />CALL / WHATSAPP</span><a href="tel:+2348053090312">+234 805 309 0312</a></div><div><span><Icon name="mail" />EMAIL</span><a href="mailto:jobellaevents.ng@gmail.com">jobellaevents.ng@gmail.com</a></div><div><span><Icon name="pin" />LOCATION</span><p>Lagos, Nigeria</p></div><div><span><Icon name="instagram" />FOLLOW OUR WORK</span><a href="https://www.instagram.com/jobellaevents/" target="_blank" rel="noreferrer">Instagram <Icon name="instagram" /></a></div></div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%27d%20like%20to%20make%20an%20event%20enquiry." target="_blank" rel="noreferrer" aria-label="Chat with Jobella on WhatsApp"><Icon name="message" /></a>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand brand-footer" href="#"><span className="brand-mark">J<span>B</span></span><span className="brand-name">JOBELLA<small>EVENTS &amp; MORE</small></span></a><p>Thoughtfully planned. Beautifully remembered.</p><span>© Jobella Events &amp; More Ltd. All rights reserved.</span></div></footer>
    </main>
  );
}
