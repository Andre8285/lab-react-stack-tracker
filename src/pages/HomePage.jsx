import { Link } from 'react-router-dom';

function HomePage(props) {
  let {companies} = props//descontructing - criar uma variável para evitar a utilizaçao e repetiçao de props
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
<ul>
      {companies.map((company) => {
        return(
          <Link key={company.id} to={`/company/${company.slug}`} >

            <li className='company-id'>
            <p>{company.name}</p>
            <img src={company.logo} alt='company-name' />
            </li>

          </Link>
        )})}
         </ul>
    </div>
)}




export default HomePage;
