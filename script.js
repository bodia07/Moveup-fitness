/* ─── DATA ─────────────────────────────────────────────── */
const DATA = {
  /* EQUIPMENT TABS */
  equipment: {
    posilo: {
      title: 'Posilovací stroje',
      items: [
        { name: 'Leg press', desc: 'Bezpečné posilování nohou a hýždí.', img: 'img/legpress.png' },
        { name: 'Leg curl / Leg extension', desc: 'Izolace hamstringů a kvadricepsů.', img: 'img/legcurl.jpg' },
        { name: 'Hip abductor / adductor', desc: 'Vnitřní a vnější strany stehen.', img: 'img/hipabductor.jpg' },
        { name: 'Glute machine', desc: 'Cílené posilování hýžďových svalů.', img: 'img/glutemachine.jpg' },
        { name: 'Seated row', desc: 'Posílení zad a zlepšení držení těla.', img: 'img/seatedrow.jpg' },
        { name: 'Lat pulldown', desc: 'Široký úchop pro krásná záda.', img: 'img/latpulldown.png' },
        { name: 'Ab crunch machine', desc: 'Přímý bříšní sval bez zatěžování krku.', img: 'img/abcrunch.jpg' },
        { name: 'Cable crossover', desc: 'Multifunkční kabelový blok pro celé tělo.', img: 'img/cablecrossover.jpg' },
      ]
    },
    cardio: {
      title: 'Cardio zóna',
      items: [
        { name: 'Běžecké pásy', desc: 'Prémiové pásy s tréninkovými programy a měřením tepu.', img: 'img/treadmill.jpg' },
        { name: 'Eliptické trenažéry', desc: 'Kloubům šetrná náhrada běhu.', img: 'img/elliptical.jpg' },
        { name: 'Rotopedy', desc: 'Klasický i spinningový typ pro variabilní trénink.', img: 'img/spinning bike.jpg' },
        { name: 'Stair climber', desc: 'Chůze do schodů = efektivní spalování.', img: 'img/stair climber.jpg' },
        { name: 'Veslařský trenažér', desc: 'Celotělové cardio s důrazem na záda.', img: 'img/rowing machine.jpg' },
      ]
    },
    vahy: {
      title: 'Volné váhy',
      items: [
        { name: 'Činky 1–30 kg', desc: 'Kompletní sada jednoruček na každé posilovací stojanu.', img: 'img/dumbbells.jpg' },
        { name: 'Olympijská osa', desc: 'Bezpečnostní stojany pro bench press a dřepy.', img: 'img/olympic bar.jpg' },
        { name: 'Kettlebells 4–32 kg', desc: 'Swing, turkish get-up a funkční pohyby.', img: 'img/kettlebells.jpg' },
        { name: 'EZ a tricepsová tyč', desc: 'Izolace paží bez zatěžování zápěstí.', img: 'img/ez bar.jpg' },
        { name: 'Bumper plates', desc: 'Barevné kotoučové závaží pro silové tréninky.', img: 'img/bumper plates.jpg' },
      ]
    },
    funkce: {
      title: 'Funkční zóna',
      items: [
        { name: 'TRX závěsný systém', desc: 'Posilování vlastní vahou v každé poloze.', img: 'trx.jpg' },
        { name: 'BOSU balance trainer', desc: 'Stabilita, koordinace, core.', img: 'bosu.jpg' },
        { name: 'Kettlebells', desc: 'Swing, snatch a celotělové okruhy.', img: 'kettlebells.jpg' },
        { name: 'Odporové gumy (sady)', desc: 'Od lehkých po silné odpory pro každou skupinu svalů.', img: 'resistance bands.jpg' },
        { name: 'Šplhací lano', desc: 'Silový výzev pro celé tělo.', img: 'rope.jpg' },
        { name: 'Plyo boxy', desc: 'Výskoky, step-up a aerobní intervaly.', img: 'plyo boxes.jpg' },
        { name: 'Slam balls & Medicine balls', desc: 'Explosivní trénink a rotace trupu.', img: 'slam balls.jpg' },
      ]
    },
    podlahy: {
      title: 'Podlahy & povrchy',
      items: [
        { name: 'Pružná sportovní podlaha', desc: 'Tlumení dopadů, ochrana kloubů v celé ploše studia.', img: 'flexible floor.jpg' },
        { name: 'Gumové podložky pod stroje', desc: 'Stabilita a ochrana podlahy.', img: 'rubber mats.jpg' },
        { name: 'Koberec v relaxační zóně', desc: 'Měkký povrch pro strečink a jógu.', img: 'carpet.jpg' },
        { name: 'Zrcadlová stěna', desc: 'Kontrola techniky a světlý vizuální dojem v celé hale.', img: 'mirror wall.jpg' },
      ]
    },
    relax: {
      title: 'Relax kout',
      items: [
        { name: 'Foam rollery', desc: 'Myofasciální uvolnění po tréninku.', img: 'foam roller.jpg' },
        { name: 'Masážní míčky', desc: 'Cílená práce na trigger pointy.', img: 'massage balls.jpg' },
        { name: 'Masážní pásová pistole', desc: 'Rychlá regenerace svalů.', img: 'massage gun.jpg' },
        { name: 'Strečinkové gumy', desc: 'Hluboká flexibilita a cool-down.', img: 'stretching bands.jpg' },
        { name: 'Jóga podložky', desc: 'Prémiové protiskluzové matky pro každou zákaznici.', img: 'yoga mats.jpg' },
        { name: 'Odpočinkový kout', desc: 'Sedací vak a lehátko po tréninku.' },
      ]
    }
  },

  /* TEAM */
  team: [
    {
      name: 'Tereza Marková',
      initials: 'TM',
      role: 'Funkční trénink & Silová příprava',
      bio: 'Certifikovaná trenérka s 8 lety zkušeností. Specializuje se na ženskou fyziologii a silový trénink pro začátečnice. Věří, že každá žena může být silnější, než si myslí.',
      type: 'Trenérka'
    },
    {
      name: 'Klára Horáčková',
      initials: 'KH',
      role: 'Jóga & Mobilita',
      bio: 'Lektorka jógy s certifikátem 200h YTT. Vede skupinové i individuální lekce zaměřené na flexibilitu, dýchání a mentální pohodu. Tvoří bezpečný prostor pro každou ženu.',
      type: 'Trenérka'
    },
    {
      name: 'Petra Šimánková',
      initials: 'PŠ',
      role: 'Pilates & Rehabilitační cvičení',
      bio: 'Diplomovaná fyzioterapeutka a lektorka pilates. Pomáhá ženám po zraněních, maminkám po porodu a všem, kteří hledají bezpečnou cestu zpět k pohybu.',
      type: 'Asistentka'
    },
    {
      name: 'Michaela Dvořáčková',
      initials: 'MD',
      role: 'Kruhové tréninky & HIIT',
      bio: 'Energická trenérka, která tě postrčí tam, kde si říkáš "to nejde". Tvoří tréninky, při kterých se zasměješ, zpotíš a přijdeš příští den znovu.',
      type: 'Asistentka'
    },
  ],

  /* FAQ */
  faq: [
    {
      q: 'Je studio opravdu jen pro ženy?',
      a: 'Ano, MoveUp je výhradně pro ženy a dívky od 16 let. Chceme, aby každá zákaznice měla prostor cvičit bez pocitu, že ji někdo hodnotí. Tento princip platí bez výjimky po celou otevírací dobu.',
    },
    {
      q: 'Je studio vhodné pro absolutní začátečnice?',
      a: 'Rozhodně ano! Velká část našich zákaznic přišla poprvé do fitka právě k nám. Naše trenérky tě při první návštěvě provedou studiem, ukážou správnou techniku a sestaví plán na míru. Žádná zkušenost není potřeba.',
    },
    {
      q: 'Jak funguje online rezervace a vstup přes čip?',
      a: 'Po registraci dostaneš přístupový čip nebo aplikaci do mobilu. Lekce nebo volný vstup si zarezervuješ přes naše online rozhraní (web i mobilní appka). Vstupuješ pak čipem u dveří — bez čekání na recepci a bez papírů.',
    },
    {
      q: 'Jaká je kapacita studia a jak se vyhnout přeplnění?',
      a: 'Maximální kapacita je 30–40 osob naráz. Online rezervační systém ti ukáže obsazenost v reálném čase — jednoduše si vyber klidnější čas. V ranních a dopoledních hodinách bývá studio výrazně prázdnější.',
    },
    {
      q: 'Jaké členství se nejvíce vyplatí?',
      a: 'Pokud cvičíš pravidelně (alespoň 2× týdně), měsíční členství se vrátí již po 9 vstupech. Půlroční členství pak ušetří oproti měsíčnímu přes 2 500 Kč. Studentky ušetří navíc ještě díky zvýhodněnému tarifu — stačí platný ISIC.',
    },
    {
      q: 'Je k dispozici parkování?',
      a: 'Ano, máme vyhrazená parkovací místa přímo u vstupu do studia. Parkování je zdarma pro všechny zákaznice po dobu návštěvy. Přesné instrukce k parkování obdržíš při registraci.',
    },
    {
      q: 'Mohu přijít i s malým dítětem?',
      a: 'Rozumíme, že čas maminek je vzácný. Dočasná dětská zóna je v přípravě — sleduj naše sociální sítě pro aktuální informace. Mezitím se neboj zeptat na konkrétní možnosti — rádi se domluvíme.',
    },
  ],
};

