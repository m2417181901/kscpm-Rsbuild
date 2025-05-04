module.exports = class props {
    constructor() {
        this.props = {}
    }
    getProps() {
        return this.props;
    }
    setProps() {
        this.props = Object.assign.call(null, {}, this.props, ...arguments);
        return this.props;
    }
};
