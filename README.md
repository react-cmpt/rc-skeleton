# rc-skeleton

Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.

[![Build Status](https://travis-ci.org/react-cmpt/rc-skeleton.svg?branch=master)](https://travis-ci.org/react-cmpt/rc-skeleton)
[![](https://img.shields.io/npm/v/@react-cmpt/rc-skeleton.svg)](https://www.npmjs.com/package/@react-cmpt/rc-skeleton)
[![](https://img.shields.io/github/license/react-cmpt/rc-skeleton.svg)](https://raw.githubusercontent.com/react-cmpt/rc-skeleton/master/LICENSE)

## usage

```shell
yarn add @react-cmpt/rc-skeleton
```

```jsx
import Skelenton from "@react-cmpt/rc-skeleton";

const Demo = () => {
  return (
    <Skelenton loading={loading} emptyData={data == null}>
      <div>content</div>
    </Skelenton>
  );
};
```
