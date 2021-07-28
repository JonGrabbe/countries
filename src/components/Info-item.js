export default function ItemInfo(props) {
    return <h3 className="info"> <span className="text"> {props.category}: </span> {props.value}</h3>
}