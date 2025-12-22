# PC

After 25+ years of custom PC building and troubleshooting, i must admit the bullshit never ends. Consoles exist for a reason.

## Operating Systems

- [Windows 11](/os/Windows11.md) - the most _compatible_ OS for running modern games on modern hardware
- [Windows XP](/os/WindowsXP.md) - the version of Windows that makes the most sense on pre-2008 hardware
- [SteamOS](/os/SteamOS.md) - opinionated handheld/livingroom gaming experience by Valve, but limited hardware support
- [Bazzite](https://bazzite.gg/) - SteamOS-like flavor of Fedora Linux, excellent out-of-box experience on a wide variety of PC hardware

## Generations

Due to decentralized nature of PC hardware development, it was hard to define specific generational cutoff points at the time, but in retrospect, and for the purpose of retrogaming, these are the build targets to have if you want to play _any_ PC game on bare metal:

1. DOS Era
   - CPU: i386 to Pentium 1
   - GPU: 3dfx Voodoo 1 (Glide API)
   - Audio: Sound Blaster 16, Roland MT-32
   - OS: DOS to Windows 98
   - Games: 1980s and early 1990s games that targeted specific early gaming hardware like 3dfx Glide API, MIDI engines
   - On modern hardware, this entire hardware stack can be emulated in software with high precision, and most popular games were natively ported and/or remastered for modern platforms
1. Windows 98 Era
   - SDRAM i686 platforms
   - GPU: 3dfx Voodoo 2-5
   - Audio: Sound Blaster 16 recommended for compatibility with most DOS generation games
   - OS: Windows 98
   - Games: 1990s games that sometimes targeted specific hardware like 3dfx GPUs and SB16, and also first generation of DirectX and OpenGL games
   - Most popular games of this generation were natively ported or remastered for modern platforms, and software translation layers for 3dfx Glide and MIDI can be applied to many of the less popular titles. On a modern high-end PC, high precision emulation can be achieved with software like [PCem](https://www.pcem-emulator.co.uk/)
1. WinXP Era
   - RAM: DDR1 to DDR2
   - CPU: i686 to early AMD64 CPUs
   - GPU: [Hardware T&L](https://en.wikipedia.org/wiki/Transform,_clipping,_and_lighting) required, DirectX 9 recommended
   - OS: Windows XP
   - Games: Most 2000-2015 games, and also late 1990s games that didn't target specific hardware
   - This was the first generation of games that targeted software APIs exclusively, instead of bare metal, so _most_ games can be patched to run on modern Windows 11 and Linux systems natively. However, this generation of hardware is still priced like e-waste and not considered collectible, so it's the best entry point into retrogaming if you just hate modern games for some reason.
1. DDR3 Era
   - AMD64 CPU with POPCNT instruction
   - RAM: 8GB DDR3
   - SSD storage
   - OS: Windows 11 25H2
   - Games: Most modern singleplayer games, and multiplayer games without kernel-level anticheats
   - Intel core 1st to 6th gen systems with 8+ GB RAM and 2+ GB VRAM GPU will run latest low-spec/indie games, but considered e-waste by most normies. Best price/performance builds for Mac users and Console gamers who occasionally want to run modded Minecraft or some older game they got for free on Epic Games Store.
1. TPM 2.0 Era
   - Motherboard with TPM 2.0
   - OS: Windows 11 25H2
   - Games: Modern competitive PvP games with kernel-level anticheats, also fully compatible with DDR3 generation
   - Due to 2026 RAM Crisis, if you don't already have a build like this - it's very hard to recommend it. There's just too many excellent games you can play on e-waste hardware. However, if you enjoy online competitive PvP - your only alternatives are Xbox and PlayStation.

## Random PC Tips

- Always check date and time are set correctly. No app will warn you about suspicious date, you'll just waste time troubleshooting seemingly random bugs and crashes.
- Do not assume modular PSU cords are interchangeable. Corsair alone have [5+ different pin layouts](https://cablemod.com/compatibility/). It's usually cheaper to replace a PSU than to release a magic smoke out of GPU.
- PS/2 was never designed for [hot-plugging](https://en.wikipedia.org/wiki/Hot_swapping). Usually you need to restart the PC for keyboard and mouse to work.
- Some Pentium 4 and older PCs do not support USB keyboards in BIOS. Keep at least one PS/2 keyboard if you service older builds.

## Bootable Media

Some Pentium 1-3 PCs do not support USB bootable media. If you want to maintain this kind of setup, i suggest having any of the following:

- 3.5" Floppy drive and disks
  - For some motherboard this is the only way to update BIOS
- CD-RW drive and empty disks
- IDE to USB adapter and a backup of known good OS instance

Modern PCs have two ways to boot the OS - current industry standard UEFI, and Legacy CSM (BIOS). Some bootable images are only compatible with one of them. For most bootable images, [Ventoy](https://www.ventoy.net/en/index.html) is an excellent solution. [Rufus](https://rufus.ie/en/) has a setting to choose UEFI or CSM mode when creating a bootable USB.
