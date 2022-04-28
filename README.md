# React Newsies

## How to use this repo
This repo has multiple branches with a React app at various stages of completion.

We recommend that you fork and clone this repo and code along throughout the week!

- Fork: click button top right
- Clone down your fork: `git clone https://github.com/<your-gh-username>/fp_codealong_react_newsies newsies`
- `cd newsies`
- Create a fresh copy of the default `starter` branch to work on: `git co -b codealong`

### Branches
- `starter` => A content-only starting point you can clone down to code along with
- `state-eventing` => The complete version of the code workshopped in the React State & Eventing live lecture
- `props-structure` => The complete version of the code workshopped in the React Props & File Structure live lecture
- `nav-rrv6` => The complete version of the code workshopped in the React Navigation live lecture
- `useEffect-rrv6` => The complete version of the code workshopped in the React useEffect live lecture

## Update
 I managed to remove 2 testing errors by:
 
 - Downgrading Jest v13 to v12.1.2 `npm i -D @testing-library/react@12.1.2`
 - By adding a @jest-environment docblock at the top of the file, you can specify another environment to be used for all tests in that file

 - So added `/**
 * @jest-environment jsdom
 */`
  to App.test.js (since the node test environment is used by default. We want to use jsdom instead)

- See more info at https://jestjs.io/docs/configuration#testenvironment-string 

