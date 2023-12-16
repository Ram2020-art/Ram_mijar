function generateWebsite() {
    // Get form and generatedWebsite elements
    var form = document.querySelector('form');
    var generatedWebsite = document.getElementById('generatedWebsite');

    // Display loader while generating content
    var loader = document.createElement('div');
    loader.innerHTML = 'Generating website...';
    loader.classList.add('loader');
    document.body.appendChild(loader);

    // Get values from the form inputs
    var name = document.getElementById('name').value;
    var hobby = document.getElementById('hobby').value;
    var homePhotoUrl = document.getElementById('homePhotoUrl').value;
    var aboutPhotoUrl = document.getElementById('aboutPhotoUrl').value;
    var bio = document.getElementById('bio').value;

    // Simulate a delay for demonstration purposes (remove this in production)
    setTimeout(function () {
        // Construct the website content using the entered data
        var websiteContent = `
        
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="${name} - ${hobby}. Explore my ${hobby} content and more on my personal website.">
            
            <!--==================== UNICONS ====================-->
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
        
        <!--==================== SWIPER CSS ====================-->
        <link rel="stylesheet" href="swiper-bundle.min.css">
        
        <!--==================== CSS ====================-->
        <link rel="stylesheet" href="website.css">


            <title>${name}</title>
        </head>
        <body>
            <!-- ... (paste the rest of your HTML code here) ... -->
            
            
            
            
            
            
            
            
    
    <body>
        <!--==================== HEADER ====================-->
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#home" class="nav_logo">
                    ${name}
                </a>

                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list">
                        <li class="nav-item">
                            <a href="#home" class="nav_link active_link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav_link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav_link">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav_link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav_link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav_link">Contact Me</a>
                        </li>
                    </ul>

                    <div class="nav_close" id="nav-close">
                        <i class="uil uil-times nav_close" id="nav-close"></i>
                    </div>
                </div>

                <div class="nav_btns">
                    <!--===== THEME CHANGE BUTTON =====-->
                    <i class="uil uil-moon change_theme" id="theme-button"></i>

                    <div class="nav_toogle" id="nav-toggle">
                        <i class="uil uil-bars"></i>
                    </div>
                </div>
            </nav>
        </header>

        <!--==================== MAIN ====================-->
        <main class="main">
            <!--==================== HOME ====================-->
            <section class="home section" id="home">
                <div class="home_container container grid">
                    <div class="home_img">
                    <img src="${homePhotoUrl}" alt="Home Photo">
                </div>
                
                    </div>

                    <div class="home_data">
                        <h1 class="home_title">Hi, I'am ${name}</h1>
                        <h3 class="home_subtitle">${hobby}</h3>
                        <p class="home_description">
                           ${bio}
                        </p>
                        <a href="#contact" class="button button--flex">
                            Contact Me <i class="uil uil-message button__icon"></i>
                        </a>
                        <div class="home_scroll">
                            <a href="#about" class="home_scroll-button button--flex"></a>
                            <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                            <span class="home_scroll-name">Scroll down</span>
                            <i class="uil uil-arrow-down home_scroll-arrow"></i>
                        </div>
                        <div class="home_social">
                            <span class="home_social-follow">Follow Me</span>
                            <div class="home_social-links">
                                <a href="https://www.linkedin.com" target="_blank" class="home_social-icon">
                                    <i class="uil uil-linkedin-alt"></i>
                                </a>
                                <a href="https://www.dribbble.com" target="_blank" class="home_social-icon">
                                    <i class="uil uil-dribbble"></i>
                                </a>
                                <a href="https://www.github.com" target="_blank" class="home_social-icon">
                                    <i class="uil uil-github-alt"></i>
                                </a>
                            </div>
                        </div>

                        <div class="home_scroll_social">
                            <div class="home_scroll1">
                                <a href="#about" class="home_scroll-button button--flex"></a>
                                <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                                <span class="home_scroll-name">Scroll down</span>
                                <i class="uil uil-arrow-down home_scroll-arrow"></i>
                            </div>
                            <div class="home_social1">
                                <div class="home_social-link">
                                    <a href="https://www.linkedin.com" target="_blank" class="home_social-icon">
                                        <i class="uil uil-linkedin-alt"></i>
                                    </a>
                                    <a href="https://www.dribbble.com" target="_blank" class="home_social-icon">
                                        <i class="uil uil-dribbble"></i>
                                    </a>
                                    <a href="https://www.github.com" target="_blank" class="home_social-icon">
                                        <i class="uil uil-github-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <!--==================== ABOUT ====================-->
            <section class="about section" id="about">
               <h2 class="section__title">About Me</h2>
               <span class="section__subtitle">My introduction</span>

               <div class="about_container container grid">
                 <img src="${aboutPhotoUrl}" alt="About Photo">

                 <div class="about_data">
                    <p class="about_description">
                        ${hobby}, with extencive knowledge and ${bio}
                    </p>
                    <div class="about_info">
                        <div>
                            <span class="about_info-title">08+</span>
                            <span class="about_info-name">Years <br>experience</span>
                        </div>
                        <div>
                            <span class="about_info-title">25+</span>
                            <span class="about_info-name">Completed <br>project</span>
                        </div>
                        <div>
                            <span class="about_info-title">04+</span>
                            <span class="about_info-name">Companies <br>worked</span>
                        </div>
                    </div>
                    <div class="about_buttons">
                        <a href="johndoe-Cv.pdf" class="button button--flex">
                            Download CV <i class="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                 </div>
               </div>
            </section>

            
           

                <!--Add Arrow-->
                <div class="swiper-button-next">
                    <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>
                <!--Add Pagination-->
                <div class="swiper-pagination"></div>
              </div>
            </section>

            <!--==================== PROJECT IN MIND ====================-->
            <section class="project section">
              <div class="project_bg">
                <div class="project_container container grid">
                    <div class="project_data">
                        <h2 class="project_title">You have new project</h2>
                        <p class="project_description">Contact me now and get a 50% discounted</p>
                        <a href="#contact" class="button button--flex button--white">
                            Contact Me 
                            <i class="uil uil-message project_icon button_icon"></i>
                        </a>
                    </div>

                    <img src="ass/home.png" alt="" class="project_img">
                </div>
              </div>
            </section>

            <!--==================== TESTIMONIAL ====================-->
            <section class="testimonial section">
              <h2 class="section__title">Testimonial</h2>  
              <span class="section__subtitle">My client saying</span>

              <div class="testimonial_container container swiper-container">
                <div class="swiper-wrapper">
                    <!--========= TESTIMONIAL 1 ==========-->
                    <div class="testimonial_content swiper-slide">
                        <div class="testimonial_data">
                            <div class="testimonial_header">
                                <img src="testimonial1.jpeg" alt="" class="testimonial_img">

                                <div>
                                    <h3 class="testimonial_name">Raj Kc</h3>
                                    <span class="testimonial_client">Client</span>
                                </div>
                            </div>

                            <div>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial_description">
                          "${name}'s website is a creative treasure trove—entertaining videos and thought-provoking insights await."
                        </p>
                    </div>
                    <!--========= TESTIMONIAL 2 ==========-->
                    <div class="testimonial_content swiper-slide">
                        <div class="testimonial_data">
                            <div class="testimonial_header">
                                <img src="testimonial2.jpg" alt="" class="testimonial_img">

                                <div>
                                    <h3 class="testimonial_name">Ram Mijar</h3>
                                    <span class="testimonial_client">Client</span>
                                </div>
                            </div>
                            
                            <div>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial_description">
                            "Subscribing to ${name}'s channel is a delight. His website complements his engaging content seamlessly."
                        </p>
                    </div>
                    <!--========= TESTIMONIAL 3 ==========-->
                    <div class="testimonial_content swiper-slide">
                        <div class="testimonial_data">
                            <div class="testimonial_header">
                                <img src="testimonial3.jpeg" alt="" class="testimonial_img">

                                <div>
                                    <h3 class="testimonial_name">Sanyaya Kumar giri</h3>
                                    <span class="testimonial_client">Client</span>
                                </div>
                            </div>
                            
                            <div>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                                <i class="uil uil-star testimonial_icon-star"></i>
                            </div>
                        </div>
                        <p class="testimonial_description">
                            "${name}'s content is both entertaining and insightful. Every video is a must-watch!"
                        </p>
                    </div>
                    
                </div>
                <!--Add Pagination-->
                <div class="swiper-pagination swiper-pagination-testimonial"></div>
              </div>
            </section>

            <!--==================== CONTACT ME ====================-->
            <section class="contact section" id="contact">
              <h2 class="section__title">Contact Me</h2>
              <span class="section__subtitle">Get in touch</span>

              <div class="contact_container container grid">
                <div>
                    <div class="contact_information">
                        <i class="uil uil-phone contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Call Me</h3>
                            <span class="contact_subtitle">+977 98*********</span>
                        </div>
                    </div>
                    <div class="contact_information">
                        <i class="uil uil-envelope contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Email</h3>
                            <span class="contact_subtitle">neupanebimal821@gmail.com</span>
                        </div>
                    </div>
                    <div class="contact_information">
                        <i class="uil uil-map-marker contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Location</h3>
                            <span class="contact_subtitle">Nepal kathmandu</span>
                        </div>
                    </div>
                </div>

                <form action="" class="contact_form grid">
                    <div class="contact_inputs grid">
                        <div class="contact_content">
                            <label for="" class="contact_label">Name</label>
                            <input type="text" class="contact_input">
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Email</label>
                            <input type="email" class="contact_input">
                        </div>
                    </div>
                    <div class="contact_content">
                        <label for="" class="contact_label">Project</label>
                        <input type="tetx" class="contact_input">
                    </div>
                    <div class="contact_content">
                        <label for="" class="contact_label">Project description</label>
                        <textarea name="" id="" cols="0" rows="7" class="contact_input"></textarea>
                    </div>
                    <div>
                        <a href="#" class="button button--flex">
                            Send Message 
                            <i class="uil uil-message button_icon"></i>
                        </a>
                    </div>
                </form>
              </div>
            </section>
        </main>

        <!--==================== FOOTER ====================-->
        <footer class="footer">
          <div class="footer_bg">
            <div class="footer_container container grid">
                <div>
                    <h1 class="footer_title">${name}</h1>
                    <span class="footer_subtitle">${hobby}</span>
                    <p class="footer_subtitle">
                        ${bio}
                    </p>
                </div>
                <ul class="footer_links">
                    <li>
                        <a href="#services" class="footer_link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer_link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer_link">Cantact Me</a>
                    </li>
                </ul>
                <div class="footer_socails">
                    <a href="https://www.facebook.com" target="_blank" class="footer_social">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" class="footer_social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" class="footer_social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer_copy">&#169; Ram Mijar. All right reserved</p>
          </div>
        </footer>
        
        <!--==================== SCROLL TOP ====================-->
        <a href="#" class="scrollup" id="scroll-up">
          <i class="uil uil-arrow-up scrollup_icon"></i>
        </a>

        <!--===================ko fi = SWIPER JS ====================-->
        
        
        <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
<script>
  kofiWidgetOverlay.draw('rammijar', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#00b9fe',
    'floating-chat.donateButton.text-color': '#fff'
  });
</script>
        
        
        
        
        <script src="swiper-bundle.min.js"></script>

        <!--==================== MAIN JS ====================-->
        <script src="website.js"></script>
    </body>
</html>
    `;

       // Set the content of the generatedWebsite div
        generatedWebsite.innerHTML = websiteContent;

        // Remove the loader
        var existingLoader = document.querySelector('.loader');
        if (existingLoader) {
            existingLoader.parentNode.removeChild(existingLoader);
        }

        // Hide the form
        form.style.display = 'none';

        // Open in the same tab
        document.open();
        document.write(websiteContent);
        document.close();
    }, 2000); // Simulated delay of 2000 milliseconds (2 seconds), remove in production
}
