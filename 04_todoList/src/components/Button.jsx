function Button(props) {
    console.log(props);
    const {children, ...rest} = props;
    return (
        <button {...rest}>{children}</button>
    )
}
export default Button;

// props.children = "Add"

// props.className = "todo__button todo__button--add"
// props.type = "submit"