import certificate1 from "../../images/certifications/GH900.jpg";
import certificate2 from "../../images/certifications/Csharp.png";
import certificate3 from "../../images/certifications/react.jpg";
import certificate4 from "../../images/certifications/AI901.png";
import certificate5 from "../../images/certifications/resp.png";
import certificate6 from "../../images/certifications/sql.jpg";
import certificate7 from "../../images/certifications/cp.png";

import "./certifications.css";
function Certifications() {
  const certifications = [
    {
      image: certificate1,
      title: "GitHun Foundations GH-900",
      organization: "Microsoft",
      date: "Aug 2026",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/ThebtiIbrahim-6599/AC346B4828BB05CD?sharingId=21B30527B78990EA",
    },
    {
      image: certificate2,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2025",
      link: "https://example.com/certificate2",
    },
    {
      image: certificate3,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2026",
      link: "https://example.com/certificate3",
    },
    {
      image: certificate4,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2026",
      link: "https://example.com/certificate4",
    },
    {
      image: certificate5,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2026",
      link: "https://example.com/certificate5",
    },
    {
      image: certificate6,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2026",
      link: "https://example.com/certificate6",
    },
    {
      image: certificate7,
      title: "Certification Name",
      organization: "Issuing Organization",
      date: "2026",
      link: "https://example.com/certificate7",
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