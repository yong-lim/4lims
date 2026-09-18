---
layout: project
summary: "Initialize a Podman machine and how to clear journal log"
categories: [podman]
date: 2026-08-27
---
### Initialize and start Podman:
*Run the following commands on your terminal to initialize Podman:*

``` bash
bash $
podman machine init \
  --volume /Users:/Users \
  --volume /Volumes/ArmorATD:/Volumes/ArmorATD

podman machine start
```
<hr>
  
### Clear log file:
*If your Podman log file gets too large, do the follow for Mac user.*

<br>
1 - Access your Podman virtual machine via SSH:

``` bash
podman machine ssh
```

2 - Once inside the VM, use journalctl to clear logs older than 2 days:

``` bash
sudo journalctl --vacuum-time=2d
```

<br>

### Daily usage shortcuts:

``` shell
options=(
  "podman-compose restart"              # option 1
  "podman-compose stop"                 # option 2
  "podman-compose up -d"                # option 3
  "podman-compose up --build"           # option 4
  "podman ps -a"                        # option 5
  "show all processes in loop"          # option 6
  "podman-compose logs -f"              # option 7
  "stop all containers"                 # option 8
  "podman pod list"                     # option 9
  "podman image list"                   # option 10
  "podman pod rm"                       # option 11
  "podman rm"                           # option 12
  "podman rmi"                          # option 13
  "podman machine start"                # option 14
  "podman machine stop")                # option 15

if [[ $1 -gt 0 && $1 -lt 18 ]]
then
  if [[ $1 -eq 6 ]]; then
    while true; do clear; podman ps -a; sleep 12; done
  elif [[ $1 -eq 8 ]]; then
    podman stop $(podman ps -a -q);
    echo "\nCommand executed: podman stop \$(podman ps -a -q)"
  else
    opt=${options[$1-1]}
    eval ${opt} $2
    echo "\nCommand executed: $opt $2"
  fi
  exit
fi

PS3=$'\n'"Please enter your choice: "
select opt in "${options[@]}"; do
  if [[ $opt == "show all processes in loop" ]]; then
    while true; do clear; podman ps -a; sleep 12; done
  elif [[ $opt == "stop all containers" ]]; then
    podman stop $(podman ps -a -q);
    echo "\nCommand executed: podman stop \$(podman ps -a -q)"
  elif [[ $opt == "podman pod rm" || $opt == "podman rm" ]]; then
    eval ${opt} $1
    echo "\nCommand executed $REPLY: $opt"
  elif [[ $REPLY -gt 0 && $REPLY -lt 16 ]]; then
    eval ${opt}
    echo "\nCommand executed $REPLY: $opt"
  fi
  break
done
```
