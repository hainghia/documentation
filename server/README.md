<p align="center">
<a href="/" target="_blank">
<img src="logo.svg" width="400" alt="Logo">
</a></p>

<p align="center">
<a href="https://nodejs.org/" target="_blank">Nodejs 18.8.0</a> |
<a href="" target="_blank">graphql 16.6.0</a> |
<a href="https://www.apollographql.com/docs/apollo-server/getting-started" target="_blank">apollo-server 3.10.2</a> |
</p>

___

## Command Line

- Fresh lib NodeJs Linux
  `rm -rf .yarn/ dist/ .pnp.cjs .pnp.loader.mjs yarn.lock`

- Generate Secret Key 256-bit base64 key:
  `openssl rand -base64 32`
- Create file tsconfig.json:
  `tsc --init`

___

## Install Enviroment

> https://www.apollographql.com/docs/apollo-server/getting-started
>

### Project Structure

```
├── Cargo.lock
├── Cargo.toml
├── src/
│ ├── lib.rs
│ ├── main.rs
│ └── bin/
│     ├── named-executable.rs
│     ├── another-executable.rs
│     └── multi-file-executable/
│         ├── main.rs
│         └── some_module.rs
├── benches/
│   ├── large-input.rs
│   └── multi-file-bench/
│       ├── main.rs
│       └── bench_module.rs
├── examples/
│   ├── simple.rs
│   └── multi-file-example/
│       ├── main.rs
│       └── ex_module.rs
└── tests/
    ├── some-integration-tests.rs
    └── multi-file-test/
        ├── main.rs
        └── test_module.rs
```

***
