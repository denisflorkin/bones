'use strict';
/**
  * This is just a few line of example code
  * you should remove them as well as the example a`nothe-module.js` module
  */


import fetch from 'node-fetch'

import { gitHubURL } from './another-module'

const log = console.log.bind(console)

const bodyToJSON = resp => resp.json()

fetch(gitHubURL)
  .then(bodyToJSON)
  .then(log)
