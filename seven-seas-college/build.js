/* Build script: generates all pages of The College of the Seven Seas */
const fs = require('fs');

const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs>
<linearGradient id="hullG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a2d15"/><stop offset="1" stop-color="#241407"/></linearGradient>
<linearGradient id="sailG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5e9c9"/><stop offset="1" stop-color="#d3bd8a"/></linearGradient>
<linearGradient id="goldG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd873"/><stop offset="1" stop-color="#c9922e"/></linearGradient>
<radialGradient id="coinFaceG" cx="38%" cy="32%" r="80%"><stop offset="0" stop-color="#ffe9a8"/><stop offset=".55" stop-color="#e6b34a"/><stop offset="1" stop-color="#a5701f"/></radialGradient>
<g id="skullMark">
  <g transform="rotate(45 50 55)" fill="currentColor"><rect x="8" y="49" width="84" height="11" rx="5.5"/><rect x="8" y="60" width="84" height="11" rx="5.5"/></g>
  <path fill="currentColor" d="M50 16c-15.5 0-26 10.6-26 24 0 8.6 4.6 14.8 9.6 17.8v8.4a4.4 4.4 0 0 0 4.4 4.4h24a4.4 4.4 0 0 0 4.4-4.4v-8.4c5-3 9.6-9.2 9.6-17.8 0-13.4-10.5-24-26-24Z"/>
  <circle cx="40.5" cy="44" r="6.4" fill="#0a1f38"/><circle cx="59.5" cy="44" r="6.4" fill="#0a1f38"/>
  <path d="M50 51l-4.4 7h8.8Z" fill="#0a1f38"/>
  <rect x="42.4" y="66" width="3.4" height="7" rx="1.4" fill="#0a1f38"/><rect x="48.3" y="66" width="3.4" height="7" rx="1.4" fill="#0a1f38"/><rect x="54.2" y="66" width="3.4" height="7" rx="1.4" fill="#0a1f38"/>
</g>
<path id="wavePath" d="M0 60 C150 100 350 20 600 60 C850 100 1050 20 1200 60 L1200 130 L0 130 Z"/>
<g id="parrotArt">
  <path d="M44 138C34 156 20 166 8 170c16 2 36-6 48-22Z" fill="#2e8b57"/>
  <path d="M60 58c30 14 36 60 14 84-24 4-40-20-38-46 2-20 10-32 24-38Z" fill="#c94b32"/>
  <path d="M56 84c24 6 30 34 12 52-12-8-20-32-12-52Z" fill="#1f5f8b"/>
  <circle cx="46" cy="46" r="22" fill="#c94b32"/>
  <path d="M27 44c-13 2-15 14-2 16-4-6 0-12 8-13Z" fill="#e8a13c"/>
  <circle cx="42" cy="42" r="4.6" fill="#fff8e0"/><circle cx="41" cy="42" r="2.2" fill="#1a120b"/>
  <path d="M56 138l-4 12M68 138l4 12" stroke="#e8a13c" stroke-width="4" stroke-linecap="round"/>
</g>
<g id="pirateSil" fill="currentColor">
  <path d="M20 74Q100 18 180 74Q100 56 20 74Z"/>
  <path d="M52 66Q100 6 148 66Q100 50 52 66Z"/>
  <circle cx="100" cy="106" r="42"/>
  <path d="M58 112c-4 60 22 84 42 84s46-24 42-84c-12 38-28 48-42 48s-30-10-42-48Z"/>
  <path d="M20 220Q42 166 100 162q58 4 80 58Z"/>
  <circle cx="122" cy="104" r="11" fill="#0d0704"/>
  <path d="M78 96q22-16 44 0" stroke="#0d0704" stroke-width="5" fill="none"/>
</g>
<g id="coinArt">
  <circle cx="100" cy="100" r="96" fill="url(#coinFaceG)" stroke="#8a5a1f" stroke-width="4"/>
  <circle cx="100" cy="100" r="78" fill="none" stroke="#a5701f" stroke-width="3" stroke-dasharray="6 5"/>
  <path id="coinArc" d="M100 100 m -62 0 a 62 62 0 1 1 124 0 a 62 62 0 1 1 -124 0" fill="none"/>
  <text font-size="15" letter-spacing="2.5" fill="#6b4413" font-family="Georgia,serif" font-weight="bold"><textPath href="#coinArc" startOffset="8%">COLLEGE OF THE SEVEN SEAS ★ EST. 1654 ★</textPath></text>
  <use href="#skullMark" transform="translate(72 62) scale(.56)" color="#6b4413"/>
  <text x="100" y="158" text-anchor="middle" font-size="24" fill="#6b4413" font-family="Georgia,serif" font-weight="bold">1654</text>
</g>
<g id="compassArt">
  <circle cx="100" cy="100" r="96" fill="#3a2410" stroke="#8a5a1f" stroke-width="5"/>
  <circle cx="100" cy="100" r="82" fill="#ead9b0"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="#b98a3f" stroke-width="2"/>
  <path d="M100 22 L112 88 L178 100 L112 112 L100 178 L88 112 L22 100 L88 88 Z" fill="#c94b32"/>
  <path d="M100 44 L109 91 L156 100 L109 109 L100 156 L91 109 L44 100 L91 91 Z" fill="#f5e9c9" transform="rotate(45 100 100)" opacity=".9"/>
  <circle cx="100" cy="100" r="9" fill="#3a2410" stroke="#e6b34a" stroke-width="3"/>
  <text x="100" y="18" text-anchor="middle" font-size="17" fill="#5a3413" font-family="Georgia,serif" font-weight="bold">N</text>
  <text x="100" y="196" text-anchor="middle" font-size="15" fill="#5a3413" font-family="Georgia,serif">S</text>
  <text x="14" y="106" font-size="15" fill="#5a3413" font-family="Georgia,serif">W</text>
  <text x="176" y="106" font-size="15" fill="#5a3413" font-family="Georgia,serif">E</text>
</g>
</defs>
</svg>`;

function head(title, desc){
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Ravenspire Blacktide Collegium</title>
<meta name="description" content="${desc}">
<link rel="icon" href="img/logo.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pirata+One&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="extra.css">
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></script>
</head>
<body>
${SPRITE}`;
}

function ticker(){
  return '';
}

function nav(active){
  const L = (href,label,key)=>`<a href="${href}"${active===key?' class="active"':''}>${label}</a>`;
  return `<nav>
  <div class="nav-logo" id="navLogo" title="Fire the signal flare">
    <span class="logo-medal"><img src="img/logo.jpg" alt="Ravenspire Blacktide Collegium crest"></span>
    <span class="name">Ravenspire<small>Blacktide Collegium</small></span>
  </div>
  <div class="nav-links">
    ${L('index.html','The Harbor','home')}
    ${L('scroll.html','The Scroll','scroll')}
    ${L('fleet.html','The Fleet','fleet')}
    ${L('quartermasters.html','Quartermasters','qm')}
    ${L('island.html','The Island','island')}
    ${L('wanted.html','The Wanted Board','wanted')}
    <div class="nav-more">
      <a href="#" class="more-btn">☠ More Charts</a>
      <div class="drop">
        <a href="crew.html">The Crew (Students)</a>
        <a href="skills.html">Skills of the Seven Seas (Courses)</a>
        <a href="treasure-hauled.html">Treasure Hauled (Placements)</a>
        <a href="feasts.html">Feasts &amp; Raids (Events)</a>
        <a href="legends.html">Legends of the Seven Seas (Alumni)</a>
        <a href="doubloons.html">Gold Doubloons / Bounties (Fees)</a>
        <a href="raven.html">Send a Raven (Contact)</a>
        <a href="forge.html">The Forge (Built by Pirates)</a>
      </div>
    </div>
  </div>
  <button class="storm-btn" id="stormBtn" type="button" aria-pressed="false">⛈ Storm</button>
  <a class="nav-qlink" href="quarters.html" title="Shipman’s Quarters (Student Portal)">⚓ Quarters</a>
  <a class="btn" href="enlist.html">Join the Crew</a>
  </nav>`;
}

function foot(){
  return `<footer>
  <div class="wrap">
    <img class="foot-medal" src="img/logo.jpg" alt="Ravenspire Blacktide Collegium crest">
    <div class="fname">Ravenspire Blacktide Collegium</div>
    <div class="fsub">Est. 1654 · Built, designed &amp; managed entirely by pirates · No land, no problem. The crew still calls it the Seven Seas.</div>
    <div class="foot-links">
      <a href="index.html">The Harbor</a>
      <a href="scroll.html">The Scroll</a>
      <a href="fleet.html">The Fleet</a>
      <a href="skills.html">Skills</a>
      <a href="quartermasters.html">Quartermasters</a>
      <a href="crew.html">The Crew</a>
      <a href="treasure-hauled.html">Treasure Hauled</a>
      <a href="island.html">The Island</a>
      <a href="feasts.html">Feasts &amp; Raids</a>
      <a href="doubloons.html">Gold Doubloons</a>
      <a href="legends.html">Legends</a>
      <a href="wanted.html">The Wanted Board</a>
      <a href="enlist.html">Join the Crew</a>
      <a href="raven.html">Send a Raven</a>
      <a href="quarters.html">Shipman’s Quarters</a>
      <a href="forge.html">The Forge</a>
    </div>
    <p class="fine">This website was forged by hand by the pirate web crew — see <a href="forge.html">The Forge</a> for the full crew. Powered by 100% renewable grog. © 1654–2026. All doubloons reserved.</p>
  </div>
</footer>
<div id="parrotRig">
  <div class="parrot-bob"><div class="parrot-body" id="parrotBody" tabindex="0" role="button" aria-label="Professor Feather, the college parrot. Click for a clue.">
    <model-viewer id="parrot3d" tabindex="-1" src="img/parrot.glb" alt="Professor Feather, the college pirate parrot, in real 3D"
      camera-controls="false" interaction-prompt="none" touch-action="none" loading="eager"
      exposure="1.15" environment-image="neutral" auto-rotate auto-rotate-delay="1500" rotation-per-second="0.5rad"></model-viewer>
    <img id="parrot2d" src="img/parrot.jpg" alt="">
  </div></div>
  <span class="zzz" id="parrotZzz" aria-hidden="true">z&thinsp;z&thinsp;Z</span>
  <div class="parrot-bubble" id="parrotBubble" role="status" aria-live="polite"></div>
  <div class="parrot-tag">Professor Feather<small>Chief QA Officer · peck for a clue</small></div>
</div>
<script src="main.js"></script>
</body>
</html>`;
}

function pageHero(over, h1, sub, crumb){
  return `<div class="page-hero">
  <div class="sky" id="sky"></div>
  <div class="moon"></div>
  <div class="wave w-far" data-speed="0.05"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#14466b"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#14466b"/></svg></div></div>
  <div class="wave w-mid" data-speed="0.1"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#175a70"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#175a70"/></svg></div></div>
  <div class="wave w-near" data-speed="0.18"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#0b2e4a"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#0b2e4a"/></svg></div></div>
  <div class="ph-copy">
    <div class="over">${over}</div>
    <h1>${h1}</h1>
    <p>${sub}</p>
    <div class="crumbs"><a href="index.html">The Harbor</a> ☠ ${crumb}</div>
  </div>
</div>`;
}

function secHead(over, h2, p){
  return `<div class="sec-head reveal"><div class="over">${over}</div><h2>${h2}</h2>${p?`<p>${p}</p>`:''}</div>`;
}

function cta(h2, p, btns){
  return `<div class="cta-band"><div class="wrap reveal"><h2>${h2}</h2><p>${p}</p><div class="hero-ctas">${btns}</div></div></div>`;
}

function waves3(){
  return `<div class="sea-scene" aria-hidden="true">
    <div class="wave w-far" data-speed="0.06"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#14466b"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#14466b"/></svg></div></div>
    <div class="wave w-mid" data-speed="0.14"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#175a70"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#175a70"/></svg></div></div>
    <div class="wave w-near" data-speed="0.24"><div class="wave-track"><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#0b2e4a"/></svg><svg viewBox="0 0 1200 130" preserveAspectRatio="none"><use href="#wavePath" fill="#0b2e4a"/></svg></div></div>
  </div>`;
}

const GULL = (cls)=>`<div class="gull ${cls}" aria-hidden="true"><svg viewBox="0 0 44 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2 12 Q12 2 22 11 Q32 2 42 12"/></svg></div>`;

/* ---------------- PAGE CONTENT ---------------- */

