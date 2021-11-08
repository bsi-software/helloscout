import {JasmineScout} from '@eclipse-scout/core/src/testing/index';

let context = require.context('./', true, /[sS]pec\.js$/);
JasmineScout.runTestSuite(context);
