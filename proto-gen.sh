#!/bin/bash

rm -rf pb/
proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=pb/ protos/*.proto
