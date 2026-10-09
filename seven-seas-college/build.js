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
  const items = [
    '<span class="ticker-item"><b>☠ The Wanted Board</b> — Tide tables updated. The old ones are now art.</span>',
    '<span class="ticker-item">Cannon practice postponed — wind too good</span>',
    '<span class="ticker-item">2,400 doubloons found in the library. Claim before Thursday, or forfeit to the college.</span>',
    '<span class="ticker-item">The Crew votes: Grog-Free Week is now Grog-Reduced Week. The galley has questions.</span>',
    '<span class="ticker-item"><b>☠ The Forge</b> — This website was built by pirates, in tar, by hand. See the credits before you sue us.</span>',
    '<span class="ticker-item">The Great Regatta — Nov 21. Bets prohibited, bragging encouraged.</span>',
  ];
  return `<div class="ticker" aria-label="Announcements"><div class="ticker-inner">${items.join('')}${items.join('')}</div></div>`;
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
<header class="island-video" id="islandVideo">
  <img class="iv-img" src="img/island-hero.jpg" alt="The College of the Seven Seas — a gothic pirate island campus at night">
  <video class="iv-video" id="shipReel" src="img/ship-reel.mp4" poster="img/island-hero.jpg" autoplay muted loop playsinline preload="metadata"></video>
  <div class="iv-mist iv-m1"></div>
  <div class="iv-mist iv-m2"></div>
  <div class="map-beam iv-beam" aria-hidden="true"></div>
  ${waves3()}
  <div class="iv-scrim" aria-hidden="true"></div>
  <div class="iv-vignette" aria-hidden="true"></div>
  ${GULL('g1')}${GULL('g2')}
  <div class="reel-badge"><span class="reel-dot"></span> Ravenspire Blacktide Collegium · Est. 1654</div>
  <button class="reel-pause" id="reelPause" type="button">⏸ Pause the Reel</button>
  <div class="coin-stage" aria-hidden="true">
    <div class="coin-bob"><div class="coin3d" id="coin3d">
      <div class="cface front"><svg viewBox="0 0 200 200" width="100%" height="100%"><use href="#coinArt"/></svg></div>
      <div class="cface back"><svg viewBox="0 0 200 200" width="100%" height="100%"><use href="#coinArt" transform="rotate(180 100 100)"/></svg></div>
      <div id="coinEdge"></div>
    </div></div>
  </div>
  <div class="parrot-perch" aria-hidden="true">
    <div class="parrot-bubble show" id="parrotSay"><b>Feather</b> Welcome to the only college that sails to class.</div>
    <svg class="parrot-svg" viewBox="0 0 120 180"><use href="#parrotArt"/></svg>
</header>

<div class="stats">
  <div class="wrap stats-grid">
    <div class="stat reveal" data-tilt><div class="num">1,200</div><div class="lbl">The Crew, enrolled &amp; slightly sea-sick</div></div>
    <div class="stat reveal d1" data-tilt><div class="num">38</div><div class="lbl">Skills of the Seven Seas (courses)</div></div>
    <div class="stat reveal d2" data-tilt><div class="num">6 + 1</div><div class="lbl">Ships in The Fleet (departments) + one sloop</div></div>
    <div class="stat reveal d3" data-tilt><div class="num">0</div><div class="lbl">Exams. Assessment is treasure-based. Always.</div></div>
  </div>
</div>

