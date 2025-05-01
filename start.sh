#!/bin/bash

export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

cd ~/nextjs-app
nvm use 22.2.0
pm2 start ecosystem.config.js