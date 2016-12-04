import Inferno from 'inferno';
import Component from 'inferno-component';

import { test_lib_working } from "myproj-lib";

class HelloWorld extends Component<{}, {}> {
    render() {
        return <div> Hello World; from home! </div>;
    }
}

Inferno.render(<HelloWorld />, document.getElementById('content'));

test_lib_working();
