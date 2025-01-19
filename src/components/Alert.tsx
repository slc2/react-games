import {ReactNode} from "react";

interface AlertProps {
    children: ReactNode,
    onDismiss: () => void
}

const Alert = ({children, onDismiss}: AlertProps) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onDismiss}>

            </button>
        </div>
    )
}

export default Alert;