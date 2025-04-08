const Button = (props) => {
    return <button style={{
        backgroundColor: props.bgColor,
        border: 'none',
        color: 'white',
        padding: '4px 12px',
        width: props.width,
        borderRadius: 4
    }}>

{props.text}

    </button>


}

export default Button