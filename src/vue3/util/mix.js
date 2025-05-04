module.exports = function mix(Parent) {
    return function(...mixins) {
        const constructors = [];
        for (let i in mixins) {
            const mixin = mixins[i];
            constructors.push(mixin.prototype.constructor);
            copyProps(Parent, mixin);
            copyProps(Parent.prototype, mixin.prototype);
        }
        const constructor = Parent.prototype.constructor;
        if (constructors.length) {
            Parent.prototype.constructor = function(...arg) {
                constructor.call(this, ...arg);
                constructors.forEach(function(method) {
                    method && method.call(this, ...arg);
                });
            };
        }
        return Parent;
    };
};

function copyProps(target = {}, source = {}) {
    const ownProps = Object.getOwnPropertyNames(source);
    ownProps.forEach(key => {
        if (
            source.hasOwnProperty(key) &&
            !/^(prototype|name|constructor)$/.test(key)
        ) {
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    });
}
