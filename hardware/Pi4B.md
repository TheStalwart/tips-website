# Raspberry Pi 4 Model B

## Notable specs

- ARM64 64-bit architecture
- 1GB, 2GB, 4GB or 8GB LPDDR4-3200 SDRAM (depending on model)
- USB 3.0 + USB 2.0
- Gigabit Ethernet
- Wi-Fi 802.11ac
- Bluetooth 5.0
- 2x micro-HDMI outputs
- 15W (5V 3A) PSU required

[Full specs](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) on manufacturer's website.

[Model comparison](https://en.wikipedia.org/wiki/Raspberry_Pi#Model_comparison) on Wikipedia.

## Use as a desktop in 2024

[4k60](https://www.makeuseof.com/run-your-raspberry-pi-at-4k-60hz/) and [1080p120](https://www.jeffgeerling.com/blog/2022/gaming-1080p-and-120-hz-on-raspberry-pi-4) HDMI modes can be enabled by adjusting `/boot/firmware/*` files.

## Gaming mice sensitivity

Gaming mice that expect high polling rate can have weird sensitivity out of box. Add `usbhid.mousepoll=0` to `/boot/firmware/cmdline.txt` to fix. Look out for [possible performance side-effects](https://forums.raspberrypi.com/viewtopic.php?t=84999#p612681) though.
