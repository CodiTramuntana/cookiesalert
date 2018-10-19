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


#  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
#    f.match(%r{^(test|spec|features)/})
#  end
  spec.files = Dir["{lib,vendor,app}/**/*"] + ["LICENSE", "Rakefile", "README.md"]
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 10.0"
end