<section id="wanted-teaser">
  <div class="wrap">
    ${secHead('The Wanted Board','Fresh Off the Board','Everything the college says, pinned and slightly crooked. Claim rewards before Thursday.')}
    <div class="grid-posters">
      <div class="poster reveal" data-tilt style="--rot:-2deg"><span class="ptype">Bounty</span><h3>Doubloons Found</h3><div class="reward">Reward: 2,400 doubloons</div><p>Found in the library, under a chart of "somewhere lovely". Claim before Thursday or forfeit to the college.</p><div class="pdate"><span>The Board</span><span>every tide</span></div></div>
      <div class="poster reveal d1" data-tilt style="--rot:1.6deg"><span class="ptype">Raid</span><h3>Storm Week Drills</h3><div class="reward">Bring a towel + fear of whales</div><p>Advanced Navigation practicum. We sail into the storm. The syllabus means it.</p><div class="pdate"><span>Dept. of Navigation</span><span>Nov 20</span></div></div>
      <div class="poster reveal d2" data-tilt style="--rot:-1.4deg"><span class="ptype">Notice</span><h3>New Bird on Faculty</h3><div class="reward">Reward: none. It’s a parrot.</div><p>Professor Feather III now grades. Do not feed him forms. Do not feed him anything but seeds.</p><div class="pdate"><span>The Aviary</span><span>this tide</span></div></div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="wanted.html">The Full Wanted Board →</a></div>
  </div>
</section>

<section id="fleet-teaser" style="background:linear-gradient(180deg,#0a1f38,#0e2b47)">
  <div class="wrap">
    ${secHead('The Fleet','Departments, But They Sail','Six departments. Six ships. Every department moors at its own berth and sails its own curriculum.')}
    <div class="grid-3">
      <div class="ship-card reveal" data-tilt><div class="sname">H.M.S. Educate &amp; Plunder</div><div class="sdept">Navigation &amp; Wayfinding</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1654</b></div><div class="stat-row"><span>Crew</span><b>210</b></div><div class="stat-row"><span>Sails (courses)</span><b>9</b></div><div class="stat-row"><span>Top speed</span><b>14 kn</b></div></div><div class="squip">"The campus itself. The Great Hall is her wheelhouse."</div></div>
      <div class="ship-card reveal d1" data-tilt><div class="sname">The Broadside</div><div class="sdept">Artillery &amp; Cannon Science</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1671</b></div><div class="stat-row"><span>Crew</span><b>140</b></div><div class="stat-row"><span>Sails (courses)</span><b>7</b></div><div class="stat-row"><span>Top speed</span><b>12 kn</b></div></div><div class="squip">"Has never missed a deadline or a target."</div></div>
      <div class="ship-card reveal d2" data-tilt><div class="sname">Buried Alive</div><div class="sdept">Treasure Recovery &amp; Cartography</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1688</b></div><div class="stat-row"><span>Crew</span><b>185</b></div><div class="stat-row"><span>Sails (courses)</span><b>11</b></div><div class="stat-row"><span>Top speed</span><b>10 kn</b></div></div><div class="squip">"Her hold smells of wet sand and good maps."</div></div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="fleet.html">Meet the Whole Fleet →</a></div>
  </div>
</section>

<section id="island-teaser">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:-1.6deg">
        <img src="img/island-top.jpg" alt="Top-down view of the gothic pirate island campus" loading="lazy">
        <figcaption>The island, as charted (Dr. Quill’s "honest" edition)</figcaption>
      </figure>
      <div class="reveal d2">
        <div class="over" style="font-family:var(--font-display);letter-spacing:.32em;text-transform:uppercase;color:var(--gold);font-size:1rem;margin-bottom:10px">Campus / Facilities</div>
        <h2 style="font-size:clamp(2rem,4.5vw,3rem);color:var(--cream)">The Island</h2>
        <p style="color:#bcd0dd;margin:14px 0;font-size:1.05rem">Lighthouse, Great Hall, Crow’s Nest library, the Vault, the Galley, the Plank — everything you need, and nothing you can’t swim back from. The campus map is <strong>interactive</strong>: tap a pin, read the post, plan your tide.</p>
        <p style="color:#bcd0dd;margin-bottom:26px;font-style:italic">Yes, there is a treasure vault on campus. No, you cannot open it. Yes, it is the most-visited landmark. All three of those are true.</p>
        <a class="btn" href="island.html">Open the Treasure Map</a>
      </div>
    </div>
  </div>
</section>

