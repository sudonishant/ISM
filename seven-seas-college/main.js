(function(){
"use strict";
function $(s){ return document.querySelector(s); }
function $$(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); }

/* ================= TOAST ================= */
var toastEl=null, toastTimer;
function toast(msg){
  if(!toastEl){ toastEl=document.createElement('div'); toastEl.id='toast'; toastEl.setAttribute('role','status'); document.body.appendChild(toastEl); }
  toastEl.textContent=msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){ toastEl.classList.remove('show'); },3800);
}

/* ================= STARS ================= */
$$('.sky').forEach(function(sky){
  for(var i=0;i<70;i++){
    var s=document.createElement('i');
    s.className='star';
    s.style.left=(Math.random()*100)+'%';
    s.style.top=(Math.random()*60)+'%';
    var sz=(Math.random()*2+1).toFixed(1);
    s.style.width=sz+'px'; s.style.height=sz+'px';
    s.style.animationDelay=(Math.random()*4).toFixed(2)+'s';
    sky.appendChild(s);
  }
});

/* ================= SCROLL REVEAL ================= */
var reveals=$$('.reveal');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.12});
  reveals.forEach(function(el){ io.observe(el); });
}else{
  reveals.forEach(function(el){ el.classList.add('in'); });
}

/* ================= 3D TILT ================= */
$$('[data-tilt]').forEach(function(card){
  card.addEventListener('pointermove',function(e){
    var r=card.getBoundingClientRect();
    var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform='perspective(750px) rotateX('+(-y*9).toFixed(2)+'deg) rotateY('+(x*9).toFixed(2)+'deg) translateY(-5px)';
  });
  card.addEventListener('pointerleave',function(){ card.style.transform=''; });
});

/* ================= FLIP CARDS ================= */
$$('.flip').forEach(function(f){
  f.setAttribute('tabindex','0');
  function toggle(){ f.classList.toggle('flipped'); }
  f.addEventListener('click',toggle);
  f.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toggle(); } });
});

/* ================= PARROT CHATTER ================= */
var bubble=$('#parrotSay');
if(bubble){
  var lines=[
    'Arrr, welcome aboard, matey!',
    'This whole website was built by pirates. Check the footer!',
    'No land, no problem — our campus sails to class.',
    'Psst… click the treasure chest. Go on.',
    'Tuition is in doubloons. Bring shiny things.',
    'The Great Regatta is coming. Bets are prohibited!',
    'My name is Feather. I also grade. Good luck.',
    'Try the storm button in the top bar. Chaos is a curriculum.'
  ];
  var li=0;
  setInterval(function(){
    li=(li+1)%lines.length;
    bubble.classList.remove('show');
    setTimeout(function(){ bubble.innerHTML='<b>Feather</b> '+lines[li]; bubble.classList.add('show'); },350);
  },5200);
}

/* ================= 3D COIN EDGE ================= */
var edge=$('#coinEdge');
if(edge){
  for(var j=0;j<24;j++){
    var seg=document.createElement('div');
    seg.className='cseg';
    seg.style.transform='rotateY('+(j*15)+'deg) translateZ(75px)';
    edge.appendChild(seg);
  }
}

/* ================= TREASURE CHEST ================= */
var chest=$('#chest');
if(chest){
  var hint=$('#chestHint');
  chest.setAttribute('tabindex','0');
  chest.setAttribute('role','button');
  chest.setAttribute('aria-label','Treasure chest - click to open');
  function openChest(){
    chest.classList.toggle('open');
    if(chest.classList.contains('open')){
      toast('The vault is open! 37,000 doubloons of endowment… and one very small sword.');
      if(hint) hint.textContent='☠ Tuition, grades, and the secret of the second grog ☠';
    }else if(hint){
      hint.textContent='☠ Click the chest — your future tuition is in there ☠';
    }
  }
  chest.addEventListener('click',openChest);
  chest.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openChest(); } });
}

/* ================= SIGNAL FORMS ================= */
$$('form[data-signal]').forEach(function(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var nameEl=form.querySelector('input[type=text]');
    var name=nameEl&&nameEl.value.trim()?nameEl.value.trim():'matey';
    toast('Message cast off, '+name+'! Expect a reply within one tide. ☠');
    form.reset();
  });
});

/* ================= NAV LOGO EASTER EGG ================= */
var logo=$('#navLogo');
if(logo){
  logo.addEventListener('click',function(e){
    if(e.target.closest('a')) return;
    toast('Signal flare fired! The whole fleet can see you now. ☠');
  });
}

