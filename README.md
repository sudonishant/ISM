# ⚓ Ravenspire ~ The Blacktide Collegium (ISM)

> *"College Website Designed by Pirates" — Vibehack Project*

Welcome to **Ravenspire Blacktide Collegium**, an interactive, pirate-themed maritime academy web experience built with high-fidelity animations, interactive charts, 3D models, and authentic pirate lore.

---

## 🗺️ Interactive Treasure Map (The Island)
The campus island chart features 17 fully interactive landmarks aligned with the authentic hand-illustrated collegiate map:
- **📜 Chart Vault**: Cartography, secret routes, and celestial archives
- **🔭 Crow's Nest**: Lookout tower & 360° nautical library
- **🦑 Krakenarium**: Deep sea bestiary and marine cryptids research lab
- **⚓ The Harbor**: Flagship anchorage, trade port, and assemblies
- **⚔️ The Quarterdeck**: Senior naval command and artillery proving grounds
- **🔨 Drydock**: Shipwrights, hull scraping, and sail forging
- **🛏️ Crew Quarters**: 1,200 bunks, hammocks, and dueling rings
- **🍖 The Galley**: Mess hall, salt beef, and grog cellar
- **💰 Treasure Vault**: Fortified endowment cave holding 37,000 doubloons
- **❌ X Marks The Spot**: The founder's sealed secret cache
- **👑 King's Bounty Chest**: Open plunder and student bounty chest
- **💀 Siren's Boneyard**: Memorial sands and pirate skull totems
- **🐋 Old Barnaby**: The collegiate 80-ft mascot sperm whale
- **🐉 Ancient Sea Serpent**: Guardian of the southern reef
- **⛵ Flagship Galleon**: Three-masted titan naval classroom
- **🧭 Grand Compass Rose**: 32-point true north astrolabe
- **🏝️ Shrouded Atoll**: Smuggler's cove in the middle lagoon

Each pin is interactive with real-time feedback, sound effects, particle bursts, and category filter chips.

---

## 🦜 Key Features
- **Interactive 3D Mascot ("Professor Feather")**: Embedded 3D GLB model via `<model-viewer>` with real-time flight, animations, and hidden chili bowl unlock Easter egg.
- **Custom Pirate Cursor**: Golden pirate hook cursor with spark particles.
- **Storm Mode (⛈ / ☀)**: Dynamic rain, dark clouds, and lightning effects across all pages.
- **16 Themed Pages**: Harbor, Scroll, Fleet, Skills, Quartermasters, Crew, Treasure Hauled, Island, Feasts & Raids, Doubloons, Legends, Wanted Board, Send a Raven, Shipman's Quarters, Join the Crew, and The Forge.
- **Static Site Generator**: Fast Node.js build system (`node build.js`).

---

## 🚀 Getting Started

### 1. Run the local server:
```bash
cd seven-seas-college
python3 -m http.server 8080 --bind 0.0.0.0
```
Open `http://localhost:8080` in your browser.

### 2. Rebuilding the HTML pages:
```bash
cd seven-seas-college
node build.js
```
