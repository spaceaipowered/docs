#/bin/bash

chmod +x ./bash/*
./bash/copy_assets.sh
python -m mkdocs build --clean
find ./site -type f -name "*.html" -exec htmlmin {} {} \;
