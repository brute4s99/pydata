---
title: the git flow
subTitle: let's talk collaboration!
category: "tech"
cover: cover.png
---
## INTRODUCTION

A common question for anyone stepping foot into the world of FOSS contributions is- How to start? This post aims to be the post I wish I had read an year ago when I started my journey.

## BABY STEPS

The commonly known work flow for git is as follows:-

> 1. Make a fork of the target project.
> 2. **Clone the fork** to your local dev machine.
> 3. Set a remote for **upstream**.

Contact the project team, introduce yourself and ask questions related to the project. Read more about this [here](https://google.github.io/gsocguides/student/making-first-contact). **This is super important!**

> 4. Test the project yourself.
> 4. Look for any issues or bugs/ something to fix in the project.
> 5. This step should be performed everytime when you are about to make a new branch, or want to update the master branch of your fork. Perform the following two commands to update master branch of the fork:-
>
>           git fetch upstream
>           git merge upstram/master
>           *resolve the conflicts, if any*

It's always a good idea to make a different (feature) branch for every feature/ issue/ bug you work on. While this keeps all your diverse efforts in one single folder, it maintains them completely separate from each other. This way, you don't have to worry about anything but just the branch name! Keep memorable and simple branch names.

> 6. Make a new branch titled something relevant to the thing you wish to fix, say XYZ.
> 7. Make the fix, push it to  **origin**  (i.e your fork) remote, as the XYZ feature branch.
> 8. Make a Pull/Merge Request.
> 
>           1. Wait for review.
>           2. Make necessary fixes.
>           3. Repeat from step 8.1 while not approved by every reviewer.

Most probably, you will now be asked to **rebase** your branch. It just means to perform a couple of commands that will replay all your commits on the new, latest stuff from `upstream/master`.

> 8. Perform the following two commands to rebase your XYZ feature branch:-
> 
>           git fetch upstram
>           git rebase upstream/master
>           *resolve the conflicts, if any*

## The Stash
Many times you might want to start working on some other feature right away! In such cases usually you would have some uncommitted files in your current branch.

This usually happens in the face of release date deadlines. The git-stash can save your uncommitted changes on a stack like data structure. This is done by the command:-

>           git stash
>           *your current working branch will be clean now, i.e there will be no uncommitted changes left*

Don't worry! They are in the stash, safe and sound. 
You can save multiple sets of uncommitted changes in the stash by using `git stash` every now and then. To see the list of all such sets of uncommitted changes, use the following command:-

>           git stash list

Just perform this command to get the most recently stashed changes back in your current working branch:-

>           git stash apply
>           *yes, you have the freedom to use `git stash` at one branch, and then checkout another branch and do `git stash apply`. It will work.

If you wish to retrieve any other set, refer to the index of stash, for example:-

```
stash@{0}: WIP on telephony_unknown: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours
stash@{1}: WIP on master: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours
stash@{2}: WIP on timestamp: 9ec0d04f SVN_SILENT made messages (.desktop file) - always resolve ours
(END)
```
>           git stash apply stash@\{1\}
>           *this will apply the set of changes in index 1 i.e stash@{1} to the current working branch

## CONCLUSION

This should be enough to get you going with the adventures of git.
> Git is focussed on freedom by design. You can do a lot of stuff, and you can also undo it as you go, so don't fret to play with this empowering tool!

signing off now; later! :)
<p align='center'> <font size=3> Stay safe and make the internet a healthier place! </font></p>
