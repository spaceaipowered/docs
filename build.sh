#/bin/bash

python -m mkdocs build --clean
find ./site -type f -name "*.html" -exec htmlmin {} {} \;