const INDEX = `
<header class="sot-hero" id="islandVideo">
  <img class="iv-img" src="img/island-hero.jpg" alt="Ravenspire Blacktide Collegium - open seas at dusk">
  <video class="iv-video ready" id="shipReel" src="img/hello.mp4" poster="img/island-hero.jpg" autoplay muted loop playsinline preload="auto"></video>
  <div class="sot-hero-overlay"></div>
  ${waves3()}
  ${GULL('g1')}${GULL('g2')}
  
  <div class="sot-hero-content">
    <h1 class="sot-college-name">
      Ravenspire Blacktide Collegium
      <span class="sot-college-sub">Est. 1654</span>
    </h1>
  </div>

  <div class="sot-controls-bar">
    <button class="sot-ctrl-btn" id="soundToggle" type="button" aria-label="Toggle sound">🔇 Sound: Off</button>
    <button class="sot-ctrl-btn" id="reelPause" type="button" aria-label="Pause or play video">⏸ Pause Voyage</button>
  </div>
</header>

<div class="sot-season-bar">
  <div class="sot-season-inner">
    <span class="sot-season-tag">VOYAGE UPDATE</span>
    <span class="sot-season-text"><strong>Season XIV: The Siren’s Shadow</strong> is now live across the Seven Seas. New high-seas bounties, cursed sunken shrines, and stealth boarding grapples added to the curriculum!</span>
    <a class="btn ghost" href="wanted.html" style="padding:6px 16px;font-size:.85rem">View Bounties →</a>
  </div>
</div>

<!-- LIVING OCEANIC BACKDROP: ANIMATED SEA CREATURES ACROSS ENTIRE PAGE -->
<div class="ocean-page-backdrop" aria-hidden="true">
  <div class="lagoon-sunbeams"></div>
  
  <!-- School of Fish 1 & 2 -->
  <div class="school-of-fish fish-1" aria-hidden="true">
    <svg viewBox="0 0 200 90" width="100%" height="100%">
      <g fill="#4fd1c5" opacity="0.9">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#319795"/>
        <circle cx="72" cy="24" r="2" fill="#0d3838"/>
      </g>
      <g fill="#ecc94b" opacity="0.85" transform="translate(50, 25) scale(0.8)">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#d69e2e"/>
        <circle cx="72" cy="24" r="2" fill="#3a2707"/>
      </g>
      <g fill="#ed8936" opacity="0.85" transform="translate(10, 35) scale(0.7)">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#c05621"/>
        <circle cx="72" cy="24" r="2" fill="#2d1205"/>
      </g>
      <g fill="#63b3ed" opacity="0.8" transform="translate(70, -5) scale(0.65)">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#3182ce"/>
      </g>
    </svg>
  </div>
  <div class="school-of-fish fish-2" aria-hidden="true">
    <svg viewBox="0 0 200 90" width="100%" height="100%">
      <g fill="#38b2ac" opacity="0.85">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#285e61"/>
      </g>
      <g fill="#f6ad55" opacity="0.8" transform="translate(40, 20) scale(0.75)">
        <path d="M40 20 C60 10 70 25 85 20 C75 25 75 35 85 40 C70 35 60 50 40 40 C30 35 30 25 40 20 Z"/>
        <polygon points="25,30 15,20 18,30 15,40" fill="#dd6b20"/>
      </g>
    </svg>
  </div>

  <!-- Swimming Shark 1 & 2 -->
  <div class="swimming-shark shark-1" aria-hidden="true">
    <svg viewBox="0 0 220 70" width="100%" height="100%">
      <g fill="#1a365d" stroke="#2b6cb0" stroke-width="1.5">
        <path d="M190 32 C170 18 120 15 90 22 C60 28 30 32 15 28 C2 26 0 35 15 37 C35 39 60 42 90 44 C125 46 170 44 190 36 C195 35 198 33 190 32 Z" fill="#234e70"/>
        <path d="M120 18 C115 5 105 2 100 0 C102 10 105 18 108 20 Z" fill="#1d3d58"/>
        <path d="M15 28 C5 10 0 5 0 2 C2 15 8 26 12 30 C8 36 2 45 0 55 C5 50 10 42 16 36 Z" fill="#1d3d58"/>
        <path d="M140 42 C125 58 110 65 105 68 C112 58 122 48 128 44 Z" fill="#183248"/>
        <circle cx="178" cy="28" r="2.5" fill="#ffd873"/>
        <line x1="145" y1="28" x2="142" y2="38" stroke="#4299e1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="150" y1="28" x2="147" y2="38" stroke="#4299e1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="155" y1="29" x2="152" y2="37" stroke="#4299e1" stroke-width="1.5" stroke-linecap="round"/>
      </g>
    </svg>
  </div>
  <div class="swimming-shark shark-2" aria-hidden="true">
    <svg viewBox="0 0 220 70" width="100%" height="100%">
      <g fill="#162e4a" stroke="#255a88" stroke-width="1.5">
        <path d="M190 32 C170 18 120 15 90 22 C60 28 30 32 15 28 C2 26 0 35 15 37 C35 39 60 42 90 44 C125 46 170 44 190 36 C195 35 198 33 190 32 Z" fill="#1b3c58"/>
        <path d="M120 18 C115 5 105 2 100 0 C102 10 105 18 108 20 Z" fill="#173147"/>
        <path d="M15 28 C5 10 0 5 0 2 C2 15 8 26 12 30 C8 36 2 45 0 55 C5 50 10 42 16 36 Z" fill="#173147"/>
        <circle cx="178" cy="28" r="2.5" fill="#e6b34a"/>
      </g>
    </svg>
  </div>

  <!-- Sea Turtle 1 & 2 -->
  <div class="swimming-turtle turtle-1" aria-hidden="true">
    <svg viewBox="0 0 140 90" width="100%" height="100%">
      <g fill="#276749" stroke="#38a169" stroke-width="1.5">
        <ellipse cx="65" cy="45" rx="36" ry="24" fill="#22543d"/>
        <ellipse cx="65" cy="45" rx="26" ry="16" fill="#276749" stroke="#48bb78" stroke-dasharray="4,3"/>
        <ellipse cx="110" cy="45" rx="12" ry="9" fill="#2f855a"/>
        <circle cx="114" cy="42" r="2" fill="#ffd873"/>
        <path d="M85 30 C95 10 115 0 120 2 C115 15 95 32 80 36 Z" fill="#2f855a"/>
        <path d="M85 60 C95 80 115 90 120 88 C115 75 95 58 80 54 Z" fill="#2f855a"/>
        <path d="M35 34 C25 24 15 22 12 25 C18 32 25 38 32 40 Z" fill="#22543d"/>
        <path d="M35 56 C25 66 15 68 12 65 C18 58 25 52 32 50 Z" fill="#22543d"/>
        <polygon points="28,45 20,43 20,47" fill="#22543d"/>
      </g>
    </svg>
  </div>
  <div class="swimming-turtle turtle-2" aria-hidden="true">
    <svg viewBox="0 0 140 90" width="100%" height="100%">
      <g fill="#22543d" stroke="#2f855a" stroke-width="1.5">
        <ellipse cx="65" cy="45" rx="36" ry="24" fill="#1c4532"/>
        <ellipse cx="65" cy="45" rx="26" ry="16" fill="#22543d" stroke="#38a169" stroke-dasharray="4,3"/>
        <ellipse cx="110" cy="45" rx="12" ry="9" fill="#276749"/>
        <circle cx="114" cy="42" r="2" fill="#f6e05e"/>
        <path d="M85 30 C95 10 115 0 120 2 C115 15 95 32 80 36 Z" fill="#276749"/>
        <path d="M85 60 C95 80 115 90 120 88 C115 75 95 58 80 54 Z" fill="#276749"/>
      </g>
    </svg>
  </div>

  <!-- Bioluminescent Jellyfish 1, 2, 3 -->
  <div class="glowing-jellyfish j1" aria-hidden="true">
    <svg viewBox="0 0 70 110" width="100%" height="100%">
      <defs>
        <radialGradient id="jellyGlow1" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#81e6d9" stop-opacity="0.9"/>
          <stop offset="70%" stop-color="#319795" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#234e52" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="35" cy="30" rx="26" ry="22" fill="url(#jellyGlow1)"/>
      <path d="M12 36 Q35 44 58 36" stroke="#4fd1c5" stroke-width="2.5" fill="none"/>
      <path d="M22 40 Q18 65 24 95 Q26 102 22 108" stroke="#4fd1c5" stroke-width="1.8" fill="none" opacity="0.8"/>
      <path d="M30 42 Q36 68 32 98 Q30 104 35 110" stroke="#81e6d9" stroke-width="2" fill="none" opacity="0.9"/>
      <path d="M40 42 Q44 68 38 98 Q36 104 42 110" stroke="#81e6d9" stroke-width="2" fill="none" opacity="0.9"/>
      <path d="M48 40 Q52 65 46 95 Q44 102 48 108" stroke="#4fd1c5" stroke-width="1.8" fill="none" opacity="0.8"/>
    </svg>
  </div>

  <div class="glowing-jellyfish j2" aria-hidden="true">
    <svg viewBox="0 0 70 110" width="100%" height="100%">
      <defs>
        <radialGradient id="jellyGlow2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fbb6ce" stop-opacity="0.9"/>
          <stop offset="70%" stop-color="#b83280" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#702459" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="35" cy="30" rx="24" ry="20" fill="url(#jellyGlow2)"/>
      <path d="M14 34 Q35 42 56 34" stroke="#f687b3" stroke-width="2.2" fill="none"/>
      <path d="M24 38 Q20 62 26 90" stroke="#f687b3" stroke-width="1.8" fill="none" opacity="0.8"/>
      <path d="M32 40 Q38 65 34 95" stroke="#fbb6ce" stroke-width="2" fill="none" opacity="0.9"/>
      <path d="M38 40 Q42 65 36 95" stroke="#fbb6ce" stroke-width="2" fill="none" opacity="0.9"/>
      <path d="M46 38 Q50 62 44 90" stroke="#f687b3" stroke-width="1.8" fill="none" opacity="0.8"/>
    </svg>
  </div>

  <div class="glowing-jellyfish j3" aria-hidden="true">
    <svg viewBox="0 0 70 110" width="100%" height="100%">
      <defs>
        <radialGradient id="jellyGlow3" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fbd38d" stop-opacity="0.95"/>
          <stop offset="70%" stop-color="#dd6b20" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#7b341e" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="35" cy="30" rx="22" ry="18" fill="url(#jellyGlow3)"/>
      <path d="M16 34 Q35 42 54 34" stroke="#f6ad55" stroke-width="2.2" fill="none"/>
      <path d="M26 38 Q22 62 28 90" stroke="#f6ad55" stroke-width="1.8" fill="none" opacity="0.8"/>
      <path d="M34 40 Q40 65 36 95" stroke="#fbd38d" stroke-width="2" fill="none" opacity="0.9"/>
      <path d="M42 38 Q46 62 40 90" stroke="#f6ad55" stroke-width="1.8" fill="none" opacity="0.8"/>
    </svg>
  </div>

  <!-- Rising Bubbles across full screen -->
  <div class="lagoon-bubbles" aria-hidden="true">
    <div class="lagoon-bubble" style="--b-left:12%;--b-sz:16px;--b-dur:7s;--b-del:0.5s;--b-drift:30px"></div>
    <div class="lagoon-bubble" style="--b-left:24%;--b-sz:10px;--b-dur:9s;--b-del:2s;--b-drift:-20px"></div>
    <div class="lagoon-bubble" style="--b-left:38%;--b-sz:20px;--b-dur:6.5s;--b-del:1.2s;--b-drift:25px"></div>
    <div class="lagoon-bubble" style="--b-left:52%;--b-sz:12px;--b-dur:8s;--b-del:3s;--b-drift:-15px"></div>
    <div class="lagoon-bubble" style="--b-left:68%;--b-sz:18px;--b-dur:7.5s;--b-del:0.8s;--b-drift:35px"></div>
    <div class="lagoon-bubble" style="--b-left:82%;--b-sz:14px;--b-dur:8.5s;--b-del:2.5s;--b-drift:-25px"></div>
    <div class="lagoon-bubble" style="--b-left:94%;--b-sz:16px;--b-dur:7.2s;--b-del:1.8s;--b-drift:20px"></div>
  </div>

  <!-- Deep Sea Floor & Coral Reef Formations -->
  <div class="sea-floor" aria-hidden="true">
    <svg class="coral-formation" style="left:4%;width:180px;height:95px" viewBox="0 0 180 95">
      <path d="M10 95 Q15 60 25 45 Q15 35 10 20 Q20 25 30 38 Q38 20 45 5 Q48 20 40 42 Q55 35 68 25 Q62 42 48 55 Q60 62 75 58 Q65 72 45 80 Q35 95 10 95 Z" fill="#dd6b20" opacity="0.9"/>
      <path d="M60 95 Q70 65 85 50 Q80 35 75 15 Q88 28 92 45 Q105 35 118 20 Q112 40 98 55 Q115 65 130 60 Q118 75 92 82 Q78 95 60 95 Z" fill="#e53e3e" opacity="0.85"/>
      <ellipse cx="140" cy="80" rx="30" ry="18" fill="#d69e2e" opacity="0.8"/>
    </svg>
    <svg class="coral-formation" style="right:5%;width:190px;height:95px" viewBox="0 0 190 95">
      <path d="M170 95 Q160 55 145 40 Q155 25 160 8 Q148 20 140 35 Q130 18 122 2 Q120 18 128 38 Q115 32 102 20 Q108 38 122 52 Q105 60 90 55 Q102 70 125 78 Q138 95 170 95 Z" fill="#9f7aea" opacity="0.9"/>
      <path d="M90 95 Q80 70 65 52 Q50 38 42 18 Q55 30 62 48 Q75 40 88 28 Q82 48 72 62 Q85 70 102 65 Q90 78 72 85 Q60 95 40 95 Z" fill="#319795" opacity="0.85"/>
      <ellipse cx="40" cy="82" rx="28" ry="16" fill="#b83280" opacity="0.85"/>
    </svg>
  </div>
</div>

<div class="stats">
  <div class="wrap stats-grid">
    <div class="stat reveal" data-tilt><div class="num">1,200</div><div class="lbl">The Crew, enrolled &amp; slightly sea-sick</div></div>
    <div class="stat reveal d1" data-tilt><div class="num">38</div><div class="lbl">Skills of the Seven Seas (courses)</div></div>
    <div class="stat reveal d2" data-tilt><div class="num">6 + 1</div><div class="lbl">Ships in The Fleet (departments) + one sloop</div></div>
    <div class="stat reveal d3" data-tilt><div class="num">0</div><div class="lbl">Exams. Assessment is treasure-based. Always.</div></div>
  </div>
</div>

<section id="sot-pillars-section" style="background:linear-gradient(180deg,#040c16,#08182c)">
  <div class="wrap">
    ${secHead('The Pirate Life','Four Pillars of the Seven Seas','A pirate’s education is tested by the ocean itself: sailing treacherous waves, claiming rival plunder, and uncovering ancient lore.')}
    <div class="sot-pillars">
      <div class="sot-pillar reveal" data-tilt>
        <span class="sot-pillar-icon">🧭</span>
        <h3>Sail &amp; Discover</h3>
        <p>Command the helm through blinding squalls, dense sea mists, and uncharted archipelagos. Dive into sunken mermaid shrines and unearth forgotten island vaults.</p>
      </div>
      <div class="sot-pillar reveal d1" data-tilt>
        <span class="sot-pillar-icon">⚔️</span>
        <h3>Fight &amp; Plunder</h3>
        <p>Master naval broadsides with 32-pounder cannons, repel skeleton armadas, board rival galleons with cutlass in hand, and claim lucrative bounty flags.</p>
      </div>
      <div class="sot-pillar reveal d2" data-tilt>
        <span class="sot-pillar-icon">👑</span>
        <h3>Become Pirate Legend</h3>
        <p>Rise through the ranks, amass thousands of shimmering gold doubloons, gain the trust of ancient Trading Companies, and unlock the legendary Pirate Lord hideout.</p>
      </div>
      <div class="sot-pillar reveal d3" data-tilt>
        <span class="sot-pillar-icon">📜</span>
        <h3>Tall Tales &amp; Lore</h3>
        <p>Embark on cinematic seafaring sagas filled with cursed captain journals, mystical golden chalices, star-guided quests, and the spectral wrath of Davy Jones.</p>
      </div>
    </div>
  </div>
</section>

<!-- THE FLEET IN THE HARBOUR: STEERING WHEEL, CRATE, GRAVEYARD -->
<section id="fleet-teaser" style="background:linear-gradient(180deg,#08182c,#050f1e)">
  <div class="wrap">
    ${secHead('The Fleet in the Harbour','Departments, But They Sail','Three moored flagships in the harbor: steering through storms, loaded with cannon ammunition, and charting what lies beneath.')}
    <div class="fleet-custom-grid">
      
      <!-- 1. H.M.S. Educate & Plunder on Ship's Steering Wheel -->
      <div class="helm-card reveal" data-tilt>
        <div class="helm-wheel-decor">
          <svg class="helm-wheel-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="76" stroke="#b8862d" stroke-width="8"/>
            <circle cx="100" cy="100" r="54" stroke="#8a5a1f" stroke-width="5"/>
            <!-- 8 spokes extending through rim with handles -->
            <line x1="100" y1="8" x2="100" y2="192" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="8" y1="100" x2="192" y2="100" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="35" y1="35" x2="165" y2="165" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="165" y1="35" x2="35" y2="165" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <!-- Brass hub -->
            <circle cx="100" cy="100" r="28" fill="#ffd873" stroke="#5a3818" stroke-width="4"/>
            <circle cx="100" cy="100" r="14" fill="#3a1e0b"/>
            <!-- Handles knobs -->
            <circle cx="100" cy="10" r="6" fill="#ffd873"/>
            <circle cx="100" cy="190" r="6" fill="#ffd873"/>
            <circle cx="10" cy="100" r="6" fill="#ffd873"/>
            <circle cx="190" cy="100" r="6" fill="#ffd873"/>
            <circle cx="36" cy="36" r="6" fill="#ffd873"/>
            <circle cx="164" cy="164" r="6" fill="#ffd873"/>
            <circle cx="164" cy="36" r="6" fill="#ffd873"/>
            <circle cx="36" cy="164" r="6" fill="#ffd873"/>
          </svg>
        </div>
        <div class="sname">H.M.S. Educate &amp; Plunder</div>
        <div class="sdept">Navigation &amp; Wayfinding</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1654</b></div>
          <div class="stat-row"><span>Crew</span><b>210</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>9</b></div>
          <div class="stat-row"><span>Top speed</span><b>14 kn</b></div>
        </div>
        <div class="squip">"The campus itself. The Great Hall is her wheelhouse."</div>
      </div>

      <!-- 2. The Broadside on Crate of Ammunition -->
      <div class="crate-card reveal d1" data-tilt>
        <div class="crate-rivets">
          <div class="crate-rivet"></div><div class="crate-rivet"></div><div class="crate-rivet"></div>
        </div>
        <span class="crate-danger-stencil">💣 32-Pounder Ammunition · Explosive</span>
        <div class="sname">The Broadside</div>
        <div class="sdept">Artillery &amp; Cannon Science</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1671</b></div>
          <div class="stat-row"><span>Crew</span><b>140</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>7</b></div>
          <div class="stat-row"><span>Top speed</span><b>12 kn</b></div>
        </div>
        <div class="squip">"Has never missed a deadline or a target."</div>
      </div>

      <!-- 3. Buried Alive on Graveyard -->
      <div class="graveyard-card reveal d2" data-tilt>
        <div class="graveyard-cross-icon">🪦</div>
        <div class="sname">Buried Alive</div>
        <div class="sdept">Treasure Recovery &amp; Cartography</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1688</b></div>
          <div class="stat-row"><span>Crew</span><b>185</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>11</b></div>
          <div class="stat-row"><span>Top speed</span><b>10 kn</b></div>
        </div>
        <div class="squip">"Her hold smells of wet sand and good maps."</div>
      </div>

    </div>
    <div class="center mt reveal"><a class="btn ghost" href="fleet.html">Meet the Whole Fleet (6 Ships) →</a></div>
  </div>
</section>

<!-- SEA OF THIEVES VESSELS SHOWCASE -->
<section style="background:linear-gradient(180deg,#050f1e,#0a1f38)">
  <div class="wrap">
    ${secHead('Vessels of the Sea','Choose Your Ship Class','From agile one-pirate skiffs to hulking four-pirate warships, every ship sails with full freedom.')}
    <div class="sot-vessels-grid">
      <div class="sot-vessel-card reveal" data-tilt>
        <div class="sot-vessel-header">
          <h3>The Sloop</h3>
          <span class="sot-crew-badge">1–2 Pirates</span>
        </div>
        <div class="sot-vessel-body">
          <p style="color:#bcd0dd;font-size:.95rem">The ultimate agile vessel. The fastest ship when sailing directly into the wind, with lightning-quick anchor recovery and single-deck nimbleness.</p>
          <div class="sot-vessel-specs">
            <div class="sot-spec-item">Cannons<b>2 (1 per side)</b></div>
            <div class="sot-spec-item">Masts<b>1 Sail</b></div>
            <div class="sot-spec-item">Turning Rate<b>Exceptional</b></div>
            <div class="sot-spec-item">Deck Decks<b>1 Single Deck</b></div>
          </div>
          <a class="btn ghost" href="enlist.html" style="width:100%;text-align:center">Sail a Sloop →</a>
        </div>
      </div>
      <div class="sot-vessel-card reveal d1" data-tilt>
        <div class="sot-vessel-header">
          <h3>The Brigantine</h3>
          <span class="sot-crew-badge">3 Pirates</span>
        </div>
        <div class="sot-vessel-body">
          <p style="color:#bcd0dd;font-size:.95rem">A versatile and lethal predator. Fastest ship with a crosswind breeze, balancing heavy double broadside firepower with rapid crew responsiveness.</p>
          <div class="sot-vessel-specs">
            <div class="sot-spec-item">Cannons<b>4 (2 per side)</b></div>
            <div class="sot-spec-item">Masts<b>2 Sails</b></div>
            <div class="sot-spec-item">Crosswind Speed<b>Devastating</b></div>
            <div class="sot-spec-item">Deck Decks<b>2 Decks</b></div>
          </div>
          <a class="btn ghost" href="enlist.html" style="width:100%;text-align:center">Sail a Brigantine →</a>
        </div>
      </div>
      <div class="sot-vessel-card reveal d2" data-tilt>
        <div class="sot-vessel-header">
          <h3>The Galleon</h3>
          <span class="sot-crew-badge">4 Pirates</span>
        </div>
        <div class="sot-vessel-body">
          <p style="color:#bcd0dd;font-size:.95rem">A floating naval fortress. Unmatched in pure firepower and tailwind cruising speed. Takes a coordinated four-buccaneer crew to unleash her full wrath.</p>
          <div class="sot-vessel-specs">
            <div class="sot-spec-item">Cannons<b>8 (4 per side)</b></div>
            <div class="sot-spec-item">Masts<b>3 Towering Masts</b></div>
            <div class="sot-spec-item">Hull Strength<b>3 Decks Armor</b></div>
            <div class="sot-spec-item">Full Broadside<b>Catastrophic</b></div>
          </div>
          <a class="btn ghost" href="enlist.html" style="width:100%;text-align:center">Sail a Galleon →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CHARACTER SHOWCASE -->
<section style="background:linear-gradient(180deg,#0a1f38,#08182c)">
  <div class="wrap">
    ${secHead('Buccaneers &amp; Leaders','Meet The Pirate Crew','Trained under salt and storm, these buccaneers command the decks and lead the voyages.')}
    <div class="crew-full-grid">
      
      <!-- Captain Maeve -->
      <div class="crew-full-card reveal" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-captain-red.jpg" alt="Captain Maeve Ironhook Vane" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Captain</span>
          <span class="crew-bounty-badge">50,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Capt. Maeve "Ironhook" Vane</h3>
          <div class="crew-full-title">Fleet Strategist · Flagship H.M.S. Educate &amp; Plunder</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Hook Prosthetic</span>
            <span class="crew-gear-chip">🗡️ Damascus Dagger</span>
            <span class="crew-gear-chip">🦜 White Cockatoo</span>
          </div>
          <div class="crew-full-quote">"A fair wind is a gift, but a violent storm is a syllabus. We take the storm every single time."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Naval Rating<b>98 / 100</b></div>
            <div class="crew-stat-cell">Boarding Skill<b>Master</b></div>
          </div>
        </div>
      </div>

      <!-- Navigator Saki Chen -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-navigator-elder.jpg" alt="Navigator Saki Starwatcher Chen" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Astrogator</span>
          <span class="crew-bounty-badge">42,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Saki "Starwatcher" Chen</h3>
          <div class="crew-full-title">Master Cartographer · Ship: Buried Alive</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🧭 Brass Sextant</span>
            <span class="crew-gear-chip">📜 Astral Chart</span>
            <span class="crew-gear-chip">👁️ Eyepatch of Depths</span>
          </div>
          <div class="crew-full-quote">"The stars never lie, even when the sea tries to drown you. Follow the needle or sleep in Davy Jones's locker."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Navigation<b>100 / 100</b></div>
            <div class="crew-stat-cell">Storm Lore<b>Legendary</b></div>
          </div>
        </div>
      </div>

      <!-- Gunner Jax Rivera -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-gunner-beanie.jpg" alt="Gunner Jax Quick-Cut Rivera" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Gunner</span>
          <span class="crew-bounty-badge">38,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Jax "Quick-Cut" Rivera</h3>
          <div class="crew-full-title">Master Gunner · Ship: The Broadside</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🔫 Twin Flintlocks</span>
            <span class="crew-gear-chip">⚔️ Curved Cutlass</span>
            <span class="crew-gear-chip">💣 Black Powder Bags</span>
          </div>
          <div class="crew-full-quote">"Aim low, light the fuse fast, and always swing into the enemy quarterdeck with a grin."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Cannon Shot<b>99 / 100</b></div>
            <div class="crew-stat-cell">Demolitions<b>Expert</b></div>
          </div>
        </div>
      </div>

      <!-- Quartermaster Tariq -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-corsair-spyglass.jpg" alt="Quartermaster Tariq The Hawk Al-Mansur" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Quartermaster</span>
          <span class="crew-bounty-badge">65,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Tariq "The Hawk" Al-Mansur</h3>
          <div class="crew-full-title">Master of Accounts · Ship: The Tightrope</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🔭 Gilded Spyglass</span>
            <span class="crew-gear-chip">⚖️ Doubloon Scale</span>
            <span class="crew-gear-chip">🧥 Crimson Coat</span>
          </div>
          <div class="crew-full-quote">"Every piece of eight tells a story. Some scream. It is my duty to count them all accurately."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty Appraisal<b>99 / 100</b></div>
            <div class="crew-stat-cell">Vault Defense<b>Supreme</b></div>
          </div>
        </div>
      </div>

      <!-- First Mate Ren Kuroda -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-swordsman-bun.jpg" alt="First Mate Ren Shadowblade Kuroda" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Duelist</span>
          <span class="crew-bounty-badge">48,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Ren "Shadowblade" Kuroda</h3>
          <div class="crew-full-title">Vanguard Duelist · Ship: The Black Wake</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Katana Cutlass</span>
            <span class="crew-gear-chip">🥋 Boarding Garb</span>
            <span class="crew-gear-chip">🌅 Sunset Cloak</span>
          </div>
          <div class="crew-full-quote">"Quiet steel cuts deepest. When the fog rolls in, our enemies only hear the ocean."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Swordsmanship<b>100 / 100</b></div>
            <div class="crew-stat-cell">Silent Boarding<b>Flawless</b></div>
          </div>
        </div>
      </div>

      <!-- Fleetmaster Aldric Crane -->
      <div class="crew-full-card reveal d3" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/captain-crane.jpg" alt="Fleetmaster Aldric Grimtide Crane" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Fleetmaster</span>
          <span class="crew-bounty-badge">100,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Fleetmaster Aldric "Grimtide" Crane</h3>
          <div class="crew-full-title">Dean of the Fleet · Flagship Commander</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">👑 Pirate Hat</span>
            <span class="crew-gear-chip">🪝 Golden Hook</span>
            <span class="crew-gear-chip">🦜 Scarlet Macaw</span>
          </div>
          <div class="crew-full-quote">"Steers the college and, on Mondays, the entire fleet. Has never been lost. Once argued with a current and won."</div>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Fleet Command<b>Supreme</b></div>
            <div class="crew-stat-cell">College Lore<b>Est. 1654</b></div>
          </div>
        </div>
      </div>

    </div>
    <div class="center mt reveal">
      <a class="btn" href="crew.html">Meet The Entire Crew →</a>
      <a class="btn ghost" href="legends.html">View Hall of Legends →</a>
    </div>
  </div>
</section>

<!-- THE ISLAND INTERACTIVE TEASER -->
<section id="island-teaser" style="background:linear-gradient(180deg,#08182c,#050f1e)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:-1.6deg">
        <img src="img/island-map.jpg" alt="Authentic illustrated pirate map of Ravenspire Blacktide Collegium" loading="lazy">
        <figcaption>The island campus — 17 clickable landmarks charted in authentic pirate style</figcaption>
      </figure>
      <div class="reveal d2">
        <div class="over" style="font-family:var(--font-display);letter-spacing:.32em;text-transform:uppercase;color:var(--gold);font-size:1rem;margin-bottom:10px">Campus / Facilities</div>
        <h2 style="font-size:clamp(2rem,4.5vw,3rem);color:var(--cream)">The Island</h2>
        <p style="color:#bcd0dd;margin:14px 0;font-size:1.05rem">Lighthouse, Great Hall, Crow’s Nest library, the Vault, the Galley, the Krakenarium, the Plank — everything you need, and nothing you can’t swim back from. The campus map is <strong>interactive</strong> with real sound effects, audio tides, and clickable pins.</p>
        <p style="color:#bcd0dd;margin-bottom:26px;font-style:italic">Yes, there is a treasure vault on campus. No, you cannot open it. Yes, it is the most-visited landmark. All three of those are true.</p>
        <a class="sot-btn-gold" href="island.html"><span>🗺️</span> Open Interactive Treasure Map</a>
      </div>
    </div>
  </div>
</section>

<!-- THE WANTED BOARD TEASER -->
<section id="wanted-teaser" style="background:linear-gradient(180deg,#050f1e,#0a1f38)">
  <div class="wrap">
    ${secHead('The Wanted Board','Fresh Off the Board','Everything the college says, pinned and slightly crooked onto weathered oak.')}
    <div class="wanted-board-wall reveal">
      <div class="grid-posters">
        <div class="poster reveal" data-tilt style="--rot:-2deg"><span class="ptype">Bounty</span><h3>Doubloons Found</h3><div class="reward">Reward: 2,400 doubloons</div><p>Found in the library, under a chart of "somewhere lovely". Claim before Thursday or forfeit to the college.</p><div class="pdate"><span>The Board</span><span>every tide</span></div></div>
        <div class="poster reveal d1" data-tilt style="--rot:1.6deg"><span class="ptype">Raid</span><h3>Storm Week Drills</h3><div class="reward">Bring a towel + fear of whales</div><p>Advanced Navigation practicum. We sail into the storm. The syllabus means it.</p><div class="pdate"><span>Dept. of Navigation</span><span>Nov 20</span></div></div>
        <div class="poster reveal d2" data-tilt style="--rot:-1.4deg"><span class="ptype">Notice</span><h3>New Bird on Faculty</h3><div class="reward">Reward: none. It’s a parrot.</div><p>Professor Feather III now grades. Do not feed him forms. Do not feed him anything but seeds.</p><div class="pdate"><span>The Aviary</span><span>this tide</span></div></div>
      </div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="wanted.html">The Full Wanted Board →</a></div>
  </div>
</section>

${cta('The Tide Is Good. The Doubloons Are Shiny.','What are you waiting for? The tide does not wait for the undecided.',
  '<a class="sot-btn-gold" href="enlist.html"><span>⚔️</span> Join the Crew</a><a class="sot-btn-ghost" href="scroll.html"><span>📜</span> Read The Scroll</a>')}
`;


