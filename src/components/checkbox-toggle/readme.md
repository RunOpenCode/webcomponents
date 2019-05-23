# roc-checkbox-toggle



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                  | Type                                                                                            | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------- |
| `checked`  | `checked`  | (optional) Default state of the underlining checkbox. If not provided, state from the checkbox will be used.                 | `boolean`                                                                                       | `null`      |
| `color`    | `color`    | Color of checkbox toggle.                                                                                                    | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled` | `disabled` | (optional) Default disable state of the underlining checkbox. If not provided, disable state from the checkbox will be used. | `boolean`                                                                                       | `null`      |
| `size`     | `size`     | Size of checkbox toggle.                                                                                                     | `"lg" \| "md" \| "sm"`                                                                          | `'md'`      |


## Events

| Event    | Description | Type                   |
| -------- | ----------- | ---------------------- |
| `change` |             | `CustomEvent<boolean>` |


## Methods

### `check() => Promise<void>`

Set toggle as checked.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Toggle checked state.

#### Returns

Type: `Promise<void>`



### `uncheck() => Promise<void>`

Set toggle as unchecked.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
