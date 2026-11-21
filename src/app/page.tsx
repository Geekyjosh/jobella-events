const services = [
  { number: "01", title: "Event Planning", text: "Thoughtful planning from the first conversation to the final detail." },
  { number: "02", title: "Event Decoration", text: "Beautiful spaces, considered details and a setting that feels like you." },
  { number: "03", title: "Day-of Coordination", text: "Calm, organised coordination so you can be present for every moment." },
  { number: "04", title: "Wedding & Engagements", text: "Personalised styling for meaningful ceremonies and celebrations." },
  { number: "05", title: "Birthdays & Celebrations", text: "Distinctive experiences for birthdays, anniversaries and intimate occasions." },
  { number: "06", title: "Corporate Events", text: "Polished event experiences that reflect your organisation and its people." },
];

const gallery = [
  { title: "Wedding celebrations", category: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85" },
  { title: "Beautifully considered details", category: "Event styling", image: "https://images.unsplash.com/photo-1519225421980-888cbf7b6d2b?auto=format&fit=crop&w=900&q=85" },
  { title: "An evening to remember", category: "Private celebrations", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Lagos, Nigeria</span>
          <div><a href="tel:+2348053090312">0805 309 0312</a><span className="topbar-divider">|</span><a href="mailto:jobellaevents.ng@gmail.com">jobellaevents.ng@gmail.com</a></div>
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
          <a className="button button-small" href="#contact">Plan your event <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">EVENT PLANNING · DECORATION · STYLING</p>
          <h1>Beautifully planned.<br /><em>Unforgettable</em> moments.</h1>
          <p className="hero-copy">We bring your ideas to life with thoughtful planning, elegant styling and seamless coordination for celebrations that feel truly yours.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contact">Start planning <span>↗</span></a><a className="text-link text-link-light" href="#portfolio">Explore our work <span>→</span></a></div>
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
            <a className="text-link" href="#contact">Get to know us <span>→</span></a>
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
            {services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-arrow">↗</span></article>)}
          </div>
          <div className="service-foot"><span>Need something more specific?</span><a className="text-link" href="#contact">Tell us about your event <span>→</span></a></div>
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

      <section className="approach section-pad">
        <div className="container approach-grid">
          <div><p className="eyebrow eyebrow-light">THE JOBELLA APPROACH</p><h2>Good events don't<br />happen by chance.</h2><p className="approach-copy">They come together through clear communication, creative thinking and careful coordination. We make the process feel as considered as the celebration.</p><a className="button button-gold" href="#contact">Let's plan together <span>↗</span></a></div>
          <div className="process-list">
            <div><span>01</span><section><h3>We listen</h3><p>We learn about your occasion, ideas, priorities and budget.</p></section></div>
            <div><span>02</span><section><h3>We create</h3><p>We develop the concept, styling direction and event plan.</p></section></div>
            <div><span>03</span><section><h3>We coordinate</h3><p>We bring the details, people and timing together.</p></section></div>
            <div><span>04</span><section><h3>You celebrate</h3><p>Enjoy the moment while we take care of the details.</p></section></div>
          </div>
        </div>
      </section>

      <section className="values section-pad">
        <div className="container values-inner"><p className="eyebrow">WHAT GUIDES US</p><h2>Creativity with purpose.<br /><em>Excellence in every detail.</em></h2><div className="value-list"><span>Transparency</span><span>Creativity</span><span>Innovation</span><span>Professionalism</span><span>Integrity &amp; reliability</span></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="container contact-grid">
          <div><p className="eyebrow eyebrow-light">LET'S MAKE IT HAPPEN</p><h2>Tell us what<br /><em>you're celebrating.</em></h2><p>Share a little about your event and let's start shaping an experience that feels just right.</p><a className="button button-gold" href="https://wa.me/2348053090312?text=Hello%20Jobella%20Events%2C%20I%27d%20like%20to%20make%20an%20event%20enquiry.">Enquire on WhatsApp <span>↗</span></a></div>
          <div className="contact-details"><div><span>CALL / WHATSAPP</span><a href="tel:+2348053090312">+234 805 309 0312</a></div><div><span>EMAIL</span><a href="mailto:jobellaevents.ng@gmail.com">jobellaevents.ng@gmail.com</a></div><div><span>LOCATION</span><p>Lagos, Nigeria</p></div><div><span>FOLLOW OUR WORK</span><a href="https://www.instagram.com/jobellaevents/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand brand-footer" href="#"><span className="brand-mark">J<span>B</span></span><span className="brand-name">JOBELLA<small>EVENTS &amp; MORE</small></span></a><p>Thoughtfully planned. Beautifully remembered.</p><span>© Jobella Events &amp; More Ltd. All rights reserved.</span></div></footer>
    </main>
  );
}
