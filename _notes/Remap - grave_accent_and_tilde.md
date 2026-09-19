---
layout: project
title: Remap grave_accent_and_tilde to esc
summary: "I remapped the grave accent and tilde key to the escape key and then I remapped the F12 key to the grave accent and tilde key."
categories: [mac]
date: 2026-08-28
---
The original instructional web page is [here](https://konkit.tech/blog/2025-03-17-mac-os-key-mapping/). I'm making a copy of the instructions for safekeeping. Please give credit to the original author in the link.

#### *Start @ Option 2: A temporary command-line solution*
To create a key mapping that lasts until the next reboot, use the following command in Terminal.app:

``` bash
sudo hidutil property --set '{"UserKeyMapping":[{"HIDKeyboardModifierMappingSrc":0x700000035,"HIDKeyboardModifierMappingDst":0x700000029},{"HIDKeyboardModifierMappingSrc":0x700000029,"HIDKeyboardModifierMappingDst":0x700000035}]}'
```

**Important notes:**

- Use Terminal.app rather than iTerm2, as Terminal properly shows the permissions prompt
- The first time you run this command, you’ll see a permissions request:


The key codes in the command (like 0x700000035) represent specific keys on your keyboard. You can find the complete list of key codes in [Apple’s developer documentation](https://developer.apple.com/library/archive/technotes/tn2450/_index.html).

<br>
To remove the mapping and return to default behavior, run:
``` bash
sudo hidutil property --set '{"UserKeyMapping": []}'
```

The main limitation of this approach is that the mapping only persists until you restart your computer.

#### *Option 3: A persistent command-line solution*
To create a key mapping that persists across reboots, we’ll complement Option 2 with LaunchDaemon that would run the command automatically at startup.

##### **_Step 1/4: Grant permissions to hidutil_**
First, you need to give the \`hidutil` command permission to monitor input:

1. Open **System Preferences > Privacy and Security > Input Monitoring**
2. Click the **”+”** button to add a new application
3. Press **Cmd + Shift + G** to open the “Go to folder” dialog
4. Enter **/usr/bin/hidutil** and click **Open**
5. Make sure the toggle next to **hidutil** is turned on

##### **_Step 2/4: Create a LaunchDaemon configuration file_**
Create a configuration file that will run the key mapping command at startup:

``` bash
sudo hx /Library/LaunchDaemons/org.example.tildeKeyMapping.plist
```
Then copy the content below into the file above:
``` bash
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
"http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.local.KeyRemapping</string>
    <key>ProgramArguments</key>
    <array>
      <string>/usr/bin/hidutil</string>
      <string>property</string>
      <string>--set</string>
      <string>{"UserKeyMapping": [
        {
          "HIDKeyboardModifierMappingSrc": 0x700000035,
          "HIDKeyboardModifierMappingDst": 0x700000029
        },
        {
          "HIDKeyboardModifierMappingSrc": 0x700000045,
          "HIDKeyboardModifierMappingDst": 0x700000035
        }
      ]}</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
  </dict>
</plist>
```

**Tip:** If you need to map different keys, you can generate the XML more easily using this online tool: [hidutil-generator.netlify.app](https://hidutil-generator.netlify.app/)

##### **_Step 3/4: Set permissions and enable the LaunchDaemon_**
Set the proper permissions for the configuration file:

``` bash
sudo chmod 755 /Library/LaunchDaemons/org.example.tildeKeyMapping.plist
```

Enable the LaunchDaemon to run at startup:

``` bash
sudo launchctl bootstrap system \
  /Library/LaunchDaemons/org.example.tildeKeyMapping.plist
```

Disable the LaunchDaemon run this command:
``` bash
sudo launchctl bootout system \
  /Library/LaunchDaemons/org.example.tildeKeyMapping.plist
```
"launchctl bootout"  _Tears down a domain or removes a service from a domain._

##### **_Step 4/4: Test your configuration_**
Restart your Macbook and verify that the plus-minus key now functions as the tilde key.
