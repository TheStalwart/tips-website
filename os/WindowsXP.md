# Windows XP

## Windows Update
Microsoft does not serve updates for Windows XP anymore, use [Legacy Update](https://legacyupdate.net/) to restore Windows Update functionality.

The website is set up for backwards compatibility with Internet Explorer 6, so just open `http://legacyupdate.net` and go from there.

To retrigger Windows Update Agent: `wuauclt /detectnow`

## Force high refresh rate in games
Use [RefreshLock](https://www.softpedia.com/get/Tweak/Video-Tweak/RefreshLock.shtml) app.

## Web browsers
Internet Explorer 6 and 8 do not support modern HTTPS, and modern web avoids unencrypted protocols as much as possible, but there are still WinXP-compatible browsers capable of accessing modern web.
- [Supermium](https://github.com/win32ss/supermium)
    - Chrome fork patched to work on Windows XP
    - Still actively maintained
    - Requires [SSE2](https://en.wikipedia.org/wiki/SSE2#CPU_support) CPU instruction set
    - To download using Internet Explorer: `http://win32subsystem.live/supermium/legacy/`
- [Firefox 52.9.0](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/en-US/Firefox%20Setup%2052.9.0esr.exe) (June 26, 2018)
    - Increasingly degraded support for modern web features
    - The last "official" browser supporting Windows XP
    - To download using Internet Explorer, access the "FTP" server using HTTP protocol: `http://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/en-US/`

## Text editors
Last supported version of Notepad++ is [7.9.2](https://notepad-plus-plus.org/downloads/v7.9.2/)
