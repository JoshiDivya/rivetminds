import { publicUrlFor } from "../../globals/constants";

function ItodoImage(props) {
    return(
        <>
            <img width='200px' height='200px' {...props} src={publicUrlFor(props.src)} alt={props.alt}/>
        </>
    )
}

export default ItodoImage;