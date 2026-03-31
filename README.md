# Assisi 2026 - Pellegrinaggio

Questo è il sito ufficiale del pellegrinaggio ad Assisi.

## Come avviare il sito localmente

1. Installa le dipendenze:
   ```bash
   npm install
   ```

2. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

3. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

## Come distribuire su GitHub Pages (GitHub Actions)

Ho configurato un workflow di GitHub Actions per distribuire automaticamente il sito su GitHub Pages ogni volta che effettui un push sul ramo `main`.

### Passaggi per la configurazione:

1. **Crea un repository su GitHub** e carica il codice.
2. **Abilita GitHub Pages**:
   - Vai su `Settings` > `Pages`.
   - Sotto `Build and deployment` > `Source`, seleziona `GitHub Actions`.
3. **Configura il percorso base (se necessario)**:
   - Se il tuo sito sarà ospitato su `https://<username>.github.io/<repo>/`, apri `vite.config.ts` e decommenta la riga `base: '/assisi-2026/'`, sostituendo `assisi-2026` con il nome del tuo repository.
4. **Effettua il push**:
   - Ogni volta che carichi modifiche sul ramo `main`, GitHub Actions costruirà e pubblicherà il sito automaticamente.

### File di configurazione:
- `.github/workflows/deploy.yml`: Il file che gestisce la build e la distribuzione.
- `vite.config.ts`: Contiene la configurazione per il percorso base.
