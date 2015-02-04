default: build

test:
	npm test

install:
	npm install

build:
	gulp lib
	find ./lib -name __tests__ -type d -exec rm -r {} \;
