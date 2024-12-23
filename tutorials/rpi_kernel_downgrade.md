# Kernel downgrade on Raspberry Pi OS

Instructions for downgrading a kernel while keeping updated userland of Raspberry Pi OS.

## Kernel packages explained

Kernel package name is "raspberrypi-kernel". It contains `/boot/kernel8.img` image as well as kernel modules.

Package version number is a release date and does not match kernel version inside. During my research i looked through a bunch of package versions and documented their contents:

| deb version | Kernel version | Download |
| ----------- | -------------- | -------- |
| 20230405    | 6.1.21         | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20230405-1_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20230405-1_arm64.deb) |
| 20220331    | 5.15.32        | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220331-1_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220331-1_arm64.deb) |
| 20220328    | 5.15.30        | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220328-1_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220328-1_arm64.deb) |
| 20220308    | 5.10.103       | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220308-2_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220308-2_arm64.deb) |
| 20220120    | 5.10.92        | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220120-1_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220120-1_arm64.deb) |
| 20211118    | 5.10.63        | [\[32bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20211118-3_armhf.deb) [\[64bit\]](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20211118-3_arm64.deb) |

There are more versions available in [package archive](https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/) if you're looking for a specific version.

## Installing kernel package

Download a kernel package to a local file system, e.g.:

```bash
wget https://archive.raspberrypi.org/debian/pool/main/r/raspberrypi-firmware/raspberrypi-kernel_1.20220308-2_arm64.deb
```

Install the package:

```bash
dpkg -i raspberrypi-kernel_1.20220308-2_arm64.deb
```

Newer versions of bootloader are looking for kernel image in a different path, so make a copy manually:

```bash
cp /boot/kernel8.img /boot/firmware/kernel8.img
```

Depending on your hardware revision and bootloader version, the filename might be different. Consult [official documentation](https://www.raspberrypi.com/documentation/computers/config_txt.html#kernel) if your setup boots a "wrong" version of the kernel.

## Prevent apt from upgrading kernel

Instruct apt to hold the currently installed kernel version:

```bash
apt-mark hold raspberrypi-kernel
```

## Notes

On my [Pi4B](/hardware/Pi4B) downgrading the kernel resulted in broken Wayland. Since my usecase does not require graphical session, i did not investigate ways to fix it.

Switching to X11 using `raspi-config` resulted in working graphical environment.
