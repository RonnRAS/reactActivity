import PropTypes from "prop-types"

function UserDatalist (props){

    const users = props.users

    const userList = users.map(user =>
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.Age}</td>
            <td>{user.sex}</td>
            <td>{user.course}</td>
        </tr>

    )

    return(
    <>
    <h1>{props.category}</h1>

    <table border={2}>
        <tr>
            <th>ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Course</th>
        </tr>
        <tbody>
            {userList}
        </tbody>
    </table>
    </>
    )

}
UserDatalist.propTypes = {
    category: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.shape({firstName: PropTypes.string,
                                            lastName: PropTypes.string,
                                            Age: PropTypes.number,
                                            sex: PropTypes.string,
                                        course: PropTypes.string,}))
}
UserDatalist.defaultProps = {
    category: "Category",
    users: []
}


export default UserDatalist