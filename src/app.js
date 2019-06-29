{
  const addHeading = () => {
    // CREATE a new heading element

    // CHANGE innerText to element "Hello, Class 22"

    // LOG image element

    // CHANGE style of heading color to Red

    // FIND main element where we need to add heading

    // APPEND heading to main element

    // REMOVE heading from main element
  };

  const addImage = () => {
    // CREATE a new img element
    
    // CHANGE src and alt attribute of img element

    // Log image elemnent

    // FIND main element where we need to add heading

    // APPEND heading to main element

    // REMOVE heading from main element
  };

  const main = () => {
    addHeading();
    addImage();
  };

  const IMG_SRC = 'https://media.licdn.com/dms/image/C4E0BAQE2ExOXfXGutA/company-logo_200_200/0?e=2159024400&v=beta&t=eAeVuAIMkoOHhcpiyJTegYSNJIai9vtQYl5CW9UJ9u8';

  window.onload = () => main();
}