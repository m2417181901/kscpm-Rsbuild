const _ = require("lodash");
const fs = require("fs");
const path = require("path");
function changePath(_path) {
    return _path.replace(/^([a-zA-Z_0-9.])/, "*$1");
}
module.exports = class copy {
    getIgnore(ignore) {
        let result = [];
        if (_.isUndefined(ignore)) {
            return result;
        }
        if (_.isString(ignore)) {
            result = [`${this.sourceRoot()}/${ignore}`];
        } else if (_.isArray(ignore)) {
            result = _.map(ignore, ign => {
                return `${this.sourceRoot()}/${ign}`;
            });
        } else {
            throw new Error("ignore must be string or array<string>");
        }
        return result;
    }
    copyTplSingle(source, dest, ignore) {
        if (fs.existsSync(source)) {
            const _path = source.replace(this.sourceRoot() + "/", "");
            dest = path.resolve(dest, _path);
        }
        this.fs.copyTpl(
            source,
            dest,
            this.props,
            {},
            {
                globOptions: {
                    ignore: ignore
                }
            }
        );
    }
    copyTpl(source, ignore) {
        const dest = this.destinationRoot();
        ignore = this.getIgnore(ignore);
        if (_.isArray(source)) {
            _.each(source, single => {
                this.copyTplSingle(
                    `${this.sourceRoot()}/${changePath(single)}`,
                    dest,
                    ignore
                );
            });
        } else {
            this.copyTplSingle(
                `${this.sourceRoot()}/${changePath(source)}`,
                dest,
                ignore
            );
        }

        return this;
    }
    copySingle(source, dest, ignore) {
        if (fs.existsSync(source)) {
            const _path = source.replace(this.sourceRoot() + "/", "");
            dest = path.resolve(dest, _path);
        }
        this.fs.copy(source, dest, {
            globOptions: {
                ignore: ignore
            }
        });
        return this;
    }
    copy(source, ignore) {
        const dest = this.destinationRoot();
        ignore = this.getIgnore(ignore);
        if (_.isArray(source)) {
            _.each(source, single => {
                this.copySingle(
                    `${this.sourceRoot()}/${changePath(single)}`,
                    dest,
                    ignore
                );
            });
        } else {
            this.copySingle(
                `${this.sourceRoot()}/${changePath(source)}`,
                dest,
                ignore
            );
        }
        return this;
    }
};
