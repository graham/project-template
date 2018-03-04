import * as React from "react";
import * as ReactDOM from "react-dom";

import { test_lib_working } from "myproj-lib";

var value = 0;

interface HelloState {
    value: number;
}

class HelloWorld extends React.Component<{}, HelloState> {
    state = { value: 1 };

    click = (e) => {
        this.setState({value: this.state.value + 1});

    }

    render() {
        return (<div>
                <div> Hello World; from home, with a count of { this.state.value } </div>
                <div> <input type='button' value='Here' onClick={this.click}/> </div>
                </div>);
    }
}

ReactDOM.render(<HelloWorld />,
    document.getElementById('content'));

test_lib_working();
