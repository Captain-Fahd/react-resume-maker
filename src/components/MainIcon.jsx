export default function MainIcon({border, text, fontSize,
                                     color = "black", handleClick, backgroundColor}) {
const buttonStyle = {
    fontSize: fontSize + 'px',
    border: border,
    backgroundColor: backgroundColor
}
    return (
        <button style={buttonStyle} onClick={handleClick}>
            {text}
        </button>
    )
}