
// the Button to Make the nav appear in Mobile 
let nav_here = document.querySelector( "header .container-x .humborger img" )
let nav = document.querySelector( "header .container-x nav" )
let close = document.querySelector( "header .container-x .close" )
nav_here.onclick = ( () =>
{
  nav.classList.add( "to-phone" )
  close.classList.add( "close-t" )
} )

close.onclick = ( () =>
{
  nav.classList.remove( "to-phone" )
  close.classList.remove( "close-t" )
} )

// for the the crew image to display set 
let crewImage = document.querySelector( ".landing .for-image img" );
let forimage = document.querySelector( ".landing .for-image" )
// --------------------------------(Nav Destination logic)
let TheNav_ul = document.querySelectorAll( "header .container-x nav ul li" )
let home = document.querySelector( ".landing .content" );
let des = document.querySelector( ".landing .des" )
let crew = document.querySelector( ".landing .crew" )
let tec = document.querySelector( ".landing .techno" )
let AllPage = [ home, des, crew, crewImage, forimage, tec ]
let liArray = Array.from( TheNav_ul )
let landing = document.querySelector( ".landing" )
let Destination = TheNav_ul[ 1 ];

// elemnt for destination 
let desNav = document.querySelector( ".landing .des-nav" );
let desImage = document.querySelector( ".landing .des .container-a img" );
let desh1 = document.querySelector( ".landing .des .aside h1" );
let desp = document.querySelector( ".landing .des .aside p" );
let desdetailsOne = document.querySelector( ".landing .aside .details .one h2" );
let desdetailsTwo = document.querySelector( ".landing .aside .details .two h2" );

// element for Crew 
let crewNav = document.querySelector( ".landing .crew .boletts" );
let crewh2 = document.querySelector( ".landing .crew .container-a .aside h2" );
let crewh1 = document.querySelector( ".landing .crew  .aside h1" );
let crewp = document.querySelector( ".landing .crew .container-a .aside p" );

// element for Technology 
let tecNav = document.querySelector( ".landing .techno .bolettes" );
let tecImage = document.querySelector( ".landing .techno .container img" )
let tech1 = document.querySelector( ".landing .techno .container .aside h1" );
let tecp = document.querySelectorAll( ".landing .techno .container-a .aside p" )[ 1 ];

console.log( tecNav )
console.log( tecImage )
console.log( tech1 )
console.log( tecp )

