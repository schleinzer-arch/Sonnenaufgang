# Unser Wochenende 🤍
### Überraschungstrip zum Sonnenaufgang und weiter
**28. – 30. August 2026 · Für Marcela, Clemens und Koudy 🐾**

---

## Deployment

### GitHub Pages
1. Dieses Repository auf GitHub pushen
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Die App ist unter `https://[username].github.io/[repo-name]` erreichbar

### Cloudflare (Custom Domain)
1. In Cloudflare DNS: CNAME-Eintrag `[deine-domain]` → `[username].github.io`
2. In GitHub Pages Settings: Custom domain eintragen
3. "Enforce HTTPS" aktivieren

---

## Struktur
```
/
├── index.html        # Die komplette App
├── manifest.json     # PWA Manifest
├── sw.js             # Service Worker (Offline)
└── assets/
    ├── zug.jpg           # Startscreen / Salamander
    ├── sonnenaufgang.jpg # Sonnenaufgang am Schneeberg
    ├── brief.png         # Überraschungs-Screen
    ├── tierwelt.png      # Tierwelt Herberstein
    ├── baumgartner.png   # Brunch Station Baumgartner
    ├── masenberg.png     # Ringwarte am Masenberg
    ├── poellauberg.png   # Pöllauberg Wallfahrtskirche
    ├── riegerbauer.png   # Landgut Riegerbauer
    ├── waldhof.png       # Gasthof-Pension Waldhof
    ├── karte.png         # Illustrierte Karte
    ├── icons.png         # Icon-Set Navigation
    ├── icon-192.png      # PWA Icon
    └── icon-512.png      # PWA Icon
```

## PWA – Auf Homescreen speichern
- **iOS Safari**: Teilen → "Zum Home-Bildschirm"
- **Android Chrome**: Menü → "App installieren"

## Passwort
`sonnenaufgang` (Groß/Kleinschreibung egal)
