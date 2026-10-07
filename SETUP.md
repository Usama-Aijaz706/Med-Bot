# Medbot setup guide

This gets the Expo app running on your computer and on a physical phone. You do not need Android Studio or Xcode for daily UI work.

## What you need

| Tool | Why | Check |
| --- | --- | --- |
| **Node.js 18+** (20 or 22 recommended) | Runs Expo | `node -v` |
| **npm** (ships with Node) | Installs packages | `npm -v` |
| **Git** (optional) | Version control | `git --version` |
| **Expo Go** on your phone | Live preview | App Store or Google Play |

Phone and computer should be on the **same Wi‑Fi**. If that fails, use tunnel mode below.

## 1. Install Expo Go on your phone

- iPhone: [Expo Go on the App Store](https://apps.apple.com/app/expo-go/id982107779)
- Android: [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

Open it once so it is ready to scan a QR code.

## 2. Install project dependencies

In a terminal:

```bash
cd Med-bot/mobile
npm install
```

The project includes `.npmrc` with `legacy-peer-deps=true` so npm can resolve Expo SDK 57 + React 19 cleanly.

## 3. Start the app

```bash
npx expo start
```

A QR code appears in the terminal (and in a local browser dashboard).

- **Android:** open Expo Go and tap **Scan QR code**, or scan with the system camera if your device supports it.
- **iPhone:** open the system **Camera** app, scan the QR code, then open in Expo Go.

The first load can take 30–60 seconds while Metro bundles the app. After that, saving a file reloads on the phone automatically.

## 4. If the phone cannot connect

Try these in order:

1. Same Wi‑Fi, and disable guest/VPN networks if you are on one.
2. Restart with LAN explicitly:

   ```bash
   npx expo start --lan
   ```

3. Windows firewall: allow **Node.js** on private networks when prompted.
4. Tunnel (slower, works across networks):

   ```bash
   npx expo start --tunnel
   ```

   The first tunnel start may install `@expo/ngrok`.

5. Clear the bundler cache:

   ```bash
   npx expo start --clear
   ```

## Useful commands

Run these from `mobile/`:

```bash
npx expo start          # default (QR for Expo Go)
npx expo start --tunnel # if LAN fails
npx expo start --web    # optional browser preview
npx tsc --noEmit        # TypeScript check
npx expo-doctor         # diagnose Expo setup
```

Press in the Expo terminal:

- `r` — reload
- `m` — toggle menu
- `?` — all keyboard shortcuts

## Project layout

```
Med-bot/
  SETUP.md              ← this guide
  README.md
  mobile/               ← Expo app (this is what you run)
    src/
      app/              ← Expo Router screens
        _layout.tsx     ← fonts, splash hide, stack
        index.tsx       ← Screen 1: Splash
      screens/          ← designed screens
      components/       ← brand mark, blobs, heartbeat
      theme/            ← colors, type, spacing
    assets/             ← app icons
    app.json            ← Expo config
    package.json
```

Python backend is not in the repo yet. Do not add it until the frontend screens are in place.

## New teammate checklist

1. Install Node.js LTS from [nodejs.org](https://nodejs.org).
2. Install Expo Go on your phone.
3. `cd mobile` → `npm install` → `npx expo start`.
4. Scan the QR code.

That is the full frontend environment.
