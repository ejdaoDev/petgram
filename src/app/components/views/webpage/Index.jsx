//import AuthGuard from "../../../guards/Auth.guard";
import { Link as Href } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import AuthGuard from "../../../guards/Auth.guard";
import { useEffect } from "react";

export default function Index() {

    useEffect(() => {
        document.title = "Generic Company | Home"
     }, []);

    const logout = () => {
        if (window.confirm("Do you really want to leave?")) {
          AuthGuard.logout(() => { localStorage.clear() })
            //history.push("/");
            console.log('deslogueando');
            window.location.reload();
        }
      }

    return (
        <div>
            <header className="header navbar-area" style={{ position: "fixed" }} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="#index">
                                        <img src="assets/webpage/images/logo.jpg" alt="logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="index" href="#index">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="about-us" href="#about-us">About us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="services" href="#services">Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="pricing" href="#pricing">Pricing</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll dd-menu collapsed" to="blog" href="javascript:void(0)"
                                                    data-bs-toggle="collapse" data-bs-target="#submenu-1-5"
                                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">Blog</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-5">
                                                    <li className="nav-item"><Link to="blog" href="#blog">item 1</Link></li>
                                                    <li className="nav-item"><Link to="blog" href="#blog">item 2</Link></li>
                                                    <li className="nav-item"><Link to="blog" href="#blog">item 3</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item d-lg-none">
                                                <Link className="page-scroll" to="contact-us" href="#contact-us">Contact Us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll dd-menu collapsed" href="javascript:void(0)"
                                                    data-bs-toggle="collapse" data-bs-target="#submenu-1-2"
                                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">My Account</a>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    {AuthGuard.isAuthenticated() ? <li className="nav-item"><Href to="/home">Dashboard</Href></li> : undefined}
                                                    {AuthGuard.isAuthenticated() ? <li className="nav-item"><a href="#" onClick={logout}>Logout</a></li> : <li className="nav-item"><Href to="/session/signin">Login</Href></li>}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="button">
                                        <Link href="#" to="contact-us" className="btn white-bg mouse-dir">Contact Us<span
                                            className="dir-part"></span></Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="index" className="hero-slider">
                <div className="single-slider">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 co-12">
                                <div className="home-slider">
                                    <div className="hero-text">
                                        <h1><span>amet consectetur </span><br /> Lorem, ipsum dolor sit</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta beatae earum
                                            totam maxime fugit omnis. Fugiat qui dolorem temporibus accusamus, repellat nobis rerum
                                            delectus optio, unde cupiditate iusto quam. Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit. Facere, eveniet dolorem illo est officiis corrupti, ducimus commodi
                                            molestias dolores eos ipsam voluptas quos ad sit dicta nemo distinctio, culpa similique.
                                        </p>
                                        <div className="button wow fadeInUp" data-wow-delay=".9s">
                                            <Link to="index" className="btn mouse-dir">More info <span className="dir-part"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-us" className="Features section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="feature-right wow fadeInUp" data-wow-delay=".3s">
                                <div className="watch-inner">
                                    <div className="video-head wow zoomIn" data-wow-delay="0.4s">
                                        <a href="assets/webpage/images/cats.mp4" className="glightbox video"><i
                                            className="lni lni-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="feature-content">
                                <div className="title">
                                    <h3 className="wow fadeInRight" data-wow-delay=".5s">About Us</h3>
                                </div>
                                <div className="feature-item wow fadeInUp" data-wow-delay=".5s">
                                    <div className="feature-thumb">
                                        <i className="lni lni-bar-chart"></i>
                                    </div>
                                    <div className="banner-content">
                                        <h2 className="title">Lorem ipsum dolor, sit amet consectetur</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim similique, modi
                                            asperiores nemo animi deleniti, eligendi sunt quam quibusdam, laborum ratione adipisci
                                            suscipit at amet totam quasi maxime hic.</p>
                                    </div>
                                </div>
                                <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                                    <div className="feature-thumb">
                                        <i className="lni lni-code-alt"></i>
                                    </div>
                                    <div className="banner-content">
                                        <h2 className="title">Lorem ipsum dolor, sit amet consectetur</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta possimus qui blanditiis,
                                            quod consequatur laborum aspernatur ipsum beatae non libero vel, minima neque? Suscipit,
                                            porro dolore deleniti asperiores doloremque non?</p>
                                    </div>
                                </div>
                                <div className="feature-item wow fadeInUp" data-wow-delay=".7s">
                                    <div className="feature-thumb">
                                        <i className="lni lni-website"></i>
                                    </div>
                                    <div className="banner-content">
                                        <h2 className="title">Lorem ipsum dolor, sit amet consectetur</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et vel ipsa omnis asperiores!
                                            Quibusdam distinctio quos assumenda ipsam necessitatibus nulla dolorem, similique illo,
                                            optio aliquam aperiam at, ex molestias consequatur?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Services</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s"><b>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Rerum, repellat amet tenetur vitae ut, soluta incidunt ad cum culpa eaque fugiat,
                                    error accusamus. Ipsa accusamus nihil consequatur sit fugiat eos!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".2s">
                                <div className="serial">
                                    <span><i className="lni lni-code"></i></span>
                                </div>
                                <h3><a href="service-diseño-web.html">Service 1</a></h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, esse! Fugiat temporibus
                                    molestiae tenetur aut iste, est ab. Inventore ullam consectetur repellendus vitae! Officiis
                                    error in esse, omnis doloribus doloremque.</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".3s">
                                <div className="serial">
                                    <span><i className="lni lni-camera"></i></span>
                                </div>
                                <h3><a href="service-Contenido audiovisual.html">Service 2</a></h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolore consequatur voluptates
                                    ducimus, corporis culpa quos hic obcaecati cum architecto facilis aliquid quis animi eveniet.
                                    Sed quibusdam adipisci voluptates rem?</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".4s">
                                <div className="serial">
                                    <span><i className="lni lni-code-alt"></i></span>
                                </div>
                                <h3><a href="service-Software empresarial.html">Service 3</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur perferendis asperiores
                                    repudiandae magnam aliquid maxime deleniti mollitia accusantium sint temporibus officiis
                                    doloremque ducimus rem eum magni, corrupti esse sed quam.</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".5s">
                                <div className="serial">
                                    <span><i className="lni lni-keyword-research"></i></span>
                                </div>
                                <h3><a href="service-Estrategia e investigación.html">Service 4</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur odit cupiditate maiores
                                    ipsa necessitatibus maxime deleniti repellat quia exercitationem, eaque minima impedit, eum
                                    doloremque sed nihil earum ipsum voluptatum.</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".6s">
                                <div className="serial">
                                    <span><i className="lni lni-seo"></i></span>
                                </div>
                                <h3><a href="service-Optimizacion para los diferentes motores.html">Service 5</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia cum laborum deserunt,
                                    possimus quas consectetur optio sequi repudiandae ipsum officia incidunt pariatur magnam
                                    laudantium id. Facere aliquid aliquam saepe.</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service wow fadeInUp" data-wow-delay=".7s">
                                <div className="serial">
                                    <span><i className="lni lni-laptop"></i></span>
                                </div>
                                <h3><a href="service-single.html">Service 6</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis quas quod obcaecati
                                    fuga magni eligendi nisi? Perferendis exercitationem, explicabo minima repellat, veniam corrupti
                                    commodi iure eligendi at, hic aliquid?</p>
                                <div className="circles-wrap">
                                    <div className="circles">
                                        <span className="circle circle-1"></span>
                                        <span className="circle circle-2"></span>
                                        <span className="circle circle-3"></span>
                                        <span className="circle circle-4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Pricing</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s"><b>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Minima reiciendis aperiam dolorem non vel neque earum dolores? Ipsa aspernatur, eum
                                    voluptate non architecto optio ab molestiae dolores? Ad, nihil omnis!</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".7s">
                                <p className="popular">Popular</p>

                                <div className="table-head">
                                    <h4 className="title">Offer 1<span></span></h4>
                                    <div className="price">
                                        <p className="amount"><span className="curency">$</span>99.99<span
                                            className="duration"><b>USD</b></span></p>
                                    </div>
                                </div>

                                <ul className="table-list">
                                    <li>✔Option 1</li>
                                    <li>✔Option 2</li>
                                    <li>✔Option 3</li>
                                    <li>✔Option 4</li>
                                </ul>
                                <div className="button">
                                    <a className="btn white-bg mouse-dir" href="#">Start <span className="dir-part"></span></a>

                                </div>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".5s">

                                <div className="table-head">
                                    <h4 className="title">Offer 2<span></span></h4>
                                    <div className="price">
                                        <p className="amount"><span className="curency">$</span>199.99<span
                                            className="duration"><b>USD</b></span></p>
                                    </div>
                                </div>

                                <ul className="table-list">
                                    <li>✔Option 1</li>
                                    <li>✔Option 2</li>
                                    <li>✔Option 3</li>
                                    <li>✔Option 4</li>
                                </ul>
                                <div className="button">
                                    <a className="btn white-bg mouse-dir" href="#">Start <span className="dir-part"></span></a>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-12">



                            <div className="single-table wow fadeInUp" data-wow-delay=".9s">


                                <div className="table-head">
                                    <h4 className="title">Offer 3<span></span></h4>
                                    <div className="price">
                                        <p className="amount"><span className="curency">$</span>299.99<span
                                            className="duration"><b>USD</b></span></p>
                                    </div>
                                </div>

                                <ul className="table-list">
                                    <li>✔Option 1</li>
                                    <li>✔Option 2</li>
                                    <li>✔Option 3</li>
                                    <li>✔Option 4</li>
                                </ul>
                                <div className="button">
                                    <a className="btn white-bg mouse-dir" href="#">Start <span className="dir-part"></span></a>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".7s">
                                <p className="popular">Popular</p>

                                <div className="table-head">
                                    <h4 className="title">Offer 4<span></span></h4>
                                    <div className="price">
                                        <p className="amount"><span className="curency">$</span>399.99<span
                                            className="duration"><b>USD</b></span></p>
                                    </div>
                                </div>

                                <ul className="table-list">
                                    <li>✔Option 1</li>
                                    <li>✔Option 2</li>
                                    <li>✔Option 3</li>
                                    <li>✔Option 4</li>
                                </ul>
                                <div className="button">
                                    <a className="btn white-bg mouse-dir" href="#">Start <span className="dir-part"></span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="fun-facts" className="fun-facts overlay">
                <div className="fun-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-fun wow fadeIn" data-wow-delay=".3s">
                                    <div className="head">
                                        <div className="icon"><i className="lni lni-emoji-smile"></i></div>
                                        <div className="counter"><span id="secondo1" className="countup" cup-end="32">1050</span>+
                                        </div>
                                        <h2>Happy Faces</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-fun wow fadeIn" data-wow-delay=".5s">
                                    <div className="head">
                                        <div className="icon"><i className="lni lni-empty-file"></i></div>
                                        <div className="counter"><span id="secondo2" className="countup" cup-end="24">2050</span>+
                                        </div>
                                        <h2>Completed Projects</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-fun wow fadeIn" data-wow-delay=".7s">
                                    <div className="head">
                                        <div className="icon"><i className="lni lni-investment"></i></div>
                                        <div className="counter"><span id="secondo3" className="countup" cup-end="180">500</span>K</div>
                                        <h2>Investments</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-fun wow fadeIn" data-wow-delay=".9s">
                                    <div className="head">
                                        <div className="icon"><i className="lni lni-cup"></i></div>
                                        <div className="counter"><span id="secondo4" className="countup" cup-end="45">45</span></div>
                                        <h2>Winners</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="blog" className="latest-news-area section">
                <div className="letast-news-grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Blog</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="letest-news-item wow fadeInUp" data-wow-delay=".4s">
                                    <div className="image">
                                        <img src="assets/webpage/images/blog/news1.jpg" alt="#" />
                                    </div>
                                    <div className="content-body">
                                        <div className="meta-details">
                                            <a href="#blog" className="meta-list"><i className="lni lni-user"></i><span>By Admin</span></a>
                                            <a href="#blog" className="meta-list"><i className="lni lni-calendar"></i><span>April 2,
                                                2021</span></a>
                                        </div>
                                        <h4 className="title"><a href="#blog">blog number one</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard.</p>
                                        <div className="button">
                                            <a className="btn mouse-dir white-bg" href="#blog">Read More<span
                                                className="dir-part"></span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="letest-news-item wow fadeInUp" data-wow-delay=".6s">
                                    <div className="image">
                                        <img src="assets/webpage/images/blog/news2.jpg" alt="#" />
                                    </div>
                                    <div className="content-body">
                                        <div className="meta-details">
                                            <a href="#blog" className="meta-list"><i className="lni lni-user"></i><span>By Admin</span></a>
                                            <a href="#blog" className="meta-list"><i className="lni lni-calendar"></i><span>April 2,
                                                2021</span></a>
                                        </div>
                                        <h4 className="title"><a href="#blog">blog number two</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard.</p>
                                        <div className="button">
                                            <a className="btn mouse-dir white-bg" href="#blog">Read More<span
                                                className="dir-part"></span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="letest-news-item wow fadeInUp" data-wow-delay=".8s">
                                    <div className="image">
                                        <img src="assets/webpage/images/blog/news3.jpg" alt="#" />
                                    </div>
                                    <div className="content-body">
                                        <div className="meta-details">
                                            <a href="#blog" className="meta-list"><i className="lni lni-user"></i><span>By Admin</span></a>
                                            <a href="#blog" className="meta-list"><i className="lni lni-calendar"></i><span>April 2,
                                                2021</span></a>
                                        </div>
                                        <h4 className="title"><a href="#blog">blog number three</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard.</p>
                                        <div className="button">
                                            <a className="btn mouse-dir white-bg" href="#blog">Read More<span
                                                className="dir-part"></span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="contact-us" className="call-action section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-0 wow fadeInRight" data-wow-delay=".4s"></div>
                        <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".4s">
                            <div className="right-form">
                                <div className="section-heading">
                                    <h4>You can send us a email Here!!!</h4>
                                </div>
                                <div className="contact-form-box ">
                                    <form method="post" action="#" className="mailform">
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <input type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <input type="text" name="phone" placeholder="Phone number" />
                                            </div>
                                            <div className="col-12">
                                                <textarea name="message" rows="5" placeholder="Message"></textarea>
                                            </div>
                                            <div className="button col-12">
                                                <button type="submit" className="btn white-bg mouse-dir">Send<span
                                                    className="dir-part"></span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-0 wow fadeInRight" data-wow-delay=".4s"></div>
                    </div>
                </div>
            </section>

            <section className="client-logo-section">
                <div className="section-title">
                    <span>Our Clients</span>
                </div>
                <div className="container">
                    <div className="client-logo-wrapper">
                        <div className="client-logo-carousel d-flex align-items-center p-content-between">
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-1.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-2.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-3.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-4.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-5.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-6.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-7.png" alt="" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/webpage/images/clients/client-8.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="faq section-title"><br /><br /><br /><br />
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h2>Frequent Questions</h2>
                    </header>
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="accordion accordion-flush" id="faqlist1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-1">Sed ut perspiciatis unde omnis iste natus error</button>
                                    </h2>
                                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                        <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Veniam, dicta sit, in fugiat, voluptatum animi repellendus maxime aperiam sed
                                            perferendis assumenda quis tenetur ab distinctio ad impedit! Veritatis, eius laboriosam!
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-2">Sed ut perspiciatis unde omnis iste natus error</button>
                                    </h2>
                                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                                            repellat facilis. Expedita modi tempore architecto repellat vel quam magnam cum. Est
                                            laudantium ipsa quaerat quod ducimus, accusantium aspernatur at incidunt!</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-content-3">Sed ut perspiciatis unde omnis iste natus error</button>
                                    </h2>
                                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                            porro quam sapiente! Unde error est autem. Odio recusandae, quas culpa voluptatem error
                                            earum unde distinctio rerum perspiciatis magni accusamus cupiditate!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="accordion accordion-flush" id="faqlist2">

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq2-content-1">Sed ut perspiciatis unde omnis iste natus
                                            error</button>
                                    </h2>
                                    <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                                            eum ut maiores vitae velit reprehenderit labore officia quaerat voluptates ullam
                                            molestias dolor earum magni temporibus alias sit sapiente sint soluta?</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq2-content-2">Sed ut perspiciatis unde omnis iste natus
                                            error</button>
                                    </h2>
                                    <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                        <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Exercitationem quo ullam hic cupiditate eos nihil voluptatum quaerat similique mollitia
                                            culpa eveniet ex delectus a consequatur aliquam, rerum harum obcaecati tenetur.</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq2-content-3">Sed ut perspiciatis unde omnis iste natus
                                            error</button>
                                    </h2>
                                    <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                        <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Quibusdam nostrum, commodi quisquam sed possimus odio dolor laborum harum laboriosam!
                                            Temporibus velit doloribus, iure earum sunt illo nam debitis exercitationem vero.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12">

                            <div className="subscribe-text wow fadeInLeft" data-wow-delay=".3s">
                                <h6>Subscribe to the new news</h6>
                                <p className=""><br /></p>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12">

                            <div className="subscribe-form wow fadeInRight" data-wow-delay=".5s">
                                <form action="#" method="get" target="_blank" className="newsletter-inner">
                                    <input name="email" placeholder="Your Email" className="common-input"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email'" required=""
                                        type="email" />
                                    <div className="button">
                                        <button className="btn mouse-dir white-bg">Subscribe now!<span className="dir-part"></span></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div id="footer" className="footer-webpage">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="f-about single-footer">
                                    <div className="logo" style={{textAlign:"center"}}>
                                        <Link to="index"><img src="assets/webpage/images/logo.jpg"
                                            style={{width:"400px", height: "200px"}} alt="logo" /></Link>
                                    </div>
                                    <div className="footer-social" style={{textAlign:"center"}}>
                                        <ul>
                                            <li><a href="#footer"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="#footer"><i className="lni lni-instagram-original"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-6">

                                        <div className="single-footer f-link">
                                            <h3>Company</h3>
                                            <ul>
                                                <li><Link href="#" to="index">Home</Link></li>
                                                <li><Link href="#" to="about-us">About Us</Link></li>
                                                <li><Link href="#" to="services">Services</Link></li>
                                                <li><Link href="#" to="pricing">Pricing</Link></li>
                                                <li><Link href="#" to="blog">Blog</Link></li>
                                                <li><Link href="#" to="faq">Frequent Questions</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">

                                        <div className="single-footer f-contact f-link">
                                            <h3>Contact Us</h3>
                                            <p>We will be more than pleased to contact you</p>
                                            <ul className="footer-contact">
                                                <li><i className="lni lni-phone"></i> <a href="#">(+12) 3456789101 </a></li><br />
                                                <li><i className="lni lni-map-marker"></i>Ramdom Adress</li><br />
                                                <li><i className="lni lni-world"></i> <a
                                                    href="http://emmasoft.net/">emmasoft.net</a></li><br />
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-12">
                                    <div className="left">
                                        <p>Designed and developed by<a href="http://emmasoft.net/" rel="nofollow"
                                            target="_blank">emmasoft.net</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4 col-12">
                                    <div className="right">
                                        <p>All rights reserved © 2021 <a href="#footer" rel="nofollow" target="_blank">Generic
                                            Company</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whatsap">
                <a href="https://api.whatsapp.com/send?phone=573227477211&text=Hello%21%20I%20want%20more%20info%20about%20you."
                    className="float" target="_blank">
                    <i className="lni lni-whatsapp my-float"></i>
                </a>
            </div>

            <a href="#" className="scroll-top btn-hover">
                <i className="lni lni-chevron-up"></i>
            </a>
        </div>
    )
}
