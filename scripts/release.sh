#!/usr/bin/env bash

GITHUB_REF_SLUG=kafka-management@v0.0.1
echo "Release process for TAG: $GITHUB_REF_SLUG"

## Pick right release based on tag structure
dirname $0`/lib/releaseFromTag $GITHUB_REF_SLUG`

 
