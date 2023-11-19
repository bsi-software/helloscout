import {JasmineScout} from '@eclipse-scout/core/testing';

let context = require.context('./', true, /[sS]pec\.[tj]s$/);
JasmineScout.runTestSuite(context);
