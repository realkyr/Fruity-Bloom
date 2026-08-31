#!/usr/bin/env node
/**
 * Launcher for vue-cli-service.
 *
 * Webpack 4 hashes module identifiers with MD4, and OpenSSL 3 — which ships
 * inside Node 17 and newer — removed it. Several of the call sites hardcode
 * the algorithm, so the only reliable fix short of upgrading webpack is to
 * start Node with the legacy provider enabled. That flag has to be set before
 * Node boots, so this wrapper re-launches the CLI with it, and only on the
 * Node versions that actually need it.
 */
const { spawn } = require('child_process')
const crypto = require('crypto')
const path = require('path')

const cli = require.resolve('@vue/cli-service/bin/vue-cli-service.js')

let needsLegacyProvider = false
try {
  crypto.createHash('md4')
} catch (e) {
  needsLegacyProvider = true
}

const nodeArgs = needsLegacyProvider ? ['--openssl-legacy-provider'] : []
const child = spawn(
  process.execPath,
  [...nodeArgs, cli, ...process.argv.slice(2)],
  { stdio: 'inherit', cwd: path.join(__dirname, '..') }
)

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  else process.exit(code)
})
