
import PropTypes from "prop-types";

function PersonStatus (props){
    return (
        <>
        <div className="personInfo">
            <h1>Fullname: {props.fullName}</h1>
            <h2>Status: {props.isMarried ? "Married" : "Single"}</h2>

            { props.isMarried && (
                <div>
                    <p>Do you have children? {props.haveChildren ? "Yes" : "No"}</p>

                    {props.haveChildren && (
                    <ol>
                        {props.childNames.map((child, index)=>(
                            <li key={index}>{child}</li>
                        ))}
                    </ol>
                )}
                </div>

                
            )}
        </div>
            

            

        </>
    );

}

PersonStatus.propType = {
    fullName: PropTypes.string,
    isMarried: PropTypes.bool,
    haveChildren: PropTypes.bool,
}

PersonStatus.defaultProps = {
    fullName: "Guest",
    isMarried: false,

}

export default PersonStatus