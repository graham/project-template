import * as React from "react";
import * as ReactDOM from "react-dom";

import { test_lib_working } from "nfs-common";

class HelloWorld extends React.Component<{}, {}> {
    render() {
        return <div> Hello World; from home! </div>;
    }
}

ReactDOM.render(<HelloWorld />,
    document.getElementById('content'));

test_lib_working();
