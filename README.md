# BG Grill 77 — independent concept

An independent, five-page PRDXQ website concept for BG Grill 77 in Kelsterbach. This work was not commissioned, reviewed or approved by the business. It must not be presented as its official site.

## Local preview

Open `index.html` directly, or serve this folder with any static HTTP server. The concept has no build step, tracking scripts, external fonts, embedded maps, order backend, booking system, contact form, or third-party images.

## Pages

- `index.html` — local introduction and visit paths
- `speisekarte.html` — transparent menu status; no dishes or prices invented
- `besuch.html` — source-attributed opening times, address, directions and listed services
- `kontakt.html` — verified phone, email and address via direct links
- `konzept.html` — scope, sources and unresolved details

## Sources and factual limits

Primary reference checked 16 October 2026: [BG Grill 77 operator page on DISH/eatbu](https://bggrill77.eatbu.com/?lang=de). It lists Kattowitzer Straße 2, 65451 Kelsterbach, telephone 06107 9888788, kasim.pueskuelev@freenet.de, opening hours, cash payment, takeaway, outdoor seating, parking and accessibility. The page reviewed did not display a menu or item prices.

The listed operator-page hours are Monday–Friday 08:30–20:00, Saturday 10:00–19:00, Sunday closed. Public directories differ on those times. The concept labels operator-page hours as unconfirmed; call before travelling. The [Firmania listing](https://firmania.de/kelsterbach/b-g-grill-77-1675641) is used only for comparison. The [City of Kelsterbach 2024 notice](https://www.kelsterbach.de/PDF/Kelsterbach_Aktuell_Ausgabe_38_2024.PDF?Ext=PDF&ObjID=614&ObjLa=1&ObjSvrID=3950&WTR=1&_ts=1726807987) is historical and is not used as current service or hours evidence.

No original logo, business photography, customer reviews, menu, prices, contact form, or testimonials were copied. The abstract illustration and typographic mark are original concept elements and are not represented as official branding. No specific accessibility facilities beyond the operator's broad listing are asserted.

## Implementation

Static HTML, CSS and vanilla JavaScript. The language toggle provides German and English on each page; language selection is carried in the query string and no preference is stored. The location route opens OpenStreetMap only after a visitor clicks. All pages include `noindex`, and `robots.txt` requests that crawlers stay away while this remains an unapproved concept. Before any official deployment, the business would need to approve the content and branding, confirm current menu, hours and facilities, supply proper legal/privacy text for the final hosting and analytics choices, and decide whether a content editor or ordering workflow is required.

## Deployment

GitHub Pages is deployed from the `main` branch via `.github/workflows/pages.yml`. This public portfolio concept is not a client production deployment.

