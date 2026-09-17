---
layout: project
summary: Where my local SSH config files are
date: 2023-12-13
categories: [ssh, github]
---
*This is the ssh config file settings and the commands to add ssh passphrase to Apple Keychain.* 
*Also there's commands to test the settings out.*

*Add and change ssh passphrase to Apple Keychain Access*
``` bash
ssh-add --apple-use-keychain ~/.ssh/_ed255-gitlab
ssh-keygen -p -f ~/.ssh/_ed255-gitlab
```

##### My ssh config
``` bash
# G2K account
Host gh1
   HostName github.com
   User git
   IdentityFile ~/.ssh/
   AddKeysToAgent yes
   UseKeychain yes

# personal account
Host gh2
   HostName github.com
   User git
   IdentityFile ~/.ssh/
   AddKeysToAgent yes
   UseKeychain yes

# GitLab
Host gitlab
   HostName gitlab.com
   User git
   IdentityFile ~/.ssh/
   AddKeysToAgent yes
   UseKeychain yes
```


##### Teshing the ssh connections to GitHub

*Type this command to test:*

``` bash
ssh -T git@github.com-yong
```

Then look out for this output:
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
