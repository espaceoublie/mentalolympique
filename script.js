document.addEventListener("DOMContentLoaded", function () {
  // Header injection
  const headerHTML = `
  <header>
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 20px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="/images/logo" alt="Logo Mental Olympique" style="height: 60px; border-radius: 50%;">
        <h1 style="margin: 0; font-size: 1.8rem; font-weight: 500;">Fred DAMATO</h1>
      </div>
      <nav>
        <ul class="nav-menu">
          <li><a href="#" class="active">Accueil</a></li>
          <li class="dropdown">
            <a href="#">Préparation Mentale ▾</a>
            <ul class="dropdown-content">
              <li><a href="#">Concentration</a></li>
              <li><a href="#">Stress</a></li>
              <li><a href="#">Motivation</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Coaching ▾</a>
            <ul class="dropdown-content">
              <li><a href="#">Développement</a></li>
              <li><a href="#">Personnel</a></li>
              <li><a href="#">Coaching Personnel</a></li>
              <li><a href="#">Séance BOOST</a></li>
              <li><a href="#">Tarifs Coaching</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Infos ▾</a>
            <ul class="dropdown-content">
              <li><a href="#">Mentions Légales</a></li>
              <li><a href="#">Tarifs</a></li>
              <li><a href="#" onclick="reopenCookieBanner()">Confidentialité</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Avis ▾</a>
            <ul class="dropdown-content">
              <li><a href="#">Sportifs</a></li>
              <li><a href="#">Parents</a></li>
              <li><a href="#">Professionnels</a></li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
  </header>`;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // WhatsApp button
  document.body.insertAdjacentHTML("beforeend", `
    <a href="https://wa.me/33676381491?text=Bonjour%20Fred%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20séances%20de%20coaching%20mental." target="_blank" class="whatsapp-float" title="Écrire sur WhatsApp">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp">
    </a>
  `);

  // Floating cookie settings icon
  document.body.insertAdjacentHTML("beforeend", `
    <img src="https://files.gandi.ws/cb/22/cb22298b-b9e9-424f-b559-175b27290026.png"
         alt="Paramètres de confidentialité"
         onclick="reopenCookieBanner()"
         style="position: fixed; bottom: 10px; left: 10px; width: 24px; height: auto; cursor: pointer; z-index: 9999; opacity: 0.6; transition: opacity 0.2s ease-in-out;"
         onmouseover="this.style.opacity='1'"
         onmouseout="this.style.opacity='0.6'">
  `);

  // Footer
  document.body.insertAdjacentHTML("beforeend", `
    <footer>
      <div class="footer-links">
        <a href="https://www.mentalolympique.fr/infos-pratiques/frequently-asked-questions">FAQ</a>
        <a href="https://www.mentalolympique.fr/infos-pratiques/mentions-legales">Mentions Légales</a>
        <a href="https://www.mentalolympique.fr/infos-pratiques/index">Tarifs</a>
        <a href="https://www.mentalolympique.fr/infos-pratiques/code-de-deontologie">Code de Déontologie</a>
        <a href="javascript:void(0);" onclick="reopenCookieBanner()" style="color: #333; text-decoration: none; font-weight: bold;">
          Paramètres de confidentialité
        </a>
      </div>
      <p style="text-align:center;">© 2025 Frédéric Damato – Site Mental Olympique</p>
    </footer>
  `);

  // JSON-LD Schema
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Frédéric Damato - Préparateur Mental",
    "image": "https://files.gandi.ws/5a/36/5a36ccc1-19e7-4be3-88d0-cdef5951f4e5.jpg",
    "@id": "https://www.mentalolympique.fr",
    "url": "https://www.mentalolympique.fr",
    "telephone": "+33676381491",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Square de Narvik",
      "addressLocality": "Rennes",
      "postalCode": "35000",
      "addressCountry": "FR"
    },
    "description": "Préparation mentale et coaching en ligne et en présentiel à Rennes. Spécialiste en gestion du stress, confiance, et performance.",
    "areaServed": {"@type": "Place", "address": {"@type": "PostalAddress", "addressCountry": "FR"}},
    "availableLanguage": ["fr", "en"],
    "priceRange": "€€ (75€ à 120€)",
    "sameAs": [
      "https://www.linkedin.com/in/frederic-damato",
      "https://www.youtube.com/@MentalOlympique",
      "https://www.instagram.com/mentalolympique"
    ],
    "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "20:00"}]
  });
  document.head.appendChild(ld);

  // Cookie banner logic
  const consent = localStorage.getItem("cookieConsent");
  if (consent === "accepted") {
    loadGtag();
    handleYouTubeEmbeds();
  } else if (!consent) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.style.cssText = "position: fixed; bottom: 0; left: 0; width: 100%; background: #1e1e1e; color: #ffffff; padding: 20px; text-align: center; z-index: 9999; font-family: sans-serif;";
    banner.innerHTML = `
      <p style="margin: 0 0 15px; font-size: 17px; line-height: 1.5;">
        Ce site utilise des cookies pour analyser le trafic et améliorer votre expérience. Vous pouvez accepter ou refuser ces cookies.
      </p>
      <div style="display: flex; justify-content: center; gap: 10px;">
        <button onclick="acceptCookies()" style="padding: 10px 20px; background-color: #28a745; border: none; border-radius: 4px; color: white; font-weight: bold; font-size: 15px; cursor: pointer;">
          J'accepte
        </button>
        <button onclick="declineCookies()" style="padding: 10px 20px; background-color: #6c757d; border: none; border-radius: 4px; color: white; font-weight: bold; font-size: 15px; cursor: pointer;">
          Je refuse
        </button>
      </div>`;
    document.body.appendChild(banner);
  }
});

function loadGtag() {
  const gtagScript = document.createElement("script");
  gtagScript.setAttribute("async", "");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-21QP45C7JJ";
  document.head.appendChild(gtagScript);

  const gtagInit = document.createElement("script");
  gtagInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-21QP45C7JJ');
  `;
  document.head.appendChild(gtagInit);
}

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner')?.remove();
  loadGtag();
  handleYouTubeEmbeds();
}

function declineCookies() {
  localStorage.setItem('cookieConsent', 'refused');
  document.getElementById('cookie-banner')?.remove();
}

function reopenCookieBanner() {
  localStorage.removeItem('cookieConsent');
  document.getElementById('cookie-banner').style.display = 'block';
}

function handleYouTubeEmbeds() {
  const iframes = document.querySelectorAll('iframe[data-src]');
  iframes.forEach(iframe => {
    iframe.setAttribute('src', iframe.getAttribute('data-src'));
  });
}
