export const X = (props) => {
    return (
        <div style={{ color: props.color,
            fontSize: props.sizing,
            fontWeight: props.weight
         }}>{props.gene}</div>
    )
}