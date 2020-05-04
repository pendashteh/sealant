# sealant
a browser that is "tight".

## Usage
```
$ sealant https://www.reuters.com/
```
Opens https://www.reuters.com/ without any ad on a simple and light browser window.
The browser window is limited to "*reuters.com" hence all ads and extras are blocked by default.

```
$ sealant https://www.reuters.com/ --open
```
Opens https://www.reuters.com/ and allows for external domains to be loaded. (including ads)


You can always press `ctrl+Z` in command line to freeze the browser window.

Type `fg` in command line to bring the sealant window back to life.

## Implementation

This browser is built on [Electron JS](https://www.electronjs.org/) and its tightness is limited to `electron`'s `BrowserWindow.loadURL`.
