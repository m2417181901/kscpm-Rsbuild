const Generator = require('../base');
const chalk = require("chalk");
const _ = require("lodash");
const yosay = require("yosay");

class App extends Generator {
    constructor() {
        super(...arguments);
        this.log(
            yosay(
                `欢迎使用 ${chalk.green(
                    "Vue3:Graphql"
                )} Rsbuild项目生成器!`
            )
        )
        this.props = {};
    }
    async prompting() {
        const self = this;
        const pkg = await self.pkgPrompt();
        const prompts = [
            {
                type: "input",
                name: "port",
                message: "vite端口",
                default: 6060
            },
            {
                type: "input",
                name: "servicePort",
                message: "graphql服务端口",
                default: 8090
            },
            {
                type: "input",
                name: "projectPath",
                message: "项目路径",
                default: "console"
            }    
        ];
        const answers = await this.prompt(prompts);
        const result = this.setProps(answers, pkg);
        return result;
    }
    writing() {
        const props = this.getProps();
        this.copyTpl(["**/*", "**/.*"], ["node_modules"]);
        this.copy("index.html")
    }
    // install() {
    //     // 自动安装无效，需要手动安装。 this.npmInstall() 无效
    //     this.installDependencies({
    //         bower: false,
    //         npm: true,
    //         yarn: true
    //     });
    // }
} 


App._name = `Vue3:Graphql (${chalk.red("Node16+运行，更多请参考readme.md")})`;
App._sort = 1;
module.exports = App;
