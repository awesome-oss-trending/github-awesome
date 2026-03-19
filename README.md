# Awesome Rust + SvelteKit Products

A curated collection of open-source products built with **Rust** as the backend and **SvelteKit** as the embedded frontend/UI.

## Vision

Build high-performance, open-source tools using:

- **Rust** — Backend, CLI, core logic, and server
- **SvelteKit** — Embedded frontend served directly from the Rust binary
- **Open Source First** — Ship everything as open source, then build sustainable products on top

## Architecture

```
┌─────────────────────────────────┐
│         SvelteKit UI            │
│   (embedded in Rust binary)     │
├─────────────────────────────────┤
│        Rust Backend             │
│  (Axum / Actix / Tauri)        │
│  API + Static File Serving      │
└─────────────────────────────────┘
```

The SvelteKit app is built at compile time and embedded into the Rust binary using tools like `rust-embed` or `include_dir`, producing a single distributable binary with the full UI included.

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Backend     | Rust (Axum / Actix-web) |
| Frontend    | SvelteKit (SSG/SPA)     |
| Embedding   | rust-embed / include_dir|
| Database    | SQLite / PostgreSQL     |
| Auth        | JWT / OAuth2            |
| Deployment  | Single binary / Docker  |

## Project Ideas

### 1. DevDash — Developer Dashboard
A self-hosted developer dashboard that aggregates GitHub activity, CI/CD status, and project metrics.

### 2. NoteForge — Collaborative Notes
A fast, local-first note-taking app with real-time collaboration powered by CRDTs.

### 3. FormFlow — Form Builder & Collector
An open-source form builder with analytics, embeddable forms, and webhook integrations.

### 4. LogLens — Log Viewer & Analyzer
A lightweight, self-hosted log aggregation and search tool for small teams.

## Monetization Strategy

1. **Open Core** — Free open-source base, paid premium features
2. **Hosted/Cloud** — Offer a managed SaaS version
3. **Support & Consulting** — Enterprise support plans
4. **Marketplace** — Plugins and integrations

## Getting Started

```bash
# Clone this repo
git clone https://github.com/mbaneshi/awesome-rust-sveltekit.git

# Explore project templates (coming soon)
cd awesome-rust-sveltekit
```

## Inspiration & Learning Resources

- Rust web frameworks: Axum, Actix-web, Rocket
- SvelteKit documentation and ecosystem
- Single-binary web apps with embedded frontends
- Open source business models

## Roadmap

- [ ] Project template: Rust + SvelteKit starter
- [ ] First product prototype (DevDash)
- [ ] CI/CD pipeline setup
- [ ] Documentation and contribution guide
- [ ] Launch on GitHub and community channels

## License

MIT

---

*Built with Rust and SvelteKit. Open source. Ship fast.*
