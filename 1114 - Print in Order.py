class Foo:
    def __init__(self):
        self.a, self.b = False, False

    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.a = True


    def second(self, printSecond: 'Callable[[], None]') -> None:
        
        # printSecond() outputs "second". Do not change or remove this line.
        while not self.a:
            continue
        printSecond()
        self.b = True


    def third(self, printThird: 'Callable[[], None]') -> None:
        
        # printThird() outputs "third". Do not change or remove this line.
        while not self.a or not self.b:
            continue
        printThird()