const SCROLL = `
${pageHero('About Us · Est. 1654','The Scroll','The college\u2019s story, as written in tar, salt, and one very old hand.','The Scroll')}
<section>
  <div class="wrap">
    <div class="duo">
      <div class="parchment reveal">
        <h3>To Whom This Scroll May Concern</h3>
        <p>Be it known that in the year 1654, twelve captains — robbed of their ship, their grog, and by one account, their dignity — refused to return to port.</p>
        <p>"If the education ashore is so good," declared Captain Marlow from the bowsprit, "then we shall simply <em>sail around it.</em>"</p>
        <p>Thus began the college: a floating faculty, a mobile library, and a curriculum of real voyages, real treasure, and the occasional cannon drill. The first term lasted until the grog ran out, which is to say, quite a while.</p>
        <p>In 1703, when the raven chose us, we took a proper name: <strong>Ravenspire Blacktide Collegium</strong>. The crew still calls it the Seven Seas. Both are correct; the second is just shorter.</p>
        <p>Three hundred and seventy-odd years on, we have graduated explorers, cartographers, astronomers, and at least one person who simply finds islands for a living. Our campus is an island. Our departments are ships. Our grading is simple: <em>bring back treasure, or at least a good story.</em></p>
        <span class="sig">— The Founding Captains, signed in tar</span>
        <div class="seal" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#skullMark" color="#f5e9c9"/></svg></div>
      </div>
      <figure class="frame wide reveal d2" data-tilt style="--rot:1.4deg">
        <img src="img/ship-sunset-2.webp" alt="A pirate ship under a dramatic sunset sky" loading="lazy">
        <figcaption>The fleet, heading to term — or from it, depending on the year</figcaption>
      </figure>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('The Code','What The Island Stands On','Four rules. No fine print. Fine print dreads.')}
    <div class="grid-4">
      <div class="card-life reveal" data-tilt><div class="code-num">I</div><h3>The Sea Is the Syllabus</h3><p>It covers everything. You cannot sit for it. It always passes you, technically.</p></div>
      <div class="card-life reveal d1" data-tilt><div class="code-num">II</div><h3>Bring Back Treasure</h3><p>Or a good story. The story must be true. The treasure must be yours. Both must be told at the evening meal.</p></div>
      <div class="card-life reveal d2" data-tilt><div class="code-num">III</div><h3>Never Walk the Deck Backwards</h3><p>It works. We will know. The whole fleet will sing about it for a semester. This is not a threat. It is a warning.</p></div>
      <div class="card-life reveal d3" data-tilt><div class="code-num">IV</div><h3>The Parrot Is Always Right</h3><p>This is not a joke. This is the joke. He is always right.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    ${secHead('The Ship’s Log','Notable Years, In No Particular Order of Dryness','')}
    <div class="timeline">
      <div class="t-item reveal" data-tilt><div class="t-year">1654</div><h3>The Founding</h3><p>Twelve captains, one seized galleon (renamed H.M.S. <em>Educate &amp; Plunder</em>), and a charter signed in tar. First lecture delivered from a cannon barrel.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1671</div><h3>First Graduating Class</h3><p>Nine students. Two returned with treasure, one with a story, six with both. The story one became a novelist. The treasure ones split theirs, as required.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1698</div><h3>Professor Marlow’s Leg</h3><p>Lost to a stray cannonball during a demonstration of "practical ballistics." He teaches Navigation with the other leg, mostly. Enrollment doubled.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1703</div><h3>The Raven Chooses</h3><p>The raven lands on the main mast, stays, and grades the first exam — then invents them all and abolishes them, in that order. The college takes the name Ravenspire Blacktide Collegium. The crew shrugs and keeps calling it the Seven Seas.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1712</div><h3>The Library Tower</h3><p>The Crow’s Nest rises: 37,000 books, 12,000 charts, and one parrot who has never once returned a book. The parrot stayed.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1780</div><h3>The Full Moon Cannon Gala</h3><p>Founded the year after the "small" fire of 1779, in which the stern, the stern gallery, and most of the faculty’s trousers were lost to the sea.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1848</div><h3>Professor Feather Joins the Faculty</h3><p>Formally enrolled, salaried in sunflower seeds, and granted grading authority. Students protest. The parrot grades the protest.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">1901</div><h3>Storm Week becomes Tradition</h3><p>After the Incident with the Whale, the board of captains resolves that advanced navigation must be taught <em>in</em> the storm. No appeals.</p></div>
      <div class="t-item reveal" data-tilt><div class="t-year">2026</div><h3>Today</h3><p>Ravenspire Blacktide Collegium: 1,200 of The Crew, 38 Skills, 37,000 doubloons in the Vault, six ships in The Fleet, exactly zero exams, and one raven who has never once been wrong. The island sails on.</p></div>
    </div>
  </div>
</section>

${cta('The Rest of the Story Is Yours to Sail','Every great voyage starts with one step. Ours starts with four.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="island.html">Chart the Island</a>')}
`;

