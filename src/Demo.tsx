import React from "react";

export type DemoProps = {
    who?: string;
}

export function Demo(props: DemoProps): JSX.Element {
    return (
        <div>
            Hello
            {props.who && <>, {props.who}</>}
        </div>
    );
}