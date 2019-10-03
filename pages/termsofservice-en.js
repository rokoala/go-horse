import { Head } from "../components";

export default () => {
  return (
    <React.Fragment>
      <Head title="XGH Certification"></Head>
      <div className="content">
        <h1>
          <a href="/">XGH Certification</a>
        </h1>
        <h2>Terms of Service</h2>
        <p>
          These Terms of Service ("Terms", "Terms of Service") refer to site
          xghorse.com (the "Service"). Your access to and use of the service is
          conditioned to the acceptance and compliance with these Terms. These
          Terms apply to all visitors, users, and other Service.
        </p>
        <p>
          By accessing the Service, you agree to be bound by these terms of
          service. If you do not agree to any of these terms, you are prohibit
          to use or access this service.
        </p>
        <ol>
          <li>
            Conent
            <ol>
              <li>
                This service has the humorous purpose, with content that can
                often offend people, institutions, organizations and this is not
                our goal. If you feel offended by any joke, image or any other
                types of content exposed in the service, please let us know by
                e-mail.
              </li>
              <li>
                The service does not collect any kind of personal data, except
                those related to access statistics such as operating system,
                browser and IP address.
              </li>
              <li>
                The personal data (full name) used in our system is not stored
                in our database.
              </li>
              <li>
                All content included for the exam forms is not our
                responsibility. We do not store any information, we only make
                the content available for sharing.
              </li>
              <li>
                We are not responsible for the content published through our
                service.
              </li>
              <li>
                All content provided on the site is fictitious, humorous and has
                no validity for the real world, whether for professional,
                academic and personal use.
              </li>
            </ol>
          </li>
          <li>
            Third-parties
            <ol>
              <li>
                The content posted by users on our service may contain links to
                third party sites or services that are not owned or operated by
                us.
              </li>
              <li>
                We have no control over, and assumes no responsibility for the
                content, privacy policies, or practices of any third party web
                sites or services associated with the content published by users
                in our service.
              </li>
              <li>
                You further acknowledge and agree that we shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the
                use of or reliance on any such content, goods or services
                available on or through any such web sites or services.
              </li>
              <li>
                All shared content on social media is not our responsibility.
              </li>
            </ol>
          </li>
        </ol>
        <h3>Contact</h3>
        <p>xghcertification@gmail.com</p>
        <p>Last Review October 2, 2019</p>
        <style jsx>{`
          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
};
