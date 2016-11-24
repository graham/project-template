import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Dispatcher } from "./dispatch";

class HelloWorld extends React.Component<{}, {}> {
    render() {
        return <div> Hello World </div>;
    }
}

ReactDOM.render(<HelloWorld />,
    document.getElementById('content'));

var disp = new Dispatcher();
window['disp'] = disp;