/* ─── SMOOTH SCROLL ─────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMobileMenu();
  });
});

/* ─── NAVBAR SCROLL ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ─── ACTIVE NAV LINK (IntersectionObserver) ────────────── */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -49% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ─── HAMBURGER ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

function closeMobileMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  navLinksEl.classList.remove('mobile-open');
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
  navLinksEl.classList.toggle('mobile-open', isOpen);

  if (isOpen && !navLinksEl.querySelector('.nav-cta-mobile')) {
    const cta = document.createElement('a');
    cta.href = '#kontakt';
    cta.className = 'btn btn-accent nav-cta-mobile';
    cta.textContent = 'Rezervovat vstup →';
    navLinksEl.appendChild(cta);
  }
});

/* ─── PROMO BAR ─────────────────────────────────────────── */
document.getElementById('promoClose').addEventListener('click', () => {
  const bar = document.getElementById('promoBar');
  bar.style.maxHeight = bar.offsetHeight + 'px';
  bar.style.transition = 'max-height 0.4s ease, opacity 0.3s ease, padding 0.4s ease';

  requestAnimationFrame(() => {
    bar.style.maxHeight = '0';
    bar.style.opacity = '0';
    bar.style.padding = '0';
    bar.style.overflow = 'hidden';
  });
});

/* ─── EQUIPMENT TABS ─────────────────────────────────────── */
const tabContent = document.getElementById('tabContent');