/* ================= STORM MODE ================= */
var stormBtn=$('#stormBtn');
var fx=document.createElement('div');
fx.id='stormFx';
fx.innerHTML='<div class="s-darken"></div><div class="s-rain"></div><div class="s-lightning"></div>';
document.body.appendChild(fx);
function setStorm(on,announce){
  document.body.classList.toggle('storm',on);
  if(stormBtn){
    stormBtn.setAttribute('aria-pressed',String(on));
    stormBtn.innerHTML=on?'☀ Fair Weather':'⛈ Storm';
  }
  try{ localStorage.setItem('ss-storm',on?'1':'0'); }catch(e){}
  if(announce!==false){
    toast(on?'All hands! Storm mode engaged. Batten down the hatches! ⛈'
            :'The storm passes. Fair winds return. ☀');
  }
}
if(stormBtn){
  stormBtn.addEventListener('click',function(){ setStorm(!document.body.classList.contains('storm')); });
  var saved=null;
  try{ saved=localStorage.getItem('ss-storm'); }catch(e){}
  if(saved==='1'&&!document.body.classList.contains('storm')) setStorm(true,false);
}

/* ================= SCROLL PROGRESS + BACK TO TOP ================= */
var prog=document.createElement('div'); prog.className='progress'; document.body.appendChild(prog);
var topBtn=document.createElement('button'); topBtn.className='to-top'; topBtn.type='button';
topBtn.innerHTML='⚓'; topBtn.setAttribute('aria-label','Back to top'); document.body.appendChild(topBtn);
topBtn.addEventListener('click',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
function onScroll(){
  var h=document.documentElement;
  var max=h.scrollHeight-h.clientHeight;
  prog.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
  topBtn.classList.toggle('show',h.scrollTop>600);
}
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();

/* ================= WAVE PARALLAX ================= */
var waves=$$('.wave');
if(waves.length){
  var tick=false;
  window.addEventListener('scroll',function(){
    if(tick) return;
    tick=true;
    requestAnimationFrame(function(){
      var y=window.scrollY;
      waves.forEach(function(l){
        l.style.transform='translateY('+(y*parseFloat(l.dataset.speed||0)).toFixed(1)+'px)';
      });
      tick=false;
    });
  },{passive:true});
}

/* ================= SHIP MOUSE TILT (home) ================= */
var shipTilt=$('#shipTilt'), hero=$('.hero');
if(shipTilt&&hero){
  hero.addEventListener('pointermove',function(e){
    var r=hero.getBoundingClientRect();
    var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    shipTilt.style.transform='translateX(-46%) rotateY('+(x*8).toFixed(2)+'deg) rotateX('+(-y*5).toFixed(2)+'deg)';
  });
  hero.addEventListener('pointerleave',function(){ shipTilt.style.transform=''; });
}

/* ================= PARTICLE HELPERS ================= */
function spawnSpark(px,py){
  var el=document.createElement('i');
  el.className='spark';
  el.style.left=px+'px'; el.style.top=py+'px';
  el.style.setProperty('--dx',(Math.random()*26-13).toFixed(0)+'px');
  el.style.setProperty('--dy',(Math.random()*18+6).toFixed(0)+'px');
  el.style.animationDuration=(0.5+Math.random()*0.4).toFixed(2)+'s';
  document.body.appendChild(el);
  el.addEventListener('animationend',function(){ el.remove(); });
  if(document.getElementsByClassName('spark').length>70) el.remove();
}
function burst(px,py,n){
  for(var i=0;i<n;i++){
    var el=document.createElement('i');
    el.className='coin-p';
    el.style.left=px+'px'; el.style.top=py+'px';
    var a=Math.random()*Math.PI*2, d=30+Math.random()*62;
    el.style.setProperty('--dx',(Math.cos(a)*d).toFixed(0)+'px');
    el.style.setProperty('--dy',(Math.sin(a)*d-46).toFixed(0)+'px');
    el.style.setProperty('--rot',(Math.random()*720-360).toFixed(0)+'deg');
    el.style.animationDuration=(0.7+Math.random()*0.5).toFixed(2)+'s';
    document.body.appendChild(el);
    el.addEventListener('animationend',function(e){ e.target.remove(); });
  }
}

/* ================= PIRATE HOOK CURSOR ================= */
if(window.matchMedia&&matchMedia('(pointer:fine)').matches){
  document.body.classList.add('has-cursor');
  var cur=document.createElement('div');
  cur.className='cursor-hook';
  cur.innerHTML='<img src="img/cursor-hook.png" alt="" aria-hidden="true">';
  document.body.appendChild(cur);
  var tx=window.innerWidth/2, ty=window.innerHeight/2, x=tx, y=ty;
  var lastTrail=0;
  window.addEventListener('pointermove',function(e){
    tx=e.clientX; ty=e.clientY;
    var now=performance.now();
    if(now-lastTrail>30){ lastTrail=now; spawnSpark(e.clientX,e.clientY); }
  },{passive:true});
  (function loop(){
    x+=(tx-x)*.3; y+=(ty-y)*.3;
    var rot=Math.max(-26,Math.min(26,(tx-x)*.5));
    cur.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px) rotate('+rot.toFixed(1)+'deg)';
    requestAnimationFrame(loop);
  })();
  var HOT='a,button,.flip,.chest,.event-row,summary,[data-tilt],.to-top,.t-item,.frame';
  document.addEventListener('pointerover',function(e){
    cur.classList.toggle('hot',!!(e.target.closest&&e.target.closest(HOT)));
  });
  document.addEventListener('pointerdown',function(e){
    cur.classList.add('down');
    var big=e.target.closest&&e.target.closest('.btn');
    burst(e.clientX,e.clientY,big?12:5);
  });
  document.addEventListener('pointerup',function(){ cur.classList.remove('down'); });
}

