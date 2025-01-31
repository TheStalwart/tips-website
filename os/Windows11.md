# Windows 11

## Install on unsupported hardware

For Windows 11 24H2 to run well and be usable for modern web apps and low spec games the system requirements are the following:

- 64bit CPU with POPCNT instruction (SSE 4.2 or SSE 4a)
  - Exception: [AMD K10-based CPUs](https://en.wikipedia.org/wiki/AMD_10h) are not supported
- 8GB RAM
- SSD

I run Windows 11 23H2 on CPUs as old as 2008 Core 2 Quad, as long as it's installed on SSD and has enough RAM - the PC is usable for YouTube and osu! (not at the same time though).

[Vanilla Windows 11 ISO from microsoft.com](https://www.microsoft.com/en-us/software-download/windows11/) will bitch about not having TPM 2.0 and Secure Boot, but when creating install media using [Rufus](https://rufus.ie/en/) these checks can be disabled.

## Install without Microsoft account

Unplug ethernet cable before installing, and do not connect to Wi-Fi until you see a desktop and a start menu.

On the "Let's connect you to a network" installation step, press "I don't have internet" button. If you don't see it, there are two ways to reveal it:

1. Install from media patched by [Rufus](https://rufus.ie/en/) (see previous section).
2. Press Shift+F10, enter `oobe\BypassNRO` command (case sensitive!).

## Bootloader troubleshooting

When installing 24H2 over Linux instance with GRUB, on some machines 24H2 installer will fail to correctly overwrite bootloader and will land into GRUB recovery console instead of Stage 2 of Windows Setup.

To overwrite bootloader manually, restart installation media and select `Repair my PC -> Troubleshoot -> Command Prompt`, then enter the following commands:

```ps
bootsect /nt60 sys
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd
```

Restart the installation media and redo Stage 1 of Windows Setup.

## Update 22H2 to 23H2 on unsupported hardware

When installed on "unsupported" hardware as described in previous sections, Windows Update _will not_ automatically update 22H2 to 23H2. This can be fixed by manually installing KB5027397 (The 23H2 enablement package).

Microsoft doesn't offer a straightforward way to download the enablement package, so try [this link](https://www.xda-developers.com/windows-11-version-23h2-manual-install/) instead.

## Update 23H2 to 24H2 on unsupported hardware

Make sure the CPU implements POPCNT instruction (SSE 4.2 or SSE 4a), e.g. using [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) utility, as 24H2 will crash on boot otherwise.

Download [24H2 ISO](https://www.microsoft.com/en-us/software-download/windows11), preferably using Media Creation Tool, because [you need ISO that matches the region of your install](https://www.winhelponline.com/blog/keep-personal-files-and-apps-grayed-out-setup/).

Mount it, right click on mounted media and select "Open in Terminal", make sure you're running in classic Command Prompt environment by executing `cmd` command, then execute `setup /product server`. Make sure to “Change how setup downloads updates” and select "Not right now". If you can select "Keep files, settings and apps" - proceed with that.

On some older machines setup can spend up to 30 minutes displaying blank screen. That is "normal", let it do the thing.

## Activation

Use [Microsoft Activation Scripts (MAS)](https://github.com/massgravel/Microsoft-Activation-Scripts).

## Random freezes when using web browsers

Use [MPO-GPU-FIX](https://github.com/RedDot-3ND7355/MPO-GPU-FIX) utility. From my personal experience, the patch needs to be reapplied after major OS updates.

## Share files with Windows XP over SMB

File sharing is usually only enabled in "Private Networks", so either make your current network "Private" or enable file sharing on "Public Networks".

Open "Turn Windows features on or off" and make sure "SMB 1.0" is enabled.

Open "Computer Management", go to System Tools -> Local Users and Groups -> Users -> Guest, and uncheck "Account is disabled" to enable Guest account.

Open Local Group Policy Editor (gpedit.msc), go to Computer Configuration -> Windows Settings -> Security Settings -> Local Policies -> User Rights Assignment -> Deny access to this computer from the network. Delete "Guest" from the list.

## Useful utilities

- [WinCaffeine](https://wincaffeine.jonaskohl.de/) - tray utility to prevent PC from sleeping
- [WinDirStat](https://windirstat.net/) - disk usage statistics viewer

## Multimedia tools

- [HandBrake](https://handbrake.fr/features.php) - video converter UI with a long list of presets
- [VLC media player](https://www.videolan.org/vlc/) - plays _most_ video files

## Networking

- [qBittorrent](https://www.qbittorrent.org/) - open source BitTorrent client with dark mode support
- [Tailscale](https://tailscale.com/) - lightweight encrypted tunnels between your computer, VM, or container
- [WinSCP](https://winscp.net/eng/index.php) - SFTP/WebDAV client with dark mode support (unlike [FileZilla](https://filezilla-project.org/))

## Productivity

- [Fantastical](https://flexibits.com/fantastical) - calendar app with multiple account support, offline mode and search
- [Obsidian](https://obsidian.md/) - markdown notes app with plugin support and offline mode

## Development tools

- [Sourcetree](https://www.sourcetreeapp.com/) - Git/Mercurial UI, a free clone of [Tower](https://www.git-tower.com/windows)
- [Visual Studio Code](https://code.visualstudio.com/) - the safe default development environment for most hobby projects
- [WinMerge](https://winmerge.org/) - differencing and merging tool with [dark mode support](https://github.com/rkodey/winmerge-visual-studio-dark)
