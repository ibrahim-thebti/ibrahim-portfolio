import certificate1 from "../../images/certifications/GH900.jpg";
import certificate2 from "../../images/certifications/Csharp.png";
import certificate3 from "../../images/certifications/react.jpg";
import certificate4 from "../../images/certifications/AI901.png";
import certificate6 from "../../images/certifications/resp.png";
import certificate5 from "../../images/certifications/sql.jpg";
import certificate7 from "../../images/certifications/cp.png";

import "./certifications.css";
function Certifications() {
  const certifications = [
    {
      image: certificate1,
      title: "GitHub Foundations GH-900",
      organization: "Microsoft",
      date: "Aug 2026",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThebtiIbrahim-6599/AC346B4828BB05CD?sharingId=21B30527B78990EA",
    },
    {
      image: certificate2,
      title: "Foundational C# with Microsoft",
      organization: "FreeCodeCamp",
      date: "July 2026",
      link: "https://www.freecodecamp.org/certification/ibrahimthebty/foundational-c-sharp-with-microsoft",
    },
    {
      image: certificate3,
      title: "React (Basic)",
      organization: "HackerRank",
      date: "July 2026",
      link: "https://www.hackerrank.com/certificates/iframe/c46de7422eab",
    },
    {
      image: certificate4,
      title: "Microsoft Azure AI Fundamentals AI-901",
      organization: "Microsoft",
      date: "July 2026",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThebtiIbrahim-6599/53C34AD4DB46CC8E?sharingId=21B30527B78990EA",
    },
    {
      image: certificate5,
      title: "SQL (intermediate)",
      organization: "HackerRank",
      date: "July 2026",
      link: "https://www.hackerrank.com/certificates/iframe/6742cdd57d83",
    },
    {
      image: certificate6,
      title: "Responsive Web Design",
      organization: "FreeCodeCamp",
      date: "June 2026",
      link: "https://www.freecodecamp.org/certification/ibrahimthebty/responsive-web-design-v9",
    },
    {
      image: certificate7,
      title: "Competitive Programming Challenge – CodeCore 2.0",
      organization: "CodeCore 2.0",
      date: "May 2026",
      link: "https://drive.google.com/file/d/1P8PPczDPOULcKYfXe83zs6NbMWSj_OqH/view?usp=drive_link",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">

        {/* Section Heading */}
        <div className="certifications-heading">

          <p className="certifications-label">
            <span>//</span> certifications
          </p>

          <h2>
            Learning never
            <br />
            <span>stops.</span>
          </h2>

          <p className="certifications-description">
            A collection of certifications and courses that represent
            my continuous learning and growing technical knowledge.
          </p>
        </div>
        {/* Certificates */}
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <article
              className="certificate-card"
              key={certification.title + index}
            >
              {/* Certificate Image */}
              <a
                href={certification.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-image-link"
              >
                <div className="certificate-image-wrapper">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="certificate-image"
                  />
                  <div className="image-overlay">
                    <span>View Certificate ↗</span>
                  </div>
                </div>
              </a>
              {/* Certificate Information */}
              <div className="certificate-info">
                <div className="certificate-details">
                  <p className="certificate-number">
                    0{index + 1}
                  </p>
                  <h3>{certification.title}</h3>
                  <p className="certificate-organization">
                    {certification.organization}
                  </p>
                </div>
                <span className="certificate-date">
                  {certification.date}
                </span>
              </div>
              {/* Certificate Link */}
              <a
                href={certification.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Certifications;
