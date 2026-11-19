# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'cookiesalert/version'

Gem::Specification.new do |spec|
  spec.name          = "cookiesalert"
  spec.version       = Cookiesalert::VERSION
  spec.authors       = ["Josep Subils", "Isaac Massot", "Agustí B.R."]
  spec.email         = ["josep.sr@coditramuntana.com", "issac.mg@coditramuntana.com", "agusti.br@coditramuntana.com"]

  spec.summary       = "Cookie's Alert generator"
  spec.description   = "Cookie's Javascript/CSS/View Layout for Alert generator"
  spec.homepage      = "https://github.com/CodiTramuntana/cookiesalert"
  spec.license       = "MIT"

  spec.files = Dir["{lib,vendor,app,config}/**/*"] + ["LICENSE", "Rakefile", "README.md"]
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", ">= 2.2.33"
  spec.add_development_dependency "rake", ">= 12.3.3"
end
