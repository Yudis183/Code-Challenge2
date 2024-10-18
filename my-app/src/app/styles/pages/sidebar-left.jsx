import React from 'react';

const SidebarLeft = () => {
  return (
    <>
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

      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            <h1><a href="../index.html">Pentwist</a></h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li><a href="../index.html">Home</a></li>
              <li className="active">
                <a className="drop" href="#">Pages</a>
                <ul>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="full-width.html">Full Width</a></li>
                  <li className="active"><a href="sidebar-left.html">Sidebar Left</a></li>
                  <li><a href="sidebar-right.html">Sidebar Right</a></li>
                  <li><a href="basic-grid.html">Basic Grid</a></li>
                  <li><a href="font-icons.html">Font Icons</a></li>
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
              <li><a href="#">Link Text</a></li>
              <li><a href="#">Link Text</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="wrapper bgded overlay" style={{ backgroundImage: "url('../images/demo/backgrounds/01.png')" }}>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Dolor</a></li>
          </ul>
        </div>
      </div>

      <div className="wrapper coloured">
        <article className="hoc cta clear">
          <h6 className="three_quarter first font-x2">Nulla nec libero phasellus nec dolor sed ornare semper</h6>
          <footer className="one_quarter"><a className="btn" href="#"><strong>Ipsum vestibulum</strong></a></footer>
        </article>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="sidebar one_quarter first">
            <h6>Lorem ipsum dolor</h6>
            <nav className="sdb_holder">
              <ul>
                <li><a href="#">Navigation - Level 1</a></li>
                <li><a href="#">Navigation - Level 1</a>
                  <ul>
                    <li><a href="#">Navigation - Level 2</a></li>
                    <li><a href="#">Navigation - Level 2</a></li>
                  </ul>
                </li>
                <li><a href="#">Navigation - Level 1</a>
                  <ul>
                    <li><a href="#">Navigation - Level 2</a></li>
                    <li><a href="#">Navigation - Level 2</a>
                      <ul>
                        <li><a href="#">Navigation - Level 3</a></li>
                        <li><a href="#">Navigation - Level 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Navigation - Level 1</a></li>
              </ul>
            </nav>

            <div className="sdb_holder">
              <h6>Lorem ipsum dolor</h6>
              <address>
                Full Name<br />
                Address Line 1<br />
                Address Line 2<br />
                Town/City<br />
                Postcode/Zip<br />
                <br />
                Tel: xxxx xxxx xxxxxx<br />
                Email: <a href="mailto:contact@domain.com">contact@domain.com</a>
              </address>
            </div>

            <div className="sdb_holder">
              <article>
                <h6>Lorem ipsum dolor</h6>
                <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed.</p>
                <ul>
                  <li><a href="#">Lorem ipsum dolor sit</a></li>
                  <li>Etiam vel sapien et</li>
                  <li><a href="#">Etiam vel sapien et</a></li>
                </ul>
                <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed. Condimentumsantincidunt dui mattis magna intesque purus orci augue lor nibh.</p>
                <p className="more"><a href="#">Continue Reading &raquo;</a></p>
              </article>
            </div>
          </div>

          <div className="content three_quarter">
            <h1>&lt;h1&gt; to &lt;h6&gt; - Headline Colour and Size Are All The Same</h1>
            <img className="imgr borderedbox inspace-5" src="../images/demo/imgr.gif" alt="Image Right" />
            <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
            <p>Dapiensociis <a href="#">temper donec auctortortis cumsan</a> et curabitur condis lorem loborttis leo. Ipsumcommodo libero nunc at in velis tincidunt pellentum tincidunt vel lorem.</p>
            <img className="imgl borderedbox inspace-5" src="../images/demo/imgl.gif" alt="Image Left" />
            <p>This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>. For full terms of use of this template please read our <a href="https://www.os-templates.com/template-terms">website template licence</a>.</p>
            <p>You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more website templates visit our <a href="https://www.os-templates.com/">free website templates</a> section.</p>
            <p>Portortornec condimenterdum eget consectetuer condis consequam pretium pellus sed mauris enim. Puruselit mauris nulla hendimentesque elit semper nam a sapien urna sempus.</p>

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
                  <tr>
                    <td>Value 5</td>
                    <td>Value 6</td>
                    <td>Value 7</td>
                    <td><a href="#">Value 8</a></td>
                  </tr>
                  <tr>
                    <td>Value 9</td>
                    <td>Value 10</td>
                    <td>Value 11</td>
                    <td>Value 12</td>
                  </tr>
                  <tr>
                    <td>Value 13</td>
                    <td><a href="#">Value 14</a></td>
                    <td>Value 15</td>
                    <td>Value 16</td>
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
                      <figure className="avatar"><img src="../images/demo/avatar.png" alt="Avatar" /></figure>
                      <address>
                        By <a href="#">A Name</a>
                      </address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
                <li>
                  <article>
                    <header>
                      <figure className="avatar"><img src="../images/demo/avatar.png" alt="Avatar" /></figure>
                      <address>
                        By <a href="#">A Name</a>
                      </address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
                <li>
                  <article>
                    <header>
                      <figure className="avatar"><img src="../images/demo/avatar.png" alt="Avatar" /></figure>
                      <address>
                        By <a href="#">A Name</a>
                      </address>
                      <time dateTime="2045-04-06T08:15+00:00">Friday, 6<sup>th</sup> April 2045 @08:15:00</time>
                    </header>
                    <div className="comcont">
                      <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                    </div>
                  </article>
                </li>
              </ul>

              <h2>Write A Comment</h2>
              <form action="#" method="post">
                <div className="one_third first">
                  <label htmlFor="name">Name <span>*</span></label>
                  <input type="text" name="name" id="name" value="" size="22" required />
                </div>
                <div className="one_third">
                  <label htmlFor="email">Mail <span>*</span></label>
                  <input type="email" name="email" id="email" value="" size="22" required />
                </div>
                <div className="one_third">
                  <label htmlFor="url">Website</label>
                  <input type="url" name="url" id="url" value="" size="22" />
                </div>
                <div className="block clear">
                  <label htmlFor="comment">Your Comment</label>
                  <textarea name="comment" id="comment" cols="25" rows="10"></textarea>
                </div>
                <div>
                  <input type="submit" name="submit" value="Submit Form" />
                  &nbsp;
                  <input type="reset" name="reset" value="Reset Form" />
                </div>
              </form>
            </div>
          </div>
          <div className="clear"></div>
        </main>
      </div>

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
                <input className="btmspace-15" type="text" value="" placeholder="Name" />
                <input className="btmspace-15" type="text" value="" placeholder="Email" />
                <button className="btn" type="submit" value="submit">Submit</button>
              </fieldset>
            </form>
          </div>
          <div className="one_quarter">
            <h6 className="heading">Elementum ligula sed</h6>
            <ul className="nospace linklist">
              <li><a href="#">Feugiat odio a est</a></li>
              <li><a href="#">Ipsum eleifend elementum nullam</a></li>
              <li><a href="#">Vitae ligula etiam ante lectus</a></li>
              <li><a href="#">Venenatis at auctor in</a></li>
              <li><a href="#">Erat volutpat nulla elementum</a></li>
            </ul>
          </div>
          <div className="one_quarter last">
            <h6 className="heading">Lobortis ac velit aliquam</h6>
            <ul className="nospace clear latestimg">
              <li><a className="imgover" href="#"><img src="../images/demo/100x100.png" alt="Image" /></a></li>
              <li><a className="imgover" href="#"><img src="../images/demo/100x100.png" alt="Image" /></a></li>
              <li><a className="imgover" href="#"><img src="../images/demo/100x100.png" alt="Image" /></a></li>
              <li><a className="imgover" href="#"><img src="../images/demo/100x100.png" alt="Image" /></a></li>
              <li><a className="imgover" href="#"><img src="../images/demo/100x100.png" alt="Image" /></a></li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
          <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
        </div>
      </div>

      <a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
    </>
  );
};

export default SidebarLeft;