fetch( "./data.json" ).then( ( data ) =>
{
  return data.json();
} )
  .then( ( repo ) =>
  {
    console.log( repo )
    console.log( repo.destinations[ 0 ].name )

    liArray.forEach( ( el, index ) =>
    {
      el.onclick = ( ( e ) =>
      {
        liArray.forEach( ( li, index ) =>
        {
          if ( li.children[ 0 ] == e.target )
          {
            li.children[ 0 ].classList.add( "active" )
          } else
          {
            li.children[ 0 ].classList.remove( "active" )
          }
        } )

        // for Set the content in the Page  \\ HOME
        if ( e.target.parentElement.classList.contains( "home" ) ) 
        {
          AllPage.forEach( ( el ) => el.style.display = "none" )
          AllPage[ 0 ].style.display = "flex"

        } else if ( e.target.parentElement.classList.contains( "des" ) ) //\\ DESTINATION
        {
          AllPage.forEach( ( el ) => el.style.display = "none" )
          AllPage[ 1 ].style.display = "flex";
          desNav.innerHTML = "";

          for ( i = 0; i < repo.destinations.length; i++ )
          {
            //create li inside ul 
            let li_container = document.createElement( "li" )

            // add text to li 
            let litext = document.createTextNode( repo.destinations[ i ].name )

            //add class to the li container
            li_container.className = repo.destinations[ i ].name;
            // append text into li ul 
            li_container.appendChild( litext )
            // append li into ul 
            desNav.appendChild( li_container )

          }

          // Active li and add content
          let desArray = Array.from( desNav.children );
          desArray.forEach( ( li_n ) =>
          {
            if ( ( li_n.classList.item( 0 ) ).toLowerCase() === ( desh1.innerHTML ).toLowerCase() )
            {
              li_n.classList.add( "active" )
            }
          } )

          desArray.forEach( ( li ) =>
          {
            li.addEventListener( "click", ( e ) =>
            {
              for ( i = 0; i < repo.destinations.length; i++ )
              {
                if ( repo.destinations[ i ].name === e.target.classList.item( 0 ) )
                {
                  // Add Active to the class
                  desArray.forEach( ( li_b ) => li_b.classList.remove( "active" ) )
                  e.target.classList.add( "active" )

                  // Set The Name to  the Planet
                  desh1.innerHTML = repo.destinations[ i ].name;

                  // Set The IMage to  the Planet
                  desImage.setAttribute( "src", repo.destinations[ i ].images.png )
                  desImage.setAttribute( "alt", repo.destinations[ i ].name )

                  // Set The Paragraph to  the Planet
                  desp.innerHTML = repo.destinations[ i ].description;

                  // Set The Details to  the Planet
                  desdetailsOne.innerHTML = repo.destinations[ i ].distance;
                  desdetailsTwo.innerHTML = repo.destinations[ i ].travel;
                }
              }
            } )
          }
          )

        } else if ( e.target.parentElement.classList.contains( "crew" ) ) // \\ CREW
        {

          AllPage.forEach( ( el ) => el.style.display = "none" )
          AllPage[ 2 ].style.display = "flex";
          crewImage.style.display = "block";
          forimage.style.display = "block";
          crewNav.innerHTML = "";
          // Create ul li in Crew
          for ( i = 0; i < repo.crew.length; i++ )
          {
            //create li inside ul 
            let li_container = document.createElement( "li" )

            //add class to the li container
            li_container.className = repo.crew[ i ].name;

            // append li into ul 
            crewNav.appendChild( li_container )
          }

          // Active li and add content
          let crewArray = Array.from( crewNav.children );
          crewArray.forEach( ( li_n ) =>
          {
            if ( ( li_n.classList.item( 0 ) + " " + li_n.classList.item( 1 ) ).toLowerCase() === ( crewh1.innerHTML ).toLowerCase() )
            {
              li_n.classList.add( "active" )
            }
          } )
          crewArray.forEach( ( li ) =>
          {

            li.addEventListener( "click", ( e ) =>
            {
              for ( i = 0; i < repo.crew.length; i++ )
              {
                let firstName = ( repo.crew[ i ].name ).slice( 0, ( repo.crew[ i ].name ).indexOf( " " ) )
                if ( firstName === e.target.classList.item( 0 ) )
                {
                  // Add Active to the class
                  crewArray.forEach( ( li_b ) => li_b.classList.remove( "active" ) )
                  e.target.classList.add( "active" )

                  // // Set The Name to  the Crew
                  crewh1.innerHTML = repo.crew[ i ].name;

                  // // Set The IMage to  the Planet
                  crewImage.setAttribute( "src", repo.crew[ i ].images.png )
                  crewImage.setAttribute( "alt", repo.crew[ i ].name )

                  // // Set The Paragraph to  the Planet
                  crewp.innerHTML = repo.crew[ i ].bio;

                  // // Set The Details to  the Planet
                  crewh2.innerHTML = repo.crew[ i ].role;

                  console.log( crewp )
                  console.log( crewh2 )
                }
              }
            } )
          } )
        } else if ( e.target.parentElement.classList.contains( "techno" ) ) // \\ Technology
        {
          // Add the Section to the Page 
          AllPage.forEach( ( el ) => el.style.display = "none" )
          AllPage[ 5 ].style.display = "flex";
          tecNav.innerHTML = "";

          // Create ul li in Crew
          for ( i = 0; i < repo.technology.length; i++ )
          {
            //create li inside ul 
            let li_container = document.createElement( "li" )

            // Create li Text 
            let li_text = document.createTextNode( [ i + 1 ] );

            //add class to the li container
            li_container.appendChild( li_text )
            li_container.className = repo.technology[ i ].name;

            // append li into ul 
            tecNav.appendChild( li_container )
          }

          // Active li and add content
          let tecArray = Array.from( tecNav.children );
          tecArray.forEach( ( li_n ) =>
          {
            if ( ( li_n.classList.item( 0 ) ).toLowerCase() === ( ( tech1.innerHTML ).slice( 0, ( tech1.innerHTML ).indexOf( " " ) ) ).toLowerCase()
              || ( li_n.classList.item( 0 ) ).toLowerCase() === ( tech1.innerHTML ).toLowerCase() )
            {
              li_n.classList.add( "active" )
            }
          } )
          // to change the content 
          tecArray.forEach( ( li ) =>
          {

            li.addEventListener( "click", ( e ) =>
            {
              console.log( ( repo.technology[ 2 ].name ).slice( 0, ( repo.technology[ 2 ].name ).indexOf( " " ) ) )
              for ( i = 0; i < repo.technology.length; i++ )
              {
                let firstName = ( repo.technology[ i ].name ).slice( 0, ( repo.technology[ i ].name ).indexOf( " " ) )
                if ( firstName === e.target.classList.item( 0 ) || repo.technology[ i ].name === e.target.classList.item( 0 ) )
                {
                  // Add Active to the class
                  tecArray.forEach( ( li_b ) => li_b.classList.remove( "active" ) )
                  e.target.classList.add( "active" )

                  // // Set The Name to  the Crew
                  tech1.innerHTML = repo.technology[ i ].name;

                  // // Set The IMage to  the Planet
                  if ( window.innerWidth <= 702 )
                  {
                    technologyImage()
                  } else
                  {
                    tecImage.setAttribute( "src", repo.technology[ i ].images.portrait )
                  }
                  tecImage.setAttribute( "alt", repo.technology[ i ].name )

                  // // Set The Details to  the Planet
                  tecp.innerHTML = repo.technology[ i ].description;
                }
              }
            } )
          } )
        }
        backgroundProject()
      } )
    } )
  } )





