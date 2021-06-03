#!/usr/bin/env bash

echo "Release process for TAG: $GITHUB_REF_SLUG"

yarn login $NPM_USER $NPM_TOKEN
yarn workspaces run packageRelease