const FLEET = `
${pageHero('Departments · Each Is a Ship','The Fleet','Six departments. Six ships. Every department moors at its own berth and sails its own curriculum.','The Fleet')}
<section>
  <div class="wrap">
    <div class="fleet-custom-grid" style="margin-bottom:34px">
      <!-- 1. H.M.S. Educate & Plunder on Ship's Steering Wheel -->
      <div class="helm-card reveal" data-tilt>
        <div class="helm-wheel-decor">
          <svg class="helm-wheel-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="76" stroke="#b8862d" stroke-width="8"/>
            <circle cx="100" cy="100" r="54" stroke="#8a5a1f" stroke-width="5"/>
            <line x1="100" y1="8" x2="100" y2="192" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="8" y1="100" x2="192" y2="100" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="35" y1="35" x2="165" y2="165" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <line x1="165" y1="35" x2="35" y2="165" stroke="#e6b34a" stroke-width="7" stroke-linecap="round"/>
            <circle cx="100" cy="100" r="28" fill="#ffd873" stroke="#5a3818" stroke-width="4"/>
            <circle cx="100" cy="100" r="14" fill="#3a1e0b"/>
            <circle cx="100" cy="10" r="6" fill="#ffd873"/>
            <circle cx="100" cy="190" r="6" fill="#ffd873"/>
            <circle cx="10" cy="100" r="6" fill="#ffd873"/>
            <circle cx="190" cy="100" r="6" fill="#ffd873"/>
            <circle cx="36" cy="36" r="6" fill="#ffd873"/>
            <circle cx="164" cy="164" r="6" fill="#ffd873"/>
            <circle cx="164" cy="36" r="6" fill="#ffd873"/>
            <circle cx="36" cy="164" r="6" fill="#ffd873"/>
          </svg>
        </div>
        <div class="sname">H.M.S. Educate &amp; Plunder</div>
        <div class="sdept">Navigation &amp; Wayfinding</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1654</b></div>
          <div class="stat-row"><span>Crew</span><b>210</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>9</b></div>
          <div class="stat-row"><span>Top speed</span><b>14 kn</b></div>
          <div class="stat-row"><span>Captain</span><b>Prof. M. Vance</b></div>
        </div>
        <div class="squip">"The campus itself. The Great Hall is her wheelhouse. Her bell is the college’s heartbeat."</div>
      </div>

      <!-- 2. The Broadside on Crate of Ammunition -->
      <div class="crate-card reveal d1" data-tilt>
        <div class="crate-rivets">
          <div class="crate-rivet"></div><div class="crate-rivet"></div><div class="crate-rivet"></div>
        </div>
        <span class="crate-danger-stencil">💣 32-Pounder Ammunition · Explosive</span>
        <div class="sname">The Broadside</div>
        <div class="sdept">Artillery &amp; Cannon Science</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1671</b></div>
          <div class="stat-row"><span>Crew</span><b>140</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>7</b></div>
          <div class="stat-row"><span>Top speed</span><b>12 kn</b></div>
          <div class="stat-row"><span>Captain</span><b>Prof. I. Blackbeard</b></div>
        </div>
        <div class="squip">"Has never missed a deadline or a target. Her deck is always slightly sootier than the others. With pride."</div>
      </div>

      <!-- 3. Buried Alive on Graveyard -->
      <div class="graveyard-card reveal d2" data-tilt>
        <div class="graveyard-cross-icon">🪦</div>
        <div class="sname">Buried Alive</div>
        <div class="sdept">Treasure Recovery &amp; Cartography</div>
        <div class="srows">
          <div class="stat-row"><span>Keel-laid</span><b>1688</b></div>
          <div class="stat-row"><span>Crew</span><b>185</b></div>
          <div class="stat-row"><span>Sails (courses)</span><b>11</b></div>
          <div class="stat-row"><span>Top speed</span><b>10 kn</b></div>
          <div class="stat-row"><span>Captain</span><b>Dr. C. Quill</b></div>
        </div>
        <div class="squip">"Her hold smells of wet sand and good maps. Half her charts are real. The other half are promises."</div>
      </div>
    </div>

    <div class="grid-3">
      <div class="ship-card reveal" data-tilt><div class="sname">The Tightrope</div><div class="sdept">Ropes &amp; Rigging Engineering</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1702</b></div><div class="stat-row"><span>Crew</span><b>120</b></div><div class="stat-row"><span>Sails (courses)</span><b>8</b></div><div class="stat-row"><span>Top speed</span><b>15 kn</b></div><div class="stat-row"><span>Captain</span><b>Capt. (ret.) R. Flint</b></div></div><div class="squip">"Fastest ship in The Fleet. Mostly because of the students. The knots are load-bearing; so are the friendships."</div></div>
      <div class="ship-card reveal d1" data-tilt><div class="sname">Feather’s Folly</div><div class="sdept">Parrot Husbandry &amp; Marine Biology</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1848</b></div><div class="stat-row"><span>Crew</span><b>95</b></div><div class="stat-row"><span>Sails (courses)</span><b>6</b></div><div class="stat-row"><span>Top speed</span><b>9 kn</b></div><div class="stat-row"><span>Captain</span><b>Prof. Feather III</b></div></div><div class="squip">"Crewed by 95 humans and 95 very small lecturers. The small ones set the syllabus. The big ones comply."</div></div>
      <div class="ship-card reveal d2" data-tilt><div class="sname">The Anvil’s Wake</div><div class="sdept">Naval Architecture &amp; Blacksmithing</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1790</b></div><div class="stat-row"><span>Crew</span><b>110</b></div><div class="stat-row"><span>Sails (courses)</span><b>7</b></div><div class="stat-row"><span>Top speed</span><b>11 kn</b></div><div class="stat-row"><span>Captain</span><b>Mrs. M. Oat (Adj.)</b></div></div><div class="squip">"The sound of her workshop can be heard two bays away. Her capstone boats have survived three storms and one very rude whale."</div></div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:1.5deg">
        <img src="img/ship-deck.jpg" alt="The lower deck of a wooden pirate ship" loading="lazy">
        <figcaption>Berth 2: The Broadside. Yes, that’s the goat. He’s enrolled.</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>How The Fleet Works</h3>
        <p>Departments here are ships, because at sea a department is just a ship with a reading list.</p>
        <p>The <strong>Fleetmaster</strong> is our dean. A <strong>semester</strong> is a voyage: it starts when the tide says so and ends when the Treasure Count does. Changing ships (departments) is called <strong>"hitching over"</strong>, and it is allowed once per year, provided the other captain accepts your nerve test.</p>
        <p>Classrooms are decks. Decks are classrooms. The weather is a co-teacher and has never once been cancelled.</p>
        <span class="sig">— Fleetmaster A. "Grimtide" Crane, Dean</span>
      </div>
    </div>
  </div>
</section>

${cta('Pick Your Ship, Matey','All ships accept new crew. Some also accept grog, in emergencies.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="skills.html">Browse the Skills</a>')}
`;

const SKILLS = `
${pageHero('Courses · 38 Skills','Skills of the Seven Seas','No exams. Just skills, graded the way the sea grades everything: by what you bring back.','Skills')}
<section>
  <div class="wrap">
    <!-- Ancient Pale Coffee Brown Rolled Scroll -->
    <div class="ancient-scroll-container reveal">
      <div class="scroll-roller top">
        <div class="scroll-finial"></div>
        <div class="scroll-finial"></div>
      </div>

      <div class="ancient-scroll-body">
        <div class="scroll-curled-edge"></div>
        
        <div class="scroll-header-decree">
          <div style="font-family:'Pirata One',cursive;font-size:1.15rem;letter-spacing:0.18em;color:#8a4212;text-transform:uppercase;margin-bottom:6px">
            ⚓ Official Collegiate Decree · Est. 1654 ⚓
          </div>
          <h2 class="scroll-decree-title">The 38 Skills of the Seven Seas</h2>
          <p class="scroll-decree-sub">
            "No paper exams. Graded solely the way the ocean grades: by what you bring back alive."
          </p>
        </div>

        <div class="scroll-skills-grid">
          <div class="scroll-skill-item">
            <div class="scroll-skill-code">NAV-101 <span class="skulls">☠</span></div>
            <div class="scroll-skill-name">Astrolabe Theory &amp; Practice</div>
            <span class="scroll-skill-dept">Ship: H.M.S. Educate &amp; Plunder · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Find Polaris in dense fog before midnight.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">NAV-210 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Reading Storms with Your Face</div>
            <span class="scroll-skill-dept">Ship: H.M.S. Educate &amp; Plunder · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Oral exam outdoors in 45-knot gale winds.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">NAV-400 <span class="skulls">☠☠☠</span></div>
            <div class="scroll-skill-name">Capstone: Cross an Ocean, Solo</div>
            <span class="scroll-skill-dept">Ship: H.M.S. Educate &amp; Plunder · 4 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Arriving. That is the entire rubric.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ART-110 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Ballistics of Big Metal</div>
            <span class="scroll-skill-dept">Ship: The Broadside · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> 32-pounder accuracy on moving target. Nerve not provided.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ART-240 <span class="skulls">☠</span></div>
            <div class="scroll-skill-name">Ethics of the Broadside</div>
            <span class="scroll-skill-dept">Ship: The Broadside · 1 Sail</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> 500-word essay written on a plank with one hand.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">TRE-105 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Charting Islands That Lie</div>
            <span class="scroll-skill-dept">Ship: Buried Alive · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Your red X must pinpoint real buried gold.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">TRE-300 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Diving, Dredging &amp; Digs</div>
            <span class="scroll-skill-dept">Ship: Buried Alive · 3 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Retrieve genuine sunken loot from 20 fathoms.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ROP-112 <span class="skulls">☠</span></div>
            <div class="scroll-skill-name">The 34 Essential Knots</div>
            <span class="scroll-skill-dept">Ship: The Tightrope · 1 Sail</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Tied blindfolded while hanging upside-down.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ROP-330 <span class="skulls">☠☠☠</span></div>
            <div class="scroll-skill-name">Mast Climbing: Fear Management</div>
            <span class="scroll-skill-dept">Ship: The Tightrope · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Reach topgallant spar in a squall, 40 fathoms up.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">PAR-101 <span class="skulls">☠</span></div>
            <div class="scroll-skill-name">Avian Communication</div>
            <span class="scroll-skill-dept">Ship: Feather’s Folly · 1 Sail</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Your parrot claps exactly once on command.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ARC-210 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Hull Design: Art vs. Physics</div>
            <span class="scroll-skill-dept">Ship: The Anvil’s Wake · 2 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> It must float with 4 tons of cannonballs aboard.</div>
          </div>

          <div class="scroll-skill-item">
            <div class="scroll-skill-code">ARC-400 <span class="skulls">☠☠</span></div>
            <div class="scroll-skill-name">Capstone: Build a Boat</div>
            <span class="scroll-skill-dept">Ship: The Anvil’s Wake · 4 Sails</span>
            <div class="scroll-skill-rubric"><b>Rubric:</b> Must survive a 3-mile voyage through breaker reefs.</div>
          </div>
        </div>

        <div style="text-align:center;margin-top:32px;display:flex;align-items:center;justify-content:center;gap:14px">
          <div class="seal" style="position:static" aria-hidden="true">
            <svg viewBox="0 0 100 100"><use href="#skullMark" color="#f5e9c9"/></svg>
          </div>
          <div style="text-align:left;font-family:'Pirata One',cursive;font-size:1.15rem;color:#6b320d">
            Sealed by the Board of Captains<br>
            <span style="font-family:'IM Fell English',serif;font-size:0.88rem;color:#7a4b22;font-style:italic">Academic Committee · Port Ravenspire</span>
          </div>
        </div>

        <div class="scroll-curled-edge bottom"></div>
      </div>

      <div class="scroll-roller bottom">
        <div class="scroll-finial"></div>
        <div class="scroll-finial"></div>
      </div>
    </div>
    <p class="center reveal" style="margin-top:18px;color:#8fa5b5;font-size:.92rem">Sea state = difficulty. ☠ = calm seas. ☠☠☠ = bring a will. Sails = credit. Full catalogue at the Crow’s Nest, subject to the parrot’s mood.</p>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:-1.6deg">
        <img src="img/treasure-map.jpg" alt="An ancient treasure map on parchment" loading="lazy">
        <figcaption>Departmental "map" — some places are promises</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>On the Philosophy of Assessment</h3>
        <p>A paper exam tests what you can memorise while sitting still. We have never met a pirate who needed to prove he could sit still.</p>
        <p>Every Skill is assessed the way the sea assesses everything: <em>by what you bring back</em>. Treasure, a working ship, a chart of somewhere new, a parrot that claps on command — these are our grades.</p>
        <p>The maximum grade is <strong>"Worthy of a Share of the Loot."</strong> It has been awarded forty-one times. Three of the forty-one went on to found their own colleges. All three owe us money.</p>
        <span class="sig">— The Board of Captains, Academic Committee</span>
      </div>
    </div>
  </div>
</section>

${cta('Sail Into a Skill','All ships take first-timers. The sea takes everyone eventually.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="fleet.html">Meet the Ships</a>')}
`;

const QUARTERMASTERS = `
${pageHero('Faculty','Quartermasters','Every professor holds a captain’s license, at least one scar, and a strong opinion about rope.','Quartermasters')}
<section>
  <div class="wrap">
    <div class="qm-passport-grid">
      <!-- 1. Fleetmaster Aldric "Grimtide" Crane -->
      <div class="qm-passport-card reveal" data-tilt style="--qm-tilt:-1.8deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/captain-crane.jpg" alt="Fleetmaster Aldric Grimtide Crane" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Aldric "Grimtide" Crane</h3>
        </div>
        <div class="qm-role-ribbon">Dean of the Fleet · Flagship Master</div>
        <p class="qm-bio-text">Steers the college and, on Mondays, the entire fleet. Has never been lost. Once argued with a current and won.</p>
        <span class="qm-verified-stamp">Verified by Admiralty</span>
      </div>

      <!-- 2. Professor Feather, III -->
      <div class="qm-passport-card reveal d1" data-tilt style="--qm-tilt:1.5deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/parrot.jpg" alt="Professor Feather III" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Prof. Feather, III</h3>
        </div>
        <div class="qm-role-ribbon">Chair of Parrot Linguistics</div>
        <p class="qm-bio-text">Grades, supervises, and occasionally eats the answer sheets. Salaried in sunflower seeds and red chilies since 1848.</p>
        <span class="qm-verified-stamp">Certified by The Crew</span>
      </div>

      <!-- 3. Prof. Marlow "One-Leg" Vance -->
      <div class="qm-passport-card reveal d2" data-tilt style="--qm-tilt:-2.2deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-marlow-pass.jpg" alt="Prof. Marlow One-Leg Vance" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Marlow "One-Leg" Vance</h3>
        </div>
        <div class="qm-role-ribbon">Navigation · Educate &amp; Plunder</div>
        <p class="qm-bio-text">Lost a leg to a broadside in 1698. Teaches astrolabe calculations in squalls with the remaining one, mostly.</p>
        <span class="qm-verified-stamp">Compass Master</span>
      </div>

      <!-- 4. Prof. Isla Blackbeard -->
      <div class="qm-passport-card reveal d3" data-tilt style="--qm-tilt:2deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-isla-pass.jpg" alt="Prof. Isla Blackbeard" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Prof. Isla Blackbeard</h3>
        </div>
        <div class="qm-role-ribbon">Heavy Artillery · The Broadside</div>
        <p class="qm-bio-text">Has never missed a naval target at 400 fathoms. Has also never missed a grade deadline in 34 seasons.</p>
        <span class="qm-verified-stamp">Master Gunner</span>
      </div>

      <!-- 5. Dr. Corvus Quill -->
      <div class="qm-passport-card reveal" data-tilt style="--qm-tilt:-1.4deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-corvus-pass.jpg" alt="Dr. Corvus Quill" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Dr. Corvus Quill</h3>
        </div>
        <div class="qm-role-ribbon">Cartography · Buried Alive</div>
        <p class="qm-bio-text">Maps uncharted islands that lie, shift, or disappear at low tide. The Crew calls his sea routes "promises."</p>
        <span class="qm-verified-stamp">Grand Cartographer</span>
      </div>

      <!-- 6. Capt. (ret.) Rosa Flint -->
      <div class="qm-passport-card reveal d1" data-tilt style="--qm-tilt:2.4deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-flint-pass.jpg" alt="Capt. (ret.) Rosa Flint" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Capt. Rosa Flint</h3>
        </div>
        <div class="qm-role-ribbon">Rigging &amp; Spars · The Tightrope</div>
        <p class="qm-bio-text">Veteran of sixty typhoons. Commands forty fathoms of hemp rope in gale winds blindfolded. Professor Feather's handler.</p>
        <span class="qm-verified-stamp">Rigging Admiral</span>
      </div>

      <!-- 7. Mrs. Marigold Oat -->
      <div class="qm-passport-card reveal d2" data-tilt style="--qm-tilt:-2deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-marigold-pass.jpg" alt="Mrs. Marigold Oat" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Mrs. Marigold Oat</h3>
        </div>
        <div class="qm-role-ribbon">The Galley · Food, Provisions &amp; Grog</div>
        <p class="qm-bio-text">Cook of record. Salt beef served three ways. Her grog recipe and spicy chili stew are collegiate secrets with 372 holders.</p>
        <span class="qm-verified-stamp">Galley Commander</span>
      </div>

      <!-- 8. Brother Anchor -->
      <div class="qm-passport-card reveal d3" data-tilt style="--qm-tilt:1.6deg">
        <div class="qm-passport-frame">
          <div class="qm-passport-corner tl"></div><div class="qm-passport-corner tr"></div>
          <div class="qm-passport-corner bl"></div><div class="qm-passport-corner br"></div>
          <img src="img/qm-anchor-pass.jpg" alt="Brother Anchor" loading="lazy">
        </div>
        <div class="qm-brass-plaque">
          <h3>Brother Anchor</h3>
        </div>
        <div class="qm-role-ribbon">Keeper of the Vault · High Bursar</div>
        <p class="qm-bio-text">Counts 37,000 doubloons nightly behind triple iron portcullises. Has counted them. Will count them again. Stand back from the safe.</p>
        <span class="qm-verified-stamp">Bursar Seal</span>
      </div>
    </div>
  </div>
</section>

<!-- HANGING ROPES GALLERY FOR OUTDOOR LECTURES & PHOTOS -->
<section style="background:linear-gradient(180deg,#061322,#0a1e33);padding:60px 0">
  <div class="wrap">
    ${secHead('Where Outdoor Lectures Happen','Suspended From the Rigging','Hover over any photograph to steady the rope and inspect the lecture deck.')}
    
    <div class="hanging-rope-stage">
      <div class="rigging-beam">
        <div class="beam-iron-bolt"></div>
        <div class="beam-iron-bolt"></div>
        <div class="beam-iron-bolt"></div>
        <div class="beam-iron-bolt"></div>
      </div>
      
      <div class="hanging-rope-grid">
        <!-- 1. Storm Sea - Outdoor Lecture -->
        <div class="hanging-photo-item" style="--sway-dur:5.8s;--sway-delay:0s;--rot-from:-3.8deg;--rot-to:3.2deg;--rope-h:82px">
          <div class="rope-cords">
            <div class="rope-line"></div>
            <div class="rope-line"></div>
            <div class="rope-knot left"></div>
            <div class="rope-knot right"></div>
          </div>
          <div class="hanging-frame">
            <img class="hanging-img" src="img/storm-sea.jpg" alt="Where the outdoor lectures happen - Gale Navigation" loading="lazy">
            <div class="hanging-caption">
              Where the Outdoor Lectures Happen
              <span>Dept. of Navigation · Gale Force III</span>
            </div>
          </div>
        </div>

        <!-- 2. Storm Sea 2 - Maelstrom Drill -->
        <div class="hanging-photo-item" style="--sway-dur:6.6s;--sway-delay:0.7s;--rot-from:4.2deg;--rot-to:-2.8deg;--rope-h:64px">
          <div class="rope-cords">
            <div class="rope-line"></div>
            <div class="rope-line"></div>
            <div class="rope-knot left"></div>
            <div class="rope-knot right"></div>
          </div>
          <div class="hanging-frame">
            <img class="hanging-img" src="img/storm-sea-2.jpg" alt="High-Tide Lecture Deck in Tempest" loading="lazy">
            <div class="hanging-caption">
              High-Tide Lecture Deck
              <span>Astrolabe Drills in 40-Knot Squalls</span>
            </div>
          </div>
        </div>

        <!-- 3. Ship Deck - Berth 2 Cannon Seminar -->
        <div class="hanging-photo-item" style="--sway-dur:5.2s;--sway-delay:1.2s;--rot-from:-2.5deg;--rot-to:4.5deg;--rope-h:96px">
          <div class="rope-cords">
            <div class="rope-line"></div>
            <div class="rope-line"></div>
            <div class="rope-knot left"></div>
            <div class="rope-knot right"></div>
          </div>
          <div class="hanging-frame">
            <img class="hanging-img" src="img/ship-deck.jpg" alt="Lower Gun Deck Lecture Hall" loading="lazy">
            <div class="hanging-caption">
              The Gun Deck Classroom
              <span>Berth 2: Artillery &amp; Broadside Ethics</span>
            </div>
          </div>
        </div>

        <!-- 4. Lighthouse Night - Astronomy & Signal Posts -->
        <div class="hanging-photo-item" style="--sway-dur:6.2s;--sway-delay:0.3s;--rot-from:3.5deg;--rot-to:-3.8deg;--rope-h:74px">
          <div class="rope-cords">
            <div class="rope-line"></div>
            <div class="rope-line"></div>
            <div class="rope-knot left"></div>
            <div class="rope-knot right"></div>
          </div>
          <div class="hanging-frame">
            <img class="hanging-img" src="img/lighthouse-night.jpg" alt="Night Astronomy & Signal Tower" loading="lazy">
            <div class="hanging-caption">
              Lighthouse Signal Post
              <span>Nocturnal Astronomy &amp; Beacon Physics</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#0a1e33,#050f1e)">
  <div class="wrap">
    <div class="duo">
      <div class="parchment reveal" style="margin:0 auto;max-width:820px">
        <h3>Deck Hours (Office Hours)</h3>
        <p>All Quartermasters hold deck hours: Tuesday and Thursday tides, on whichever deck is least currently on fire.</p>
        <p>Professor Feather’s deck hours are whenever he lands. The Crew have learned to read his moods the way the weather is read: by the feathers.</p>
        <p>Appointment policy: the sea sets the appointment. If the sea cancels, the Quartermaster is delighted; you are rescheduled to "whenever the sea feels like it."</p>
        <span class="sig">— Fleetmaster Aldric "Grimtide" Crane, Dean</span>
      </div>
    </div>
  </div>
</section>

${cta('Study Under a Captain (and a Parrot)','Interviews held on the bowsprit, at dusk, in a moderate breeze. Bring your nerve.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="crew.html">Meet The Crew They Teach</a>')}
`;

