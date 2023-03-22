function User(props) {
    return (
        <>
            <div>
                name: {props.name}
            </div>
            <div>
                age: {props.age}
            </div>
            <div>
                city: {props.city}
            </div>
            <hr />
        </>
    )
}

export default User;