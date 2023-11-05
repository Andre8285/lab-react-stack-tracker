import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Navbar() {
  return (
  <nav>
            <ul>
                < Link to = "/">Home </Link>
                < Link to = "/company">About </Link>
                < Link to = "/tech">Tech </Link>
            </ul>
        </nav>
        )
}

export default Navbar;