const CREW = `
${pageHero('Students · 1,200 Aboard','The Crew','Not students. Students don’t navigate. The Crew does.','The Crew')}
<section>
  <div class="wrap">
    ${secHead('Class of the Year','2026\\u2019s Best Hauls','Voted by the evening meal, which is the only election the island has ever run.')}
    <div class="crew-full-grid">
      <!-- 1. Captain Maeve -->
      <div class="crew-full-card reveal" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-captain-red.jpg" alt="Captain Maeve Ironhook Vane" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Captain</span>
          <span class="crew-bounty-badge">50,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Capt. Maeve "Ironhook" Vane</h3>
          <div class="crew-full-title">Navigation &amp; Fleet Strategy · Class of 2026</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Hook Prosthetic</span>
            <span class="crew-gear-chip">🗡️ Damascus Dagger</span>
            <span class="crew-gear-chip">🦜 White Cockatoo</span>
          </div>
          <div class="crew-full-quote">"A fair wind is a gift, but a violent storm is a syllabus. We take the storm every single time."</div>
          <p class="crew-full-bio">Solo-navigated the Maelstrom of Skulls and captured three merchant frigates before her morning tea. Renowned for ruthless tactical precision and absolute crew loyalty.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Naval Rating<b>98 / 100</b></div>
            <div class="crew-stat-cell">Boarding Skill<b>Master</b></div>
          </div>
        </div>
      </div>

      <!-- 2. Navigator Saki Chen -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-navigator-elder.jpg" alt="Navigator Saki Starwatcher Chen" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Astrogator</span>
          <span class="crew-bounty-badge">42,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Saki "Starwatcher" Chen</h3>
          <div class="crew-full-title">Celestial Cartography · Class of 2025</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🧭 Brass Sextant</span>
            <span class="crew-gear-chip">📜 Astral Chart</span>
            <span class="crew-gear-chip">👁️ Eyepatch of Depths</span>
          </div>
          <div class="crew-full-quote">"The stars never lie, even when the sea tries to drown you. Follow the needle or sleep in Davy Jones's locker."</div>
          <p class="crew-full-bio">Discovered four uncharted archipelagoes hidden beneath perpetual fog banks. Master of tidal anomalies, ocean currents, and reading constellations through hurricane clouds.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Navigation<b>100 / 100</b></div>
            <div class="crew-stat-cell">Storm Lore<b>Legendary</b></div>
          </div>
        </div>
      </div>

      <!-- 3. Gunner Jax Rivera -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-gunner-beanie.jpg" alt="Gunner Jax Quick-Cut Rivera" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Gunner</span>
          <span class="crew-bounty-badge">38,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Jax "Quick-Cut" Rivera</h3>
          <div class="crew-full-title">Artillery &amp; Infiltration · Class of 2026</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🔫 Twin Flintlocks</span>
            <span class="crew-gear-chip">⚔️ Curved Cutlass</span>
            <span class="crew-gear-chip">💣 Black Powder Bags</span>
          </div>
          <div class="crew-full-quote">"Aim low, light the fuse fast, and always swing into the enemy quarterdeck with a grin."</div>
          <p class="crew-full-bio">Top marksman of the Collegium Artillery Department. Holds the record for double-barrel chain-shot hits at 300 fathoms while swinging from the topgallant halyard.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Cannon Shot<b>99 / 100</b></div>
            <div class="crew-stat-cell">Demolitions<b>Expert</b></div>
          </div>
        </div>
      </div>

      <!-- 4. Quartermaster Tariq -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-corsair-spyglass.jpg" alt="Quartermaster Tariq The Hawk Al-Mansur" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Quartermaster</span>
          <span class="crew-bounty-badge">65,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Tariq "The Hawk" Al-Mansur</h3>
          <div class="crew-full-title">Treasure Appraisal &amp; Vaults · Class of 2024</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🔭 Gilded Spyglass</span>
            <span class="crew-gear-chip">⚖️ Doubloon Scale</span>
            <span class="crew-gear-chip">🧥 Crimson Coat</span>
          </div>
          <div class="crew-full-quote">"Every piece of eight tells a story. Some scream. It is my duty to count them all accurately."</div>
          <p class="crew-full-bio">Handled over 1,500,000 gold doubloons in Collegium plunder distributions. Can appraise a cursed ruby at fifty paces and negotiate with sirens without losing his soul.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty Appraisal<b>99 / 100</b></div>
            <div class="crew-stat-cell">Vault Defense<b>Supreme</b></div>
          </div>
        </div>
      </div>

      <!-- 5. First Mate Ren Kuroda -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-swordsman-bun.jpg" alt="First Mate Ren Shadowblade Kuroda" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Duelist</span>
          <span class="crew-bounty-badge">48,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Ren "Shadowblade" Kuroda</h3>
          <div class="crew-full-title">Vanguard Boarding &amp; Tactics · Class of 2025</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Katana Cutlass</span>
            <span class="crew-gear-chip">🥋 Boarding Garb</span>
            <span class="crew-gear-chip">🌅 Sunset Cloak</span>
          </div>
          <div class="crew-full-quote">"Quiet steel cuts deepest. When the fog rolls in, our enemies only hear the ocean."</div>
          <p class="crew-full-bio">Defeated thirty rival buccaneers in the annual Collegium Boarding Gauntlet without suffering a single scratch. Commands the vanguard assault line during night raids.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Swordsmanship<b>100 / 100</b></div>
            <div class="crew-stat-cell">Silent Boarding<b>Flawless</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Word On The Deck','Testimonials, Unfiltered','Collected at the evening meal. Transcribed by the parrot, who improved several sentences.')}
    <div class="grid-2">
      <div class="quote-card reveal" data-tilt>"I came for the navigation. I stayed because the Wi-Fi (the wind) never lags in a storm. Also the bed is a hammock and my back has never been better. 10/10 would drown again."<span class="who">— Nadia "North" Okafor, Class of 2026</span></div>
      <div class="quote-card reveal d1" data-tilt>"My parrot failed me on purpose. I appealed. The appeal went to the parrot. The parrot ate it. I still think he’s my favorite professor."<span class="who">— T. "Two-Fathoms" Marsh, Class of 2025</span></div>
      <div class="quote-card reveal d2" data-tilt>"POV: your capstone is an ocean and you’re solo. No cap. Well. A hat. The placement office (the Vault) even kept my CV in a waterproof tube. Thoughtful."<span class="who">— Isla Reyes, Class of 2024</span></div>
      <div class="quote-card reveal d3" data-tilt>"Moved here from a campus with an elevator. The elevator here is a rope and it works fine. The view, however, is the actual sea. I’m not going back. Nobody’s taking the island from me."<span class="who">— Finn O’Rourke, Class of 2027 (first-timer)</span></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    ${secHead('Societies','Clubs, But With More Rope','Join as many as you like. The Galley caps society feasts at one per month, for reasons.')}
    <div class="grid-4">
      <div class="card-life reveal" data-tilt><h3>The Midnight Ink Society</h3><p>Poetry and storm-chanting, by lantern light on the foredeck. Attendance changes you. The ink is non-reflective on purpose.</p></div>
      <div class="card-life reveal d1" data-tilt><h3>Knot &amp; Crumb</h3><p>The food society. Ties knots in bread. The bread is for eating; the knot is for philosophy. Mrs. Oat audits this one.</p></div>
      <div class="card-life reveal d2" data-tilt><h3>The Grog-Free Club</h3><p>Ironically our largest society. Meets during Grog-Free Week. Sells "hot tea" in goblets. Does not make eye contact.</p></div>
      <div class="card-life reveal d3" data-tilt><h3>Whale-ology &amp; Respect</h3><p>Studies whales from a distance of our choosing. Founded after the Incident. The Incident is a required reading now.</p></div>
    </div>
  </div>
</section>

${cta('Your Berth Is Waiting','Bunks are assigned by lottery, then by seniority, then by who asked nicer.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="island.html">See Where You’ll Sleep</a>')}
`;

const TREASURE_HAULED = `
${pageHero('Placements','Treasure Hauled','Where our crews end up — and what they bring back for the island.','Treasure Hauled')}
<section>
  <div class="wrap">
    <div class="stats-grid" style="margin-bottom:60px">
      <div class="stat reveal" data-tilt><div class="num">12,000</div><div class="lbl">Average bounty per crew member, per semester</div></div>
      <div class="stat reveal d1" data-tilt><div class="num">97%</div><div class="lbl">Of each class hauls something (at minimum, a story)</div></div>
      <div class="stat reveal d2" data-tilt><div class="num">41</div><div class="lbl">"Worthy of a Share of the Loot" grades in history</div></div>
      <div class="stat reveal d3" data-tilt><div class="num">1</div><div class="lbl">Legend currently serving as a lighthouse (voluntarily)</div></div>
    </div>
    ${secHead('Top Recruiting Crews','The Companies, As Listed','These crews send their own boats. We send ours. The bigger boat wins; usually theirs.')}
    <div class="grid-4">
      <div class="recruit reveal" data-tilt><div class="rname">East India Plunder Co.</div><div class="rline">Offers: 9-to-5 and a boat</div><div class="rstat">Hauled 31 crews last term</div></div>
      <div class="recruit reveal d1" data-tilt><div class="rname">Kraken Logistics</div><div class="rline">Offers: infinite tentacles, zero commute</div><div class="rstat">Hauled 24 crews last term</div></div>
      <div class="recruit reveal d2" data-tilt><div class="rname">Gull-Back Airlines</div><div class="rline">Offers: free gull lessons, window seat (the island)</div><div class="rstat">Hauled 19 crews last term</div></div>
      <div class="recruit reveal d3" data-tilt><div class="rname">The Royal Navy</div><div class="rline">Offers: they want our grudges. We declined. Repeatedly.</div><div class="rstat">Hauled 3 crews (reluctantly)</div></div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Hauls of the Semester','Notable Finds','As recorded by the Vault, with the Vault’s usual enthusiasm (none).')}
    <div class="grid-3">
      <div class="haul-card reveal" data-tilt><div class="hyear">2026 · Term 1</div><h3>The Glowing Stone, Explained</h3><p>A student sold the "suspiciously glowing stone" from the Treasure Fair. It glows because it is a lamp. The student keeps the money and the shame. Both are treasures.</p></div>
      <div class="haul-card reveal d1" data-tilt><div class="hyear">2026 · Term 1</div><h3>The Chart That Was Right</h3><p>Dr. Quill’s "promise" from 2024 turned out to be an island. It is now on the official chart, labelled with a footnote: <em>(we were right, once)</em>.</p></div>
      <div class="haul-card reveal d2" data-tilt><div class="hyear">2025 · Term 2</div><h3>The Goat, Retired</h3><p>The goat of Berth 2, The Broadside, has officially retired with a full pension and a bunk by the Galley’s fire. The pension is in hay. This is standard.</p></div>
    </div>
  </div>
</section>

${cta('Bring Something Back','That’s the whole placement policy. We’re just saying it early.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="legends.html">Where the Legends Went</a>')}
`;

const ISLAND_SVG = `
<svg viewBox="0 0 1024 804" class="island-svg" role="img" aria-label="Authentic treasure map of Ravenspire Blacktide Collegium">
  <defs>
    <filter id="spotGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Authentic Hand-Illustrated Pirate Parchment Map -->
  <image href="img/island-map.jpg" x="0" y="0" width="1024" height="804" preserveAspectRatio="none"/>

  <!-- Nautical Chart Trails -->
  <g class="chart-routes" stroke="#ffd873" stroke-width="2.5" stroke-dasharray="6 7" fill="none" opacity=".55">
    <path d="M 228 255 Q 340 220 512 235"/>
    <path d="M 512 235 Q 680 230 825 275"/>
    <path d="M 512 235 L 485 345 L 595 385"/>
    <path d="M 595 385 L 565 502 L 472 665 L 635 640 Q 730 680 835 700"/>
    <path d="M 228 255 Q 210 380 242 515 Q 350 600 472 665"/>
  </g>

  <!-- Interactive Landmarks From Map -->
  <!-- 1. Chart Vault -->
  <g class="imap-spot" data-spot="chartvault" transform="translate(512 215)" tabindex="0" role="button" aria-label="Chart Vault">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">📜 Chart Vault</text>
  </g>

  <!-- 2. Crow's Nest -->
  <g class="imap-spot" data-spot="crowsnest" transform="translate(228 240)" tabindex="0" role="button" aria-label="Crow's Nest">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🔭 Crow's Nest</text>
  </g>

  <!-- 3. Krakenarium -->
  <g class="imap-spot" data-spot="krakenarium" transform="translate(825 255)" tabindex="0" role="button" aria-label="Krakenarium">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🦑 Krakenarium</text>
  </g>

  <!-- 4. The Harbor -->
  <g class="imap-spot" data-spot="harbor" transform="translate(595 375)" tabindex="0" role="button" aria-label="The Harbor">
    <circle class="spot-pulse" r="18"/>
    <circle class="spot-halo" r="11"/>
    <circle class="spot-pin" r="6.5"/>
    <text class="spot-label" y="-17">⚓ Harbor</text>
  </g>

  <!-- 5. The Quarterdeck -->
  <g class="imap-spot" data-spot="quarterdeck" transform="translate(242 505)" tabindex="0" role="button" aria-label="The Quarterdeck">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">⚔️ Quarterdeck</text>
  </g>

  <!-- 6. Drydock -->
  <g class="imap-spot" data-spot="drydock" transform="translate(565 495)" tabindex="0" role="button" aria-label="Drydock">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🔨 Drydock</text>
  </g>

  <!-- 7. Crew Quarters -->
  <g class="imap-spot" data-spot="crewquarters" transform="translate(472 650)" tabindex="0" role="button" aria-label="Crew Quarters">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🛏️ Crew Quarters</text>
  </g>

  <!-- 8. The Galley -->
  <g class="imap-spot" data-spot="galley" transform="translate(635 630)" tabindex="0" role="button" aria-label="The Galley">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🍖 Galley</text>
  </g>

  <!-- 9. Treasure Vault -->
  <g class="imap-spot" data-spot="treasurevault" transform="translate(835 685)" tabindex="0" role="button" aria-label="Treasure Vault">
    <circle class="spot-pulse" r="18"/>
    <circle class="spot-halo" r="11"/>
    <circle class="spot-pin" r="6.5"/>
    <text class="spot-label" y="-17">💰 Treasure Vault</text>
  </g>

  <!-- 10. X Marks the Spot -->
  <g class="imap-spot spot-special" data-spot="xmark" transform="translate(485 345)" tabindex="0" role="button" aria-label="X Marks The Spot">
    <circle class="spot-pulse red-pulse" r="22"/>
    <circle class="spot-halo red-halo" r="14"/>
    <path d="M -9 -9 L 9 9 M 9 -9 L -9 9" stroke="#ff3838" stroke-width="4.5" stroke-linecap="round"/>
    <text class="spot-label" y="-18">❌ X Marks The Spot</text>
  </g>

  <!-- 11. King's Bounty Chest -->
  <g class="imap-spot spot-gold" data-spot="goldenchest" transform="translate(548 298)" tabindex="0" role="button" aria-label="King's Bounty Chest">
    <circle class="spot-pulse gold-pulse" r="18"/>
    <circle class="spot-halo gold-halo" r="11"/>
    <circle class="spot-pin" r="6" fill="#ffd873"/>
    <text class="spot-label" y="-16">👑 Bounty Chest</text>
  </g>

  <!-- 12. Siren's Boneyard -->
  <g class="imap-spot" data-spot="bonesgraveyard" transform="translate(828 525)" tabindex="0" role="button" aria-label="Siren's Boneyard">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="5.5"/>
    <text class="spot-label" y="-15">💀 Siren's Boneyard</text>
  </g>

  <!-- 13. Old Barnaby (Whale) -->
  <g class="imap-spot" data-spot="whale" transform="translate(502 455)" tabindex="0" role="button" aria-label="Old Barnaby">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="5.5"/>
    <text class="spot-label" y="-15">🐋 Old Barnaby</text>
  </g>

  <!-- 14. Ancient Sea Serpent -->
  <g class="imap-spot" data-spot="seaserpent" transform="translate(315 655)" tabindex="0" role="button" aria-label="Ancient Sea Serpent">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="5.5"/>
    <text class="spot-label" y="-15">🐉 Sea Serpent</text>
  </g>

  <!-- 15. Flagship Galleon -->
  <g class="imap-spot" data-spot="ghostship" transform="translate(342 220)" tabindex="0" role="button" aria-label="Flagship Galleon">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="5.5"/>
    <text class="spot-label" y="-15">⛵ Flagship Galleon</text>
  </g>

  <!-- 16. Compass Rose -->
  <g class="imap-spot" data-spot="compass" transform="translate(128 685)" tabindex="0" role="button" aria-label="Grand Compass Rose">
    <circle class="spot-pulse" r="18"/>
    <circle class="spot-halo" r="11"/>
    <circle class="spot-pin" r="6"/>
    <text class="spot-label" y="-16">🧭 Compass Rose</text>
  </g>

  <!-- 17. The Shrouded Atoll -->
  <g class="imap-spot" data-spot="darkisle" transform="translate(384 405)" tabindex="0" role="button" aria-label="The Shrouded Atoll">
    <circle class="spot-pulse" r="16"/>
    <circle class="spot-halo" r="10"/>
    <circle class="spot-pin" r="5.5"/>
    <text class="spot-label" y="-15">🏝️ Shrouded Atoll</text>
  </g>
</svg>`;

