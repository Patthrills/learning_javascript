#!/bin/bash

echo "Enter commit: \c"
read -r commit

git add .; git commit -m "$commit"; git push
