"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mix = require("./util/mix");
const props = require("./util/props");
const copy = require("./util/copy");
const pkg = require("./util/pkg");

class Base extends Generator {
}

module.exports = mix(Base)(
    props,
    copy,
    pkg
);