const ISLAND = `
${pageHero('Campus / Facilities','The Island','Official Nautical Chart of Ravenspire Blacktide Collegium. Tap any landmark pin to sail directly to that deck.','The Island')}
<section>
  <div class="wrap">
    <div class="map-stage-single reveal">
      ${ISLAND_SVG}
      <div class="map-beam" aria-hidden="true"></div>
      <div class="map-quick-hint">☠ Tap any glowing pin on the chart to sail directly to that collegiate deck ⛵</div>
    </div>

    <!-- Quick Landmark Filter / Navigation Chips -->
    <div class="map-chips-bar reveal">
      <span class="chips-title">☠ Chart By Landmark:</span>
      <button type="button" class="map-chip active" data-spot="chartvault">📜 Chart Vault</button>
      <button type="button" class="map-chip" data-spot="crowsnest">🔭 Crow's Nest</button>
      <button type="button" class="map-chip" data-spot="krakenarium">🦑 Krakenarium</button>
      <button type="button" class="map-chip" data-spot="harbor">⚓ Harbor</button>
      <button type="button" class="map-chip" data-spot="quarterdeck">⚔️ Quarterdeck</button>
      <button type="button" class="map-chip" data-spot="drydock">🔨 Drydock</button>
      <button type="button" class="map-chip" data-spot="crewquarters">🛏️ Crew Quarters</button>
      <button type="button" class="map-chip" data-spot="galley">🍖 Galley</button>
      <button type="button" class="map-chip" data-spot="treasurevault">💰 Treasure Vault</button>
      <button type="button" class="map-chip" data-spot="xmark">❌ X Marks The Spot</button>
      <button type="button" class="map-chip" data-spot="goldenchest">👑 Bounty Chest</button>
      <button type="button" class="map-chip" data-spot="bonesgraveyard">💀 Siren's Boneyard</button>
      <button type="button" class="map-chip" data-spot="whale">🐋 Old Barnaby</button>
      <button type="button" class="map-chip" data-spot="seaserpent">🐉 Sea Serpent</button>
      <button type="button" class="map-chip" data-spot="ghostship">⛵ Flagship Galleon</button>
      <button type="button" class="map-chip" data-spot="compass">🧭 Compass Rose</button>
      <button type="button" class="map-chip" data-spot="darkisle">🏝️ Shrouded Atoll</button>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Facilities','The Decks &amp; Landmarks, In Detail','Explore every key location marked on the official Ravenspire chart.')}
    <div class="grid-4">
      <div class="card-life reveal" data-tilt>
        <h3>The Chart Vault</h3>
        <p>Houses 12,000 maritime charts, secret naval routes, and stellar globes high in the red bluffs.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="chartvault">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d1" data-tilt>
        <h3>Crow’s Nest</h3>
        <p>360-degree lookout tower among palm canopies housing 37,000 nautical tomes and avian roosts.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="crowsnest">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d2" data-tilt>
        <h3>The Krakenarium</h3>
        <p>Isolated research atoll where marine biologists study kraken tentacles, leviathans, and sirens.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="krakenarium">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d3" data-tilt>
        <h3>The Harbor</h3>
        <p>The flagship basin holding 1,200 ships, trade markets, assemblies, and the weekly bounty count.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="harbor">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal" data-tilt>
        <h3>The Quarterdeck</h3>
        <p>Senior command post and heavy artillery proving grounds overlooking the Western Approaches.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="quarterdeck">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d1" data-tilt>
        <h3>The Drydock</h3>
        <p>Shipwrights, hull scrapers, and sailmakers restoring wooden galleons in the protected coral lock.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="drydock">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d2" data-tilt>
        <h3>Crew Quarters</h3>
        <p>1,200 swinging hammocks, sea chests, dueling rings, and deckhand quarters. Sleep with one eye open.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="crewquarters">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d3" data-tilt>
        <h3>The Galley</h3>
        <p>Salt beef, roasted boar, spiced citrus, and non-alcoholic grog served beneath the black flag.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="galley">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal" data-tilt>
        <h3>The Treasure Vault</h3>
        <p>Heavily fortified sea cave guarding 37,000 doubloons and priceless relics behind iron portcullises.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="treasurevault">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d1" data-tilt>
        <h3>X Marks The Spot</h3>
        <p>The founder's secret cache etched in blood-red ink. Only accessible under auspicious tides.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="xmark">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d2" data-tilt>
        <h3>The Bounty Chest</h3>
        <p>Spanish escudos and jewels available to any cadet who solves the collegiate navigational riddle.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="goldenchest">⚓ Chart on Map</button>
      </div>
      <div class="card-life reveal d3" data-tilt>
        <h3>Siren’s Boneyard</h3>
        <p>Bleached rib cages and skull warning totems reminding captains of the unforgiving shoals.</p>
        <button type="button" class="btn small ghost spot-jump-btn" data-chart-spot="bonesgraveyard">⚓ Chart on Map</button>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap" style="max-width:840px">
    ${secHead('Tide Tables','A Day on the Island','As observed by the night watch, who also keeps the light and the gossip.')}
    <div class="day-list">
      <div class="day-row reveal"><span class="dt">0500</span><span>The bell (the one that survives)</span></div>
      <div class="day-row reveal"><span class="dt">0600</span><span>Deck drill &amp; sea-state check at The Quarterdeck</span></div>
      <div class="day-row reveal"><span class="dt">0700</span><span>Grog-tea in the Galley (it is tea)</span></div>
      <div class="day-row reveal"><span class="dt">0900</span><span>Cartography lectures in the Chart Vault</span></div>
      <div class="day-row reveal"><span class="dt">1300</span><span>Rigging drill at the Drydock</span></div>
      <div class="day-row reveal"><span class="dt">1600</span><span>Krakenarium feeding &amp; marine dissection</span></div>
      <div class="day-row reveal"><span class="dt">1800</span><span>Bounty counts at The Harbor</span></div>
      <div class="day-row reveal"><span class="dt">2100</span><span>Night watch from Crow\'s Nest</span></div>
      <div class="day-row reveal"><span class="dt">0000</span><span>The grog bell — taps in Crew Quarters</span></div>
    </div>
  </div>
</section>

${cta('You Will Know the Island in a Week','Everyone does. The island teaches you. It is very good at this.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="wanted.html">Check the Wanted Board</a>')}
`;

const FEASTS = `
${pageHero('Events / Fests','Feasts &amp; Raids','All events sail regardless of weather. The weather has been informed.','Feasts &amp; Raids')}
<section>
  <div class="wrap">
    <div class="event-row reveal" data-tilt>
      <div class="e-date"><div class="d">21</div><div class="m">OCT</div></div>
      <div><h3>The Great Regatta</h3><p>Inter-ship racing, three laps, one cannon of confetti. Bring goggles.</p></div>
      <div class="e-tag">All Fleet</div>
    </div>
    <div class="event-row reveal d1" data-tilt>
      <div class="e-date"><div class="d">28</div><div class="m">OCT</div></div>
      <div><h3>The Midnight Ink Society</h3><p>Poetry and storm-chanting, told only by lantern light on the foredeck. Attendance counts for no Skill. Attendance changes you.</p></div>
      <div class="e-tag">Open to the Brave</div>
    </div>
    <div class="event-row reveal d2" data-tilt>
      <div class="e-date"><div class="d">05</div><div class="m">NOV</div></div>
      <div><h3>Treasure Fair &amp; Marketplace</h3><p>The Crew sells finds, maps, and one suspiciously glowing stone. No refunds on the stone.</p></div>
      <div class="e-tag">Open Port</div>
    </div>
    <div class="event-row reveal d3" data-tilt>
      <div class="e-date"><div class="d">12</div><div class="m">NOV</div></div>
      <div><h3>Full Moon Cannon Gala</h3><p>The Broadside’s showcase. Fireworks over the water, music from the deck, absolutely no fire (one fire).</p></div>
      <div class="e-tag">By Invitation</div>
    </div>
    <div class="event-row reveal d4" data-tilt>
      <div class="e-date"><div class="d">20</div><div class="m">NOV</div></div>
      <div><h3>Storm Week: Advanced Navigation</h3><p>Required practicum. We sail into the storm. The syllabus says "learn by doing," and it means it.</p></div>
      <div class="e-tag">Required</div>
    </div>
    <div class="event-row reveal d5" data-tilt>
      <div class="e-date"><div class="d">06</div><div class="m">DEC</div></div>
      <div><h3>The Great Treasure Count</h3><p>The fleet gathers, the Vault opens, the doubloons are counted, and the feasting begins.</p></div>
      <div class="e-tag">The Whole Fleet</div>
    </div>
    <div class="event-row reveal" data-tilt>
      <div class="e-date"><div class="d">19</div><div class="m">DEC</div></div>
      <div><h3>Graduation: The Trial of the Plank</h3><p>The class of the year steps off the bowsprit in a line. We catch them. Tradition says we catch them. We catch them.</p></div>
      <div class="e-tag">Cap &amp; Gown &amp; Goggles</div>
    </div>
    <div class="event-row reveal d1" data-tilt>
      <div class="e-date"><div class="d">06</div><div class="m">JAN</div></div>
      <div><h3>The Grog-Free Week</h3><p>Ironically our busiest week of the year. The Galley sells "hot tea" in goblets and does not make eye contact.</p></div>
      <div class="e-tag">A Tradition</div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#050f1e)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:-1.8deg">
        <img src="img/storm-sea-2.jpg" alt="Stormy sea with large waves" loading="lazy">
        <figcaption>The kind of Tuesday the Gala loves</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>A Note on Weather</h3>
        <p>Every feast on this page has been held in every kind of weather except one kind, which we have been unable to attract. We do not know what it is. We have sent letters.</p>
        <p>Should an event be cancelled by sea, it is rescheduled to "the next suitable chaos." The registrar keeps a chart. The chart is a map. The map is the sea. It works.</p>
        <span class="sig">— The Events Committee, a Committee of One Parrot</span>
      </div>
    </div>
  </div>
</section>

${cta('Mark Your Calender (The One Aboard)','All events open to enrolled crew, their parrots, and well-behaved goats.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="island.html">See Where It Happens</a>')}
`;

const DOUBLOONS = `
${pageHero('Fees / Scholarships','Gold Doubloons &amp; Bounties','What it costs, and what we’ll pay you to come. Both in gold. Naturally.','Gold Doubloons')}
<section>
  <div class="wrap">
    <div class="enlist-grid">
      <div>
        <div class="tuition reveal" style="margin-top:0">
          <h3>☠ Tuition &amp; Fees (per semester)</h3>
          <div class="trow"><span>Full Plunder (all Skills)</span><span class="dots"></span><span class="price">3,000 doubloons</span></div>
          <div class="trow"><span>Ship’s Pass (dormitory berth)</span><span class="dots"></span><span class="price">500 doubloons</span></div>
          <div class="trow"><span>Parrot Licence (incl. bird)</span><span class="dots"></span><span class="price">250 doubloons</span></div>
          <div class="trow"><span>Cannon Gala attendance</span><span class="dots"></span><span class="price">2 grogs</span></div>
          <div class="trow"><span>First year, if you find treasure</span><span class="dots"></span><span class="price">FREE, matey</span></div>
          <p class="fine">* Payments in gold, silver, or acceptable gems. No IOUs from people called "Bill." Ever. Not again.</p>
        </div>
        <div class="parchment reveal d2" style="margin-top:34px">
          <h3>Ways to Pay</h3>
          <p>Gold, silver, gems, or one (1) acceptable goat. The goat is appraised by Brother Anchor, who appraises everything with the same face.</p>
          <p>The Quartermaster accepts payment at the Vault, at the Harbor, and — in emergencies — by thrown bottle, provided the bottle lands within 200 yards of the counting table.</p>
          <span class="sig">— Brother Anchor, Keeper of the Vault</span>
        </div>
      </div>
      <div>
        ${secHead('Bounties','Scholarships, As We Call Them','We don’t "award aid." We put a price on your excellence and pay it.')}
        <div class="grid-1">
          <div class="bounty reveal" data-tilt><span class="ptype">Full Bounty</span><h3>The Mermaid Merit</h3><p>For the crew’s top navigator each year. Covers Full Plunder, Ship’s Pass, and the parrot. Named after the mermaid who paid off the college in 1703 (in shells, which we no longer accept, but we remember).</p></div>
          <div class="bounty reveal d1" data-tilt><span class="ptype">Half Bounty</span><h3>The Storm-Rider Grant</h3><p>For any crew member who completes Storm Week without throwing up. Half of tuition, returned at the Treasure Count. Throwing up disqualifies you. It is that honest.</p></div>
          <div class="bounty reveal d2" data-tilt><span class="ptype">10% Per Clap</span><h3>The Parrot Partnership</h3><p>Your parrot grades your fees. Every clap is 10% off. Professor Feather’s birds average four claps a term, which is how Feather’s students always get paid. Coincidence? The parrot denies it.</p></div>
          <div class="bounty reveal d3" data-tilt><span class="ptype">Grog-Free Waiver</span><h3>The Grog-Free Waiver</h3><p>Survive Grog-Free Week sober, on deck, in the wind. The entire Ship’s Pass, waived. The Galley watches the whole week. The Galley is not kind.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:1.2deg">
        <img src="img/doubloons.webp" alt="A pile of gold doubloons" loading="lazy">
        <figcaption>The endowment. Counted nightly. It’s always more. Nobody knows why.</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>Refunds, A Policy</h3>
        <p>We do not do refunds. We do do treasure.</p>
        <p>Any crew member whose first genuine find is worth more than their total tuition has the difference returned, minus one coin, which goes to Mrs. Oat for the kettle.</p>
        <p>This has happened 214 times. The 215th is expected any tide.</p>
        <span class="sig">— The Board of Captains, Financial Committee</span>
      </div>
    </div>
  </div>
</section>

${cta('The Doubloons Are Shiny. So Is the Sea.','Join before the tide turns (it turns when it wants, and it wants often).',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="raven.html">Ask the Raven Anything</a>')}
`;

