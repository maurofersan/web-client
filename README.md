## Microfrontends Project (Angular 17 + Module Federation)

This repo contains a shell (host) app and 4 microfrontends (remotes) using Angular 17, Standalone Components, Webpack Module Federation, SASS, and BEM.

### Apps

- shell: `per-shortcuts-mf-wc-shell-development-scb` (host) — port 4200
- onboarding: `per-shortcuts-mf-wc-onboarding-development-scb` (remote) — port 4201
- otp: `per-shortcuts-mf-wc-otp-development-scb` (remote) — port 4202
- loans: `per-shortcuts-mf-wc-loans-development-scb` (remote) — port 4203
- identity: `per-shortcuts-mf-wc-identity-development-scb` (remote) — port 4204

### Run locally

Open two terminals (or more):

1. Start all remotes

```bash
npm run start:onboarding
npm run start:otp
npm run start:loans
npm run start:identity
```

2. Start the shell

```bash
npm run start:shell
```

Then open `http://localhost:4200`.

### Navigation flow

- Welcome (Onboarding): `/welcome`
- OTP: `/otp`
- Loans Installments: `/loans/installments`
- Biometric (Identity): `/biometric`
- Loan Summary: `/loans/summary`

The shell’s `app.routes.ts` lazy-loads each remote via Module Federation.

### How MFEs integrate

- Shell’s `webpack.config.js` remotes:
  - `onboarding` → `http://localhost:4201/remoteEntry.js`
  - `otp` → `http://localhost:4202/remoteEntry.js`
  - `loans` → `http://localhost:4203/remoteEntry.js`
  - `identity` → `http://localhost:4204/remoteEntry.js`
- Remotes expose `./Module` (their `app.routes.ts`).
- Shell routes use `import('remoteName/Module').then(m => m.RemoteModule)`.

### Communication between microfrontends (beginner-friendly)

- Keep MFEs independent; use Router to sequence screens.
- Pass simple state via query params/local storage.
- Share only contracts via `projects/shared-contracts`.

Advanced options later: shared event bus, backend persistence, NgRx/Signals per app.

### Styling

- SCSS with BEM, styles scoped per component.

Example (Loans MFE):

```scss
.loan-installment {
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  &__list {
    list-style: none;
    padding: 0;
  }
  &__item {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
  }
}
```

### Scripts

Add these npm scripts in `package.json` if missing:

```json
{
  "scripts": {
    "start:shell": "ng serve per-shortcuts-mf-wc-shell-development-scb -o",
    "start:onboarding": "ng serve per-shortcuts-mf-wc-onboarding-development-scb -p 4201",
    "start:otp": "ng serve per-shortcuts-mf-wc-otp-development-scb -p 4202",
    "start:loans": "ng serve per-shortcuts-mf-wc-loans-development-scb -p 4203",
    "start:identity": "ng serve per-shortcuts-mf-wc-identity-development-scb -p 4204"
  }
}
```

### Useful files

- Shell routes: `projects/per-shortcuts-mf-wc-shell-development-scb/src/app/app.routes.ts`
- Shell MF config: `projects/per-shortcuts-mf-wc-shell-development-scb/webpack.config.js`
- Remote exposes: `projects/*/webpack.config.js`
- Shared lib: `projects/shared-contracts`

### Beginner steps

1. Start all remotes, then the shell.
2. Go to `http://localhost:4200` and use the top nav.
3. Click Loans → choose an installment → see summary.
4. Explore `projects/per-shortcuts-mf-wc-loans-development-scb/src/app/features/*`.
