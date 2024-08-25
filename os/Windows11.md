# Windows 11

## Install on unsupported hardware
For Windows 11 23H2 to run well and be usable for modern web apps and low spec games the system requirements are the following:
- 64bit CPU
- 8GB RAM
- SSD

I run Windows 11 on CPUs as old as Core 2 Quad, as long as it's installed on SSD and has enough RAM - the PC is usable for YouTube and osu! (not at the same time though).

[Vanilla Windows 11 ISO from microsoft.com](https://www.microsoft.com/en-us/software-download/windows11/) will bitch about not having TPM 2.0 and Secure Boot, but when creating install media using [Rufus](https://rufus.ie/en/) these checks can be disabled.

## Install without Microsoft account
You'll need to install from media patched by [Rufus](https://rufus.ie/en/) (see previous section). Then just unplug ethernet cable before installing, and do not connect to Wi-Fi until you see a desktop and a start menu.

## Update 22H2 to 23H2 on unsupported hardware
When installed on "unsupported" hardware as described in previous sections, Windows Update _will not_ automatically update 22H2 to 23H2. This can be fixed by manually installing KB5027397 (The 23H2 enablement package).

Microsoft doesn't offer a straightforward way to download the enablement package, so try [this link](https://www.xda-developers.com/windows-11-version-23h2-manual-install/) instead.

## Random freezes when using web browsers
Use [MPO-GPU-FIX](https://github.com/RedDot-3ND7355/MPO-GPU-FIX) utility. From my personal experience, the patch needs to be reapplied after major OS updates.

## Useful utilities
- [WinCaffeine](https://wincaffeine.jonaskohl.de/) - tray utility to prevent PC from sleeping
