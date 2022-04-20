#!/bin/sh
# Script para el despliegue
now=$(date)

echo "Paso 1/6, eliminando docs"
rm -rf docs

echo "Paso 2/6, build"
npm run build

echo "Paso 3/6, moviendo dist a docs"
mv dist docs

echo "Paso 4/6, agregando docs al stage"
git add .

echo "Paso 5/6, commit"
git commit -m "deploy: :rocket: docs $now"

echo "Paso 6/6, push"
git push origin develop

echo "Finalizado .... 🚀"