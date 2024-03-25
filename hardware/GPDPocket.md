# GPD Pocket

## BIOS hotkeys
- BIOS Setup: `Del`
- Boot device select: `F7` / `Fn+7`

## Driver installation procedure
I [installed Windows 23H2 using Rufus](/os/Windows11#install-on-unsupported-hardware) on my GPD Pocket, and out of box not even battery indicator works. Make sure to either have Wi-Fi or Ethernet dongle that doesn't need extra drivers, or have a copy of [latest driver package](https://mega.nz/#!ut9XHYjD!gl6NIFLjLFZqwiTrGoHUz72QHV5IOwkmwea-E_xupqE) and [7-zip](https://www.7-zip.org/download.html) on a USB drive.

::: warning
Use 7-zip for extracting archives provided by GPD. Built-in Windows unarchiving tool fails with cryptic errors.
:::

- Enter `inf` folder, right click on `Install-drivers.bat`, run as administrator.
- Enter `exe` folder, right click on `Install-drivers.bat`, run as administrator.
- Restart, let Windows Update install extra drivers and software, e.g. Intel HD Graphics Control Panel

That's it. No unknown devices, everything seems to work. YMMV, but i assume older articles i find about driver installation on GPD Pocket are so long and complicated because they were based on Windows 10 experience.

More info:
- [Driver and BIOS archives on GPD website](https://www.gpd.hk/gpdpocketfirmware)
- [GPD Pocket: How to Re-install all Drivers -- Written By: Dan Ford](https://www.dlford.io/gpd-pocket-drivers/)

## Charger compatibility
GPD Pocket requires 9V USB-PD mode for charging, and therefore is incompatible with Nintendo Switch charger HAC-002 that can only do 5V and 15V. 

Make sure amber LED on power button is on when performing OS and BIOS updates.

## USB-C dongle compatibility
Quite a few reviews of this device mention issues with external display support through USB-C. These issues seem to be fixed now. 

With Windows 11 23H2, BIOS and drivers updated, compatible dongle, and quality 9V USB-PD charger - i can use GPD Pocket with external 1080p display and battery level goes up even during high CPU utilization.
