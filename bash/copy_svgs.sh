#/bin/bash

python_lib64_dir=$(find ./.venv/lib64/ -maxdepth 1 -type d -name "python*" | head -n 1 | tr -d "\n")
svgs_dir="$python_lib64_dir/site-packages/mkdocs/templates/.icons/svg/"
mkdir -p "$svgs_dir"
echo "SVGs directory: $svgs_dir"
cp -v "./docs/assets/svg"/* "$svgs_dir"
