import type { AWS } from '@serverless/typescript';

import { getPeople, createPerson, getPerson, updatePerson } from "@functions/people";
import { getSwapiPeople, getSwapiPerson } from "@functions/swapi/people";

const serverlessConfiguration: AWS = {
  service: 'people',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dynamodb', 'serverless-auto-swagger'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'us-east-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [{
          Effect: "Allow",
          Action: [
            "dynamodb:DescribeTable",
            "dynamodb:Query",
            "dynamodb:Scan",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:UpdateItem",
            "dynamodb:DeleteItem",
          ],
          Resource: "arn:aws:dynamodb:*:*:table/PersonTable",
        }],
      },
    },
  },
  // import the function via paths
  functions: { getPeople, createPerson, getPerson, updatePerson, getSwapiPeople, getSwapiPerson },
  package: { individually: true },
  custom:{
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb:{
      start:{
        port: 5000,
        inMemory: true,
        migrate: true,
      },
      stages: "dev"
    },
    autoswagger: {
      title: 'Challenge Serverless',
      apiType: 'http',
      generateSwaggerOnDeploy: true,
      swaggerPath: 'challenge-serverless',
      typefiles: [],
      schemes: ['https'],
      excludeStages: ['production'],
      basePath: "/${opt:stage, 'dev'}",
    },
  },
  resources: {
    Resources: {
      PersonTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "PersonTable",
          AttributeDefinitions: [{
            AttributeName: "id",
            AttributeType: "S",
          }],
          KeySchema: [{
            AttributeName: "id",
            KeyType: "HASH"
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
