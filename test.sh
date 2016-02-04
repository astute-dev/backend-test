#!/usr/bin/env bash

set -e -o pipefail

# event
echo '/event'
node event.js

# courses
echo '/courses'
node courses.js
