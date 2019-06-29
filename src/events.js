{
  const main = () => {
    const button = document.getElementById('button');
    button.onclick = event => {
      console.log(event);
    }
  };

  window.onload = () => main();
}