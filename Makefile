default: build

test:
	npm test

install:
	npm install

build:
	gulp lib
	find ./lib -name __tests__ -type d | xargs rm -rf
	find ./lib -name __mocks__ -type d | xargs rm -rf
