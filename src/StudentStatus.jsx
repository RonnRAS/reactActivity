import PropTypes from "prop-types"

function StudentStatus (prop){
        if(prop.isLoggedIn){
            return <h1>Welcome idiot {prop.name}</h1>
        }else{
            return <h1>please login first</h1>
        }

    //return(prop.isLoggedIn ? <h1>Welcome idiot {prop.name}</h1> 
    //                        :  <h1>please login first</h1>);
}

StudentStatus.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}

StudentStatus.defaultProps = {
    isLoggedIn: false,
    name: "Guest",
}

export default StudentStatus