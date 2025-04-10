const A = (props) => {
    return (
        <button style={{
            cursor: "pointer",
            backgroundColor: "white",
            border: "1px solid black",
        }}
        onClick={() => props.haha("hello")}>
            hello from the other side
        </button>
    );
}

export default A
