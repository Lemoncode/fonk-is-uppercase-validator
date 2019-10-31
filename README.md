# fonk-is-uppercase-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-is-uppercase-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-is-uppercase-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-is-uppercase-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-is-uppercase-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-is-uppercase-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-is-uppercase-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is an uppercase string

How to install it:

```bash
npm install @lemoncode/fonk-is-uppercase-validator --save
```

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
}
```

We can add an isUppercase validation to the myFormValues

```javascript
import { isUppercase } from '@lemoncode/fonk-is-uppercase-validator';

const validationSchema = {
  field: {
    product: [isUppercase.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { isUppercase } from '@lemoncode/fonk-is-uppercase-validator';

isUppercase.setErrorMessage('El campo debe de ser una cadena en mayúsculas');
```

- Locally just override the error message for this validationSchema:

```javascript
import { isUppercase } from '@lemoncode/fonk-is-uppercase-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: isUppercase.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