/* ================= "ARR" EASTER EGG ================= */
var kb='';
window.addEventListener('keydown',function(e){
  var t=e.target;
  if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable)) return;
  if(e.key.length!==1) return;
  kb=(kb+e.key.toLowerCase()).slice(-3);
  if(kb==='arr'){ kb=''; toast("Arrr! We heard that from the crow's nest. 🦜"); }
});

/* ================= SEA OF THIEVES VIDEO CONTROLS (home) ================= */
var reelBtn=document.getElementById('reelPause'), soundBtn=document.getElementById('soundToggle'), iv=document.getElementById('islandVideo');
var shipReel=document.getElementById('shipReel');
if(shipReel){
  shipReel.addEventListener('canplay',function(){ shipReel.classList.add('ready'); });
  shipReel.addEventListener('error',function(){ shipReel.classList.remove('ready'); });
  var p=shipReel.play(); if(p&&p.catch)p.catch(function(){}); /* autoplay is muted; no-op if blocked */
}
if(soundBtn&&shipReel){
  soundBtn.addEventListener('click',function(){
    shipReel.muted = !shipReel.muted;
    if(!shipReel.muted){
      soundBtn.innerHTML = '🔊 Sound: On';
      soundBtn.classList.add('active');
      toast('🔊 Sound unmuted! Feel the roar of the high seas.');
      var pr=shipReel.play(); if(pr&&pr.catch)pr.catch(function(){});
    }else{
      soundBtn.innerHTML = '🔇 Sound: Off';
      soundBtn.classList.remove('active');
      toast('🔇 Video muted.');
    }
  });
}
if(reelBtn&&iv){
  reelBtn.addEventListener('click',function(){
    iv.classList.toggle('paused');
    var paused=iv.classList.contains('paused');
    if(shipReel){ if(paused){ shipReel.pause(); } else { var pr=shipReel.play(); if(pr&&pr.catch)pr.catch(function(){}); } }
    reelBtn.textContent=paused?'▶ Play Voyage':'⏸ Pause Voyage';
    toast(paused?'Voyage paused. The sea awaits.':'The voyage rolls on! Fair winds.');
  });
}

/* ================= SHIPMAN'S QUARTERS (login) ================= */
$$('form[data-quarters]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var name=f.querySelector('#qName'), id=f.querySelector('#qId');
    var who=(name&&name.value.trim())?name.value.trim():((id&&id.value.trim())?('berth '+id.value.trim()):'matey');
    toast('Berth verified. Welcome aboard, '+who+'! Your parrot is proud.');
    f.reset();
  });
});

