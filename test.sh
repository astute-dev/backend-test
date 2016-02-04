#!/usr/bin/env bash

ENDPOINT='https://astutedev.herokuapp.com'

# event
CURL $ENDPOINT'/event' | node event.js
