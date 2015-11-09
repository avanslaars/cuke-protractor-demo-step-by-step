# Simple Example of Cucumber and Protractor Integration



## Step By Step

This example builds over a series of commits. You can use the following aliases in your .bash_profile file to step through the commits:

```
git_next() {
    BRANCH=$1
    git checkout `git log --reverse --ancestry-path HEAD..${BRANCH:="master"} | head -n 1 | cut -d \  -f 2`
}

git_prev(){
  git checkout HEAD^
}

```

Just run `git log --oneline` in the repo and you will see the list of commits. Find the commit with the "Start Here" comment, do a `git checkout <commit hash>` with that commit and then use `git_next` and `git_prev` to step forward and backward through the code.
