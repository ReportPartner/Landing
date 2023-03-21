const Container = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div {...props} className="container">
            {props.children}
        </div>
    );
};

export default Container;
