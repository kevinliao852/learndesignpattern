export class PrintString {
  constructor(public data: string) {}
  printData(): string {
    return this.data;
  }
}

export class PrintInteger {
  constructor(public data: number) {}
  printData(): number {
    return this.data;
  }
}

export class PrintStringToIntegerAdapter extends PrintInteger {
  constructor(public printString: PrintString) {
    super(0);
  }
  _toInteger(data: string) {
    return parseInt(data);
  }
  printData(): number {
    return this._toInteger(this.printString.printData());
  }
}