<section id="skills-teaser" style="background:linear-gradient(180deg,#08182c,#0e2b47)">
  <div class="wrap">
    ${secHead('Skills of the Seven Seas','Courses, Graded by the Sea','No exams. Just skills, assessed the way the sea assesses everything: by what you bring back.')}
    <div class="table-wrap reveal">
      <table class="course-table">
        <thead><tr><th>Code</th><th>Skill</th><th>Ship</th><th>Sea State</th></tr></thead>
        <tbody>
          <tr><td class="code">NAV-101</td><td>Astrolabe Theory &amp; Practice</td><td>Educate &amp; Plunder</td><td>☠</td></tr>
          <tr><td class="code">TRE-105</td><td>Charting Islands That Lie</td><td>Buried Alive</td><td>☠☠</td></tr>
          <tr><td class="code">ROP-112</td><td>The 34 Essential Knots</td><td>The Tightrope</td><td>☠ <em>(blindfolded)</em></td></tr>
          <tr><td class="code">NAV-400</td><td>Capstone: Cross an Ocean, Solo</td><td>Educate &amp; Plunder</td><td>☠☠☠☠</td></tr>
        </tbody>
      </table>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="skills.html">All 38 Skills →</a></div>
  </div>
</section>

<section id="crew-teaser">
  <div class="wrap">
    ${secHead('The Crew','Word On The Deck','Not students. Students don’t navigate. The Crew does.')}
    <div class="grid-3">
      <div class="quote-card reveal" data-tilt>"I came for the navigation. I stayed because the Wi-Fi (the wind) never lags in a storm. 10/10 would drown again."<span class="who">— Nadia "North" Okafor, Class of 2026</span></div>
      <div class="quote-card reveal d1" data-tilt>"My parrot failed me on purpose. Still my favorite professor."<span class="who">— T. "Two-Fathoms" Marsh, Class of 2025</span></div>
      <div class="quote-card reveal d2" data-tilt>"POV: your capstone is an ocean and you’re solo. No cap. Well. A hat."<span class="who">— Isla Reyes, Class of 2024</span></div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="crew.html">Meet The Crew →</a></div>
  </div>
</section>

<section id="haul-teaser" style="background:linear-gradient(180deg,#08182c,#0a1f38)">
  <div class="wrap">
    ${secHead('Treasure Hauled','Placements, But Make It Loot','Where our crews end up — and what they bring back for the island.')}
    <div class="grid-3">
      <div class="recruit reveal" data-tilt><div class="rname">East India Plunder Co.</div><div class="rline">Offers: 9-to-5 and a boat</div><div class="rstat">Hauled 31 crews last term</div></div>
      <div class="recruit reveal d1" data-tilt><div class="rname">Kraken Logistics</div><div class="rline">Offers: infinite tentacles, zero commute</div><div class="rstat">Hauled 24 crews last term</div></div>
      <div class="recruit reveal d2" data-tilt><div class="rname">Gull-Back Airlines</div><div class="rline">Offers: free gull lessons, window seat (the island)</div><div class="rstat">Hauled 19 crews last term</div></div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="treasure-hauled.html">The Full Haul Report →</a></div>
  </div>
</section>

<section id="feasts-teaser">
  <div class="wrap">
    ${secHead('Feasts &amp; Raids','Events &amp; Fests','All events sail regardless of weather. The weather has been informed.')}
    <div class="event-row reveal" data-tilt>
      <div class="e-date"><div class="d">21</div><div class="m">OCT</div></div>
      <div><h3>The Great Regatta</h3><p>Inter-ship racing, three laps, one cannon of confetti. Bring goggles.</p></div>
      <div class="e-tag">All Fleet</div>
    </div>
    <div class="event-row reveal d1" data-tilt>
      <div class="e-date"><div class="d">12</div><div class="m">NOV</div></div>
      <div><h3>Full Moon Cannon Gala</h3><p>Fireworks over the water, music from the deck, absolutely no fire (one fire).</p></div>
      <div class="e-tag">By Invitation</div>
    </div>
    <div class="event-row reveal d2" data-tilt>
      <div class="e-date"><div class="d">05</div><div class="m">NOV</div></div>
      <div><h3>Treasure Fair &amp; Marketplace</h3><p>The Crew sells finds, maps, and one suspiciously glowing stone. No refunds on the stone.</p></div>
      <div class="e-tag">Open Port</div>
    </div>
    <div class="center mt reveal"><a class="btn ghost" href="feasts.html">Full Deck Calendar →</a></div>
  </div>
