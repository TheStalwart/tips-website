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

## Overlaying RPM packages

While it's _not recommended_, an _may_ cause issues when updating root immutable image, overlaying packages is a way to experiment with less popular desktops.

To add COPR repositories:

`sudo dnf5 copr enable lionheartp/Hyprland`

To install packages:

`rpm-ostree install noctalia-hyprland-meta wlrctl hyprprop kanshi`

To reset back to unmodified upstream image:

`rpm-ostree reset`

More documentation: [Package Layering - Bazzite Documentation](https://docs.bazzite.gg/Installing_and_Managing_Software/rpm-ostree/)

## Disabling Steam on login to KDE Plasma session

Bazzite adds Steam to KDE Plasma session autostart globally,
so non-privileged autostart editing tools can't disable it.

Edit `/etc/xdg/autostart/steam.desktop` as root, e.g. with `sudo nano`,
and add `Hidden=true` line to `[Desktop Entry]` section.
