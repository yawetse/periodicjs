/*
 * periodic
 * http://github.com/typesettin/periodic
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */

'use strict';

var path = require('path'),
	logger;
/**
 * A module that represents a theme manager.
 * @{@link https://github.com/typesettin/periodic}
 * @author Yaw Joseph Etse
 * @copyright Copyright (c) 2014 Typesettin. All rights reserved.
 * @license MIT
 * @module config
 * @requires module:fs
 * @requires module:util-extent
 * @throws {Error} If missing configuration files
 * @todo to do later
 */

var themes = function (appsettings) {
	logger = appsettings.logger;
};

themes.getThemeRouteFilePath = function (themeName) {
	return path.join(path.resolve(__dirname, '../../content/themes/', themeName), 'routes.js');
};

themes.getThemePeriodicConfFilePath = function (themeName) {
	return path.join(path.resolve(__dirname, '../../content/themes/', themeName), 'periodicjs.theme.json');
};

module.exports = themes;
