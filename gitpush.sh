git add -A
echo 'Enter the commit message: '
read commitMessage
git commit -m "$commitMessage"
echo 'Enter the name of the branch: '
read branch
git push origin $branch
firebase deploy