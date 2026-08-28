import PropTypes from 'prop-types'

function StudentId(prop){
    return(
        <div className="cardId">
            <h1 className="studentName">Name: {prop.name}</h1>
            <h3 className="studentAge">Age: {prop.age}</h3>
            <p className="studentType">Student: {prop.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

StudentId.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

StudentId.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default StudentId