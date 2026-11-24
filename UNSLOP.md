# Unslop pass

Done with the unslop skill (by Damir Sokolovsky, @heydamir, CC BY 4.0), 24 November 2026.

## Audit

Slop level: light. The template already had its own world (hearth, ember, olive, Fraunces and Manrope), so this was polish mode.

- Uppercase tracked eyebrow labels on every section and page hero (`.eyebrow` in `global.css`), footer headings, hours table header
- Radial color wash behind the home hero and every page hero (`index.astro`, `PageHero.astro`)
- Radial glow circle behind the hearth illustration (`HeroArt.astro`)
- Looping motion: flames flickering forever and sparks rising on a loop (`HeroArt.astro`)
- Buttons lifting 2px on hover, every button a full pill at weight 700 (`global.css`)
- Uppercase "TODAY" pill badge in the hours table (`HoursTable.astro`)
- Glow halo on the open-now dot (`HoursToday.astro`)
- Italic for emphasis on the chef quote (home and About) and the menu section note
- Heavy weights: dietary tags at 800, numbers, labels and hours at 700
- Zero-padded numbering "01 02 03" on the highlights
- Gallery captions as dark pills floating over each picture
- Trailing period on the hero headline ("Slow fire, honest food.")
- Pill shaped menu jump links and map label

## Direction

- Product: the site of a wood-fired neighborhood restaurant, so people can see the menu, check tonight's hours and book a table
- Character: smoky, generous, unhurried
- World: an oak hearth at night, linen, a printed menu card with prices down the right edge
- Moments: the hearth illustration in the hero, and the menu itself with its dotted leaders and ember prices
- Signature: the dotted leader running from each dish to its price, on the home page and the menu

## What changed

- Spacing: the highlights band was 120px above and below three short lines; now 48 to 80
- Color: radial washes and the glow removed; heroes sit on the flat night brown with a hairline; open-now dot uses the toned positive green without a halo
- Copy: no period on the hero headline; "today" in the hours table is quiet ember text instead of a badge
- Type: eyebrows, footer headings and table headers in sentence case at normal tracking; headings at 500; buttons and labels at 600 at most; no italic anywhere
- Details: buttons at a 10px radius with a quieter outline for the secondary; jump links, tags and the map label at 6 to 8px; plain numbers 1, 2, 3; gallery captions as muted text under each picture
- Motion: flames and sparks no longer loop; buttons change color on hover and press down slightly; one easing curve

screenshot-2: Menu page
screenshot-3: Home, the chef section
