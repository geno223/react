function Avatar(props) {
    console.log(props)
    return (
  <div>
      <h3>Your boy {props.name}</h3>
      <img 
      src={props.image}
      alt={props.name}
      width={props.width}
      height={props.height}
      />
  </div>
    )
  }
  export default Avatar;