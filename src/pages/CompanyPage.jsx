import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companies, technologies } = props; // Destructure companies and technologies from props
  const { companySlug } = useParams();

  const companyExist = companies.find((theCompany) => {     
    return theCompany.slug === companySlug;
  });

  return (
    <div id="pageCompany">
      <h1>Company Profile</h1>
      {companyExist ? 
        <div>
          <div id="company-info">
            <img id="detail-logo" src={companyExist.logo} alt={companyExist.name} />
            <div id="company-vertical">
              <h2>{companyExist.name}</h2>
              <h3>About</h3>
              <p>{companyExist.description}</p>
            </div>
          </div>
          <div id="tech-parent" >
            <ul id="list-elements">
                {technologies.map(technology => {

                  return (
                    <li key={technology.id} >
                      <Link id="tech-list" to={`/tech/${technology.slug}?companySlug=${companySlug}`}>
                        <img id="logo" src={technology.image} alt={technology.name} />
                      </Link>
                      <div id="tech-name">{technology.name}</div>
                    </li>
                  )
                })}
            </ul>
          </div>

          <Link to="/" id="button-back">Back</Link>
        </div> : "No company info"
      }
    </div>
  );
}

export default CompanyPage;

