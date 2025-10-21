## How TO RUN THIS PROJECT

1. Install pnpm `npm install -g pnpm@latest-10`
   - Assuming you have `npm` previously installed.

2. `pnpm run dev`
   - Will run on your Localhost and Network since set `"dev": "astro dev --host"` in `package.json`.
   ![alt text](/src/assets/img/image.png)

## HOW TO SET UP Astro JS + Aceternity UI

An updated guide as of (29/5/2025) on how to set up an Astro JS project and plug in [Aceternity UI](https://ui.aceternity.com/) components using [pnpm](https://pnpm.io/).

1. `pnpm create astro@latest`
   - Select yes to installing Dependencies and Git
   - NOTE: Use cmd otherwise error: 
   ```
   pnpm : File C:\Program Files\nodejs\pnpm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at 
   https:/go.microsoft.com/fwlink/?LinkID=135170.
   ```
2. `pnpm astro add react` , `pnpm astro add tailwind`
   - If you created it in a new folder, then remember to `cd "YOUR_PROJECT_NAME"`
   - NOTE: No tailwind config file due to Tailwind V4 update

3. Set import alias for `tsconfig.json`
   ```
   "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    ```
4. Install Shadcn `pnpm dlx shadcn@latest init` and Framer `pnpm i motion clsx tailwind-merge`

5. Install component from Aceternity UI e.g. `pnpm dlx shadcn@latest add https://ui.aceternity.com/registry/background-gradient.json`

6. Create component file in `src/components`. Copy component implementation code from Aceternity.
   - Remove `use:client syntax`
   - Fix import path since we used import alias

7. Import `global.css` in Main Layout file. Import component in the file which you are using it.

8. Initialize component using `client:idle` or `client:load`

9. SUCCESS 🥳!

## HOW TO DEPLOY Astro JS to GitHub pages:

1. Configure `astro.config.mjs` so that GitHub Pages knows where the site will be deployed.
   ```
   export default defineConfig({
   site: 'https://zzsleepycoderzz.github.io',
   base: 'Personal-Website',
   output: 'static',
   // Other config here
   });
   ```
2. Create `deploy.yml` file according to [the Astro JS deployment doc.](https://docs.astro.build/en/guides/deploy/github/) 

3. Add `.nojekyll` file to ensure that GitHub Pages follows the newly created deploy.yml file

## REFERENCES:
https://github.com/Tokigin/astro-aceternity

https://ui.shadcn.com/docs/installation/astro

https://ui.shadcn.com/docs/cli

https://ui.aceternity.com/docs/cli
