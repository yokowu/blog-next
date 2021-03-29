.PHONY: build docker

all: docker

docker:
	@docker build -t blog-fe .
	@docker tag blog-fe yokowu/blog-fe
	@docker push yokowu/blog-fe