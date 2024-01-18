const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
};

export const EditButton = props => {
    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    );
};