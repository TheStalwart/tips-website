# Unreal Tournament (1999)

Arena shooter developed by [Digital Extremes](https://www.digitalextremes.com/), nowadays known for [Warframe](/games/Warframe.md).

## Videos
- [The Origins of Facing Worlds](https://youtu.be/LuUIeEgT22M?si=MXaZCmkALDk6s-4Q)

## Unintentional speedhack issue
On some setups, the game clock will run faster than realtime resulting in unintentional "speedhack" - character run speed and weapon fire rate will be way above normal, which besides feeling weird also throws off multiplayer balance. 

It took years to find the cause and workaround, but it seems to be highly correlated to VSync settings in GPU control panel. Most GPUs of WinXP era allow to set per-game 3D settings - force enable VSync for UnrealTournament.exe and it should solve the issue.

Enabling VSync will cause increased input lag, so alternative solution is to force disable VSync but limit framerate using GPU driver or 3rd party application like [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards)
