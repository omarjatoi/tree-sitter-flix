/**
 * @file Tree-sitter parser for the Flix programming language
 * @author Omar Jatoi <git@omarjatoi.com>
 * @license Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "flix",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
