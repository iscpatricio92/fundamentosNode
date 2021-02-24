function asyncBreakItself(callbackErrorFunc) {
    return setTimeout(() => {
        try {
            3 + z;
        } catch (e) {
            if (e instanceof ReferenceError) {
                callbackErrorFunc(e.message);
            }
        }
    });
}

asyncBreakItself()