// to reset the backgroundImage in resize
window.onresize = ( () =>
{
  //to Set the background
  backgroundProject()
  // to reset the size to the image 
  technologyImage()
} )
document.querySelector( "[href='#techno']" ).onclick = ( () => technologyImage() )

function technologyImage ()
{

  fetch( "./data.json" ).then( ( data ) =>
  {
    return data.json();
  } ).then( ( srepo ) =>
  {
    if ( tec.style.display === "flex" )
    {
      if ( window.innerWidth <= 702 )
      {
        let num = ~~( tecNav.querySelector( ".active" ).innerHTML ) - 1;
        console.log( num )

        tecImage.setAttribute( "src", srepo.technology[ num ].images.landscape )
      }
    }
  } )
}


// this functhion to Reset the background image 
function backgroundProject ( repo )
{
  // to Close navigation
  close.classList.remove( "close-t" )
  nav.classList.remove( "to-phone" )
  // the Device 
  let theDevice = [ "mobile", "tablet", "desktop" ]
  // the Background Images 
  let theFile = [ "home", "destination", "crew", "technology" ]

  // Check For the Nav Link Contain ACTIVE
  liArray.forEach( ( li, index ) =>
  {
    if ( li.children[ 0 ].classList.contains( "active" ) )
    {
      // the screen Width 
      let wid = window.innerWidth;

      // Set Background
      if ( wid <= 702 )
      {
        imageSrc( 0 )
      } else if ( wid <= 992 && wid > 702 )
      {
        imageSrc( 1 )
      } else
      {
        imageSrc( 2 )
      }

      function imageSrc ( x )
      {
        landing.style.backgroundImage = `url(./assets/${ theFile[ index ] }/background-${ theFile[ index ] }-${ theDevice[ x ] }.jpg)`
      }
    }

  } )
}



