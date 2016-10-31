# movie-library
A UI to search the Movie DB

## Features
* Search The Movie Database using TMDb API
* Pagination of search results
* Display details of selected movie
* Fully responsive (can be browsed on mobile devices)
* Share searched movie or movies list url by copying from the browser url bar
* After pasting url in the browser, go directy to search results or movie details

## Local Installation

Install [node.js](https://nodejs.org)

Clone this repo and check out directory

```
git clone https://github.com/DarekPobozniak/movie-library.git && cd movie-library
```

Install dependencies

``` text
npm install
```

## Development

```
npm start
```

Automatically recompiles resources when files change and reloads the page in browser

Once run, open <http://localhost:8765/>

### Linting

```
npm run lint
```

### Testing

```
npm run test
```

## Production

```
npm run build
```

Creates minified javascript and CSS

```
npm run open
```

Opens the page in your browser
