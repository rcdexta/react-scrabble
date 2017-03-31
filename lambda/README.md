# Serverless CRUD with S3

[Serverless](https://serverless.com/) service which provides a basic CRUD service using S3.

## Installation

1. Run `serverless install --url https://github.com/tscanlin/serverless-s3-crud` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-s3-crud`
3. Run `npm install`
4. Deploy with `serverless deploy`

## Development

Make sure to create the path `./data/react-scrabble` for the local server to work.

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble --data '{ "body" : "Learn Serverless" }'
```

### List


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble
```

### ReadOne

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble/<id>
```

### ReadAll

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble/readAll
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble/<id> --data '{ "body" : "Understand Serverless" }'
```

### Delete

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/react-scrabble/<id>
```

## AWS services used

- Lambda
- API Gateway
- S3
