# Git Commit and Push Guide

This repository can be updated manually with the following Git commands.

## 1. Check repository status
```bash
git status
```

## 2. Add files to staging
```bash
git add .
```

If you want to add only specific files:
```bash
git add path/to/file
```

## 3. Review what will be committed
```bash
git diff --staged
```

## 4. Commit the changes
```bash
git commit -m "Your commit message"
```

## 5. Push to the remote repository
```bash
git push origin main
```

## 6. If the branch is different
```bash
git branch
ngit push origin <branch-name>
```

## Useful commands
```bash
# See current branch
git branch --show-current

# See recent commits
git log --oneline -5

# Pull latest changes before pushing
git pull origin main
```

## Example workflow
```bash
git status
git add .
git commit -m "Add new test cases"
git push origin main
```
