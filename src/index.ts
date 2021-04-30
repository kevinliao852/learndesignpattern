import {
  PrintInteger,
  PrintStringToIntegerAdapter,
  PrintString,
} from './adapter/adpater';
import { Facade } from './facade/facade';
import {factoryMethodMain} from './factory_method/factory_method';
import {observerMain} from './observer/observer';
import {stateMain} from './state/state';
import {bridgeMain} from './bridge/bridge';

console.log(new PrintStringToIntegerAdapter(new PrintString('')).printData());

// factory method
factoryMethodMain();

// observer
observerMain();

// state
stateMain();

// bridge
bridgeMain();