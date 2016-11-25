// Taken directly from `npm install debounce` because it doesn't have clean types.
function debounce(func: Function, wait: number, immediate?: boolean): (Function) => void {
    function now(): number {
        return (new Date()).getTime();
    };

    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
        var last = now() - timestamp;

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function debounced() {
        context = this;
        args = arguments;
        timestamp = now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};

function ensureValidKeys(state: any, ensureKeys: Array<string>): any {
    var LOADED_KEY = "is_loaded";
    var return_state: any = {};

    if (state[LOADED_KEY] !== undefined) {
        throw ("Cant use `is_loaded` as key in state for ensureValidKeys");
    }

    for (var key of ensureKeys) {
        if (!state[key]) {
            return { "is_loaded": false };
        }
        return_state[key] = state[key];
    }

    return_state["is_loaded"] = true;

    return return_state;
};

function mapMerge(left: any, right: any): any {
    var new_map = {};

    for (let source of [left, right]) {
        for (let key in source) {
            new_map[key] = source[key];
        }
    }

    return new_map
};

function test_lib_working() {
    console.log("Lib is working!");
}

export {
    test_lib_working,
    ensureValidKeys,
    debounce,
    mapMerge
}
