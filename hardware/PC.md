# PC

After 25+ years of custom PC building and troubleshooting, i must admit the bullshit never ends. Consoles exist for a reason.

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
