import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloWorld extends React.Component<{}, {}> {
    render() {
        return <div> Hello World </div>;
    }
}

ReactDOM.render(<HelloWorld />,
    document.getElementById('content'));
