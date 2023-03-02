import { CSSProperties } from "react";

const Container = ({ style, children }: { style?: CSSProperties; children?: React.ReactNode }) => {
    return (
        <div style={style} className="container">
            {children}
        </div>
    );
};

export default Container;