const LEGENDS = `
${pageHero('Alumni &amp; Living Legends','Legends of the Seven Seas','Every graduate becomes a legend. We’ve kept the receipts. The receipts are written in gold and salt.','Legends')}
<section>
  <div class="wrap">
    <div class="crew-full-grid">
      <!-- 1. Fleetmaster Crane -->
      <div class="crew-full-card reveal" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/captain-crane.jpg" alt="Fleetmaster Aldric Grimtide Crane" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">High Admiral</span>
          <span class="crew-bounty-badge">100,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Fleetmaster Aldric Crane</h3>
          <div class="crew-full-title">Living Legend &amp; Dean · Class of 1654</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">👑 Pirate Hat</span>
            <span class="crew-gear-chip">🪝 Golden Hook</span>
            <span class="crew-gear-chip">🦜 Scarlet Macaw</span>
          </div>
          <div class="crew-full-quote">"Steers the college and, on Mondays, the entire fleet. Has never been lost. Once argued with a current and won."</div>
          <p class="crew-full-bio">Founding father of the Ravenspire Blacktide Collegium. Still holds the fleet record for sailing through three simultaneous typhoons without spilling his tea.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>100,000 DBL</b></div>
            <div class="crew-stat-cell">Status<b>Immortal Dean</b></div>
          </div>
        </div>
      </div>

      <!-- 2. Captain Maeve -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-captain-red.jpg" alt="Grand Captain Maeve Ironhook Vane" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Pirate Lord</span>
          <span class="crew-bounty-badge">85,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Capt. Maeve "Ironhook" Vane</h3>
          <div class="crew-full-title">Scourge of the Crimson Reach · Class of 1674</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Dual Boarding Blades</span>
            <span class="crew-gear-chip">🗡️ Hook Prosthetic</span>
            <span class="crew-gear-chip">🦜 War Bird</span>
          </div>
          <div class="crew-full-quote">"Captured twenty imperial fortresses in a single hurricane season. The sea bends to those who refuse to flinch."</div>
          <p class="crew-full-bio">Founded the Tactical Boarding Guild. Her captured silver fleet bell now rings out the morning bell at the Great Hall.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>85,000 DBL</b></div>
            <div class="crew-stat-cell">Flagship<b>The Crimson Tide</b></div>
          </div>
        </div>
      </div>

      <!-- 3. Astrogator Saki Chen -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-navigator-elder.jpg" alt="Elder Astrogator Saki Starwatcher Chen" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Grand Astrogator</span>
          <span class="crew-bounty-badge">70,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Saki "Starwatcher" Chen</h3>
          <div class="crew-full-title">Keeper of the Astral Meridian · Class of 1662</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🧭 Astral Sextant</span>
            <span class="crew-gear-chip">📜 Uncharted Maps</span>
            <span class="crew-gear-chip">👁️ Abyssal Sight</span>
          </div>
          <div class="crew-full-quote">"Crossed the Great Abyssal Trench with no compass, guided only by starlight and bioluminescent tides."</div>
          <p class="crew-full-bio">Now runs the Cartographic Guild of Buried Alive. His maps still predict shifting volcanic islands three weeks before they breach the surface.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>70,000 DBL</b></div>
            <div class="crew-stat-cell">Flagship<b>The Wandering Star</b></div>
          </div>
        </div>
      </div>

      <!-- 4. Jax Rivera -->
      <div class="crew-full-card reveal d1" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-gunner-beanie.jpg" alt="Commander Jax Quick-Cut Rivera" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Bombardier</span>
          <span class="crew-bounty-badge">68,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Jax "Quick-Cut" Rivera</h3>
          <div class="crew-full-title">Master Siegemaster · Class of 1681</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">💣 Cursed Cannonballs</span>
            <span class="crew-gear-chip">🔫 Double-Barrels</span>
            <span class="crew-gear-chip">⚔️ Storm Cutlass</span>
          </div>
          <div class="crew-full-quote">"Invented the explosive chain-shot technique that breached the Sunken Citadel in fifteen minutes flat."</div>
          <p class="crew-full-bio">Holds thirty-six letters of marque from rival monarchs, framed as shooting targets in the galley. Master of naval artillery.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>68,000 DBL</b></div>
            <div class="crew-stat-cell">Flagship<b>The Thunder's Echo</b></div>
          </div>
        </div>
      </div>

      <!-- 5. Tariq Al-Mansur -->
      <div class="crew-full-card reveal d2" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-corsair-spyglass.jpg" alt="Lord Quartermaster Tariq Al-Mansur" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Lord Chancellor</span>
          <span class="crew-bounty-badge">95,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Tariq "The Hawk" Al-Mansur</h3>
          <div class="crew-full-title">Chancellor of the Iron Vault · Class of 1668</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">🔭 Gilded Spyglass</span>
            <span class="crew-gear-chip">🪙 Ancient Coins</span>
            <span class="crew-gear-chip">🧥 Imperial Velvet</span>
          </div>
          <div class="crew-full-quote">"Established the Sovereign Doubloon Exchange that funded the Collegium for over three centuries."</div>
          <p class="crew-full-bio">Built the secret underwater hoard caverns that safeguard the island's legendary treasury against armada sieges.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>95,000 DBL</b></div>
            <div class="crew-stat-cell">Flagship<b>The Golden Argosy</b></div>
          </div>
        </div>
      </div>

      <!-- 6. Ren Kuroda -->
      <div class="crew-full-card reveal d3" data-tilt>
        <div class="crew-full-img-wrap">
          <img class="crew-full-img" src="img/crew-swordsman-bun.jpg" alt="Lord Ren Shadowblade Kuroda" loading="lazy">
          <div class="crew-full-scrim"></div>
          <span class="crew-full-role-tag">Grand Duelist</span>
          <span class="crew-bounty-badge">75,000 DBL</span>
        </div>
        <div class="crew-full-info">
          <h3>Ren "Shadowblade" Kuroda</h3>
          <div class="crew-full-title">Master of the Midnight Waves · Class of 1679</div>
          <div class="crew-full-gear">
            <span class="crew-gear-chip">⚔️ Damascus Katana</span>
            <span class="crew-gear-chip">🥋 Topknot Ribbons</span>
            <span class="crew-gear-chip">🌅 Crimson Sunset</span>
          </div>
          <div class="crew-full-quote">"Legend holds he once held the outer harbor against an entire skeleton raid with only two swords and the setting sun."</div>
          <p class="crew-full-bio">Now trains the elite vanguard duelists of the Collegium. Never drawn a blade without settling the conflict in three moves.</p>
          <div class="crew-stats-bar">
            <div class="crew-stat-cell">Bounty on Record<b>75,000 DBL</b></div>
            <div class="crew-stat-cell">Flagship<b>The Sovereign Eclipse</b></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    <div class="duo">
      <div class="parchment reveal">
        <h3>The Mentorship Law</h3>
        <p>Every Legend mentors two first-timers per year. It is the law. It has never once been skipped, and it has been skipped exactly once, by a legend who was at sea, which counts as excused.</p>
        <p>Mentorship takes the form of a long walk, a shorter lecture, and a demonstration of the one knot the first-timer keeps getting wrong. The demonstration is always in slow motion. The knot is always a figure-eight.</p>
        <p>The parrot is the exception. He does not mentor. He grades.</p>
        <span class="sig">— The Legends’ Table, by lantern</span>
      </div>
      <div class="reveal d2" style="display:flex;flex-direction:column;gap:22px">
        <div class="quote-card" data-tilt>"They taught me the knot. The knot taught me the rest. Now I teach two first-timers the knot. It goes around forever, like the sea."<span class="who">— A Legend, Class of 1742</span></div>
        <div class="quote-card" data-tilt>"Applied to the mentorship program. My mentor is a lighthouse. He says little. He says nothing. I have never been better led."<span class="who">— A first-timer, Class of 2026</span></div>
      </div>
    </div>
  </div>
</section>

${cta('Every Legend Was a First-Timer','Yours to become. The table has a seat. The seat is slightly damp.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="treasure-hauled.html">Where the Legends Land</a>')}
`;

const WANTED = `
${pageHero('Notice Board','The Wanted Board','Everything the college says, pinned and slightly crooked. Claim rewards before Thursday.','The Wanted Board')}
<section>
  <div class="wrap">
    <div class="wanted-board-wall reveal">
      <div class="grid-posters">
        <div class="poster reveal" data-tilt style="--rot:-2deg"><span class="ptype">Bounty</span><h3>Doubloons Found</h3><div class="reward">Reward: 2,400 doubloons</div><p>Found in the library, under a chart of "somewhere lovely". Claim before Thursday or forfeit to the college. They are not yours if they are not claimed.</p><div class="pdate"><span>The Board</span><span>every tide</span></div></div>
        <div class="poster reveal d1" data-tilt style="--rot:1.6deg"><span class="ptype">Raid</span><h3>Storm Week Drills</h3><div class="reward">Bring a towel + fear of whales</div><p>Advanced Navigation practicum. We sail into the storm. The syllabus means it. Whales are for Whale-ology, and only from a distance.</p><div class="pdate"><span>Dept. of Navigation</span><span>Nov 20</span></div></div>
        <div class="poster reveal d2" data-tilt style="--rot:-1.4deg"><span class="ptype">Notice</span><h3>New Bird on Faculty</h3><div class="reward">Reward: none. It’s a parrot.</div><p>Professor Feather III now grades. Do not feed him forms. Do not feed him anything but seeds. He is not a fan of feedback.</p><div class="pdate"><span>The Aviary</span><span>this tide</span></div></div>
        <div class="poster reveal d3" data-tilt style="--rot:2deg"><span class="ptype">Feast</span><h3>Full Moon Cannon Gala</h3><div class="reward">Dress: whatever survived the last fire</div><p>Fireworks over the water, music from the deck, absolutely no fire (one fire). The one fire is decorative. Do not ask which fire.</p><div class="pdate"><span>The Broadside</span><span>Nov 12</span></div></div>
        <div class="poster reveal d4" data-tilt style="--rot:-1.8deg"><span class="ptype">Wanted</span><h3>One (1) Lost Grog</h3><div class="reward">Reward: eternal gratitude (the Galley’s)</div><p>Last seen near the Galley, smelling of rum and ambition. Answer to "it’s not yours, it’s everyone’s." Return before the next bell.</p><div class="pdate"><span>The Galley</span><span>urgently</span></div></div>
        <div class="poster reveal d5" data-tilt style="--rot:1.2deg"><span class="ptype">Raid</span><h3>The Great Regatta</h3><div class="reward">Bets prohibited. Bragging encouraged.</div><p>Three laps, one cannon of confetti, goggles mandatory. Last year’s winner will be in attendance and will bring the cup. Do not touch the cup.</p><div class="pdate"><span>All Fleet</span><span>Oct 21</span></div></div>
        <div class="poster reveal" data-tilt style="--rot:-1.6deg"><span class="ptype">Feast</span><h3>Treasure Fair</h3><div class="reward">Bring finds. Leave with better ones.</div><p>The Crew sells, the Vault audits, the glowing stone returns. This is now a running joke with a buyer base.</p><div class="pdate"><span>Buried Alive</span><span>Nov 5</span></div></div>
        <div class="poster reveal d1" data-tilt style="--rot:1.8deg"><span class="ptype">Notice</span><h3>Tide Tables Updated</h3><div class="reward">Reward: none. It’s the law.</div><p>The old tables are now art. They hang in the Great Hall and are framed in rope. The sea has been notified of the rebrand.</p><div class="pdate"><span>The Board</span><span>this tide</span></div></div>
      </div>
    </div>
    <p class="center reveal" style="margin-top:34px;color:#8fa5b5;font-size:.95rem">Posting rules: faculty may pin. Crew may add stickers. Nobody may unpin. The pins are older than most of us.</p>
  </div>
</section>

${cta('Saw Something? Say Something. Pin It.','The Board hears everything. The Board is everywhere. It is a board.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="feasts.html">See What’s Coming</a>')}
`;

const RAVEN = `
${pageHero('Contact','Send a Raven','Four ways to reach us. Ravens preferred. Gulls accepted if it’s urgent.','Send a Raven')}
<section>
  <div class="wrap">
    <div class="contact-grid">
      <div class="reveal">
        <h3 style="font-size:1.7rem;color:var(--gold-bright);margin-bottom:10px">How to Reach Us</h3>
        <p style="color:#b9c9d6">Four approved methods, in descending order of romance.</p>
        <ul class="signal-list">
          <li><span class="k">By Raven</span> The fleet’s own. Fastest and most dignified. Do not write in red ink; ravens consider it rude and have opinions.</li>
          <li><span class="k">By Gull</span> Our carrier gull, Envelope. Do not feed him forms. He loses them in the current. The current is not his fault.</li>
          <li><span class="k">By Bottle</span> Any message in a corked bottle thrown at the fleet within 200 yards counts as sent. The 200 yards is a suggestion.</li>
          <li><span class="k">By Lantern</span> Three short flashes at dusk means "hello." Five means "the coffee is gone" and is urgent.</li>
        </ul>
      </div>
      <form class="form-plank reveal d1" data-signal novalidate>
        <h3>Cast Off a Message</h3>
        <p class="sub">The Quartermaster replies within one tide, weather permitting.</p>
        <div class="field"><label for="fName">Your name</label><input id="fName" type="text" placeholder="e.g. Will Turner, Jr."></div>
        <div class="field"><label for="fParrot">Your raven’s (or parrot’s) name</label><input id="fParrot" type="text" placeholder="e.g. Professor Feather II"></div>
        <div class="field"><label for="fMsg">Your message</label><textarea id="fMsg" placeholder="Dear crew, I would like to enroll and I have already buried a small treasure..."></textarea></div>
        <button class="btn" type="submit" style="width:100%">Send the Raven ☠</button>
      </form>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#050f1e)">
  <div class="wrap">
    ${secHead('The Fixed Route','Find Us on the Chart','The fleet’s route, as drawn by Dr. Quill. The islands are real. The route is, in places, a promise.')}
    <div class="route-map reveal">
      <svg viewBox="0 0 900 460" role="img" aria-label="A sea chart showing the fleet route between four ports">
        <rect x="0" y="0" width="900" height="460" rx="14" fill="#e6d3a3"/>
        <rect x="0" y="0" width="900" height="460" rx="14" fill="none" stroke="#b98a3f" stroke-width="6"/>
        <g fill="none" stroke="#b98a3f" stroke-width="1.4" opacity=".5">
          <path d="M0 80 Q150 60 300 85 T600 80 T900 90"/>
          <path d="M0 180 Q200 160 400 185 T900 175"/>
          <path d="M0 290 Q180 270 380 295 T900 285"/>
          <path d="M0 395 Q220 375 440 400 T900 390"/>
        </g>
        <g fill="#8a6a3f" opacity=".55">
          <path d="M90 120 q30 -26 78 -14 q22 10 -4 22 q-48 16 -74 -8z"/>
          <path d="M700 90 q40 -18 74 4 q14 20 -16 22 q-44 4 -58 -26z"/>
          <path d="M640 350 q36 -24 84 -8 q24 12 -6 26 q-56 18 -78 -18z"/>
        </g>
        <path class="route-line" d="M150 150 C 300 210 380 130 520 190 C 620 235 640 250 730 320" fill="none" stroke="#9e3a2c" stroke-width="3.4"/>
        <g font-family="Georgia,serif">
          <g>
            <circle cx="150" cy="150" r="8" fill="#3a2410" stroke="#e6b34a" stroke-width="3"/>
            <text x="164" y="142" font-size="20" fill="#5a3413" font-weight="bold">Port Royal</text>
            <text x="164" y="162" font-size="12" fill="#6b4423">every third tide, Tuesday</text>
          </g>
          <g>
            <circle cx="330" cy="182" r="6" fill="#3a2410" stroke="#e6b34a" stroke-width="2.6"/>
            <text x="300" y="205" font-size="14" fill="#6b4423">Kraken’s Rest</text>
          </g>
          <g>
            <circle cx="520" cy="190" r="8" fill="#3a2410" stroke="#e6b34a" stroke-width="3"/>
            <text x="508" y="168" font-size="20" fill="#5a3413" font-weight="bold">The Mists</text>
            <text x="508" y="212" font-size="12" fill="#6b4423">the fog lifts for exams (there are none)</text>
          </g>
          <g>
            <circle cx="730" cy="320" r="8" fill="#3a2410" stroke="#e6b34a" stroke-width="3"/>
            <text x="700" y="300" font-size="20" fill="#5a3413" font-weight="bold">Gull-Back</text>
            <text x="700" y="345" font-size="12" fill="#6b4423">Harbor. Envelope works here.</text>
          </g>
        </g>
        <g stroke="#9e3a2c" stroke-width="5" stroke-linecap="round">
          <g class="xmark"><line x1="236" y1="118" x2="262" y2="144"/><line x1="262" y1="118" x2="236" y2="144"/></g>
          <g class="xmark" style="animation-delay:.5s"><line x1="614" y1="236" x2="640" y2="262"/><line x1="640" y1="236" x2="614" y2="262"/></g>
        </g>
        <text x="249" y="170" font-size="12" fill="#9e3a2c" font-family="Georgia,serif">the X that moved</text>
        <text x="600" y="284" font-size="12" fill="#9e3a2c" font-family="Georgia,serif">promised loot</text>
        <g transform="translate(810 400)">
          <circle r="34" fill="none" stroke="#5a3413" stroke-width="2"/>
          <path d="M0 -30 L6 -6 L30 0 L6 6 L0 30 L-6 6 L-30 0 L-6 -6 Z" fill="#9e3a2c"/>
          <circle r="4" fill="#3a2410"/>
          <text y="-40" text-anchor="middle" font-size="14" fill="#5a3413" font-weight="bold" font-family="Georgia,serif">N</text>
        </g>
        <text x="26" y="440" font-size="13" fill="#6b4423" font-style="italic" font-family="Georgia,serif">Chart No. 7 — "the honest one" — Dept. of Cartography, 2026</text>
      </svg>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:1.6deg">
        <img src="img/lighthouse-night.jpg" alt="Lighthouse on a dark sea at night" loading="lazy">
        <figcaption>Where the night watch waits for your raven</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>Response Times, By Method</h3>
        <p><strong>By raven:</strong> one tide. Messages are read aloud at the evening meal, which is the college’s only real broadcast network.</p>
        <p><strong>By gull:</strong> whenever Envelope feels it. Envelope has carried 1,204 messages and lost 3. The 3 were all from people named Gary.</p>
        <p><strong>By bottle:</strong> one tide, plus the walk back to shore for you. We keep the bottles. They become art. You’re welcome.</p>
        <p><strong>By the form above:</strong> the fastest. The Quartermaster reads it on a brass tablet, which is also the only screen on the island.</p>
        <span class="sig">— Night Watch, keeping the light</span>
      </div>
    </div>
  </div>
</section>

${cta('Don’t Just Read the Chart. Set Sail.','The fleet is patient. Your doubloons will not be. Enlist while the wind is good.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="scroll.html">Read The Scroll First</a>')}
`;

