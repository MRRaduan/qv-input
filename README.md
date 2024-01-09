
<p align="center">
  <img width="150" height="150" src="https://github.com/MRRaduan/qv-input/assets/29872022/728e8233-298a-47b1-897d-47f3c798a546">
</p>

# QV Input

This repo contains an specific package with an Input password component.



## Installation

Install @mrraduan/qv-input

```bash
  npm install @mrraduan/qv-input
```


## Usage/Examples

```javascript

import { Input } from "@MRRaduan/qv-input";

const MyComponent = () => {

    const requirements = [
        {
            description: "Validation description",
            validator: (password) => console.log(password)
        }
    ]

    return <Input requirements={requirements} />
}

```

The `validator` method receive password as string and should return a boolean value.
    

## API Reference

#### `validator(password: string): boolean`

| Method | Param     | Return              |
| :-------- | :------- | :------------------------- |
| `validator` | `password` | boolean |

#### `description`


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`      | `string` | describes the validation |

## Demo

* Check the [Storybook](https://qv-input.vercel.app/?path=/docs/qv-input--docs)

https://github.com/MRRaduan/qv-input/assets/29872022/110d31f0-90ba-4f52-9483-0cbde859b229




## Authors

- [@MRRaduan](https://www.github.com/MRRaduan)

