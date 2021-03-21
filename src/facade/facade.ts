class A {
  run() {
    console.log('A');
  }
}
class B {
  run() {
    console.log('B');
  }
}
class C {
  run() {
    console.log('C');
  }
}

export class Facade {
  a: A;
  b: B;
  c: C;
  constructor() {
    this.a = new A();
    this.b = new B();
    this.c = new C();
  }

  run() {
    this.a.run();
    this.b.run();
    this.c.run();
  }
}
