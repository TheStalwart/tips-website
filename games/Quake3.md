# Quake III Arena

## Source ports
A solid choice for Windows XP is [ioquake3](https://ioquake3.org/). It provides close to vanilla experience but fixes some bugs while maintaining support for old versions of Windows.

For modern hardware try [quake3e](https://github.com/ec-/Quake3e/releases). Same vanilla experience but even more compatibility improvements for modern OS and hardware. x86 builds are compatible with Windows XP SP3.

## Handicap
Consistent issue of casual/beginner players is accidentally handicapping themselves. If you see a player with numbers over their avatar in the scoreboard, tell them to go Setup -> Player -> Handicap, and reset the value to "NONE".

## Custom resolution
For vanilla and ioquake3 builds, set desired resolution using `\r_custom*` variables and apply them using `\r_mode -1`. `\vid_restart` command restarts rendering engine to apply new settings.
```
\r_customwidth 1920
\r_customheight 1080
\r_mode -1
\vid_restart
```

Modern vkQuake3/quake3e builds add a mode to set engine resolution to Windows desktop resolution:
```
\r_mode -2
\vid_restart
```

## Field of view adjustment
- Default is 90: `\cg_fov 90` 
- For widescreen displays, try higher values: `\cg_fov 120`

## FPS counter
```
\cg_drawFPS 1
```

## More information
[PCGamingWiki](https://www.pcgamingwiki.com/wiki/Quake_III_Arena)
