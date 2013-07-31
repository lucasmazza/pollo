VERSION= 0.0.2

test:
	@python -m SimpleHTTPServer

min:
	@echo "/* pollo.js $(VERSION) (`git rev-parse HEAD`) https://github.com/lucasmazza/pollo/blob/master/LICENSE */" > pollo.min.js
	@uglifyjs src/pollo.js >> pollo.min.js

.PHONY: test
