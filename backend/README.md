## Functionality 

### Routes
#### USER Routes


## Command to run backend module locally
```
yarn install
yarn dev
```

### Password Hashing using Web Crypto API
- The Web Crypto API provides a secure and efficient way to hash passwords using algorithms like PBKDF2, SHA-256, or Argon2.  **We are using PBKDF2 algorithm.**

- In case we have Express server for writing our backend routes we can use `bycrypt` library for password hashing. Implementing hashing using `bycrypt` is easy as compared to Web Crypto API.

**Reason for not using Bycrypt**
- `Bycrypt` is a native Node.js module which is not supported in Cloudflare Workers environment due to their reliance on native bindings. 
- `Web Crypto API` is a Workers-compatible alternative to it.