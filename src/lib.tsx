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
}

function test_lib_working() {
    console.log("Lib is working!");
}

export {
    test_lib_working,
    ensureValidKeys
}
