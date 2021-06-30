import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/scss/App.scss';

const YouTube = () => {
  return (
    <>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" data-react-helmet="true" />
          <title data-react-helmet="true">Owen Bick</title>
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
      <h1>YouTube</h1>
        <div class="row">
          <div class="col-sm-3 sidebar">
            <span class="title">COMPANY</span>
            <p>Apple</p>
            <span class="title">ROLE</span>
            <p>UX Designer</p>
            <span class="title">YEARS</span>
            <p>2021</p>
          </div>
          <div class="col-sm-7 about">
            <span class="title">ABOUT</span>
            <p>I'm Owen, I'm a UX and product designer that currently lives in Boston. I've helped many companies build digital products that are more human. My philosophy is simple: design products in a way that allows someone to use the product for the first time and feel like they understand what they're looking at. They don't need to be experts, but a digital product should not be overwhelming. Currently, I work at <a href="//829studios.com">829 Studios</a>, but I'm always open to freelance projects and can be contacted <a href="mailto:owenbick@gmail.com">here</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default YouTube;