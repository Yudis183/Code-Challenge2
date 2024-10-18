import Link from 'next/link';

const Gallery = () => {
  return (
    <>
      {/* Contact details section */}
      <div className="wrapper row0">
        <section id="ctdetails" className="hoc clear">
          <ul className="nospace clear">
            <li className="one_quarter first">
              <div className="block clear">
                <a href="#"><i className="fas fa-phone"></i></a>
                <span>Give us a call: <strong>+00 (123) 456 7890</strong></span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#"><i className="fas fa-envelope"></i></a>
                <span>Send us a mail: <strong>support@domain.com</strong></span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#"><i className="fas fa-clock"></i></a>
                <span>Mon. - Sat.: <strong>08.00am - 18.00pm</strong></span>
              </div>
            </li>
            <li className="one_quarter">
              <a className="btn" href="#"><strong>Get A Quote</strong></a>
            </li>
          </ul>
        </section>
      </div>

      {/* Header section */}
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            <h1>
              <Link href="/">Pentwist</Link>
            </h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">
                <a className="drop" href="#">Pages</a>
                <ul>
                  <li className="active">
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/full-width">Full Width</Link>
                  </li>
                  <li>
                    <Link href="/sidebar-left">Sidebar Left</Link>
                  </li>
                  <li>
                    <Link href="/sidebar-right">Sidebar Right</Link>
                  </li>
                  <li>
                    <Link href="/basic-grid">Basic Grid</Link>
                  </li>
                  <li>
                    <Link href="/font-icons">Font Icons</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Breadcrumb section */}
      <div className="wrapper bgded overlay" style={{ backgroundImage: 'url("/images/demo/backgrounds/01.png")' }}>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Dolor</a></li>
          </ul>
        </div>
      </div>

      {/* Call to action section */}
      <div className="wrapper coloured">
        <article className="hoc cta clear">
          <h6 className="three_quarter first font-x2">Nulla nec libero phasellus nec dolor sed ornare semper</h6>
          <footer className="one_quarter">
            <a className="btn" href="#"><strong>Ipsum vestibulum</strong></a>
          </footer>
        </article>
      </div>

      {/* Main content section */}
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <div id="gallery">
              <figure>
                <header className="heading">Gallery Title Goes Here</header>
                <ul className="nospace clear">
                  <li className="one_quarter first">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter first">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter first">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                  <li className="one_quarter">
                    <a href="#"><img src="/images/demo/gallery/01.png" alt="" /></a>
                  </li>
                </ul>
                <figcaption>Gallery Description Goes Here</figcaption>
              </figure>
            </div>

            {/* Pagination */}
            <nav className="pagination">
              <ul>
                <li><a href="#">&laquo; Previous</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><strong>&hellip;</strong></li>
                <li><a href="#">6</a></li>
                <li className="current"><strong>7</strong></li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li><strong>&hellip;</strong></li>
                <li><a href="#">14</a></li>
                <li><a href="#">15</a></li>
                <li><a href="#">Next &raquo;</a></li>
              </ul>
            </nav>
          </div>
        </main>
      </div>

      {/* Footer section */}
      <div className="wrapper row4">
        <footer id="footer" className="hoc clear">
          <div className="one_quarter first">
            <h6 className="heading">Pentwist</h6>
            <nav>
              <ul className="nospace linklist">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Disclaimer</a></li>
              </ul>
            </nav>
          </div>
          <div className="one_quarter">
            <h6 className="heading">Interdum augue ut diam</h6>
            <p className="nospace btmspace-15">Velit laoreet et scelerisque facilisis lacinia ut sapien in vehicula.</p>
            <form action="#" method="post">
              <fieldset>
                <legend>Newsletter:</legend>
                <input className="btmspace-15" type="text" placeholder="Name" />
                <input className="btmspace-15" type="text" placeholder="Email" />
                <button className="btn" type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        </footer>
      </div>

      {/* Copyright section */}
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">
            Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a>
          </p>
          <p className="fl_right">
            Template by{' '}
            <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">
              OS Templates
            </a>
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <a id="backtotop" href="#top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Gallery;