/* ================= ISLAND MAP (interactive) ================= */
var MAPDATA={
  chartvault:{n:'The Chart Vault',s:'Cartography, Secret Routes & Celestial Archive',d:'Houses 12,000 maritime charts, stellar astrolabes, and sealed imperial sea routes. Carved into the high red bluffs above the lagoon, where master navigators calculate tides and decode lost islands.',h:'Open at high tide; whisper the password to Brother Anchor.',l:'skills.html',lt:'Browse Cartography Skills'},
  crowsnest:{n:"Crow's Nest",s:'Aerial Lookout & 360° Nautical Library',d:'Perched high on the western bluffs amidst whispering palm canopies. Overlooks the entire seven seas with 37,000 nautical tomes and serves as the roost for Professor Feather’s aerial spy network.',h:'Dawn to Midnight (Late hours decided by the parrot)',l:'skills.html',lt:'Explore the Library'},
  krakenarium:{n:'The Krakenarium',s:'Deep Sea Bestiary & Marine Cryptids Lab',d:'An isolated sanctuary surrounded by hungry reef sharks and deep oceanic trenches. Here, the collegium studies leviathans, krakens, siren acoustics, and abyssal venom. The golden key of Davy Jones unlocks the holding tanks.',h:'Feeding times only: 0600 & 1800 sharp. Do NOT tap the glass.',l:'fleet.html',lt:'Inspect Research Fleet'},
  harbor:{n:'The Harbor',s:'Anchorage, Flagship Basin & Trade Port',d:'Where incoming pirate ships, sloops, and frigates drop anchor. The bustling heart of the collegium with 1,200 docking berths, open-air assemblies, and market trades. Piles of captured doubloons are tallied here every Friday.',h:'Open 24/7. Loudest on Tuesdays.',l:'index.html',lt:'Back to The Harbor'},
  quarterdeck:{n:'The Quarterdeck',s:'Command Bluff & Heavy Cannon Range',d:'The commanding bluff where senior captains and admirals dictate tactical maneuvers, fleet discipline, and artillery duels. Equipped with bronze navigational scopes and heavy broadside cannons overlooking the Western Approaches.',h:'0800–2000. Officers and recruits only.',l:'quartermasters.html',lt:'Meet Quartermasters'},
  drydock:{n:'The Drydock',s:'Shipwrights, Rigging & Hull Forging',d:'Carved into the protected coral basin where wooden hulls are scraped, oak timbers shaped, and black sails woven. Galleons under repair float in the central tidal lock while master carpenters test new armor plating.',h:'Sunrise to sunset; hammer bell rings hourly.',l:'fleet.html',lt:'View The Fleet'},
  crewquarters:{n:'Crew Quarters',s:'1,200 Berths, Hammocks & Dueling Grounds',d:'Swinging hemp hammocks, sea chests, and crossed-cutlass practice rings. Where scallywags and deckhands rest between voyages. Curfew is an optional suggestion that the tide usually resolves.',h:'24/7. Sleeping with one eye open recommended.',l:'crew.html',lt:'Meet The Crew'},
  galley:{n:'The Galley',s:'Mess Hall, Salt Beef & Grog Cellar',d:'The culinary furnace presided over by Mrs. Oat. Serving hearty sea rations, spiced mangoes, roasted boar, and barrels of non-alcoholic grog. The pirate flag flies proudly over the hearth.',h:'Breakfast 0600, Lunch 1200, Feast 1900. Don\'t be late.',l:'feasts.html',lt:'Check Feasts & Raids'},
  treasurevault:{n:'The Treasure Vault',s:'Fortified Endowments & Plunder Reserves',d:'A cavernous sea-cave fortified with iron gates and guarded by skeletal sentinels. Holds 37,000 golden doubloons, ruby chalices, and royal ransom chest endowments. Counted nightly by the High Bursar.',h:'Doors open for the Great Treasure Count only.',l:'doubloons.html',lt:'Inspect Gold Doubloons'},
  xmark:{n:'X Marks The Spot',s:'The Founder\'s Sealed Cache (Secret)',d:'The legendary red cross etched onto the parchment by Captain Bartholomew Drake himself. Rumored to bury the original collegiate charter of 1654, an enchanted silver spyglass, and the secret recipe for eternal sea legs.',h:'Only revealable under the light of a blood moon.',l:'scroll.html',lt:'Unravel The Scroll'},
  goldenchest:{n:'The King\'s Bounty Chest',s:'Endowment Vault & Open Loot',d:'An iron-bound chest overflowing with minted Spanish escudos, pearls, and royal jewels. Any student who solves the collegiate cipher is entitled to one handful of doubloons.',h:'Always gleaming in the sun.',l:'doubloons.html',lt:'Claim Your Bounty'},
  bonesgraveyard:{n:'Siren\'s Boneyard & Skulls',s:'Memorial Sands & Lost Galleons',d:'White sand dunes scattered with ancient anchor chains, weathered rib cages, and warning skulls on pikes. A sacred reminder of treacherous currents and the price of ignoring the compass.',h:'Haunted from twilight to midnight.',l:'legends.html',lt:'Read The Legends'},
  whale:{n:'Old Barnaby (The Whale)',s:'Honorary Chancellor of the Basin',d:'An 80-foot sperm whale that has patrolled the college lagoon since the 17th century. Spouts water on cue when exams are concluded and surfaces to nudge rookie rafts back to port.',h:'Breaches whenever the wind turns east.',l:'scroll.html',lt:'About Our Mascot'},
  seaserpent:{n:'The Ancient Sea Serpent',s:'Guardian of the Southern Shallows',d:'Coiling through the emerald shallows of the southern reef. A legendary sea dragon that tests the nerves of junior sailors practicing nocturnal steering.',h:'Active during spring tides and full moons.',l:'skills.html',lt:'Beast Mastery Skill'},
  ghostship:{n:'The Blacktide Galleon',s:'Flagship of the Collegiate Fleet',d:'The three-masted wooden titan with full billowed sails guarding the Northwest strait. Serves as a floating classroom for advanced rigging, tactical gunnery, and deep-ocean sailing.',h:'Cruising daily across the sound.',l:'fleet.html',lt:'Board The Flagship'},
  compass:{n:'The Cartographer\'s Rose',s:'True North Orientation & Astrolabe',d:'Hand-inked 32-point mariner\'s compass aligned with the magnetic anomaly of Ravenspire. The central sapphire eye reflects Polaris on clear Caribbean nights.',h:'Points True North for eternity.',l:'scroll.html',lt:'Navigational Lore'},
  darkisle:{n:'The Shrouded Atoll',s:'The Black Reef & Smuggler\'s Cove',d:'A mysterious pitch-black islet in the heart of the collegiate bay. Untouched by sunlight, legends speak of a subterranean cavern leading directly beneath the Chart Vault.',h:'Accessible only by rowboat with muffled oars.',l:'wanted.html',lt:'Inspect Wanted Board'}
};

