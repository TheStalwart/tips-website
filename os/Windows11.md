# Windows 11

It's hip to hate Windows 11, however there's still a mix of pragmatic reasons to leave Windows 10 in the past, and wait before switching the main gaming rig to Linux. Not every bullet point applies to everyone, but if you intend to play modern and upcoming games - the most compatible OS for that is obvious.

- No meaningful gaming performance difference with Windows 10 or Linux
  - Proton on Linux is trading blows with Windows 11 in hardware and game specific edge cases
  - If a PC can't run Windows 11 well - it will also be miserable with a feature-complete full desktop Linux setup like [Bazzite](https://bazzite.gg/)
  - Options of degrading security and convenience of Windows 11 to gain margin-of-error FPS boost are the same as any other OS. Feel free to try [LTSC versions of Windows](https://www.youtube.com/watch?v=bValhYdrATw) or [disable "unnecessary" services](https://www.elevenforum.com/t/which-services-do-you-recommend-to-disable-here-is-my-list.36437/). I used to ["debloat" Windows XP](https://www.nliteos.com/) back in the days, and then ran into issues like game installers/launchers tripping on printer drivers i disabled, when displaying license agreement, or in-game cutscenes relying on Windows Media Player
  - The actual effort by Microsoft/Xbox to improve gaming performance on Windows will be released in 2026 as [Xbox Fullscreen Experience](https://www.youtube.com/watch?v=YJ7dwcnRjTc), exclusively on Windows 11
  - NVIDIA GPUs older than GTX 10xx series are stuck with outdated drivers on Linux, with no Wayland support, while on Windows those GPUs are still fully supported
- Modern display support
  - HDMI 2.1 is not implemented in AMD Linux driver [for legal reasons](https://www.phoronix.com/news/HDMI-2.1-OSS-Rejected)
  - fractional scaling, mixed scale and mixed dynamic range support is very bad on Windows 10
- Most Online PvP games require kernel-level anti-cheats ([list of games](https://levvvel.com/games-with-kernel-level-anti-cheat-software/))
  - If your PC is [compliant with Vanguard requirements](https://support-valorant.riotgames.com/hc/en-us/articles/22291331362067-Vanguard-Restrictions), it's also compatible with Windows 11
  - The industry standard practice as of 2025, is to not implement, or even intentionally break Linux support in games with Online PvP
- Complete DirectX 12 Ultimate implementation, including DirectStorage
- Better touchscreen support for tablet and handheld devices without hardware keyboard
- Better dark mode support in system apps
- [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) out of the box
- Xbox Game Pass does not work on Linux

## Install on unsupported hardware

For Windows 11 25H2 to run well and be usable for modern web apps and low spec games the system requirements are the following:

- 64bit CPU with POPCNT instruction (SSE 4.2 or SSE 4a)
  - 2008 Intel Core i3/i5/i7 ([Nehalem](https://en.wikipedia.org/wiki/Nehalem_(microarchitecture))) or newer
  - 2011 AMD FX Series ([Bulldozer](https://en.wikipedia.org/wiki/Bulldozer_(microarchitecture))) or newer
- 8GB RAM
- SSD

I ran Windows 11 23H2 on CPUs as old as 2008 Core 2 Quad, as long as it's installed on SSD and has enough RAM - the PC is usable for YouTube and osu! (not at the same time though).

[Vanilla Windows 11 ISO from microsoft.com](https://www.microsoft.com/en-us/software-download/windows11/) will bitch about not having TPM 2.0 and Secure Boot, but when creating install media using [Rufus](https://rufus.ie/en/) these checks can be disabled.

## Install without Microsoft account

Unplug ethernet cable before installing, and do not connect to Wi-Fi until you see a desktop and a start menu.

On the "Let's connect you to a network" installation step, press "I don't have internet" button. If you don't see it, there are two workarounds:

1. Install from media patched by [Rufus](https://rufus.ie/en/) (see previous section).
2. Press Shift+F10, enter one of the following commands:
   - `oobe\BypassNRO` (case sensitive, builds older than March 2025)
   - `start ms-cxh:localonly` (Home and Pro versions only)
   - `reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f`, then `shutdown /r /t 0`

If you need a more detailed guide, follow [Emanuel's article](https://itstechbased.com/new-windows-11-25h2-update-blocks-microsoft-account-bypass-new-methods/).

## Bootloader troubleshooting

When installing Windows 11 over Linux instance with GRUB, on some machines Windows Setup will fail to correctly overwrite bootloader and will land into GRUB recovery console instead of Stage 2 of Windows Setup.

To overwrite bootloader manually, restart installation media and select `Repair my PC -> Troubleshoot -> Command Prompt` or press Shift+F10, then enter the following commands:

```ps
bootsect /nt60 sys
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd
```

Restart the installation media and redo Stage 1 of Windows Setup.

## Update 22H2 to 23H2 on unsupported hardware

When installed on "unsupported" hardware as described in previous sections, Windows Update _will not_ automatically update 22H2 to 23H2. This can be fixed by manually installing [KB5027397](https://support.microsoft.com/en-us/topic/kb5027397-feature-update-to-windows-11-version-23h2-by-using-an-enablement-package-b9e76726-3c94-40de-b40b-99decba3db9d) (The 23H2 enablement package) over 22H2 build 22621.2506 (or newer):

- [X64 version](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/caa3ff4a-6420-4341-aeae-33b2d7f463be/public/windows11.0-kb5027397-x64_3a9c368e239bb928c32a790cf1663338d2cad472.msu)
- [ARM64 version](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/c29dd4ea-7f6a-4636-a991-29ba8ae70658/public/windows11.0-kb5027397-arm64_bacb74fba9077a5b7ae2f74a3ebb0b506f9708f3.msu)

## Update 23H2 to 24H2 on unsupported hardware

Make sure the CPU implements POPCNT instruction (SSE 4.2 or SSE 4a), e.g. using [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) utility, as 24H2 will crash on boot otherwise.

Download [24H2 ISO](https://www.microsoft.com/en-us/software-download/windows11), preferably using Media Creation Tool, because [you need ISO that matches the region of your install](https://www.winhelponline.com/blog/keep-personal-files-and-apps-grayed-out-setup/).

Mount it, right click on mounted media and select "Open in Terminal", make sure you're running in classic Command Prompt environment by executing `cmd` command, then execute `setup /product server`. Make sure to “Change how setup downloads updates” and select "Not right now". If you can select "Keep files, settings and apps" - proceed with that.

On some older machines setup can spend up to 30 minutes displaying blank screen. That is "normal", let it do the thing.

On some machines, using this method will break Windows Update - Cumulative Updates will fail to install quoting error code 0x800f081f. Run Command Prompt as Administrator and enter the following commands to fix the issue:

```shell
dism /online /cleanup-image /startcomponentcleanup
dism /online /cleanup-image /restorehealth
sfc /scannow
```

## Update 24H2 to 25H2 on unsupported hardware

When installed on "unsupported" hardware as described in previous sections, Windows Update _will not_ automatically update 24H2 to 25H2. This can be fixed by manually installing [KB5054156](https://support.microsoft.com/en-us/topic/kb5054156-feature-update-to-windows-11-version-25h2-by-using-an-enablement-package-4d307e2d-3028-4323-bb46-552cff491643) (The 25H2 enablement package) over 24H2 build 26100.5074 (or newer):

- [X64 version](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/fa84cc49-18b2-4c26-b389-90c96e6ae0d2/public/windows11.0-kb5054156-x64_a0c1638cbcf4cf33dbe9a5bef69db374b4786974.msu)
- [ARM64 version](https://catalog.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/78b265e5-83a8-4e0a-9060-efbe0bac5bde/public/windows11.0-kb5054156-arm64_3d5c91aaeb08a87e0717f263ad4a61186746e465.msu)

## Leaving Windows Insider Release Preview

The "Unenroll this device when the next version of Windows releases" feature of Windows Update is broken as of Late 2025.

When eligible, it's possible to manually edit registry to disable Windows Insider feature and stay on General Availability Channel.

To check for eligibility for leaving Release Preview Channel, you need to compare branch version of General Availability Channel to what's currently installed on your machine. Visit [Servicing channels](https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information#servicing-channels) page and compare "Latest build" values to the output of `winver` command on your machine. If there's a channel serving builds with matching first part, preferably exact same build number or a build number with matching first part and higher second part, it's safe to delete Windows Insider configuration manually to effectively stop receiving Insider builds.

Run `regedit`, navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\`, and delete the entire `WindowsSelfHost` branch with all subfolders and keys. Restart Windows and make sure "Windows Insider Program" section is reset to onboarding invitation. From now on, Windows Update should only pull updates from General Availability Channel.

If the build number installed on your machine has higher second part but matching first part, you might want to "Pause updates" for a week or two just to make sure there's an upgrade path out of Release Preview Channel.

If your machine is currently on Dev or Beta Channel, you could plan your exit strategy by monitoring build numbers on [Flight Hub](https://learn.microsoft.com/en-us/windows-insider/flight-hub/), but that's beyond the scope of this guide.

## Activation

Use [Microsoft Activation Scripts (MAS)](https://github.com/massgravel/Microsoft-Activation-Scripts).

## Random freezes when using web browsers

Use [MPO-GPU-FIX](https://github.com/RedDot-3ND7355/MPO-GPU-FIX) utility. From my personal experience, the patch needs to be reapplied after major OS updates.

## Share files with Windows XP over SMB

File sharing is usually only enabled in "Private Networks", so either make your current network "Private" or enable file sharing on "Public Networks".

Open "Turn Windows features on or off" and make sure "SMB 1.0" is enabled.

Open "Computer Management", go to System Tools -> Local Users and Groups -> Users -> Guest, and uncheck "Account is disabled" to enable Guest account.

Open Local Group Policy Editor (gpedit.msc), go to Computer Configuration -> Windows Settings -> Security Settings -> Local Policies -> User Rights Assignment -> Deny access to this computer from the network. Delete "Guest" from the list.

## Diagnostics and overclocking

- [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) - detailed properties of CPU and RAM
- [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) and [CrystalDiskMark](https://crystalmark.info/en/software/crystaldiskmark/) - industry standard storage diagnostics and benchmark
- [FanControl](https://getfancontrol.com/) - fan/pump control utility with highly customizable curves. A must have for thermally challenged builds
- [FurMark](https://geeks3d.com/furmark/) - GPU stress test
- [Geekbench](https://www.geekbench.com/) - free synthetic CPU and GPU benchmark
- [GPU-Z](https://www.techpowerup.com/download/techpowerup-gpu-z/) - detailed properties of GPU
- [HWINFO64](https://www.hwinfo.com/download/) - free hardware inspector with excellent temperature monitoring
- [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards) - industry standard GPU overclocking and undervolting tool. Bundled with [RTSS](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/), which provides customizable performance HUD and frame rate limiter
- [MSI Kombustor](https://www.geeks3d.com/furmark/kombustor/downloads/) - GPU stress test
- [UNIGINE Benchmarks](https://benchmark.unigine.com/) - popular free benchmarks based on a game engine

## Useful utilities

- [7-Zip](https://www.7-zip.org/) - built-in Windows 11 archiving tools are still missing features and failing on some files
- [UniGetUI](https://www.marticliment.com/unigetui/) - GUI for package managers like Winget and Chocolatey
- [WinCaffeine](https://wincaffeine.jonaskohl.de/) - tray utility to prevent PC from sleeping
- [WinDirStat](https://windirstat.net/) - disk usage statistics viewer

## Multimedia tools

- [HandBrake](https://handbrake.fr/features.php) - video converter UI with a long list of presets
- [PEACE](https://sourceforge.net/projects/peace-equalizer-apo-extension/) - UI for system-wide [Equalizer APO](https://sourceforge.net/projects/equalizerapo)
- [VLC media player](https://www.videolan.org/vlc/) - plays _most_ video files, use [nightly builds](https://nightlies.videolan.org/) for better HiDPI and Dark Mode support
- [Voicemeeter Virtual Audio Mixer](https://vb-audio.com/Voicemeeter/index.htm) - audio input mixer and output router

## Networking

- [qBittorrent](https://www.qbittorrent.org/) - open source BitTorrent client with dark mode support
- [Tailscale](https://tailscale.com/) - lightweight encrypted tunnels between your computer, VM, or container
- [WinSCP](https://winscp.net/eng/index.php) - SFTP/WebDAV client with dark mode support (unlike [FileZilla](https://filezilla-project.org/))

## Productivity

- [Fantastical](https://flexibits.com/fantastical) - calendar app with multiple account support, offline mode and search
- [Obsidian](https://obsidian.md/) - markdown notes app with plugin support and offline mode
- [Thunderbird](https://www.thunderbird.net/en-US/) - old school, extensible email and calendar app

## Development tools

- [Sourcetree](https://www.sourcetreeapp.com/) - Git/Mercurial UI, a free clone of [Tower](https://www.git-tower.com/windows)
- [Visual Studio Code](https://code.visualstudio.com/) - the safe default development environment for most hobby projects
- [WinMerge](https://winmerge.org/) - differencing and merging tool with [dark mode support](https://github.com/rkodey/winmerge-visual-studio-dark)
