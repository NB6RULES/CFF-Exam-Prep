# CFF Exam Prep — ME 19-205-0801

**Compressible Fluid Flow** · B.Tech VIII Sem · KTU 2019 Scheme

Complete exam preparation site with full detailed answers for all 4 modules, built from past papers (Apr 2023, Jul 2023, Apr 2024, Sept 2024).

## Live Site

Deploy to GitHub Pages: `https://<username>.github.io/cff-exam-prep/`

## Contents

| Page | Topics |
|------|--------|
| `index.html` | Landing page, module overview |
| `pages/module1.html` | Gas Dynamics, Mach number, Stagnation state, Isentropic flow, C-D Nozzle |
| `pages/module2.html` | Normal Shocks, Oblique Shocks, θ-β-M diagram, Expansion waves |
| `pages/module3.html` | Fanno Flow (friction), Rayleigh Flow (heat transfer), Choking |
| `pages/module4.html` | Pitot tubes, Schlieren, Shadowgraph, Interferometer, Hot wire, LDV, Wind tunnels |
| `pages/numericals.html` | All worked numerical problems from 4 past papers |
| `pages/quickref.html` | Formula sheet, exam strategy |

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source: **Deploy from branch → main → / (root)**
4. Site live at `https://<username>.github.io/<repo-name>/`

## Structure

```
cff-exam-prep/
├── index.html          ← Landing page
├── README.md
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Toggle, search, nav
│   └── nav.js          ← Shared topbar injection
└── pages/
    ├── module1.html
    ├── module2.html
    ├── module3.html
    ├── module4.html
    ├── numericals.html
    └── quickref.html
```

## Features

- Dark theme, mobile responsive
- Accordion Q&A cards — click to expand
- Keyboard shortcut `/` to focus search
- Search filters questions across all content
- Formula boxes with syntax highlighting
- Past paper question tracking (exam frequency tags)