function renderEquipTab(key) {
  const data = DATA.equipment[key];
  const pane = document.createElement('div');
  pane.className = 'tab-pane';

  const grid = document.createElement('div');
  grid.className = 'equip-grid';

  data.items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'equip-item reveal';
    el.innerHTML = `
      <div class="equip-item-photo">
        ${item.img ? `<img src="${item.img}" alt="${item.name}">` : `
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          Foto brzy
        `}
      </div>
      <div class="equip-item-name">${item.name}</div>
      <div class="equip-item-desc">${item.desc}</div>
    `;
    grid.appendChild(el);
  });

  pane.appendChild(grid);
  tabContent.innerHTML = '';
  tabContent.appendChild(pane);

  requestAnimationFrame(() => {
    pane.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 50);
    });
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderEquipTab(btn.dataset.tab);
  });
});

renderEquipTab('posilo');

/* ─── TEAM ───────────────────────────────────────────────── */
const teamGrid = document.getElementById('teamGrid');

function renderTeam() {
  teamGrid.innerHTML = '';

  DATA.team.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card reveal';
    card.innerHTML = `
      <div class="team-type">${member.type}</div>
      <div class="team-avatar">${member.initials}</div>
      <div class="team-name">${member.name}</div>
      <div class="team-role">${member.role}</div>
      <div class="team-bio">${member.bio}</div>
    `;
    teamGrid.appendChild(card);
  });
}

renderTeam();

/* ─── FAQ ACCORDION ──────────────────────────────────────── */
const faqList = document.getElementById('faqList');

DATA.faq.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'faq-item reveal';

  const btnId = `faq-btn-${i}`;
  const panelId = `faq-panel-${i}`;

  el.innerHTML = `
    <button class="faq-question" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
      <span>${item.q}</span>
      <span class="faq-arrow" aria-hidden="true">+</span>
    </button>
    <div class="faq-answer-wrap" id="${panelId}" role="region" aria-labelledby="${btnId}">
      <div class="faq-answer">${item.a}</div>
    </div>
  `;

  faqList.appendChild(el);

  const btn = el.querySelector('.faq-question');
  const wrap = el.querySelector('.faq-answer-wrap');
  const answer = el.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.contains('open');

    document.querySelectorAll('.faq-question.open').forEach(openBtn => {
      openBtn.classList.remove('open');
      openBtn.setAttribute('aria-expanded', 'false');
      const w = openBtn.nextElementSibling;
      w.style.maxHeight = '0';
    });

    if (!isOpen) {
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      wrap.style.maxHeight = answer.scrollHeight + 40 + 'px';
    }
  });
});

/* ─── CONTACT FORM ───────────────────────────────────────── */
const form = document.getElementById('contactForm');

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const fname = document.getElementById('fname');
  const fnameErr = document.getElementById('fnameError');
  const femail = document.getElementById('femail');
  const femailErr = document.getElementById('femailError');

  if (!fname.value.trim() || fname.value.trim().length < 2) {
    fnameErr.textContent = 'Zadej prosím své jméno (min. 2 znaky).';
    fname.classList.add('error');
    valid = false;
  } else {
    fnameErr.textContent = '';
    fname.classList.remove('error');
  }

  if (!validateEmail(femail.value.trim())) {
    femailErr.textContent = 'Zadej prosím platný e-mail.';
    femail.classList.add('error');
    valid = false;
  } else {
    femailErr.textContent = '';
    femail.classList.remove('error');
  }

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Odesílám…';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = 'Odeslat zprávu →';
    btn.disabled = false;
    showToast('✅ Děkujeme! Ozveme se ti do 24 hodin.');
  }, 1000);
});

/* ─── REVEAL ON SCROLL ───────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

observeReveal();

const mutObs = new MutationObserver(observeReveal);
mutObs.observe(document.body, { childList: true, subtree: true });

/* ─── FOOTER YEAR ────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── VALUE + SERVICE CARDS: stagger reveal ─────────────── */
document.querySelectorAll('.value-card, .service-card, .team-card, .pricing-card').forEach(el => {
  el.classList.add('reveal');
});

observeReveal();