</section>

${cta('The Tide Is Good. The Doubloons Are Shiny.','What are you waiting for? The tide does not wait for the undecided.',
  '<a class="btn" href="enlist.html">Join the Crew</a><a class="btn ghost" href="scroll.html">Read The Scroll</a>')}
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
    <div class="grid-3">
      <div class="ship-card reveal" data-tilt><div class="sname">H.M.S. Educate &amp; Plunder</div><div class="sdept">Navigation &amp; Wayfinding</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1654</b></div><div class="stat-row"><span>Crew</span><b>210</b></div><div class="stat-row"><span>Sails (courses)</span><b>9</b></div><div class="stat-row"><span>Top speed</span><b>14 kn</b></div><div class="stat-row"><span>Captain</span><b>Prof. M. Vance</b></div></div><div class="squip">"The campus itself. The Great Hall is her wheelhouse. Her bell is the college’s heartbeat."</div></div>
      <div class="ship-card reveal d1" data-tilt><div class="sname">The Broadside</div><div class="sdept">Artillery &amp; Cannon Science</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1671</b></div><div class="stat-row"><span>Crew</span><b>140</b></div><div class="stat-row"><span>Sails (courses)</span><b>7</b></div><div class="stat-row"><span>Top speed</span><b>12 kn</b></div><div class="stat-row"><span>Captain</span><b>Prof. I. Blackbeard</b></div></div><div class="squip">"Has never missed a deadline or a target. Her deck is always slightly sootier than the others. With pride."</div></div>
      <div class="ship-card reveal d2" data-tilt><div class="sname">Buried Alive</div><div class="sdept">Treasure Recovery &amp; Cartography</div><div class="srows"><div class="stat-row"><span>Keel-laid</span><b>1688</b></div><div class="stat-row"><span>Crew</span><b>185</b></div><div class="stat-row"><span>Sails (courses)</span><b>11</b></div><div class="stat-row"><span>Top speed</span><b>10 kn</b></div><div class="stat-row"><span>Captain</span><b>Dr. C. Quill</b></div></div><div class="squip">"Her hold smells of wet sand and good maps. Half her charts are real. The other half are promises."</div></div>
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
    <div class="table-wrap reveal">
      <table class="course-table">
        <thead><tr><th>Code</th><th>Skill</th><th>Ship (Dept.)</th><th>Sea State</th><th>Sails</th><th>Graded By</th></tr></thead>
        <tbody>
          <tr><td class="code">NAV-101</td><td>Astrolabe Theory &amp; Practice</td><td>Educate &amp; Plunder</td><td>☠</td><td>2</td><td>Find Polaris in fog</td></tr>
          <tr><td class="code">NAV-210</td><td>Reading Storms with Your Face</td><td>Educate &amp; Plunder</td><td>☠☠</td><td>2</td><td>Oral exam, outdoors, in wind</td></tr>
          <tr><td class="code">NAV-400</td><td>Capstone: Cross an Ocean, Solo</td><td>Educate &amp; Plunder</td><td>☠☠☠</td><td>4</td><td>Arriving. That’s the whole rubric</td></tr>
          <tr><td class="code">ART-110</td><td>Ballistics of Big Metal</td><td>The Broadside</td><td>☠☠</td><td>2</td><td>The range. Nerve not provided</td></tr>
          <tr><td class="code">ART-240</td><td>Ethics of the Broadside</td><td>The Broadside</td><td>☠</td><td>1</td><td>Essay, on a plank, one hand</td></tr>
          <tr><td class="code">TRE-105</td><td>Charting Islands That Lie</td><td>Buried Alive</td><td>☠☠</td><td>2</td><td>Your X must be right</td></tr>
          <tr><td class="code">TRE-300</td><td>Diving, Dredging &amp; Digs</td><td>Buried Alive</td><td>☠☠</td><td>3</td><td>Bring back a genuine find</td></tr>
          <tr><td class="code">ROP-112</td><td>The 34 Essential Knots</td><td>The Tightrope</td><td>☠</td><td>1</td><td>Blindfolded. Yes, really</td></tr>
          <tr><td class="code">ROP-330</td><td>Mast Climbing: Fear Management</td><td>The Tightrope</td><td>☠☠☠</td><td>2</td><td>Forty fathoms, on schedule</td></tr>
          <tr><td class="code">PAR-101</td><td>Avian Communication</td><td>Feather’s Folly</td><td>☠</td><td>1</td><td>Your parrot claps, exactly once</td></tr>
          <tr><td class="code">ARC-210</td><td>Hull Design: Art vs. Physics</td><td>The Anvil’s Wake</td><td>☠☠</td><td>2</td><td>It must float</td></tr>
          <tr><td class="code">ARC-400</td><td>Capstone: Build a Boat</td><td>The Anvil’s Wake</td><td>☠☠</td><td>4</td><td>It must survive a storm</td></tr>
        </tbody>
      </table>
    </div>
    <p class="center reveal" style="margin-top:18px;color:#8fa5b5;font-size:.92rem">Sea state = difficulty. ☠ = calm seas. ☠☠☠☠ = bring a will. Sails = credit. Full catalogue at the Crow’s Nest, subject to the parrot’s mood.</p>
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
    <div class="grid-4">
      <div class="person reveal" data-tilt>
        <div class="portrait"><img src="img/captain.jpg" alt="Portrait of Fleetmaster Crane at the helm" loading="lazy"></div>
        <h3>Fleetmaster Aldric "Grimtide" Crane</h3>
        <div class="role">Dean of the Fleet</div>
        <p>Steers the college and, on Mondays, the entire fleet. Has never been lost. Once argued with a current and won.</p>
        <span class="photo-tag">Verified by the Fleet</span>
      </div>
      <div class="person reveal d1" data-tilt>
        <div class="portrait"><img src="img/parrot.jpg" alt="Professor Feather, the college parrot" loading="lazy"></div>
        <h3>Professor Feather, III</h3>
        <div class="role">Chair of Parrot Linguistics</div>
        <p>Grades, supervises, and occasionally eats the answer sheets. Salaried in sunflower seeds since 1848.</p>
        <span class="photo-tag">Verified by Everyone</span>
      </div>
      <div class="person reveal d2" data-tilt style="--ptint:#7a4a2a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#241408"/></svg></div>
        <h3>Prof. Marlow "One-Leg" Vance</h3><div class="role">Navigation (Educate &amp; Plunder)</div><p>Lost a leg to a cannonball in 1698. Teaches with the other one, mostly.</p></div>
      <div class="person reveal d3" data-tilt style="--ptint:#2f5d63"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#101d20"/></svg></div>
        <h3>Prof. Isla Blackbeard</h3><div class="role">Artillery (The Broadside)</div><p>Has never missed a target. Has also never missed a deadline.</p></div>
      <div class="person reveal" data-tilt style="--ptint:#6e3a3a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#20100c"/></svg></div>
        <h3>Dr. Corvus Quill</h3><div class="role">Cartography (Buried Alive)</div><p>Maps places that don’t exist yet. The Crew call them "promises."</p></div>
      <div class="person reveal d1" data-tilt style="--ptint:#5a5230"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#15130a"/></svg></div>
        <h3>Capt. (ret.) Rosa Flint</h3><div class="role">Rigging (The Tightrope)</div><p>Her parrot, Professor Feather, is officially on the faculty too. He grades.</p></div>
      <div class="person reveal d2" data-tilt style="--ptint:#6a4a2a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#1c1208"/></svg></div>
        <h3>Mrs. Marigold Oat</h3><div class="role">The Galley (Food &amp; Grog)</div><p>Cook of record. Salt beef three ways. Her grog recipe is a college secret with 372 holders.</p></div>
      <div class="person reveal d3" data-tilt style="--ptint:#44506a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#11141c"/></svg></div>
        <h3>Brother Anchor</h3><div class="role">Keeper of the Vault (Bursar)</div><p>Counts the doubloons. Has counted them. Will count them again. Do not stand in front of the safe.</p></div>
    </div>
  </div>