const QUARTERS = `
${pageHero('Student Portal','Shipman’s Quarters','Fees, timetables, bunks, and the portal. One key. No, two. One key and a parrot’s name.','Quarters')}
<section>
  <div class="wrap login-scroll-wrap">
    <div class="ancient-scroll-container reveal">
      <div class="scroll-roller top">
        <div class="scroll-finial"></div>
        <div class="scroll-finial"></div>
      </div>

      <div class="ancient-scroll-body">
        <div class="scroll-curled-edge"></div>

        <div style="text-align:center;margin-bottom:20px">
          <svg viewBox="0 0 100 100" style="width:64px;margin:0 auto 8px" aria-hidden="true"><use href="#skullMark" color="#8e2f1e"/></svg>
          <div style="font-family:'Pirata One',cursive;font-size:1.1rem;letter-spacing:0.18em;color:#8a4212;text-transform:uppercase">
            ⚓ Official Cadet Registry · Berth Access ⚓
          </div>
          <h2 class="scroll-decree-title" style="font-size:2.2rem;margin:4px 0">Board the Quarters</h2>
          <p class="scroll-decree-sub" style="font-size:0.96rem">
            Berth number in, parrot’s secret whisper up, in you go.
          </p>
        </div>

        <form data-quarters novalidate>
          <div class="field"><label for="qName">Cadet Name</label><input id="qName" type="text" placeholder="e.g. Nadia Okafor"></div>
          <div class="field"><label for="qId">Berth Number (Student ID)</label><input id="qId" type="text" placeholder="e.g. 113"></div>
          <div class="field"><label for="qPass">Passphrase (Your Parrot’s Name)</label><input id="qPass" type="password" placeholder="whisper it softly"></div>
          <div class="field" style="display:flex;align-items:center;gap:10px">
            <label for="qRem" style="margin:0;letter-spacing:.06em;color:#4a2b10">Remember me on this deck</label>
            <input id="qRem" type="checkbox" style="width:auto">
          </div>
          <button class="btn" type="submit" style="width:100%;font-size:1.1rem;padding:14px 20px">Board the Quarters ⚓</button>
        </form>

        <div style="margin-top:20px;font-size:.9rem;color:#5a3716;text-align:center;border-top:1px dashed rgba(140,80,20,0.35);padding-top:14px">
          Lost your passphrase? <a href="raven.html" style="color:#8e2f1e;font-weight:700">Send a raven</a> to the Quartermaster.<br>
          Not enrolled yet? <a href="enlist.html" style="color:#8e2f1e;font-weight:700">Join the Crew</a> first.
        </div>

        <div class="scroll-curled-edge bottom"></div>
      </div>

      <div class="scroll-roller bottom">
        <div class="scroll-finial"></div>
        <div class="scroll-finial"></div>
      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Inside the Quarters','What You’ll Find In There','The portal is a brass tablet. It is faster than it looks and twice as smug.')}
    <div class="grid-4">
      <div class="card-life reveal" data-tilt><h3>Tide Tables</h3><p>Your timetable, printed on water-resistant paper. "Lecture, 0900, foredeck" is a real line in your real life.</p></div>
      <div class="card-life reveal d1" data-tilt><h3>Fees &amp; Bounties</h3><p>What you owe, what you’ve won, and the running total of the one coin Mrs. Oat has collected from you. (It is 0.)</p></div>
      <div class="card-life reveal d2" data-tilt><h3>Bunk &amp; Provisions</h3><p>Your berth, your hammock status, and the Galley’s menu for the tide. Complaints are read aloud at the evening meal.</p></div>
      <div class="card-life reveal d3" data-tilt><h3>Grade Ledger</h3><p>Your grades, as recorded by the parrot. Appeals go to the parrot. The parrot has a policy on appeals. The policy is a ruff.</p></div>
    </div>
  </div>
</section>

${cta('The Door Is Open. The Parrot Is Watching.','Log in, sort your tide, and get back to the sea.',
  '<a class="btn" href="index.html">Back to The Harbor</a><a class="btn ghost" href="doubloons.html">Check Your Doubloons</a>')}
`;

const ENLIST = `
${pageHero('Admissions','Join the Crew','Four steps. No forms longer than a rope. We test nerve, not marks.','Join the Crew')}
<section>
  <div class="wrap">
    <div class="enlist-grid">
      <div>
        <ol class="steps">
          <li class="reveal"><h3>Fire the Signal</h3><p>Send a raven (or fill the form on the <a href="raven.html">Send a Raven</a> page). Tell us your name, your parrot’s name, and one thing you’d steal if you could.</p></li>
          <li class="reveal d1"><h3>Prove Your Nerve</h3><p>A short interview on the bowsprit, at dusk, in a moderate breeze. We’re looking for enthusiasm, not answers.</p></li>
          <li class="reveal d2"><h3>Pay Your Dues</h3><p>Tuition in doubloons, paid at the Quartermaster. <a href="doubloons.html">Bounties available</a> if your excellence is loud enough. It usually is.</p></li>
          <li class="reveal d3"><h3>Walk the Plank</h3><p>Ceremonial only. You step off the bowsprit, we catch you. Then you’re one of The Crew. There is no undo button at sea.</p></li>
        </ol>
        <div class="tuition reveal d2">
          <h3>☠ The Admission Tide</h3>
          <div class="trow"><span>Signals accepted by</span><span class="dots"></span><span class="price">Spring tide, Nov 1</span></div>
          <div class="trow"><span>Bowsprit interviews</span><span class="dots"></span><span class="price">Nov – Dec</span></div>
          <div class="trow"><span>The Plank ceremony</span><span class="dots"></span><span class="price">Jan 12</span></div>
          <div class="trow"><span>First voyage (term begins)</span><span class="dots"></span><span class="price">Jan 20</span></div>
          <p class="fine">* The tide does not wait for the undecided. Neither does the parrot, who has already started naming your bunk.</p>
        </div>
      </div>
      <div class="chest-zone reveal d1">
        <div class="chest" id="chest">
          <div class="chest-inner">
            <div class="chest-glow"></div>
            <div class="chest-spill" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <div class="chest-base-top"></div>
            <div class="chest-base"></div>
            <div class="chest-lid"><div class="lid-top"></div><div class="lid-front"></div></div>
            <div class="chest-lock"></div>
          </div>
        </div>
        <div class="chest-hint" id="chestHint">☠ Click the chest — your future is in there ☠</div>
        <figure class="frame wide" data-tilt style="--rot:1.2deg">
          <img src="img/doubloons.webp" alt="A pile of gold doubloons" loading="lazy">
          <figcaption>What you’ll be paying in (or finding in the first term)</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Frequently Asked','Questions From the Shore','As answered by the Quartermaster, with the Quartermaster’s usual enthusiasm.')}
    <div class="faq">
      <details class="reveal"><summary>Can I pay in gems instead of doubloons?</summary><div class="a">Yes, if they are real, and yes, if they are large. The Quartermaster assesses all gems personally, with a loupe and a "hmm." A "hmm" is a passing grade. A "hmm-hmm" is a discount.</div></details>
      <details class="reveal d1"><summary>Is there Wi-Fi?</summary><div class="a">The wind is our Wi-Fi. It is always on, occasionally strong, and it cuts out for a few days around the equator. The Crew have never once complained. They were born online.</div></details>
      <details class="reveal d2"><summary>What if I can’t swim?</summary><div class="a">We will throw you a rope and your dignity. Both are reusable. First-timer training includes "The Sea Is Not Personal," a four-lesson course that has never once needed a fifth.</div></details>
      <details class="reveal d3"><summary>What is the refund policy?</summary><div class="a">We do not do refunds. We do do treasure. Any crew member whose first genuine find exceeds their total tuition has the difference returned, minus one coin, which goes to Mrs. Oat for the kettle.</div></details>
      <details class="reveal d4"><summary>Do I need my own parrot?</summary><div class="a">No — the Parrot Licence includes the bird, and the bird is excellent. Yes, we have a waiting list of crew who wanted "just one." The waiting list is two parrots deep.</div></details>
    </div>
  </div>
</section>

${cta('The Sea Is Patient. Don’t Be.','Admission opens with the spring tide. The tide does not wait for the undecided.',
  '<a class="btn" href="raven.html">Fire the Signal Now</a><a class="btn ghost" href="skills.html">Browse the Skills First</a>')}
`;

const FORGE = `
${pageHero('Built by Pirates','The Forge','No templates. No land. This website was forged on the lower deck, in tar, by the Pirate Web Crew.','The Forge')}
<section>
  <div class="wrap">
    ${secHead('The Crew of the Forge','Who Made This Thing','Every role, every nail, every knot. Names as recorded by the parrot, who is the only one who remembers.')}
    <div class="grid-3">
      <div class="card-life reveal" data-tilt><h3>The Planksmiths</h3><p>Structure (the HTML). They nailed it. The nails are gone now; that's tradition. You can still hear them in the load times.</p></div>
      <div class="card-life reveal d1" data-tilt><h3>The Knot Crew</h3><p>Styling (the CSS). Every rope is tied by hand. The drape is intentional. So is the crookedness. Especially the crookedness.</p></div>
      <div class="card-life reveal d2" data-tilt><h3>The Fuse Gang</h3><p>Motion (the JavaScript). They light it and run. The runs are always fine. Probably. We trust them. We have to.</p></div>
      <div class="card-life reveal d3" data-tilt><h3>The Cartographers</h3><p>Content &amp; charts. They wrote everything. The X marks the places still being written, and one place that is a promise.</p></div>
      <div class="card-life reveal d4" data-tilt><h3>Professor Feather</h3><p>Quality assurance. He clapped 214 times during testing. Zero claps are reserved. This is the only grading system that matters.</p></div>
      <div class="card-life reveal d5" data-tilt><h3>The Night Watch</h3><p>Deployment. They ship at dusk, when the sea is honest and the bugs are asleep. The lighthouse doubles as a progress bar.</p></div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    <div class="duo">
      <div class="parchment reveal">
        <h3>The Manifesto of the Pirate Web</h3>
        <p><strong>I.</strong> No template. A template is a map of somewhere else.</p>
        <p><strong>II.</strong> No land. The website sails with the page.</p>
        <p><strong>III.</strong> If the wind changes, so does the design. This is not a bug.</p>
        <p><strong>IV.</strong> The parrot is always right. He reviewed the code.</p>
        <p><strong>V.</strong> Deploy at dusk. The bugs sleep at dusk.</p>
        <span class="sig">— Ratified on the main mast, signed in tar</span>
      </div>
      <div class="fleet-panel reveal d2">
        <h3>Tools of the Trade</h3>
        <ul class="fleet-list">
          <li><span>☠</span> Tar — structure adhesive, font, and mood</li>
          <li><span>☠</span> Rope — all the borders, most of the layout</li>
          <li><span>☠</span> One (1) acceptable goat — testing</li>
          <li><span>☠</span> A brass tablet — the only screen on the island</li>
          <li><span>☠</span> Strong opinions — about rope, specifically</li>
          <li><span>☠</span> The sea — staging environment, forever</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap" style="text-align:center;max-width:720px;margin:0 auto">
    <div class="parchment reveal" style="text-align:left">
      <h3>Shipwright's Mark</h3>
      <p>Assembled by hand on the lower deck. Nails may be missing; that's tradition. If you find a loose plank, do not tighten it — it is load-bearing. If you find a loose parrot, that is your problem now.</p>
      <span class="sig">— The Pirate Web Crew, 1654–2026</span>
    </div>
  </div>
</section>

${cta('Now You Know Who Made It','The parrot knows. The goat knows. Now you do too.',
  '<a class="btn" href="index.html">Back to The Harbor</a><a class="btn ghost" href="island.html">Chart the Island</a>')}
`;

const ERROR_404 = `
<header class="page-hero">
  <div class="wrap">
    <div class="kicker">Navigation Error · Uncharted Reef</div>
    <h1>Error 404: Map Route Not Available</h1>
    <p>The sea mist has swallowed the coordinates and no chartered passage exists on this bearing.</p>
  </div>
</header>

<section style="background:linear-gradient(180deg,#061424,#030a14);padding:80px 0;min-height:65vh">
  <div class="wrap" style="max-width:880px;text-align:center">
    <div class="error-404-card" style="background:radial-gradient(ellipse at 50% 30%,rgba(20,50,80,.5),rgba(4,14,24,.92));border:3px solid #855928;border-radius:18px;padding:48px 32px;box-shadow:0 24px 60px rgba(0,0,0,.85), 0 0 35px rgba(230,179,74,.25)">
      
      <div style="font-family:'Pirata One',cursive;font-size:clamp(5rem,11vw,9rem);line-height:1;color:#ff6b6b;text-shadow:0 4px 20px rgba(0,0,0,.9),0 0 30px rgba(255,107,107,.5);margin-bottom:8px">
        404
      </div>
      
      <h2 style="font-family:'Pirata One',cursive;font-size:clamp(2rem,4.5vw,3.2rem);color:#ffd873;letter-spacing:.05em;margin-bottom:18px">
        ⚠️ Map Route Not Available
      </h2>
      
      <p style="font-family:'IM Fell English',serif;font-size:clamp(1.1rem,2vw,1.35rem);color:#e0effa;line-height:1.65;max-width:680px;margin:0 auto 36px">
        <strong>Uncharted waters ahead!</strong> The collegiate route to this landmark is shrouded in abyssal sea fog.
        <br>
        <span style="color:#7ee7d8;font-size:1.25rem;display:block;border-top:1px dashed rgba(230,179,74,.4);border-bottom:1px dashed rgba(230,179,74,.4);padding:14px 0;margin:18px 0">
          🧭 <strong>Use your Compass</strong> and 🔭 <strong>Binoculars (Spyglass)</strong> to navigate!
        </span>
      </p>

      <!-- Interactive Compass & Binoculars instruments -->
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px;margin-bottom:40px">
        <div style="background:rgba(4,16,28,.8);border:2px solid #365e80;border-radius:12px;padding:20px 26px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,.6)">
          <div style="font-size:3rem;margin-bottom:8px">🧭</div>
          <div style="font-family:'Pirata One',cursive;font-size:1.45rem;color:#ffd873">Ship's Astrolabe Compass</div>
          <div style="font-size:.9rem;color:#bcd0dd;margin-top:4px">Bearing: 22° NNE · True North Locked</div>
        </div>

        <div style="background:rgba(4,16,28,.8);border:2px solid #365e80;border-radius:12px;padding:20px 26px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,.6)">
          <div style="font-size:3rem;margin-bottom:8px">🔭</div>
          <div style="font-family:'Pirata One',cursive;font-size:1.45rem;color:#7ee7d8">Brass Binoculars &amp; Spyglass</div>
          <div style="font-size:.9rem;color:#bcd0dd;margin-top:4px">Horizon Scan: Reef ahead, adjust sails!</div>
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px">
        <a href="island.html" class="sot-btn-teal" style="text-decoration:none">
          <span>🗺️</span> Return to Island Chart
        </a>
        <a href="index.html" class="sot-btn-gold" style="text-decoration:none">
          <span>⚓</span> Sail Home to The Harbor
        </a>
      </div>

    </div>
  </div>
</section>
`;

const PAGES = {
  'index.html': ['The Harbor','Home','A college on an island, run entirely by pirates. Join the crew.'],
  'scroll.html': ['The Scroll','About','The story of the college of the seven seas.'],
  'fleet.html': ['The Fleet','Departments','Six departments, each a ship, sailing its own curriculum.'],
  'skills.html': ['Skills','Courses','38 skills, graded by the sea.'],
  'quartermasters.html': ['Quartermasters','Faculty','Professors with captain’s licenses.'],
  'crew.html': ['The Crew','Students','1200 students who navigate.'],
  'treasure-hauled.html': ['Treasure Hauled','Placements','Where our graduates end up.'],
  'island.html': ['The Island','Campus','Interactive treasure map of the island campus.'],
  'feasts.html': ['Feasts & Raids','Events','The deck calendar.'],
  'doubloons.html': ['Gold Doubloons','Fees','Fees and bounties in gold.'],
  'legends.html': ['Legends','Alumni','Where the legends went.'],
  'wanted.html': ['The Wanted Board','Notices','The notice board, pinned and crooked.'],
  'raven.html': ['Send a Raven','Contact','Reach the fleet by raven.'],
  'quarters.html': ["Shipman’s Quarters",'Login','Student portal.'],
  'enlist.html': ['Join the Crew','Admissions','How to join the crew.'],
  'forge.html': ['The Forge','Built by Pirates','Forged by the pirate web crew. Read the manifesto.'],
  '404.html': ['Map Route Not Available — Error 404', 'Error 404', 'Map route not available. Use your compass and binoculars to navigate.'],
};

const BODIES = {
  'index.html': INDEX,
  'scroll.html': SCROLL,
  'fleet.html': FLEET,
  'skills.html': SKILLS,
  'quartermasters.html': QUARTERMASTERS,
  'crew.html': CREW,
  'treasure-hauled.html': TREASURE_HAULED,
  'island.html': ISLAND,
  'feasts.html': FEASTS,
  'doubloons.html': DOUBLOONS,
  'legends.html': LEGENDS,
  'wanted.html': WANTED,
  'raven.html': RAVEN,
  'quarters.html': QUARTERS,
  'enlist.html': ENLIST,
  'forge.html': FORGE,
  '404.html': ERROR_404,
};

for (const [file, [title, , desc]] of Object.entries(PAGES)) {
  const key = file.replace('.html','');
  const active = {'index':'home','scroll':'scroll','fleet':'fleet','quartermasters':'qm','island':'island','wanted':'wanted'}[key] || '';
  const tickerHtml = '';
  const html = head(title, desc) + '\n' + nav(active) + '\n' + BODIES[file] + '\n' + foot();
  fs.writeFileSync(file, html);
  console.log('wrote', file, html.length);
}
console.log('Done:', Object.keys(PAGES).length, 'pages');
