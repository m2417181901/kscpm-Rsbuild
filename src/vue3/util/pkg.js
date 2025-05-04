const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const validate_npm_package_name = require("validate-npm-package-name");
module.exports = class pkg {
    async pkgPrompt() {
        const self = this;
        const prompts = [
            {
                type: "input",
                name: "name",
                message: "项目名称",
                default: self.constructor._dir || "default",
                validate: function (input) {
                    const done = this.async();
                    const its = validate_npm_package_name(input);
                    if (!its.validForNewPackages) {
                        const errors = (its.errors || []).concat(
                            its.warnings || []
                        );
                        const er = new Error(
                            "Sorry, " + errors.join(" and ") + "."
                        );
                        done(er);
                        return;
                    };
                    done(null, true);
                }
            },
            {
                type: "confirm",
                name: "updatePkg",
                message: `更新现有项目`,
                default: true,
                when: function (answers) {
                    return fs.existsSync(self.destinationPath(answers.name));
                }
            },
            {
                type: "input",
                name: "name",
                message: "重新输入项目名",
                when: function (answers) {
                    return answers.updatePkg === false;
                },
                validate: function (input) {
                    const done = this.async();
                    const its = validate_npm_package_name(input);
                    if (!its.validForNewPackages) {
                        const errors = (its.errors || []).concat(
                            its.warnings || []
                        );
                        const er = new Error(
                            "Sorry, " + errors.join(" and ") + "."
                        );
                        done(er);
                        return;
                    }
                    if (fs.existsSync(self.destinationPath(input))) {
                        const er = new Error(
                            `Sorry, Existing this directory, please change .`
                        );
                        done(er);
                        return;
                    }
                    done(null, true);
                }
            },
            {
                type: "input",
                name: "title",
                message: "项目页面显示title",
                default: "金山云"
            }, {
                type: "input",
                name: "keywords",
                message: "项目关键字",
                default: self.constructor._desc || "项目关键字"
            },
            {
                type: "input",
                name: "description",
                message: "项目描述",
                default: self.constructor._desc || "项目描述"
            },
            {
                type: "input",
                name: "author",
                message: "项目开发者",
                default: self.user.git.email()
            },
            {
                type: "input",
                name: "repository",
                message: "仓库地址"
            }
        ];
        const answers = await self.prompt(prompts);
        self.destinationRoot(path.resolve(process.cwd(), answers.name));
        return answers;
    }
};