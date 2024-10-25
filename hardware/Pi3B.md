# Raspberry Pi 3 Model B

## Notable specs

- ARM64 64-bit architecture
- 1GB RAM
- 100mbps Ethernet
- Wi-Fi
- Bluetooth

[Full specs](https://www.raspberrypi.com/products/raspberry-pi-3-model-b/) on manufacturer's website.

[Model comparison](https://en.wikipedia.org/wiki/Raspberry_Pi#Model_comparison) on Wikipedia.

## Use as a desktop in 2024

Anything web-based will unfortunately run out of RAM fairly quickly. Opening more than 2 tabs in a web browser is a problem. Running Electron-based apps like VSCode is _possible_ but with no headroom for the project to run and debug.

The GUI itself is very slow on Pi3B's GPU. Raspbian doesn't let you switch from X11 to Wayland in GUI, but it's possible by adding `wayland=on` to the end of the `/boot/firmware/cmdline.txt` file. Either way desktop renders at low framerate so unless you have no other option - i would suggest using Pi3B as a single-app appliance.
