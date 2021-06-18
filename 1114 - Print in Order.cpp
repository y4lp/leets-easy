#include <vector>
#include <mutex>
#include <semaphore.h>

using namespace std;

class Foo {
private:
    sem_t a, b;

public:
    Foo(){
        sem_init(&a, 0, 0);
        sem_init(&b, 0, 0);
    }
    

    void first(function<void()> printFirst) {

        // printFirst() outputs "first". Do not change or remove this line.

        printFirst();
        sem_post(&a);
    }

    void second(function<void()> printSecond) {

        // printSecond() outputs "second". Do not change or remove this line.
        sem_wait(&a);
        printSecond();
        sem_post(&b);
    }

    void third(function<void()> printThird) {

        // printThird() outputs "third". Do not change or remove this line.
        sem_wait(&b);
        printThird();

    }
};