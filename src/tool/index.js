export const Storage = {
    set(key, val) {
        try {
            window.localStorage.setItem(key, val)
        }
        catch (e) {
            throw Error(e);
        }
        return this;
    },
    get(key) {
        try {
            return window.localStorage.getItem(key)
        }
        catch (e) {
            throw Error(e);
        }
    },
    clear(key) {
        try {
            if (key instanceof Array) {
                key.forEach(item => {
                    window.localStorage.removeItem(item);
                })
            }
            else {
                window.localStorage.removeItem(item);
            }
        }
        catch (e) {
            throw Error(e);
        }
        return this;
    }
}
