[![MIT License][license-image]][license-url]

# Total.js + React Template

Full stack template with [react](reactjs.org) and [totaljs framework](totaljs.com)

## Installation

``` bash
npm install (or yarn install)
```

## Usage

Template simulate async request on the server.
Download two items from the NOSQL totaljs DB and show these items as json.

The react client is located in the `client` directory.

The API definition is in the `controllers`.

## Start

### Run in development mode
```bash
npm run dev
```
This will start all the server and webpack for hot-reloaded UI.

Open http://localhost:8080/ in the browser.

### Run in production mode
```bash
npm run build
npm run start
```
This will pack UI with rollup and start production server.

Open http://localhost:8000/ in the browser.

## License

The source-code is under __MIT license__.

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: license.txt
