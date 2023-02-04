#!/bin/bash

echo "Enter commit: "
read -r commit

git add .; git commit -m "$commit"; git push
