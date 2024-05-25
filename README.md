# First Angular Project ([link](https://dshreddy.github.io/homes/))

## Angular Setup
- Check node -v & npm -v, if there update
- If not these download the latest version of node.js and npm from the following link [link](https://nodejs.org/en/download/package-manager)
- Install latest version of angular cli by running `npm install -g @angular/cli`

### Files in the project
- Download the init project from [link](https://angular.dev/tutorials/first-app)
- Run `npm install` command to install the dependencies needed to run the app.
- Run `ng serve` command to build and serve the default app.
    ### In the file explorer, find the Angular app files (`/src`)
    - `index.html` is the app's top level HTML template.
    - `style.css` is the app's top level style sheet.
    - `main.ts` is where the app starts running.
    - `favicon.ico` is the app's icon, just as you would find in any web site.
    ### In the file explorer, find the Angular app's component files (`/app`).
    - `app.component.ts` is the source file that describes the `app-root` component. This is the top-level Angular component in the app. A component is the basic building block of an Angular application. The component description includes the component's code, HTML template, and styles, which can be described in this file, or in separate files. <br> <br> In this app, the styles are in a separate file while the component's code and HTML template are in this file.

    - `app.component.css` is the style sheet for this component.
    - New components are added to this directory.
- In the file explorer, find the image directory (`/assets`) that contains images used by the app.
- In the file explorer, find the files and directories that an Angular app needs to build and run, but they are not files that you normally interact with.
    - `.angular` has files required to build the Angular app.
    - `.e2e` has files used to test the app.
    - `.node_modules` has the node.js packages that the app uses.
    - `angular.json` describes the Angular app to the app building tools.
    - `package.json` is used by npm (the node package manager) to run the finished app.
    - `tsconfig.*` are the files that describe the app's configuration to the TypeScript compiler.


## Key Notes
- To generate new component run `ng generate component <component-name>`.
- `Interfaces` are custom data types for your app.

## Hosting Angular Project on github
- `ng add angular-cli-ghpages`
- `ng deploy --base-href=/<git-repo-name>/`
