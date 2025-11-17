# SteamOS

[SteamOS](https://store.steampowered.com/steamos) is a highly opinionated [ArchLinux](https://archlinux.org/)-based OS developed by Valve, aiming for great Handheld/Livingroom Gaming Console-like experience.

## Installing on non-Valve hardware

You need a GPU that supports Wayland with no extra steps. If you have NVIDIA GPU - try [Bazzite](https://bazzite.gg/) instead.

When installing on non-NVME storage, [a customized installation script](https://github.com/louij2/steamos_custom_install) is required.

I used [this particular build of 3.8](https://steamdeck-images.steamos.cloud/steamdeck/20251027.1000/), because "stable" 3.7 recovery image kept failing at second stage of the install after selecting time zone and network connection.

If you're reading this after 3.8 public release, or intend to install on hardware that is officially supported - follow [the official Installation and Repair instructions](https://help.steampowered.com/en/faqs/view/65B4-2AA3-5F37-4227).

Recovery Live Image does not boot via Ventoy. You need a dedicated USB drive to run it.

## Button mapping in Game Mode

Short answer:

- STEAM: Ctrl+1
- OOO: Ctrl+2

Long answer: you really want to use a game controller, because [the rest of the keybinds](https://blog.jadaml.website/2025/06/02/control-steam-deck-with-the-keyboard/) are more of a workaround than intended control scheme, as suggested by the lack of [input glyphs](https://eviltwo.github.io/InputGlyphs_Docs/) when no controllers are connected.

## sudo in Desktop Mode

By default, "deck" user has no password set. To escalate privileges with `sudo`, you need to use `passwd` command first, to set a known password.

## Security Issues

SteamOS uses a single UNIX user for all Steam accounts.

As far as i see, saved passwords, sessions, cookies etc. are not encrypted by default, with no convenient way to enable storage encryption. If you log into e.g. Discord, your session can be stolen by _any other Steam account_ logging into Gaming Mode and switching to Desktop Mode.
