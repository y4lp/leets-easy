class Foo {
    private boolean a = false, b = false;
    public Foo() {
        a = false;
        b = false;
    }

    public void first(Runnable printFirst) throws InterruptedException {

        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        a = true;
    }

    public void second(Runnable printSecond) throws InterruptedException {

        // printSecond.run() outputs "second". Do not change or remove this line.
        while (!a) continue;
        printSecond.run();
        b = true;
    }

    public void third(Runnable printThird) throws InterruptedException {

        // printThird.run() outputs "third". Do not change or remove this line.
        while (!a || !b) continue;
        printThird.run();

    }
}