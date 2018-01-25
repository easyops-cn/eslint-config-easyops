# eslint-config-easyops

[![Build Status](https://travis-ci.org/easyops-cn/eslint-config-easyops.svg?branch=master)](https://travis-ci.org/easyops-cn/eslint-config-easyops)

An ESLint config preset complements recommended rules for smooth ES201x transition.

## Usage

Install

```
yarn add --dev eslint-config-easyops
```

Add to your ESLint config

```
extends: ["eslint:recommended", "prettier", "easyops/production"]
```

## Category

### `easyops/production`

Used in production environment, most of these errors can be auto fixed by ESLint. The developer would not see the annoying error tilde in their IDE, but once they commit the changes, ESLint will use `easyops/production` to proofread the staged code.
