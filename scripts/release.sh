#!/usr/bin/env bash

GITHUB_REF_SLUG=kafka-management@v0.0.1
echo "Release process for TAG: $GITHUB_REF_SLUG"

SCRIPT_DIR=`dirname $0`
## Pick right release based on tag structure
EXEC=`$SCRIPT_DIR/lib/releaseFromTag $GITHUB_REF_SLUG`

$EXEC