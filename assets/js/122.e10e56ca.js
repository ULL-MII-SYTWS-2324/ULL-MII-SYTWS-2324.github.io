(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{765:function(s,e,a){"use strict";a.r(e);var t=a(9),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"cubrimiento-covering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cubrimiento-covering"}},[s._v("#")]),s._v(" Cubrimiento /Covering")]),s._v(" "),a("p",[s._v("In computer science, "),a("em",[s._v("code coverage")]),s._v("\nis a measure used to describe the degree to which the source code of a program\nis tested by a particular test suite.")]),s._v(" "),a("p",[s._v("A program with high code coverage has been more thoroughly tested and has a lower chance of containing software bugs than a program with low code coverage.")]),s._v(" "),a("p",[s._v("Many different metrics can be used to calculate code coverage;\nsome of the most basic are:")]),s._v(" "),a("ul",[a("li",[s._v("the percent of program subroutines and")]),s._v(" "),a("li",[s._v("the percent of program statements called during execution of the test suite.")])]),s._v(" "),a("p",[s._v("Ideally your covering must include at least smoke testing and edge cases.")]),s._v(" "),a("h3",{attrs:{id:"smoke-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smoke-testing"}},[s._v("#")]),s._v(" Smoke Testing")]),s._v(" "),a("ul",[a("li",[s._v("Smoke testing (also "),a("strong",[s._v("confidence testing")]),s._v(", "),a("strong",[s._v("sanity testing")]),s._v(") is preliminary testing to reveal simple failures")]),s._v(" "),a("li",[s._v("Smoke testing refers to test cases that cover the most important functionality of a component or system")])]),s._v(" "),a("h3",{attrs:{id:"edge-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edge-cases"}},[s._v("#")]),s._v(" Edge cases")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("In programming, an "),a("em",[s._v("edge case")]),s._v(" typically involves input values that require special handling in an algorithm behind a computer program.")])]),s._v(" "),a("li",[a("p",[s._v("As a measure for validating the behavior of computer programs in such cases, unit tests are usually created; they are testing "),a("em",[s._v("boundary conditions")]),s._v(" of an algorithm, function or method.")])]),s._v(" "),a("li",[a("p",[s._v('A series of edge cases around each "boundary" can be used to give reasonable coverage and confidence using the assumption that if it behaves correctly at the edges, it should behave everywhere else.')])]),s._v(" "),a("li",[a("p",[s._v("For example, a function that divides two numbers might be tested using both very large and very small numbers. This assumes that if it works for both ends of the magnitude spectrum, it should work correctly in between.")])])]),s._v(" "),a("h3",{attrs:{id:"tools-nyc-istanbul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-nyc-istanbul"}},[s._v("#")]),s._v(" Tools: nyc / Istanbul")]),s._v(" "),a("p",[s._v("Here is an example of use of "),a("code",[s._v("nyc")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("➜  hello-compilers-solution git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("(master) ✗ jq '.scripts' package.json \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build; mocha"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mmt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build; ./bin/mmt.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jison src/maxmin-ast.jison src/maxmin.l -o src/maxmin.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cov"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nyc npm run test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("To run it:")]),s._v(" "),a("div",{staticClass:"language-hello-compilers-solution git:(master) ✗ npm run cov line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n> hello-compilers@1.0.1 cov\n> nyc npm run test\n\n\n> hello-compilers@1.0.1 test\n> npm run build; mocha\n\n\n> hello-compilers@1.0.1 build\n> jison src/maxmin-ast.jison src/maxmin.l -o src/maxmin.js\n\n  Testing hello maxmin translator\n    ✔ Test 2@1&3 = 2\n    ✔ Test 2@1@3 = 3\n    ✔ Test 2&1&3 = 1\n    ✔ Test 2&1@3 = 3\n    ✔ Test 2&(1@3) = 2\n\n\n  5 passing (12ms)\n\n--------------|---------|----------|---------|---------|------------------------------------------------------------------------\nFile          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                      \n--------------|---------|----------|---------|---------|------------------------------------------------------------------------\nAll files     |   57.33 |    43.45 |   45.71 |   54.41 |                                                                        \n ast-build.js |     100 |      100 |     100 |     100 |                                                                        \n maxmin.js    |   56.74 |    43.45 |   40.62 |   53.73 | ...456-463,469,490-498,511,516,530-545,554-575,582,584,586,608-613,616 \n--------------|---------|----------|---------|---------|------------------------------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("By default nyc uses Istanbul's text reporter. However, you may specify an alternative reporter.\n"),a("a",{attrs:{href:"https://istanbul.js.org/docs/advanced/alternative-reporters/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Here is a list of all available reporters, as well as the output it generates"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("The value "),a("code",[s._v("html")]),s._v(" generates a HTML report you can view in your browse. You can specify more than one "),a("code",[s._v("reporter")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx nyc --reporter=html --reporter=text --report-dir docs mocha\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("That will produce a "),a("a",{attrs:{href:"/assets/nyc-coverage-example"}},[s._v("web page report like this")]),s._v(" in the folder "),a("code",[s._v("docs")]),s._v(" (by default the output folder will be named "),a("code",[s._v("coverage")]),s._v("):")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("➜  hello-compilers-solution git:(master) ✗ ls -ltr docs \ntotal 328\n-rw-r--r--  1 casianorodriguezleon  staff   5394 27 feb 13:49 base.css\n-rw-r--r--  1 casianorodriguezleon  staff   2655 27 feb 13:49 block-navigation.js\n-rw-r--r--  1 casianorodriguezleon  staff    540 27 feb 13:49 favicon.png\n-rw-r--r--  1 casianorodriguezleon  staff    209 27 feb 13:49 sort-arrow-sprite.png\n-rw-r--r--  1 casianorodriguezleon  staff   6181 27 feb 13:49 sorter.js\n-rw-r--r--  1 casianorodriguezleon  staff    676 27 feb 13:49 prettify.css\n-rw-r--r--  1 casianorodriguezleon  staff  17590 27 feb 13:49 prettify.js\n-rw-r--r--  1 casianorodriguezleon  staff   5153 27 feb 13:49 index.html\n-rw-r--r--  1 casianorodriguezleon  staff   9906 27 feb 13:49 ast-build.js.html\n-rw-r--r--  1 casianorodriguezleon  staff  92586 27 feb 13:49 maxmin.js.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);