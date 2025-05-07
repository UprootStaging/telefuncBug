set -ex

export NODE_ENV=production

npm install --omit=dev

PORT=4173 node --env-file=.env.production build/
