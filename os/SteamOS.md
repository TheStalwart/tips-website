# SteamOS

[SteamOS](https://store.steampowered.com/steamos) is a highly opinionated [ArchLinux](https://archlinux.org/)-based OS developed by Valve, aiming for great Handheld/Livingroom Gaming Console-like experience.

## Installing on non-Valve hardware

You need a GPU that supports Vulkan and Wayland with no extra steps. Oldest compliant as of 2026:

- AMD GCN 1.0:
  - Desktop: 2012 Radeon HD 7000 series
  - Mobile: 2013 Radeon HD 8000M series (8000D and 8000G not supported)
- Intel: 2015 6th generation Core "Skylake" iGPU

If you have NVIDIA GTX 9xx or newer - [Bazzite](https://bazzite.gg/) is an option, but every game [i tested on GTX 1660 SUPER](https://docs.google.com/spreadsheets/d/1EZjM2UEp4BOFrTgkoYpacxS94z0WwJI-eyRh6DAf14E/edit?gid=63506070#gid=63506070) performed _significantly_ worse than on a regular non-debloated Windows 11 25H2. To improve Windows experience on handheld and TV setups, try [Xbox Full Screen Experience Tool](https://github.com/8bit2qubit/XboxFullScreenExperienceTool).

NVIDIA GPUs older than GTX 9xx require kernel downgrade and heavy customization to even have chance of performing at half the framerate of regular install of Windows 11. Considering an ancient like GTX 770 outperforms a Valve SteamDeck and most integrated laptop GPUs - it's still a very usable hardware.

When installing on non-NVME storage, [a customized installation script](https://github.com/louij2/steamos_custom_install) is required.

I used [this particular build of 3.8](https://steamdeck-images.steamos.cloud/steamdeck/20251027.1000/), because "stable" 3.7 recovery image kept failing at second stage of the install after selecting time zone and network connection.

If you're reading this after 3.8 public release, or intend to install on hardware that is officially supported - follow [the official Installation and Repair instructions](https://help.steampowered.com/en/faqs/view/65B4-2AA3-5F37-4227).

Recovery Live Image does not boot via Ventoy. You need a dedicated USB drive to run it.

## Updating from CLI

Check current version:

```sh
cat /etc/os-release
```

Check current update branch:

```sh
steamos-select-branch -c
```

List available update branches:

```sh
steamos-select-branch -l
```

Select a branch containing a newer build:

```sh
steamos-select-branch main
```

Check newer build availability:

```sh
steamos-update check
```

Install update (may get stuck at 0.0% for a while, let it cook):

```sh
steamos-update
```

## Button mapping in Game Mode

Short answer:

- STEAM: Shift+Tab or Ctrl+1
- OOO: Ctrl+Shift+Tab or Ctrl+2

Long answer: you really want to use a game controller, because [the rest of the keybinds](https://blog.jadaml.website/2025/06/02/control-steam-deck-with-the-keyboard/) are more of a workaround than intended control scheme, as suggested by the lack of [input glyphs](https://eviltwo.github.io/InputGlyphs_Docs/) when no controllers are connected.

## sudo in Desktop Mode

By default, "deck" user has no password set. To escalate privileges with `sudo`, you need to use `passwd` command first, to set a known password.

## Gaming performance inconsistency

It's a good problem to have, but the amount of [games that run _well_ on Linux](https://www.protondb.com/) in recent years outpaced the effort put into GPU drivers and other components of GUI pipeline. For some reason, things like [VSync toggle are still work in progress](https://wayland.app/protocols/tearing-control-v1) for some desktop environments.

[Testing Windows 11 vs Bazzite on the same build](https://docs.google.com/spreadsheets/d/1EZjM2UEp4BOFrTgkoYpacxS94z0WwJI-eyRh6DAf14E/edit?gid=63506070#gid=63506070) is disappointing, unless you're willing to trade some performance for better handheld or console-like experience.

With AMD GPUs, SteamOS and Bazzite in Game Mode use ~400MB less VRAM than clean Windows 11 instance. Ironically - NVIDIA GPUs, most affected by lower VRAM capacity, utilize the same amount of VRAM on Windows and Linux, and have worse Linux driver than AMD overall.

The unfortunate reality is, [more money does not mean more FPS](https://www.youtube.com/watch?v=ovOx4_8ajZ8).

## Security Issues

SteamOS uses a single UNIX user for all Steam accounts.

As far as i see, saved passwords, sessions, cookies etc. are not encrypted by default, with no convenient way to enable storage encryption. If you log into e.g. Discord, your session can be stolen by _any other Steam account_ logging into Gaming Mode and switching to Desktop Mode.
