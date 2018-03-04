import * as React from "react";

interface HelloProps {
    name: string;
}

const Hello = (props: HelloProps) => (
  <div>Hello {props.name}!</div>
)

import * as ReactDOM from 'react-dom';

ReactDOM.render(<Hello name='React'/>,
    document.getElementById('content'));