/* Compatibility aliases */
MAPDATA.hall = MAPDATA.harbor;
MAPDATA.library = MAPDATA.crowsnest;
MAPDATA.hold = MAPDATA.crewquarters;
MAPDATA.vault = MAPDATA.treasurevault;
MAPDATA.cannon = MAPDATA.quarterdeck;
MAPDATA.plank = MAPDATA.quarterdeck;
MAPDATA.observatory = MAPDATA.chartvault;
MAPDATA.surgeon = MAPDATA.crewquarters;
MAPDATA.aviary = MAPDATA.crowsnest;
MAPDATA.ravenpost = MAPDATA.harbor;
MAPDATA.wanted = MAPDATA.harbor;
MAPDATA.quarters = MAPDATA.crewquarters;
MAPDATA.divingbell = MAPDATA.krakenarium;
MAPDATA.spire = MAPDATA.chartvault;
MAPDATA.lighthouse = MAPDATA.crowsnest;

var spots=$$('.imap-spot');
if(spots.length){
  var pKicker=document.getElementById('mapKicker'),
      pName=document.getElementById('mapName'),
      pSub=document.getElementById('mapSub'),
      pDesc=document.getElementById('mapDesc'),
      pHours=document.getElementById('mapHours'),
      pLink=document.getElementById('mapLink');

  function showSpot(k){
    var d=MAPDATA[k]; if(!d) return;
    if(pKicker) pKicker.textContent='The Treasure Map · '+k;
    if(pName) pName.textContent=d.n;
    if(pSub) pSub.textContent=d.s;
    if(pDesc) pDesc.textContent=d.d;
    if(pHours) pHours.textContent='Hours: '+d.h;
    if(pLink){ pLink.href=d.l; pLink.textContent=d.lt+' →'; }
  }

  function selectMapSpot(k, e){
    var d=MAPDATA[k]; if(!d) return;
    spots.forEach(function(o){ o.classList.toggle('active', o.dataset.spot===k); });
    $$('.map-chip').forEach(function(c){ c.classList.toggle('active', c.dataset.spot===k); });
    if(e && e.clientX){
      burst(e.clientX, e.clientY, 10);
      spawnSpark(e.clientX, e.clientY);
    }
    toast('⚠️ Error 404: Map route not available! Use your compass and binoculars to navigate.');
    setTimeout(function(){
      window.location.href = '404.html?spot=' + encodeURIComponent(k);
    }, 450);
  }

  spots.forEach(function(s){
    var k = s.dataset.spot;
    var d = MAPDATA[k];
    if(d){
      s.setAttribute('title', d.n + ' (' + d.s + ') — Tap to Chart Route!');
      s.setAttribute('aria-label', d.n + ' — Tap to Chart Route');
      s.style.cursor = 'pointer';
    }
    s.addEventListener('click',function(e){
      selectMapSpot(s.dataset.spot, e);
    });
    s.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        var r = s.getBoundingClientRect();
        selectMapSpot(s.dataset.spot, {clientX: r.left + r.width/2, clientY: r.top + r.height/2});
      }
    });
  });

  $$('.map-chip').forEach(function(chip){
    var k = chip.dataset.spot;
    var d = MAPDATA[k];
    if(d){
      chip.setAttribute('title', 'Chart route to ' + d.n);
    }
    chip.addEventListener('click',function(e){
      selectMapSpot(chip.dataset.spot, e);
    });
  });

  $$('.spot-jump-btn').forEach(function(btn){
    btn.addEventListener('click',function(e){
      var k = btn.dataset.chartSpot;
      window.location.href = '404.html?spot=' + encodeURIComponent(k || 'uncharted');
    });
  });
}

