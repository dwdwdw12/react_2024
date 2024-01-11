//export const ColoredMessage = () => {
//export const ColoredMessage = (props) => {
export const ColoredMessage = ({color, children}) => {
    //console.log(props);

    //Props 분할 대입
    //const {color, children} = props;

    const contentStyle = {
        //color: "blue",
        //color: props.color,
        //color: color,   //props 불필요
        color,          //속성명과 설정값이 같을 때.
        fontSize: "20px"
    };

    //return <p style={contentStyle}>잘 지내시죠?</p>;
    //return <p style={contentStyle}>{props.message}</p>;
    // return <p style={contentStyle}>{props.children}</p>;
    return <p style={contentStyle}>{children}</p>;
};