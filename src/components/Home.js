import "./Homepage.css";
import { Linkedin, Instagram, Github } from "react-bootstrap-icons";
function Home() {
    return (
        <div id="maindiv">
            <center>
                <h1> I'm <span class="text-warning">Vamsi Maddi</span></h1>
                <h1 class="text-primary"> Web Designer and Developer</h1>
                <br></br>
                <p>Aspiring and motivated fresher seeking an internship opportunity to gain valuable industry experience
                    and contribute my enthusiasm and knowledge to an organization. Eager to apply my skills and passion
                    to make a positive impact while fostering personal and professional growth.</p>
                <br></br>
                <a href="http://www.linkedin.com/in/vamsi-maddi-7190811b8" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  color = "black" className="rounded mx-4" />
                </a>
                <a href="https://www.instagram.com/vamsi.maddi999/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                    <Instagram size={35} color="black" className="rounded mx-4" />
                </a>
                <a href="https://github.com/Vamsi-Maddi" target="_blank" rel="noopener noreferrer">
                    <Github size={35} color = "black" className="rounded mx-4" />
                </a>
                
            </center>
        </div>
    )
}
export default Home;