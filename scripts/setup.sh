#!/bin/bash
# Menyiapkan HyperFrames: dependensi npm, Chrome Headless Shell untuk render,
# dan skills HyperFrames untuk agen AI. Jalankan sekali per mesin/container.
set -euo pipefail

cd "$(dirname "$0")/.."

npm install --no-audit --no-fund
npx hyperframes telemetry disable >/dev/null 2>&1 || true
npx hyperframes browser ensure
npx hyperframes skills update
npx hyperframes doctor || true
