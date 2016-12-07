"use strict";
/**
 * Created by dmitricercel on 15.11.16.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var index_app_1 = require('./index.app');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(index_app_1.IndexModule);
