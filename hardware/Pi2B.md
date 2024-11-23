# Raspberry Pi 2 Model B

## Notable specs

- ARMv7 32-bit architecture
- 1GB RAM
- USB 2.0
- 100mbps Ethernet
- No Wi-Fi
- No Bluetooth

[Full specs](https://www.raspberrypi.com/products/raspberry-pi-2-model-b/) on manufacturer's website.

[Model comparison](https://en.wikipedia.org/wiki/Raspberry_Pi#Model_comparison) on Wikipedia.

## Supported Raspbian releases

- 11 Bullseye is the last 100% supported release
- 12 Bookworm support is partial due to Wayland requiring Pi 3 or newer
  - [Bullseye - the new version of Raspberry Pi OS - Raspberry Pi](https://www.raspberrypi.com/news/raspberry-pi-os-debian-bullseye/)
  - [Bookworm on the RPI 2 not available? - Raspberry Pi Forums](https://forums.raspberrypi.com/viewtopic.php?t=365567)

## docker-compose

[docker-compose](https://docs.docker.com/compose/) version included in Raspbian 11 Bullseye is outdated, but will run most modern configurations if you add the following line to `docker-compose.yaml` file:

```yaml
version: "3"
```

For some reason, [having this property in a yaml file will raise a warning](https://docs.docker.com/compose/compose-file/04-version-and-name/#version-top-level-element-obsolete) in newer versions of docker-compose.
