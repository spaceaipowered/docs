#/bin/bash

chmod +x ./bash/*
./bash/copy_svgs.sh
python -m mkdocs build --clean
find ./site -type f -name "*.html" -exec htmlmin {} {} \;
