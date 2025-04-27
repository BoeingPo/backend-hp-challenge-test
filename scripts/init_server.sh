#!/bin/bash

echo "Initiate backend setup Wait at least 30 second to let the docker database completely start"

echo "30 seconds left"
sleep 10

echo "20 seconds left"
sleep 10

echo "10 seconds left"
sleep 5

echo "begin in 5 seconds"
sleep 5

echo "npm install"
npm install

echo "Prisma Initiate..."
npx prisma generate

echo "Create db without history!"
npx prisma db push

echo "Done!"

echo "you can start server with ./scripts/start_server.sh"