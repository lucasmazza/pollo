VERSION= 0.0.1

test:
	@python -m SimpleHTTPServer

min:
	@echo "/* pollo.js $(VERSION) (`git rev-parse HEAD`) https://github.com/lucasmazza/pollo/blob/master/LICENSE */" > pollo.min.js
	@uglifyjs lib/pollo.js >> pollo.min.js

.PHONY: test