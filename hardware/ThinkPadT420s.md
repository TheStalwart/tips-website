# Lenovo ThinkPad T420s

## BIOS hotkeys

- BIOS Setup: `F1`
- Boot device select: `F12`

## Windows XP compatibility

T420s is one of the last laptops natively supporting Windows XP. All drivers are [available on Lenovo website](https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/thinkpad-t-series-laptops/thinkpad-t420s).

::: warning
Before installing Intel Graphics Driver, you need to manually install [Microsoft .NET Framework 3.0 for Windows XP](https://www.microsoft.com/en-in/download/details.aspx?id=3005).
:::

## Windows XP installation

Vanilla Windows XP SP3 install media [does not contain SATA drivers for T420s controller](https://www.reddit.com/r/thinkpad/comments/tpwdy3/stop_code_0x0000007b_win_xp_install_on_t420s/). I did not want to use modified install media, so i used [Easy2Boot wrapper method](https://www.youtube.com/watch?app=desktop&v=YyQ7xSvVMHE) successfully.

## Windows 11 compatibility

After upgrading RAM to 2x4GB set i managed to install vanilla Windows 11. After tinkering with some extra drivers for screen brightness hotkeys, all features i care about work great. It's not an effortless daily driver as of 2024, but as a supplement to a modern desktop machine, and a travel companion, it can do productivity and light programming reasonably well.

## USB-C charger adapter

Original charger is 20V, which is one of the native voltages of USB-PD. There are [adapters available](https://www.aliexpress.com/item/1005003421729196.html) to charge ThinkPads with USB-PD chargers and power bank supporting 20V natively.

::: warning
Do not use USB-PD power sources not supporting 20V natively e.g. Nintendo Switch charger HAC-002 that can only do 5V and 15V. When connected, Windows does not report battery state as charging and laptop makes an unhappy high pitch whine.
:::

## Storage upgrade

T420s (s stands for slim) [is limited to 7mm thick SATA disks](https://forum.thinkpads.com/viewtopic.php?f=45&t=100345). Most modern SSDs are 7mm, but make sure to check before upgrading.
