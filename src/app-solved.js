{
  const addHeading = () => {
    // CREATE a new heading element
    const heading = document.createElement('h2');
    
    // CHANGE innerText to element
    heading.innerText = 'Hello Class 22';

    // LOG image element
    console.log(heading);

    // CHANGE style of heading color to Red
    heading.style.color = 'red';

    console.log(heading.style);

    // FIND main element where we need to add heading
    const main = document.getElementById('main');
    console.log(main);

    // ADD heading to main element
    main.appendChild(heading);

    // REMOVE heading from main element
    // main.removeChild(heading);
  };

  const addImage = () => {
    // CREATE a new img element
    const image = document.createElement('img');
    // CHANGE attribute of img element
    image.setAttribute('src', IMG_SRC);
    image.setAttribute('alt', 'HackYourFuture Image');

    console.log(image);

    // FIND main element where we need to add heading
    const main = document.getElementById('main');
    console.log(main);

    // ADD heading to main element
    main.appendChild(image);

    // REMOVE heading from main element
    // main.removeChild(image);
  };

  const main = () => {
    addHeading();
    addImage();
  };

  const IMG_SRC = 'https://media.licdn.com/dms/image/C4E0BAQE2ExOXfXGutA/company-logo_200_200/0?e=2159024400&v=beta&t=eAeVuAIMkoOHhcpiyJTegYSNJIai9vtQYl5CW9UJ9u8';

  window.onload = () => main();
}