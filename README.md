## Currency Converter :moneybag:

A client-side currency converter, which converts Euro, Dollars and Yen in all directions.

[App Screenshot](desktop-screenshot.jpg)

## Note for the Alasco Recruiting Team

Please note that the current head of the master branch has changed since the deadline passed.  
The last commit before the deadline was [this](https://github.com/Dinika/currency-converter/commit/0f208a9850c45009391a5b00e708e81c71b7292f) (SHA 0f208a98 - update tests for Layout)  
This repository at that point in commit history looked like [this](https://github.com/Dinika/currency-converter/tree/0f208a9850c45009391a5b00e708e81c71b7292f).  
Please follow the instructions below to get the app working at the last commit before deadline.  
No changes were made to the basic functionality of the app. Only the following features were added.

- Eslint and Prettier were added to the project
- The UI was updated (It was already responsive before the deadline)
- Error handling for incorrect network requests was implemented

## Getting Started :rocket:

1. Clone (or download) this repository

```
$ git clone https://github.com/Dinika/currency-converter.git
```

2. cd into the repository folder

```
$ cd currency-converter
```

- To checkout the last the commit before the deadline, reset the head to the commit with SHA `0f208a98`

```
$ git reset --hard 0f208a98
```

You may also checkout the `before-deadline-branch`

The app should look like so
[old ui of app](./desktop-old-screenshot.jpg)

- To checkout the latest commit

```
$ git reset --hard origin/master
```

3. Install all the dependencies using npm

```
$ npm install
```

If you don't have npm installed on your system click [here](https://www.npmjs.com/get-npm) for instructions on how to do that

4. **Please skip this step if the head of your repository is at commit `0f208a98` (`update tests for Layout`).**  
   If however you are on the latest commit of the master branch, make sure you stop the development server (if it was running) and run `npm install` before running the following command.

Build the semantic-ui-react assets

```
$ npm run build-semantic
```

5. Build and run the code

```
$ npm start
```

That's it! You should be taken on the home page of the application

6. Run tests (optional)

```
$ npm test
```

or

```
$ yarn test
```

## Dependencies :pushpin:

### Runtime

- react
- semantic-ui-react (and semantic-ui)

### Development

- jest: for running unit and ui tests
- enzyme: react testing utilities
- eslint: linter for js and jsx files (uses airbnb's styleguide)
- axios: for making HTTP requests to the API
- eslint: for linting javascript
- prettier: for ensuring proper formatting

## License

MIT License

## Author :angel:

Dinika Saxena

- e-mail: dinika.saxenas@gmail.com
