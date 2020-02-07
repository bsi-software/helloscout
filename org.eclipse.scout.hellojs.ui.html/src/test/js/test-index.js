import {JasmineScout} from '@eclipse-scout/testing';

let context = require.context('./', true, /[sS]pec\.js$/);
JasmineScout.runTestSuite(context);
