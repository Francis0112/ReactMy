

export const Greet = (props) => {
    return (
        <div>
            <p>
            Francis Dequito - code:{props.code} level:{props.level}
            </p>
            {props.children}
        </div>
    )
}

// export default Greet