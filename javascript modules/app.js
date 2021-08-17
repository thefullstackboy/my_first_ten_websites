//file ko import karne ke liye use kiya jata ha jise me from ka use kiya karte ha
// "as" ka use rename karne ya function ka name change karne ke liye hota ha yadi do function ka name ek jasa rekna ho to tabi
//use kiya jata ha

//    * as ekname dena hoga ka use kiya jata ha yadi puri file me function use karna hota ha 

//import { name } from './modules/user.js';
//import { code } from './modules/user.js';

import * as usr from './modules/user.js';

//import ka short_cut me likne ke liya kiya jata ha.
import { withdraw as window, deposit } from './modules/account.js'

// console.log(name);
// code();

// window();
// deposit();

usr.code();