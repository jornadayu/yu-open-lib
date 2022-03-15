#!/bin/sh

NEW_VERSION=$1

# Replace all Unreleased badges with passed v ersion
grep -rl 'BADGES.UNRELEASED' "./src/stories" | xargs sed -i "s/BADGES.UNRELEASED/'v$NEW_VERSION'/g"

# Remove all BADGES import
yarn run eslint --fix "src/stories/**/*.{ts,tsx}"
