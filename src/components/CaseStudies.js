import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/scss/App.scss';

const Resume = () => {
    return (
        <>
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" data-react-helmet="true" />
                    <title data-react-helmet="true">Case Studies - Owen Bick</title>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" data-react-helmet="true" />
                    <link rel="canonical" href="https://owenbick.com" data-react-helmet="true" />
                    <meta property="og:site_name" content="Owen Bick" data-react-helmet="true" />
                    <meta property="og:title" content="Owen Bick" data-react-helmet="true" />
                    <meta property="og:url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta property="og:type" content="website" data-react-helmet="true" />
                    <meta property="og:description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta property="og:image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta itemprop="name" content="Owen Bick" data-react-helmet="true" />
                    <meta itemprop="url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta itemprop="description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta itemprop="thumbnailUrl" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <link rel="image_src" href="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta itemprop="image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta name="twitter:title" content="Owen Bick" data-react-helmet="true" />
                    <meta name="twitter:image" content="https://owenbick.com/static/owenbick.png" data-react-helmet="true" />
                    <meta name="twitter:url" content="https://owenbick.com" data-react-helmet="true" />
                    <meta name="twitter:card" content="summary" data-react-helmet="true" />
                    <meta name="twitter:description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                    <meta name="description"
                        content="Owen Bick is a product manager, developer, designer, real estate professional, and micro investor based in Boston." data-react-helmet="true" />
                </Helmet>
            </div>
            <section class="portfolio">
        <div class="container">
          <table class="portfolio__table" id="case-studies">
            <tr>
              <th>PROJECTS</th>
              <th></th>
            </tr>
            <tr>
              <td>Apple Store</td>
              <td><a href="/apple-store">View Case Study →</a></td>
            </tr>
            <tr>
              <td>cPanel</td>
              <td><a href="/cpanel">View Case Study →</a></td>
            </tr>
            <tr>
              <td>Merk Investments</td>
              <td><a href="/merk">View Case Study →</a></td>
            </tr>
            <tr>
              <td>Hubbingtons</td>
              <td><a href="/hubbingtons">View Case Study →</a></td>
            </tr>
            <tr>
              <td>Blue Heron</td>
              <td><a href="/blue-heron">View Case Study →</a></td>
            </tr>
          </table>
        </div>
      </section>
        </>
    );
}

export default Resume;