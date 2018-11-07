#!/bin/bash
set -e
set -o pipefail
npm run build
surge dist hyperapp-demo.surge.sh
