---
layout: project
summary: "Initialize a Podman machine and how to clear journal log"
categories: [podman]
date: 2026-08-27
---

*Run the following commands on your terminal to initialize Podman:*

``` bash
bash $
podman machine init \
  --volume /Users:/Users \
  --volume /Volumes/ArmorATD:/Volumes/ArmorATD

podman machine start
```
<br>
*If your Podman log file gets too large, do the follow for Mac user.*

<br>
1. Access your Podman virtual machine via SSH:

``` bash
podman machine ssh
```

2. Once inside the VM, use journalctl to clear logs older than 2 days:

``` bash
sudo journalctl --vacuum-time=2d
```
