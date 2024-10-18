import React from 'react';

function SidebarRight() {
  return (
    <div id="top">
      {/* ################################################################################################ */}
      <div className="wrapper row0">
        <section id="ctdetails" className="hoc clear">
          {/* ################################################################################################ */}
          <ul className="nospace clear">
            <li className="one_quarter first">
              <div className="block clear">
                <a href="#"><i className="fas fa-phone"></i></a>
                <span>
                  Give us a call: <strong>+00 (123) 456 7890</strong>
                </span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#"><i className="fas fa-envelope"></i></a>
                <span>
                  Send us a mail: <strong>support@domain.com</strong>
                </span>
              </div>
            </li>
            <li className="one_quarter">
              <div className="block clear">
                <a href="#"><i className="fas fa-clock"></i></a>
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
          {/* ################################################################################################ */}
        </section>
      </div>
      {/* ################################################################################################ */}
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
                  <li className="active">
                    <a href="sidebar-right.html">Sidebar Right</a>
                  </li>
                  <li>
                    <a href="basic-grid.html">Basic Grid</a>
                  </li>
                  <li>
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
      {/* ################################################################################################ */}
      <div
        className="wrapper bgded overlay"
        style={{ backgroundImage: "url('../images/demo/backgrounds/01.png')" }}
      >
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
      {/* ################################################################################################ */}
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
      {/* ################################################################################################ */}
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content three_quarter first">
            <h1>
              Headline Colour and Size Are All The Same
            </h1>
            <img
              className="imgr borderedbox inspace-5"
              src="../images/demo/imgr.gif"
              alt=""
            />
            <p>
              Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis
              nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus
              convallicitur.
            </p>
            <p>
              Dapiensociis{" "}
              <a href="#">temper donec auctortortis cumsan</a> et curabitur condis lorem
              loborttis leo. Ipsumcommodo libero nunc at in velis tincidunt pellentum
              tincidunt vel lorem.
            </p>
            <img
              className="imgl borderedbox inspace-5"
              src="../images/demo/imgl.gif"
              alt=""
            />
            <p>
              This is a W3C compliant free website template from{" "}
              <a href="https://www.os-templates.com/" title="Free Website Templates">
                OS Templates
              </a>
              . For full terms of use of this template please read our{" "}
              <a href="https://www.os-templates.com/template-terms">
                website template licence
              </a>
              .
            </p>
            <p>
              You can use and modify the template for both personal and commercial use. You
              must keep all copyright information and credit links in the template and
              associated files. For more website templates visit our{" "}
              <a href="https://www.os-templates.com/">free website templates</a> section.
            </p>
            <h1>Table(s)</h1>
            <div className="scrollable">
              <table>
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#">Value 1</a></td>
                    <td>Value 2</td>
                    <td>Value 3</td>
                    <td>Value 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="comments">
              <h2>Comments</h2>
              <ul>
                <li>
                  <article>
                    <header>
                      <figure className="avatar">
                        <img src="../images/demo/avatar.png" alt="" />
                      </figure>
                      <address>
                        By <a href="#">A Name</a>
                      </address>
                      <time dateTime="2045-04-06T08:15+00:00">
                        Friday, 6th April 2045 @08:15:00
                      </time>
                    </header>
                    <div className="comcont">
                      <p>
                        This is an example of a comment made on a post. You can either edit
                        the comment, delete the comment or reply to the comment. Use this as
                        a place to respond to the post or to share what you are thinking.
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar one_quarter">
            <h6>Lorem ipsum dolor</h6>
            <nav className="sdb_holder">
              <ul>
                <li>
                  <a href="#">Navigation - Level 1</a>
                </li>
                <li>
                  <a href="#">Navigation - Level 1</a>
                  <ul>
                    <li>
                      <a href="#">Navigation - Level 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="sdb_holder">
              <h6>Lorem ipsum dolor</h6>
              <address>
                Full Name
                <br />
                Address Line 1
                <br />
                Address Line 2
                <br />
                Town/City
                <br />
                Postcode/Zip
                <br />
                <br />
                Tel: xxxx xxxx xxxxxx
                <br />
                Email: <a href="#">contact@domain.com</a>
              </address>
            </div>
          </div>
        </main>
      </div>
      {/* ################################################################################################ */}
      <footer id="footer" className="hoc clear">
        <div className="one_quarter first">
          <h6 className="heading">Pentwist</h6>
          <nav>
            <ul className="nospace linklist">
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default SidebarRight;
