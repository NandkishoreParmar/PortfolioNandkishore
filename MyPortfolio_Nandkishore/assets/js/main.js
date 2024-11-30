/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById( toggleId ),
      nav = document.getElementById( navId );
  
    if ( toggle && nav ) {
      toggle.addEventListener( "click", () => {
        nav.classList.toggle( "show" );
      } );
    }
  };
  showMenu( "nav-toggle", "nav-menu" );
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll( ".nav-link" );
  const sections = document.querySelectorAll( ".section" );
  
  window.addEventListener( "scroll", () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if ( scrollY >= sectionTop - 390 ) {
        current = section.getAttribute( 'id' );
      }
    } )
  
    navLinks.forEach( link => {
      link.classList.remove( 'active' );
      if ( link.classList.contains( current ) ) {
        link.classList.add( 'active' );
      }
    } )
  } )
  
  // function linkAction() {
  //   /*Active link*/
  //   navLinks.forEach((n) => n.classList.remove("active"));
  //   this.classList.add("active");
  
  //   /*Remove menu mobile*/
  const navMenu = document.getElementById( "nav-menu" );
  //   navMenu.classList.remove("show");
  // }
  navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );
  
  /*===== COPY Email =====*/
  const copy = document.getElementById( "copy" );
  copy.addEventListener( "click", () => {
    navigator.clipboard.writeText( "nandkishoreparmar91@gmail.com" );
    copy.innerHTML = "copied";
    setTimeout( () => {
      copy.innerHTML = null;
    }, 2000 );
  } );
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal( {
    origin: "top",
    distance: "80px",
    duration: 800,
    reset: true,
  } );
  
  /*SCROLL HOME*/
  sr.reveal( ".home-title", {} );
  sr.reveal( ".button", { delay: 200 } );
  sr.reveal( ".home-img", { delay: 400 } );
  sr.reveal( ".home-social-icon", { interval: 200 } );
  
  /*SCROLL ABOUT*/
  sr.reveal( ".about-img", {} );
  sr.reveal( ".about-subtitle", { delay: 400 } );
  sr.reveal( ".about-text", { delay: 400 } );
  
  /*SCROLL SKILLS*/
  sr.reveal( ".skills-subtitle", {} );
  sr.reveal( ".skills-text", {} );
  sr.reveal( ".skills-data", { interval: 100 } );
  // sr.reveal(".skills-img", { delay: 600 });
  
  /*SCROLL projects*/
  sr.reveal( ".project-img", { interval: 200 } );
  
  /*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });
  
  /*===== Resume open in new tab and download also in same time  =====*/
  document.getElementById("resume-button").addEventListener("click", function (e) {
    e.preventDefault();

    // Open the resume in a new tab
    const viewUrl = "https://drive.google.com/file/d/1DidZSOOK3a1enxaMMTkaOYvf4OHhhzIl/view?usp=sharing";
    window.open(viewUrl, "_blank");

    // Trigger the download
    setTimeout(() => {
      const downloadUrl = "https://drive.google.com/uc?export=download&id=1DidZSOOK3a1enxaMMTkaOYvf4OHhhzIl";
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = "Resume.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }, 1000); // Delay to ensure the tab opens first
  });