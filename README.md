# ha2go
Vue.js web app for BVG hackathon 2018   
API: https://sims.car2go.com/

## Goal
It should:
- help you to understand how to use car2go API
- facilitate your ideas and creativity

## Important defaults
- cars may disappear, it means they have been rented out
- history of rentals `/car/vin` contains rental start events only

## Commands
```javascript
// Project setup
yarn install

// Compiles and hot-reloads for development
yarn serve

// Compiles and minifies for production
yarn build

// Lints and fixes files
yarn lint
```

## App features
- mobile ready
- location accessible by url (http://localhost:8080/#/berlin)
- dropdown section behaviour depends on active location (shown/hidden)
- map is loaded after locations are ready and city is selected
- custom car2go map markers

## Dependencies
- **Vue** - javascript framework
- **Vuex** - client-side state storage. I picked it because it's one of the simplest Flux inspired implementations I've seen
- **Vue Router** - powerfull router for Vue because there is a need to navigate
- other blows and whistles

## CSS Framework
Functional part first but look is important too. Organizing a chaos is no easy task, hopefully spectre.css will help you. Just ~10kB gzipped.

## Polling concept
Sample concept of polling:
- send a new request each n seconds (e.g. each 5 sec)
- limit max number of recurring requests (e.g. 30), or poll no longer than 5 min
- disable polling for inactive tab (experimental)
- resume polling for active tab (experimental)

Using websockets might be a good way to avoid polling and save computation resources of server and client. Polling has it's affects of Vuex store. When store gets big enough each store update comes with a cost.
