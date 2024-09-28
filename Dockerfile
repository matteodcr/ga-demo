FROM ubuntu:latest
LABEL authors="mattd"

ENTRYPOINT ["top", "-b"]