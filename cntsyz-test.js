
const assert = require( "assert" );
const cntsyz = require( "./cntsyz" );

const PROTOTYPE = Symbol.for( "prototype" );
const STATIC = Symbol.for( "static" );

let residue = ( new ( function Residue( ){
	this[ PROTOTYPE ] = {
		"test": {
			"writable": true,
			"configurable": true,
			"enumerable": true,
			"value": function test( ){
				return "test";
			}
		}
	},

	this [ STATIC ] = {
		"sample": {
			"writable": true,
			"configurable": true,
			"enumerable": true,
			"value": function sample( ){
				return "sample";
			}
		}
	}
} )( ) );

class ClassA { }

cntsyz( ClassA, residue );

assert.equal( ClassA.sample( ), "sample", "should be equal" );

assert.equal( ( new ClassA( ) ).test( ), "test", "should be equal" );

console.log( "ok" );
