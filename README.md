# rollup-plugin-bundle-less

This package enables bundling LESS files in Rollup.

It takes an entry point ( styles.less in the root directory by default ), and bundles all the files that are imported in it, and outputs one bundled less file ( styles.less by default )

## Usage

```
import lessBundler from 'rollup-plugin-bundle-less'

export default {
    ...
    plugins: [
        lessBundler({
          src: 'app.less', // styles.less by default
          dest: 'dist/main.less' // styles.less by default
        })
    ]
};
```

## Example

```
// variables.less

@bgColor: #ebde2a;
@secondaryColor: #6b5c07;
```

```
// header.less

header {
    background-color: @bgColor;
}
```

```
// body.less

nav {

    ul {
        list-style-type: none;
    }
    
}
```

All the .less files above get imported in app.less

```
// app.less

@import 'variables';
@import 'header';
@import 'body';

```

Result ( styles.less or as configured )

```
@bgColor: #ebde2a;
@secondaryColor: #6b5c07;
header {
    background-color: @bgColor;
}
nav {

    ul {
        list-style-type: none;
    }
    
}

```

## Credits

The credit goes to @Platypi for the less-bundle package.

https://github.com/Platypi/less-bundle
