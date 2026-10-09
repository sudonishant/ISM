# ⚓ Ravenspire Blacktide Collegium
### "College Website Designed by Pirates" — built, styled & pooped upon entirely by pirates

**Run it:** `cd seven-seas-college && python3 -m http.server 8080 --bind 0.0.0.0` → open `http://localhost:8080`

---

## 📁 Workspace structure

| Path | What it is |
|---|---|
| `index.html` … `forge.html` | **16 generated pages** (do not edit by hand — edit `build.js` and run `node build.js`) |
| `build.js` | Node generator — all page content, nav, footer, hero, map |
| `style.css` | Base pirate theme (Sea of Thieves aesthetic, hook cursor, waves, storm) |
| `extra.css` | Phase 2+ styles: island "video" hero, treasure map, **Professor Feather 3D parrot, white poop, chilli-bowl secret** |
| `main.js` | All behaviour: hook cursor, map, reel, forms, **parrot flight + poop + secret unlock** |
| `img/parrot.glb` | **Real 3D Pirate Parrot** (converted from the Sketchfab model, cannon removed, 38.5k faces) |
| `img/logo.jpg` | Golden Ravenspire Blacktide Collegium crest (nav / hero / footer / favicon) |
| `img/parrot.jpg` | 2D parrot sprite — automatic fallback when WebGL/CDN is unavailable |
| `img/island-hero.jpg`, `img/island-top.jpg` | AI-generated gothic island (hero "video" stills + treasure map) |
| `img/ship-deck.jpg` … (12 more) | Ship, storm, lighthouse, treasure, parrot, captain, doubloons photos |
| `img/cursor-hook.png` | The pirate hook cursor (replaces default cursor, all pages) |
| `source/Pirate_Parrot.usdz` | **Original** Sketchfab 3D model (parrot + cannon) |
| `source/convert_parrot.blender.py` | Blender 4.3 script used to strip the cannon, fix orientation, decimate & export the GLB |

## 🦜 Professor Feather — the 3D parrot
- Real-time 3D (model-viewer) with 2D sprite fallback + 2-CDN fallback chain
- Clicks any **button** → flies with bank + white whoosh → strains → **white poop** drops with impact ring, stink lines & drips → flies back → *then* the button works
- **Secret unlock:** click the parrot → "squawks on strike" → drag (or tap, or keyboard Enter) the **chilli bowl** onto him → wakes up → per-page clues → peck one-liners ("Zounds, thou pestilent ass—peck off!")
- Woken state persists in `localStorage`

## 🗺️ 16 pages (pirate naming)
Harbor (home) · Scroll (about) · Fleet (departments) · Skills (courses) · Quartermasters (faculty) · Crew (students) · Treasure Hauled (placements) · Island (campus + interactive treasure map, 17 spots) · Feasts & Raids (events) · Gold Doubloons (fees/bounties) · Legends (alumni) · Wanted Board (notices) · Send a Raven (contact) · Shipman's Quarters (login) · Join the Crew (admissions) · **The Forge** (built-by-pirates credits)

## 🔧 Rebuilding
```bash
cd /home/user/seven-seas-college
node build.js        # regenerates all 16 pages
```
CSS/JS changes: just save the file, no rebuild needed.
