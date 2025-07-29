#!/bin/bash
git checkout main
git pull origin main
git branch -D $1
git fetch --prune