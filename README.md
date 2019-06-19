# Medly Comonents

Medly components are themable react components which are created with the help of react, style-components, typescript & babel 7. You can checkout the storybook of the components [here](https://medlypharmacy.github.io/medly-components).

Medly components library is made up of 5 different packages:

-   [Core](https://github.com/medlypharmacy/medly-components/tree/master/packages/core)
-   [Layout](https://github.com/medlypharmacy/medly-components/tree/master/packages/layout)
-   [Icons](https://github.com/medlypharmacy/medly-components/tree/master/packages/icons)
-   [Utils](https://github.com/medlypharmacy/medly-components/tree/master/packages/utils)
-   [Theme](https://github.com/medlypharmacy/medly-components/tree/master/packages/theme)

## Major thing to remember

If you want to upload components to s3 bucket you have to have your aws credentials stored in ~/.s3cfg or ~/aws/credential.

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

-   `yarn build` to build components
-   `yarn commit` to commit with conventional-commit approach
-   `yarn lint:css` to run the css lint
-   `yarn lint:ts` to run the ts lint
-   `yarn lint` to run both css & ts lint
-   `yarn test` to run tests and type check
-   `yarn test:update` to upgrate snapshots
-   `yarn test:watch` to watch tests
-   `yarn type-check` to run tsc to check types
-   `yarn test:jest` to run test only
-   `yarn storybook` to run storybook for live reloading your components
-   `yarn release` to version your components
-   `yarn s3upload` to upload your components to s3 bucket
