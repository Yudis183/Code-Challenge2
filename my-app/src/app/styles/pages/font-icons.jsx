import React from 'react';

function Page() {
  return (
    <>
      {/* Wrapper for the top section */}
      <div className="wrapper row0">
        <section id="ctdetails" className="hoc clear">
          <ul className="nospace clear">
            <li className="one_quarter first">
              <div className="block clear">
                <a href="#">
                  <i className="fas fa-phone"></i>
                </a>{' '}
                <span>
                  Give us a call: <strong>+00 (123) 456 7890</strong>
                </span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#">
                  <i className="fas fa-envelope"></i>
                </a>{' '}
                <span>
                  Send us a mail: <strong>support@domain.com</strong>
                </span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#">
                  <i className="fas fa-clock"></i>
                </a>{' '}
                <span>
                  Mon. - Sat.: <strong>08.00am - 18.00pm</strong>
                </span>
              </div>
            </li>
            <li className="one_quarter">
              <a className="btn" href="#">
                <strong>Get A Quote</strong>
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Header section */}
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            <h1>
              <a href="../index.html">Pentwist</a>
            </h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li>
                <a href="../index.html">Home</a>
              </li>
              <li className="active">
                <a className="drop" href="#">
                  Pages
                </a>
                <ul>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="full-width.html">Full Width</a>
                  </li>
                  <li>
                    <a href="sidebar-left.html">Sidebar Left</a>
                  </li>
                  <li>
                    <a href="sidebar-right.html">Sidebar Right</a>
                  </li>
                  <li>
                    <a href="basic-grid.html">Basic Grid</a>
                  </li>
                  <li className="active">
                    <a href="font-icons.html">Font Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="drop" href="#">
                  Dropdown
                </a>
                <ul>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li>
                    <a className="drop" href="#">
                      Level 2 + Drop
                    </a>
                    <ul>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Breadcrumb and background image */}
      <div className="wrapper bgded overlay" style={{ backgroundImage: "url('../images/demo/backgrounds/01.png')" }}>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Ipsum</a>
            </li>
            <li>
              <a href="#">Dolor</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="wrapper coloured">
        <article className="hoc cta clear">
          <h6 className="three_quarter first font-x2">
            Nulla nec libero phasellus nec dolor sed ornare semper
          </h6>
          <footer className="one_quarter">
            <a className="btn" href="#">
              <strong>Ipsum vestibulum</strong>
            </a>
          </footer>
        </article>
      </div>

      {/* Main content */}
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <div className="clear btmspace-50">
              <h2>Font Awesome 5.2</h2>
              <p className="clear">
                For further information, including integration and use, take a look at the{' '}
                <a target="_blank" rel="nofollow noopener" href="https://fontawesome.com/">
                  Font Awesome Homepage <i className="fas fa-arrow-right fa-lg"></i>
                </a>
              </p>
            </div>

            {/* Font Awesome Icons */}
            <div className="clear btmspace-50">
              <h2>Solid Icons (fas)</h2>
              <div className="one_quarter first">
                <ul className="nospace">
                  <li>
                    <i className="fa-address-book fa-fw fas"></i> fas fa-address-book
                  </li>
                  <li>
                    <i className="fa-address-card fa-fw fas"></i> fas fa-address-card
                  </li>
                  {/* Continue with other icons */}
                </ul>
              </div>
            </div>

            {/* Add more content as needed */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Page;
