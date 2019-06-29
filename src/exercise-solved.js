{
  const createForm = () => {
    // CREATE a form element
    const form = document.createElement('form');

    // CREATE an imput element and set its type to text
    const firstName = document.createElement('input');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.setAttribute('type', 'text');

    // ADD input element to form
    form.appendChild(firstName);

    // CREATE another imput element and set its type to text
    const lastName = document.createElement('input');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('type', 'text');

    // ADD input element to form
    form.appendChild(lastName);

    // CREATE a button
    // 1. With text as "Click Me"
    // 2. With id as "button"
    // 3. With type as "button"
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.setAttribute('id', 'button');
    button.setAttribute('type', 'button');

    // ADD input element to form
    form.appendChild(button);

    // FIND main element
    const main = document.getElementById('main');

    main.appendChild(form);
  };

  const formSubmittedListener = () => {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
      console.log('clicked');
      const inputs = [...document.getElementsByTagName('input')];
      console.log(inputs);
    });
  };

  const main = () => {
    createForm();
    formSubmittedListener();
  };

  window.onload = () => main();
}