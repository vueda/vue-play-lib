# vue-play-lib

This is a sample template and playground to create a VueJS component library with the following features:
- Playground environment to create your components in isolation
- Build your components on top of Vuetify
- Create Vue components with Typescript and Vue Class Component
- Testing with Jest
- Export the library as a Vue plugin
- Generate docs with storybook (Soon)

## Project structure

```
dist                    -> Generated files. Lib final build. Crrated with npm run build
src                     -> Source code  
|- assets               -> Components assets, like images
|- builder              -> Optional. Place Typescript builders to create UI
|- components           -> Your Vue Components (Typescript + Class Component + SCSS Style)
|- playground           -> A Vue app to test your components in development. Used on npm run dev
|- styles               -> Global SCSS style files
|components-loader.ts   -> Util to load all files in 'components' folder.
|lib.ts                 -> Entrypoint for library generation
tests/unit              -> Tests folder. Using Jest.
```

### package.json

Some important notes about the package.json configurations:

The available scripts (run with npm run 'script-name') are:

```
dev         -> Start a development server based on the playground folder. Use it to see your components in action while you work on them.
build       -> Generates de dist folder. It's your library content to be delivered
test:unit   -> Run your tests
lint        -> Run lint and fix automatically some problems

```

The <code>"typings": "src/lib.ts"</code> entry is to provide the autocomplete inside IDE's while using some Typescript classes from the lib.

## Project setup

- Install NodeJS.
- Run <code>npm install</code> to install de dependencies.

## Developing your components


## Publishing


## Using in your project

To use this component library in your Vue project look the steps below according to the type of project you have.

### Nuxt