</section>

<section style="background:linear-gradient(180deg,#08182c,#050f1e)">
  <div class="wrap">
    <div class="duo">
      <figure class="frame reveal" data-tilt style="--rot:-1.8deg">
        <img src="img/storm-sea.jpg" alt="Dark stormy sea beneath heavy clouds" loading="lazy">
        <figcaption>Where the outdoor lectures happen</figcaption>
      </figure>
      <div class="parchment reveal d2">
        <h3>Deck Hours (Office Hours)</h3>
        <p>All Quartermasters hold deck hours: Tuesday and Thursday tides, on whichever deck is least currently on fire.</p>
        <p>Professor Feather’s deck hours are whenever he lands. The Crew have learned to read his moods the way the weather is read: by the feathers.</p>
        <p>Appointment policy: the sea sets the appointment. If the sea cancels, the Quartermaster is delighted; you are rescheduled to "whenever the sea feels like it."</p>
        <span class="sig">— Fleetmaster Crane, Dean</span>
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
    <div class="grid-3">
      <div class="person reveal" data-tilt style="--ptint:#2f5d63"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#101d20"/></svg></div>
        <h3>Nadia "North" Okafor</h3><div class="role">Navigation · Class of 2026</div><p>Solo-crossed two bays for her capstone. Her parrot has a PhD (in seeds). First in the fleet.</p></div>
      <div class="person reveal d1" data-tilt style="--ptint:#6e3a3a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#20100c"/></svg></div>
        <h3>T. "Two-Fathoms" Marsh</h3><div class="role">Treasure Recovery · Class of 2025</div><p>Found an island that wasn’t on any map, then got it added to every map. The island is now a field trip.</p></div>
      <div class="person reveal d2" data-tilt style="--ptint:#7a4a2a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#241408"/></svg></div>
        <h3>Isla Reyes</h3><div class="role">Artillery · Class of 2024</div><p>Won three Regattas, one broadside ethics debate, and the Galley’s annual salt-beef eating contest. Unrelated, all three.</p></div>
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
${pageHero('Campus / Facilities','The Island','Official Nautical Chart of Ravenspire Blacktide Collegium. Tap any glowing pin to chart your course.','The Island')}
<section>
  <div class="wrap">
    <div class="map-grid">
      <div class="map-stage reveal">
        ${ISLAND_SVG}
        <div class="map-beam" aria-hidden="true"></div>
      </div>
      <aside class="map-panel reveal d1" id="mapPanel">
        <div class="mp-kicker" id="mapKicker">The Treasure Map · chartvault</div>
        <h3 class="mp-name" id="mapName">The Chart Vault</h3>
        <div class="mp-sub" id="mapSub">Cartography, Secret Routes &amp; Celestial Archive</div>
        <p class="mp-desc" id="mapDesc">Houses 12,000 maritime charts, celestial navigational globes, and sealed imperial sea routes. Hidden high in the red cliffs above the lagoon, where master cartographers calculate safe passage through treacherous waters.</p>
        <div class="mp-hours" id="mapHours">Hours: Open at high tide; whisper the password to Brother Anchor.</div>
        <a class="btn mp-link" id="mapLink" href="skills.html">Browse Cartography Skills →</a>
        <div class="mp-bunk">Your berth: <b>Crew Quarters, Berth #<span id="bunkNum">113</span></b> — assigned by lottery, then by seniority, then by who asked nicer.</div>
      </aside>
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
${pageHero('Alumni','Legends of the Seven Seas','Every graduate becomes a legend. We’ve kept the receipts. The receipts are water-stained.','Legends')}
<section>
  <div class="wrap">
    <div class="grid-4">
      <div class="legend reveal" data-tilt style="--ptint:#2f5d63"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#101d20"/></svg></div>
        <h3>The Cartographer Who Mapped Nowhere</h3><div class="lclass">Class of 1671</div><p>Now runs Kraken Logistics. His maps still list places that don’t exist. They have since. He is not surprised. He is quietly furious.</p></div>
      <div class="legend reveal d1" data-tilt style="--ptint:#7a4a2a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#241408"/></svg></div>
        <h3>One-Leg Vance</h3><div class="lclass">Class of 1660</div><p>Chair of Navigation, still teaching after 366 years. His thesis is "in progress." The sea, his co-supervisor, has stopped replying.</p></div>
      <div class="legend reveal d2" data-tilt style="--ptint:#6e3a3a"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#20100c"/></svg></div>
        <h3>The Island Finder</h3><div class="lclass">Class of 1689</div><p>Graduated to find islands for a living, which is exactly what he does. Where he is now is a "promise" on every map he’s ever sold.</p></div>
      <div class="legend reveal d3" data-tilt style="--ptint:#5a5230"><div class="portrait"><svg viewBox="0 0 200 220"><use href="#pirateSil" color="#15130a"/></svg></div>
        <h3>Marigold Oat</h3><div class="lclass">Class of 1658</div><p>First Galley legend. The grog recipe has 372 holders and zero written copies. She is the only one who can say "no" to the parrot.</p></div>
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
  <div class="wrap" style="max-width:560px">
    <div class="quarters-card reveal">
      <svg viewBox="0 0 100 100" style="width:70px;margin:0 auto 14px" aria-hidden="true"><use href="#skullMark" color="#e6b34a"/></svg>
      <h3 style="color:var(--gold-bright);font-size:1.9rem;margin-bottom:6px">Board the Quarters</h3>
      <p class="sub" style="color:#cbb88f;font-size:.92rem;font-style:italic;margin-bottom:22px">Student portal. Berth number in, parrot’s name up, in you go.</p>
      <form data-quarters novalidate>
        <div class="field"><label for="qName">Your name</label><input id="qName" type="text" placeholder="e.g. Nadia Okafor"></div>
        <div class="field"><label for="qId">Berth number (student ID)</label><input id="qId" type="text" placeholder="e.g. 113"></div>
        <div class="field"><label for="qPass">Passphrase (your parrot’s name)</label><input id="qPass" type="password" placeholder="whisper it"></div>
        <div class="field" style="display:flex;align-items:center;gap:10px"><label for="qRem" style="margin:0;letter-spacing:.1em">Remember me on this deck</label><input id="qRem" type="checkbox" style="width:auto"></div>
        <button class="btn" type="submit" style="width:100%">Board the Quarters ⚓</button>
      </form>
      <div style="margin-top:18px;font-size:.9rem;color:#b9c9d6">
        Lost your passphrase? <a href="raven.html">Send a raven</a> to the Quartermaster.<br>
        Not enrolled yet? <a href="enlist.html">Join the Crew</a> first.
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
};

for (const [file, [title, , desc]] of Object.entries(PAGES)) {
  const key = file.replace('.html','');
  const active = {'index':'home','scroll':'scroll','fleet':'fleet','quartermasters':'qm','island':'island','wanted':'wanted'}[key] || '';
  const tickerHtml = file === 'index.html' ? '' : (ticker() + '\n');
  const html = head(title, desc) + '\n' + tickerHtml + nav(active) + '\n' + BODIES[file] + '\n' + foot();
  fs.writeFileSync(file, html);
  console.log('wrote', file, html.length);
}
console.log('Done:', Object.keys(PAGES).length, 'pages');
