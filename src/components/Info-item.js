function convertArray(arr) {
    return arr.join(', ')
}

export default function ItemInfo(props) {
    let value = Array.isArray(props.value) ? convertArray(props.value) : props.value;
    return <h3 className="info"> <span className="text"> {props.category}: </span> {value}</h3>
}