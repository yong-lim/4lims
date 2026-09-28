---
layout: project
summary: "Initialize jj and how to run it daily"
categories: [jj]
date: 2026-09-28
---
### Initialize jj:
*Run the following commands on your terminal to jj on git:*

``` bash
jj git init
jj bookmark track master --remote=origin
```
 
### Daily usage:
#### *These are some of the daily commands.*

Create new changes with message:
``` bash
jj new -m "
```

Describe exist changes:
``` bash
jj describe -m "
```

Save changes with message and create new changes:
``` bash
jj commit -m "
```

Move all current scratch changes into the parent commit:
``` bash
jj squash	
```
``` bash
jj squash --from <source_commit_id> --into <destination_commit_id>
```

Commit --interactive:
``` bash
jj commit -i
```

### Configure settings:

``` shell
jj config set --user user.name "Yong Lim"
jj config set --user user.email "yong.lim@gmail.com"

jj config edit --user
```

#### Misc commands:
``` shell
jj tug                            # move bookmark master to @-, see aliases
jj git push                       # push to GitHub 
jj git push --bookmark master

# increase the file size limits.
jj config set --repo snapshot.max-new-file-size 7205567
jj --config snapshot.max-new-file-size=7205567 status
```
