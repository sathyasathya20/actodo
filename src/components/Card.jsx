function Card(props)
{return(
    <div style={{ backgroundColor: props.bgcolor }} className="px-10 py-5 border rounded-md text-center flex-grow">
    <h1 className="font-mediu text-2x1">{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>)
}



export default Card