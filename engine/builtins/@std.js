// standard constants
const NaN       = +'NaN';
const Infinity  = 1 / 0;
const undefined = void 0;

// standard functions
import { escape,
         decodeURI,
         decodeURIComponent,
         encodeURI,
         encodeURIComponent,
         eval,
         isFinite,
         isNaN,
         parseFloat,
         parseInt,
         unescape } from '@globals';


import { clearInterval,
         clearTimeout,
         setInterval,
         setTimeout } from '@timers';

// standard types
import Array    from '@array';
import Boolean  from '@boolean';
import Date     from '@date';
import Function from '@function';
import Map      from '@map';
import Number   from '@number';
import Object   from '@object';
import Proxy    from '@reflect';
import RegExp   from '@regexp';
import Set      from '@set';
import String   from '@string';
import WeakMap  from '@weakmap';



// standard errors
import { Error,
         EvalError,
         RangeError,
         ReferenceError,
         SyntaxError,
         TypeError,
         URIError } from '@error';

import { ArrayBuffer,
         DataView,
         Float32Array,
         Float64Array,
         Int16Array,
         Int32Array,
         Int8Array,
         Uint16Array,
         Uint32Array,
         Uint8Array } from '@typed-arrays';

// standard pseudo-modules
import JSON from '@json';
import Math from '@math';

import Symbol from '@symbol';
import Iterator from '@iter';

import console from '@console';

let StopIteration = $__StopIteration



export Array, Boolean, Date, Function, Map, Number, Object, Proxy, RegExp, Set, String, WeakMap,
       Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError,
       ArrayBuffer, DataView, Float32Array, Float64Array, Int16Array,
       Int32Array, Int8Array, Uint16Array, Uint32Array, Uint8Array,
       clearInterval, clearTimeout, decodeURI, decodeURIComponent, escape, encodeURI, encodeURIComponent,
       eval, isFinite, isNaN, parseFloat, parseInt, setInterval, setTimeout, unescape,
       console, StopIteration, JSON, Math,
       NaN, Infinity, undefined;
