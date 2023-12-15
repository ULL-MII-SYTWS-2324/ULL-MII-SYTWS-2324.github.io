(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{778:function(e,t,a){"use strict";a.r(t);var n=a(9),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"about-github-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-github-packages"}},[e._v("#")]),e._v(" About GitHub Packages")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/packages/publishing-and-managing-packages/about-github-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("About GitHub Packages"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"configuring-npm-for-use-with-github-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-npm-for-use-with-github-packages"}},[e._v("#")]),e._v(" Configuring npm for use with GitHub Packages")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring npm for use with GitHub Packages"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"authenticating-with-a-personal-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticating-with-a-personal-access-token"}},[e._v("#")]),e._v(" Authenticating with a personal access token")]),e._v(" "),a("p",[e._v("To authenticate by adding your personal access token to your "),a("code",[e._v("~/.npmrc file")]),e._v(", edit the "),a("code",[e._v("~/.npmrc")]),e._v(" file for your project to include the following line, replacing "),a("code",[e._v("TOKEN")]),e._v(" with your personal access token. Create a new "),a("code",[e._v("~/.npmrc")]),e._v(" file if one doesn't exist.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//npm.pkg.github.com/:_authToken=TOKEN\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("To authenticate by logging in to npm, use the "),a("code",[e._v("npm login")]),e._v(" command, replacing "),a("em",[e._v("USERNAME")]),e._v(" with your GitHub username, "),a("em",[e._v("TOKEN")]),e._v(" with your personal access token, and "),a("em",[e._v("PUBLIC-EMAIL-ADDRESS")]),e._v(" with your email address.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm login --registry=https://npm.pkg.github.com\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("It stores the token in the file "),a("code",[e._v("~/.npmrc")])]),e._v(" "),a("p",[e._v("If you are using a GitHub Actions workflow, you can use a "),a("code",[e._v("GITHUB_TOKEN")]),e._v(" to publish and consume packages in GitHub Packages without needing to store and manage a personal access token. For more information, see:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authenticating with the GITHUB_TOKEN"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"publishing-a-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-a-package"}},[e._v("#")]),e._v(" Publishing a Package")]),e._v(" "),a("p",[e._v("By default, GitHub Packages publishes a package in the GitHub repository you specify in the "),a("code",[e._v("name")]),e._v(" field of the "),a("em",[e._v("package.json")]),e._v(" file. For example, you would publish a package named")]),e._v(" "),a("p",[a("code",[e._v('"name": "@my-org/test"')])]),e._v(" "),a("p",[e._v("to the")]),e._v(" "),a("p",[a("code",[e._v("my-org/test")]),e._v(" GitHub repository.")]),e._v(" "),a("p",[e._v("You can add a summary for the package listing page by including a "),a("em",[e._v("README.md")]),e._v(" file in your package directory. For more information, see")]),e._v(" "),a("ul",[a("li",[e._v('"'),a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/using-a-package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with package.json"),a("OutboundLink")],1),e._v('" and')]),e._v(" "),a("li",[e._v('"'),a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/creating-node-modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to create Node.js Modules"),a("OutboundLink")],1),e._v('"')])]),e._v(" "),a("p",[e._v("in the npm documentation.")])])}),[],!1,null,null,null);t.default=s.exports}}]);