# Robinhood Item Page Clone

> Project description

## Related Projects

  - https://github.com/cache-me-if-you-can/price-volume-chart-service
  - https://github.com/cache-me-if-you-can/kent-price-chart
  - https://github.com/cache-me-if-you-can/service-people-also-bought
  - https://github.com/cache-me-if-you-can/buy-service

## Table of Contents

1. [Usage](#Usage)
1. [Routes](#Routes)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Routes

| Route/Endpoint                | Description                            | Method  |
| ----------------------------- |---------------------------------------:| :------:|
| /api/alsoBought/:id           | get a list of Also Bought              | GET     |
| /api/alsoBought               | get all stock records                  | GET     |
| /api/alsoBought/:id/show      | get the stock by id                    | GET     |
| /api/alsoBought               | add a new stock record                 | POST    |
| /api/alsoBought/:id           | edit a existing stock record           | PUT     |
| /api/alsoBought/:id           | delete a stock                         | DELETE  |

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

