[![Build Status](https://img.shields.io/travis/mehulcs/directory-organizer)](https://www.npmjs.com/package/directory-organizer) [![Package Version](https://img.shields.io/npm/v/directory-organizer)](https://www.npmjs.com/package/directory-organizer)
# Directory Organizer
Auto organize files in any directory, Every time new file is added to directory, based on its type it will be moved to sub directory of corrosponding type.

# Install
```sh
$ npm install directory-organizer -g
```

# Usage

### Configuration
Create a JSON file as per below format to provide a config.

```JSON
[
  {
    "directory": "/home/mehul/Downloads",   // Directory to auto organize
    "files": [
      {
        "fileTypes": ["torrent"],    // File type to watch to auto organize
        "directory": "torrents"      // Directory to move matching file types 
      },
      {
        "fileTypes": ["json"],
        "directory": "jsonFiles"
      },
      {
        "fileTypes": ["png", "jpg", "jpeg"],
        "directory": "images"
      },
      {
        "fileTypes": ["pdf"],
        "directory": "pdfs"
      }
    ]
  }
]
```
> Directory Organizer can organize multiple directories also, Add multiple objects at root level in above `config.json` file and specify path to directory in `directory` key.
### Start
```sh
$ directory-organizer ./config.json
```
> Absolute or Relative path to config.json file created in configuration.

# Todo
* Run directory organizer in background.
* Start and Stop CLI options.

# Issues and features requests
Please drop an issue, if you find something that doesn't work, or a feature request at [https://github.com/mehulcs/directory-organizer/issues](https://github.com/mehulcs/directory-organizer/issues)

Find me on twitter [@mehul\_cs](https://twitter.com/mehul_cs)
