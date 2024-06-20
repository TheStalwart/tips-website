# Windows XP

## Windows Update
Microsoft does not serve updates for Windows XP anymore, use [Legacy Update](https://legacyupdate.net/) to restore Windows Update functionality.

The website is set up for backwards compatibility with Internet Explorer 6, so just open `http://legacyupdate.net` and go from there.

To retrigger Windows Update Agent: `wuauclt /detectnow`

## Web browsers
Internet Explorer 6 and 8 do not support modern HTTPS, and modern web avoids unencrypted protocols as much as possible, but there are still WinXP-compatible browsers capable of accessing modern web.
- [Supermium](https://github.com/win32ss/supermium)
    - Chrome fork patched to work on Windows XP
    - Still actively maintained
    - Requires [SSE2](https://en.wikipedia.org/wiki/SSE2#CPU_support) CPU instruction set
    - Crashes on some websites, i suggest having Firefox installed as a backup
    - To download using Internet Explorer: `http://win32subsystem.live/supermium/legacy/`
- [Firefox 52.9.0](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/en-US/Firefox%20Setup%2052.9.0esr.exe) (June 26, 2018)
    - Increasingly degraded support for modern web features
    - The last "official" browser supporting Windows XP
    - To download using Internet Explorer, access the "FTP" server using HTTP protocol: `http://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/en-US/`

## Text editors
- [GitHub Codespaces](https://github.com/features/codespaces) works in [Supermium](https://github.com/win32ss/supermium)
    - A way to run latest versions of VSCode, extensions and toolchains on Windows XP
- Notepad++ [7.9.2](https://notepad-plus-plus.org/downloads/v7.9.2/) (Jan 1, 2021)

## Development tools
- Git for Windows [2.10.0](https://github.com/git-for-windows/git/releases/tag/v2.10.0.windows.1) (August 25th 2016)
    - According to [this answer on StackExchange](https://superuser.com/a/1195244), this is the last version that is fully compatible with Windows XP
    - Is compatible with GitHub
- TortoiseGit
	- Developers claim the last version supporting Windows XP is [1.8.16.0](https://download.tortoisegit.org/tgit/1.8.16.0/) but it fails with Windows Installer error
	- Version [1.7.15.0](https://download.tortoisegit.org/tgit/1.7.15.0/) works on vanilla Windows XP SP3

## Messengers
[Discord web version](https://discord.com/channels/@me) works in [Supermium](https://github.com/win32ss/supermium).

## FTP/SFTP clients
- [Bitvise SSH Client](https://www.bitvise.com/ssh-client-download)
    - Still actively maintained
    - Version 9.33 (20 December 2023) tested to support Windows XP SP3
    - Supports modern encryption protocols
    - Features SSH Terminal and SFTP file transfer
- FileZilla [3.8.0](https://download.filezilla-project.org/client/FileZilla_3.8.0_win32-setup.exe) (2014-03-28)
    - Does not support modern SFTP encryption protocols

## Utilities
- [7-Zip](https://www.7-zip.org/)
- [HWiNFO](https://www.hwinfo.com/download/) (download "Portable" release, run HWiNFO32.exe)
- [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards) (throws an error on launch, but otherwise compatible)

## Force high refresh rate in games
Use [RefreshLock](https://www.softpedia.com/get/Tweak/Video-Tweak/RefreshLock.shtml) app.
