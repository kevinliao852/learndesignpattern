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
import { abstractFactoryMain } from './abstract_factory/abstract_factory'
import { strategyMain } from './strategy/strategy'
import { compositeMain } from './composite/composite'
import { builderMain } from './builder/builder'
import { proxyMain } from './proxy/proxy'

console.log(new PrintStringToIntegerAdapter(new PrintString('')).printData());

// factory method
factoryMethodMain();

// observer
observerMain();

// state
stateMain();

// bridge
bridgeMain();

// abstract factory
abstractFactoryMain();

// strategy
strategyMain();

// composite
compositeMain();

// builder
builderMain();

// proxy
proxyMain();