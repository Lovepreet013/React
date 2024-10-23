import ReactDOM from 'react-dom'

export const Portal = () => {
    return ReactDOM.createPortal(
        <div>Portal is saying hello</div>,
        document.querySelector("#portal")
    )
}