import Link from 'next/link';

const BasicGrid = () => {
  return (
    <>
      {/* Top Section with Contact Details */}
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

      {/* Header Section */}
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            <h1><Link href="/">Pentwist</Link></h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li><Link href="/">Home</Link></li>
              <li className="active"><a className="drop" href="#">Pages</a>
                <ul>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/full-width">Full Width</Link></li>
                  <li><Link href="/sidebar-left">Sidebar Left</Link></li>
                  <li><Link href="/sidebar-right">Sidebar Right</Link></li>
                  <li className="active"><Link href="/basic-grid">Basic Grid</Link></li>
                  <li><Link href="/font-icons">Font Icons</Link></li>
                </ul>
              </li>
              <li><a className="drop" href="#">Dropdown</a>
                <ul>
                  <li><a href="#">Level 2</a></li>
                  <li><a className="drop" href="#">Level 2 + Drop</a>
                    <ul>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Level 2</a></li>
                </ul>
              </li>
              <li><a href="#">Link Text</a></li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Breadcrumb Section */}
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

      {/* Call to Action Section */}
      <div className="wrapper coloured">
        <article className="hoc cta clear">
          <h6 className="three_quarter first font-x2">Nulla nec libero phasellus nec dolor sed ornare semper</h6>
          <footer className="one_quarter">
            <a className="btn" href="#"><strong>Ipsum vestibulum</strong></a>
          </footer>
        </article>
      </div>

      {/* Main Grid Section */}
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <h2>Half</h2>
            <div className="group btmspace-50 demo">
              <div className="one_half first">1/2</div>
              <div className="one_half">1/2</div>
            </div>
            <h2>Quarter</h2>
            <div className="group btmspace-50 demo">
              <div className="one_quarter first">1/4</div>
              <div className="one_quarter">1/4</div>
              <div className="one_quarter">1/4</div>
              <div className="one_quarter">1/4</div>
            </div>
            <div className="group btmspace-50 demo">
              <div className="one_quarter first">1/4</div>
              <div className="one_quarter">1/4</div>
              <div className="two_quarter">2/4 or 1/2</div>
            </div>
            <div className="group btmspace-50 demo">
              <div className="one_quarter first">1/4</div>
              <div className="three_quarter">3/4</div>
            </div>
            <h2>Third</h2>
            <div className="group btmspace-50 demo">
              <div className="one_third first">1/3</div>
              <div className="one_third">1/3</div>
              <div className="one_third">1/3</div>
            </div>
            <div className="group demo">
              <div className="one_third first">1/3</div>
              <div className="two_third">2/3</div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Section */}
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

      {/* Copyright Section */}
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
          <p className="fl_right">Template by <a href="https://www.os-templates.com/">OS Templates</a></p>
        </div>
      </div>
    </>
  );
};

export default BasicGrid;