/* ============ PROFESSOR FEATHER — 3D FLIGHT, WHITE POOP, SECRET UNLOCK ============ */
(function(){
  const rig = document.getElementById('parrotRig');
  if(!rig) return;
  const bob = rig.querySelector('.parrot-bob');
  const body = rig.querySelector('.parrot-body');
  const mv = document.getElementById('parrot3d');
  const zzz = document.getElementById('parrotZzz');
  const bubble = document.getElementById('parrotBubble');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const size = () => innerWidth < 640 ? 118 : 170;
  const perch = () => ({x: 14, y: innerHeight - size() - 92});
  let cur = perch();
  function place(x, y){ cur = {x, y}; rig.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; }
  place(cur.x, cur.y);
  addEventListener('resize', () => { if(!flying) place(perch().x, perch().y); });

  /* ---- 3D upgrade + CDN fallback chain ---- */
  let upgraded = false;
  function upgrade(){ if (upgraded) return; upgraded = true; rig.classList.add('has3d'); }
  if (mv){
    mv.addEventListener('load', upgrade);
    mv.addEventListener('error', function(){ /* keep 2D sprite */ });
  }
  const cdnFallbacks = [
    'https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js',
    'https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js'
  ];
  let fb = 0;
  function tryNextCdn(){
    if (upgraded) return;
    if (window.customElements && customElements.get('model-viewer')) return;
    if (fb >= cdnFallbacks.length) return;
    const s = document.createElement('script');
    s.type = 'module'; s.src = cdnFallbacks[fb++];
    document.head.appendChild(s);
    setTimeout(tryNextCdn, 4000);
  }
  setTimeout(tryNextCdn, 6000);

  /* ---- speech bubble ---- */
  let bubbleTimer = null;
  function updateBubblePosition(){
    if(!bubble || !rig) return;
    const r = rig.getBoundingClientRect();
    const winW = window.innerWidth;
    
    bubble.classList.remove('bubble-on-right', 'bubble-on-left', 'bubble-below');
    
    if (r.top < 160) {
      bubble.style.top = 'calc(100% + 14px)';
      bubble.style.bottom = 'auto';
      bubble.classList.add('bubble-below');
    } else {
      bubble.style.bottom = 'calc(100% + 14px)';
      bubble.style.top = 'auto';
    }
    
    if (r.left > winW * 0.5) {
      bubble.style.left = 'auto';
      bubble.style.right = '12px';
      bubble.classList.add('bubble-on-right');
    } else {
      bubble.style.left = '12px';
      bubble.style.right = 'auto';
      bubble.classList.add('bubble-on-left');
    }
  }

  function say(html, ms){
    if(!bubble) return;
    bubble.innerHTML = html + '<button class="b-close" aria-label="Dismiss message">&times;</button>';
    updateBubblePosition();
    bubble.classList.add('show');
    const closeBtn = bubble.querySelector('.b-close');
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); hideBubble(); });
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(hideBubble, ms || 7500);
  }
  function hideBubble(){ if(bubble){ bubble.classList.remove('show'); clearTimeout(bubbleTimer); } }

  /* ---- flight with bank + white whoosh ---- */
  let flying = false, pooping = false, queued = null;
  let lastPoop = Date.now();
  function setBank(deg){ if(body) body.style.transform = 'rotate(' + deg + 'deg)'; }
  function flyTo(tx, ty, cb){
    if (reduce) { place(tx, ty); setBank(0); cb(); return; }
    flying = true; rig.classList.add('flying');
    const sx = cur.x, sy = cur.y, t0 = performance.now(), dur = 640;
    const dir = tx >= sx ? 1 : -1;
    rig.classList.toggle('flying-left', dir < 0);
    const mx = (sx + tx) / 2, my = Math.min(sy, ty) - Math.min(240, Math.abs(tx - sx) * 0.3 + 90);
    setBank(dir * 14);
    function step(now){
      let t = (now - t0) / dur; if (t > 1) t = 1;
      const e = t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
      place((1-e)*(1-e)*sx + 2*(1-e)*e*mx + e*e*tx,
            (1-e)*(1-e)*sy + 2*(1-e)*e*my + e*e*ty);
      if (t < 1) requestAnimationFrame(step);
      else { setBank(0); rig.classList.remove('flying-left'); flying = false; rig.classList.remove('flying'); cb(); }
    }
    requestAnimationFrame(step);
  }

  /* ---- plop sound ---- */
  let actx = null;
  function plop(){
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      actx = actx || new AC();
      const t0 = actx.currentTime;
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(280, t0);
      o.frequency.exponentialRampToValueAtTime(65, t0 + .16);
      g.gain.setValueAtTime(.1, t0);
      g.gain.exponentialRampToValueAtTime(.001, t0 + .2);
      o.connect(g); g.connect(actx.destination);
      o.start(t0); o.stop(t0 + .22);
    } catch(e) {}
  }

  /* ---- WHITE poop splat ---- */
  function splatOn(btn){
    const n = btn.querySelectorAll(':scope > .poop-splat').length;
    btn.classList.add('pooped');
    const s = document.createElement('span');
    s.className = 'poop-splat';
    s.innerHTML = '<span class="poop-core">\u{1F4A9}</span>';
    const lx = Math.round(10 + Math.random()*70), ty2 = Math.round(4 + Math.random()*56);
    s.style.left = lx + '%';
    s.style.top = ty2 + '%';
    s.style.setProperty('--rot', Math.round(Math.random()*44 - 22) + 'deg');
    btn.appendChild(s);
    const ring = document.createElement('span');
    ring.className = 'poop-ring';
    ring.style.left = (lx + 4) + '%';
    ring.style.top = (ty2 + 16) + '%';
    btn.appendChild(ring);
    setTimeout(() => ring.remove(), 700);
    for (let i = 0; i < 3; i++){
      const st = document.createElement('span');
      st.className = 'stink'; st.textContent = '~';
      st.style.left = (lx + (i-1)*9) + '%';
      st.style.top = (ty2 - 4) + '%';
      st.style.animationDelay = (i*.16) + 's';
      btn.appendChild(st);
      setTimeout(() => st.remove(), 2300);
    }
    if (n === 0) for (let i = 0; i < 3; i++){
      const d = document.createElement('i');
      d.className = 'drip';
      d.style.left = (12 + Math.random()*72) + '%';
      d.style.setProperty('--dh', Math.round(9 + Math.random()*13) + 'px');
      d.style.animationDelay = (0.1 + i*.18) + 's';
      btn.appendChild(d);
    }
    setTimeout(plop, reduce ? 0 : 300);
    const msgs = [
      'Professor Feather pooped on that. He calls it peer review. \u{1F99C}',
      'Second load. That button now smells like grog and regret.',
      'That button is now 100% pooped. Full pirate approval. \u{1F4A9}'
    ];
    toast(msgs[Math.min(n, 2)]);
  }

  /* ---- one click: fly -> strain -> DROP -> fly back -> THEN button action ---- */
  function handle(btn, onDone){
    lastPoop = Date.now();
    rig.classList.remove('zzz-idle');
    const cs = size();
    const r = btn.getBoundingClientRect();
    const tx = r.left + r.width/2 - cs/2;
    const ty = r.top + r.height/2 - cs*0.72;
    flyTo(tx, ty, () => {
      pooping = true;
      if (body) body.classList.add('poop-prep');
      setTimeout(() => {
        if (body) body.classList.remove('poop-prep');
        splatOn(btn);
        const p = perch();
        setTimeout(() => {
          pooping = false;
          flyTo(p.x, p.y, () => {
            if (onDone) { setTimeout(onDone, 250); return; }
            if (queued) { const q = queued; queued = null; handle(q); }
          });
        }, reduce ? 300 : 950);
      }, reduce ? 80 : 430);
    });
  }

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    if (t.closest('#parrotRig') || t.closest('#chilliBowl')) return;
    const btn = t.closest('.btn, button, .nav-cta');
    if (!btn) return;
    if (flying || pooping) { queued = btn; return; }
    const href = btn.tagName === 'A' ? btn.getAttribute('href') : null;
    if (btn.tagName === 'A' && href && href !== '#' && !href.startsWith('#')) {
      e.preventDefault();
      handle(btn, () => { location.href = href; });
    } else {
      handle(btn);
    }
  });

  /* ---- SECRET: sleepy parrot + chilli bowl + per-page hints ---- */
  const HINTS = {
    'index.html': 'The island\u2019s real treasure is the Wi-Fi. The network is called Free Grog. No password. Probably.',
    'scroll.html': 'The raven who renamed the college in 1703 still grades. The exam he invented was abolished the same day.',
    'fleet.html': 'The Tightrope carries a 400-year-old contract. Do not inspect it. Do not touch it.',
    'skills.html': 'Learn Reading the Wind first. It appears on every single course. Every one.',
    'quartermasters.html': 'The Quartermasters run the only lost-and-found on the island. It is always full of hats.',
    'crew.html': 'The goat from The Forge now tests the buttons. He has pooped on exactly one of them. You are welcome.',
    'treasure-hauled.html': 'East India Plunder Co. only hires if you can spell dividend. Practice now.',
    'island.html': 'The Spire\u2019s raven has one rule: no selfies. He will remember your face. Forever.',
    'feasts.html': 'Feast rule: the loudest cheer wins the last grog. Last year it was a first-year. She is fine.',
    'doubloons.html': 'The Parrot Partnership pays 10% per clap. Clap loudly. The parrots are on payroll.',
    'legends.html': 'Legends never retire. They just change flags. And, occasionally, colleges.',
    'wanted.html': 'The Wanted Board updates at dusk. Pin your own notice before you forget to.',
    'raven.html': 'Ravens reply within one tide. Parrots reply within one grog. We employ the parrots.',
    'quarters.html': 'Bunk numbers are randomized nightly. Bunk 9 is haunted. On purpose. For character.',
    'enlist.html': 'The application has no address field. The island has no roads. You cannot miss it. That is the point.',
    'forge.html': 'Forge rule III is real: if the wind changes, the design changes. It was never a bug.'
  };
  const PECKS = [
    'Peck again, knave\u2014I know where thou buried the Wi-Fi.',
    'Zounds, thou pestilent ass\u2014peck off!',
    'Pox on thee, thou click-drunk knave!',
    'God\u2019s teeth, cease thy pecking, thou fool!',
    'Thou damned featherless nuisance\u2014begone!',
    'May thy Wi-Fi perish, thou pecking knave!'
  ];

  const SPICY_QUIPS = [
    '<b>SQUAWK!! YAAARRR!</b> THAT\u2019S VOLCANIC GALLOWS PEPPER! Me beak is sizzlin\u2019! 🌶️🔥',
    '<b>AWWWK!</b> ME GIZZARD IS ON FIRE! Mrs. Oat put gunpowder in this chili! 🔥🦜',
    '<b>PIECES OF EIGHT!</b> Spicier than a 32-pounder broadside to the brisket! 💥',
    '<b>SQUAWK!</b> Grog! Bring the Galley grog! Me tongue is walking the plank! 🌊',
    '<b>AWWWK!</b> One peck of that and I\u2019m breathing dragon fire across the Quarterdeck! 🐉🔥',
    '<b>ZOUNDS!</b> That pepper woke all seven generations of me parrot ancestors! 🦜✨'
  ];

  let state;
  try { state = (localStorage.getItem('featherWoken') === '1') ? 'woken' : 'sleepy'; } catch(e){ state = 'sleepy'; }
  let peckIdx = 0, grabbed = false;

  // idle zzz after 25s of no poop duty (subtle hint that the parrot is clickable)
  setInterval(() => {
    if (state === 'sleepy' && !flying && !pooping && Date.now() - lastPoop > 25000) rig.classList.add('zzz-idle');
  }, 5000);

  let bowl = null;
  function showBowl(){
    if (bowl) return;
    bowl = document.createElement('div');
    bowl.id = 'chilliBowl';
    bowl.setAttribute('tabindex', '0');
    bowl.setAttribute('role', 'button');
    bowl.setAttribute('aria-label', 'Pirate chili pepper. Drag it near Professor Feather to feed him spicy fire!');
    bowl.innerHTML = '<img src="img/chili.png" class="chilli-real" alt="Pirate Chili"><span class="chilli-sparks">🔥</span><span class="bowl"></span><span class="b-label">pirate chilli · drag near me!</span>';
    document.body.appendChild(bowl);
    let pid = null, startX = 0, startY = 0, offX = 0, offY = 0, moved = false;
    bowl.addEventListener('pointerdown', (e) => {
      pid = e.pointerId;
      try { bowl.setPointerCapture(pid); } catch(err) {}
      const r = bowl.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      offX = e.clientX - r.left; offY = e.clientY - r.top;
      moved = false;
      bowl.classList.add('dragging');
    });
    let nearChilli = false;
    bowl.addEventListener('pointermove', (e) => {
      if (pid === null || e.pointerId !== pid) return;
      if (!moved && Math.hypot(e.clientX - startX, e.clientY - startY) < 8) return;
      moved = true;
      bowl.style.left = (e.clientX - offX) + 'px';
      bowl.style.top = (e.clientY - offY) + 'px';
      bowl.style.right = 'auto'; bowl.style.bottom = 'auto';

      const pr = rig.getBoundingClientRect();
      const dist = Math.hypot(e.clientX - (pr.left + pr.width/2), e.clientY - (pr.top + pr.height/2));
      if (dist < 230) {
        rig.classList.add('waking');
        if (!nearChilli) {
          nearChilli = true;
          say('<b>AWWWK!!</b> I smell red-hot chili! Bring it closer to me beak! 🌶️🔥', 4500);
        }
      } else {
        nearChilli = false;
      }
    });
    bowl.addEventListener('pointerup', (e) => {
      if (pid === null || e.pointerId !== pid) return;
      pid = null;
      nearChilli = false;
      bowl.classList.remove('dragging');
      if (!moved) {
        grabbed = !grabbed;
        bowl.classList.toggle('grabbed', grabbed);
        if (grabbed) say('Got the red-hot chili! <b>Now bring it to the parrot</b> to feed him! 🌶️', 9000);
        return;
      }
      const pr = rig.getBoundingClientRect();
      if (e.clientX >= pr.left - 50 && e.clientX <= pr.right + 50 && e.clientY >= pr.top - 50 && e.clientY <= pr.bottom + 65) {
        wakeUp();
      }
    });
    bowl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        grabbed = !grabbed;
        bowl.classList.toggle('grabbed', grabbed);
        if (grabbed) say('Got the red-hot chili! <b>Now press Enter on the parrot</b> to feed him! 🌶️', 9000);
      }
    });
  }

  // Show the chili pepper automatically after 1.5s
  setTimeout(showBowl, 1500);

  function strike(){
    state = 'strike';
    rig.classList.add('zzz');
    if (bowl) say('The chili bowl is over there \u2014 <b>red, spicy, draggable</b>! Feed me! 🌶️', 10000);
    else { say('My squawks are on strike! <b>Drag the chilli bowl</b> here to wake me. 🌶️', 12000); showBowl(); }
  }

  function wakeUp(){
    state = 'woken';
    try { localStorage.setItem('featherWoken', '1'); } catch(e) {}
    rig.classList.remove('zzz', 'zzz-idle');
    grabbed = false;
    rig.classList.add('waking');
    const b = document.createElement('span'); b.className = 'burst';
    rig.appendChild(b);
    setTimeout(() => b.remove(), 800);
    setTimeout(() => rig.classList.remove('waking'), 950);
    const quip = SPICY_QUIPS[Math.floor(Math.random() * SPICY_QUIPS.length)];
    say(quip, 11000);
  }

  function parrotTap(){
    if (flying || pooping) return;
    if (grabbed && bowl) { wakeUp(); return; }
    if (state === 'woken') {
      const file = location.pathname.split('/').pop() || 'index.html';
      if (peckIdx === 0) {
        say('<b>Clue:</b> ' + (HINTS[file] || HINTS['index.html']), 12000);
        peckIdx = 1;
      } else {
        say('<b>' + PECKS[(peckIdx - 1) % PECKS.length] + '</b>', 6000);
        peckIdx++;
      }
      return;
    }
    strike();
  }

  if (body){
    body.addEventListener('click', parrotTap);
    body.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); parrotTap(); }
    });
  }
})();
})();
