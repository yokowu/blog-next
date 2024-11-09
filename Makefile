.PHONY: build docker

all: docker
TAG=v1.0.0

docker:
	@docker build -t blog-fe .
	@docker tag blog-fe yokowu/blog-fe:$(TAG)
	@docker push yokowu/blog-fe:$(TAG)