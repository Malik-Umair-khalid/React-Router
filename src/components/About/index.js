import { Link, useHistory } from "react-router-dom";

const About = () => {
    const {} = useHistory()
    return(
        <>
        <h1>I AM About</h1>
        <Link to = "/contact">Contact</Link>
        <br />
        <Link to = "/">Home</Link>
        <button onClick></button>
        </>
    )
}



export default About;