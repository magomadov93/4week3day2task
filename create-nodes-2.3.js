
const array = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ];

  const ul = document.createElement("ul");
  document.body.prepend(ul);

  const render = (array) => {
    for(let i = 0; i < array.length; i++){
        const li = document.createElement("li");
        let a = document.createElement('a')
        a.href = array[i].url;
        a.textContent = array[i].name;
        li.append(a);
        ul.append(li);
    }
  }
  render(array);
  console.log(ul);