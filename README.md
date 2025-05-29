# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


HOW TO DEPLOY Astro JS to GitHub pages:
1. Set config so that GitHub Pages knows where the site will be deployed
   site: 'https://zzsleepycoderzz.github.io',
   base: 'Personal-Website',
   output: 'static',
2. Create deploy.yml file according to documentation
https://docs.astro.build/en/guides/deploy/github/

3.Add .nojekyll file to ensure that GitHub Pages follows the newly created deploy.yml file

HOW TO SET UP Astro JS + Aceternity UI using pnpm

1. pnpm create astro@latest
   - Install Dependencies and Git
   - NOTE: Use cmd otherwise error: pnpm : File C:\Program Files\nodejs\pnpm.ps1 cannot be loaded because running scripts is 
disabled on this system. For more information, see about_Execution_Policies at 
https:/go.microsoft.com/fwlink/?LinkID=135170.
2. pnpm astro add react, pnpm astro add tailwind
   - NOTE: No tailwind config file due to Tailwind V4 update
3. Set import alias for tsconfig.json 
4. Install Shadcn pnpm dlx shadcn@latest init and Framer pnpm i motion clsx tailwind-merge
5. Install component from Aceternity UI e.g. pnpm dlx shadcn@latest add https://ui.aceternity.com/registry/text-generate-effect.json
6. Create component file in src/components. Copy code from Aceternity.
   - Remove use:client syntax
   - Fix import path since we used import alias
7. Import global.css and component
8. Initialize component using client:idle or client:load

REFERENCES:
https://github.com/Tokigin/astro-aceternity
https://ui.shadcn.com/docs/installation/astro
https://ui.shadcn.com/docs/cli
https://ui.aceternity.com/docs/cli
