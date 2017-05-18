"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining
              		a copy of this software and associated documentation files
              		(the "Software"), to deal in the Software without restriction,
              		including without limitation the rights to use, copy, modify, merge,
              		publish, distribute, sublicense, and/or sell copies of the Software,
              		and to permit persons to whom the Software is furnished to do so,
              		subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included
              		in all copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
              		OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              		IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
              		CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
              		TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
              		SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "cntsyz",
              			"path": "cntsyz/cntsyz.js",
              			"file": "cntsyz.js",
              			"module": "cntsyz",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/cntsyz.git",
              			"test": "cntsyz-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Reconstruct class structure.
              
              		This is a helper function to reconstruct class structure to its present form
              			by applying the residue of the class structure.
              	@end-module-documentation
              
              	@include:
              		{
              			"asyum": "asyum",
              			"clazof": "clazof",
              			"defyn": "defyn",
              			"falzy": "falzy",
              			"kein": "kein",
              			"protype": "protype",
              			"truly": "truly"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var asyum = require("asyum");
var clazof = require("clazof");
var defyn = require("defyn");
var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var truly = require("truly");

var PROTOTYPE = (0, _for2.default)("prototype");
var STATIC = (0, _for2.default)("static");

var cntsyz = function cntsyz(blueprint, residue) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"blueprint:required": "function",
                                                  			"residue": "Residue"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	}

	if (truly(residue) && clazof(residue, "Residue")) {
		residue = asyum(residue, "Residue", function get() {
			var residue = {};

			if (kein(STATIC, this)) {
				residue[STATIC] = this[STATIC];
			}

			if (kein(PROTOTYPE, this)) {
				residue[PROTOTYPE] = this[PROTOTYPE];
			}

			return residue;
		}).get();

		(0, _keys2.default)(residue[STATIC]).forEach(function (property) {
			if (!kein(property, blueprint)) {
				defyn(property, blueprint).define(residue[STATIC][property]);
			}
		});

		(0, _keys2.default)(residue[PROTOTYPE]).forEach(function (property) {
			var prototype = blueprint.prototype;

			if (!kein(property, prototype)) {
				defyn(property, prototype).define(residue[PROTOTYPE][property]);
			}
		});
	}

	return blueprint;
};

module.exports = cntsyz;

//# sourceMappingURL=cntsyz.support.js.map