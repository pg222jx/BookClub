const { performance } = require('perf_hooks')
const fs = require('fs')
const mysql = require('mysql')
const lineReader = require('readline')

require('dotenv').config()
const timer = performance.now()