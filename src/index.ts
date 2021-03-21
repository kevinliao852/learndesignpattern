import {
  PrintInteger,
  PrintStringToIntegerAdapter,
  PrintString,
} from './adapter/adpater';
import { Facade } from './facade/facade';

console.log(new PrintStringToIntegerAdapter(new PrintString('')).printData());
