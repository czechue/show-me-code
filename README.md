#### To develop, we run:

**1. Add _dev.ts_ file to /config**

Without _dev.ts_ you won't be abble to develop localy with DB connected.
(You can accually mockup JSON as a response from server if you wish so).

**2. Server:**

`cd show-me-code`

`npm run watch-ts` // in 1 terminal

`npm run watch-node` // in 2 terminal

_Now you can develop backend code._


**3. Frontend**

`cd show-me-code/client`

`ng serve` - in 3 terminal

_Now you can develop frontend code._


#### GIT-FLOW:


1. clone repo:

`git clone https://github.com/czechue/show-me-code.git`

2. check if everything is up to data:

`git pull`

`git fetch`

3. add your branch:

`git checkout -b <tasktype/tasknumber/name>`

   where `<tasktype/tasknumber/name-of-task>` is your branch name and sub-parts have following meaning:

    - tasktype = feature / bugfix / hotfix
    - tasknumber = number from trello
    - name-of-task = name of task

4. you can HACK NOW

5. from time to time remember about commiting:

`git add <files>`
`git commit -m "use proper commit descriptions"`

6. when you want to save your branch on GH repo:

'git push origin <your-branch-name>'

(!!before you push - always first pull current master branch so you can solve conflicts locally)
```markdown
'git checkout master' // change branch on master
'git pull'
'git checkout <your-branch-name>' // go back to your branch
'git merge master' // merge master branch into your branch
```

7. when you think your code is finished:
- go on repo page: https://github.com/czechue/show-me-code
- create Pull Request: [GH Link](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request)

8. your branch can be merged now

dodawanie drugi raz
xx
