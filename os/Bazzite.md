# Bazzite

[Bazzite](https://bazzite.gg/)
is an opinionated immutable [Fedora](https://fedoraproject.org/)-based OS,
aiming for great out-of-the-box experience on Handheld/Livingroom PC ("deck" flavor)
and general purpose Desktops and Laptops.

While it's understandable to desire [the original SteamOS](/os/SteamOS.md),
distros like Bazzite are a better choice for non-Valve hardware.

## Improvements over vanilla SteamOS

- newer Kernel and KDE components
- more Wi-Fi NICs and other non-Valve hardware supported
- NVIDIA GPU drivers included in `-nvidia` flavors
- a flavor with GNOME Desktop Environment is available
- tools provided to create customized OS images

## System requirements

- GPU with Wayland support
  - AMD: [GCN 1.0](https://www.techpowerup.com/gpu-specs/?architecture=GCN%201.0) or newer
    - Desktop: 2012 Radeon HD 7000 series
    - Mobile: 2013 Radeon HD 8000M series (8000D and 8000G not supported)
  - Intel: [2015 6th generation Core "Skylake" iGPU](https://www.techpowerup.com/gpu-specs/?architecture=Generation%209.0)
  - NVIDIA:
    - RTX Series or GTX 16xx Series ("nvidia-open" flavor)
    - GTX 750, GTX 9xx and GTX 10xx Series ("nvidia" flavor)
- Motherboard with UEFI, or late CSM (e.g. Intel Core 3rd gen)
