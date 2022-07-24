const container = document.createElement('div');
container.className = 'container'
document.body.prepend(container)
const gallery = document.createElement('main');
gallery.className = 'gallery'
container.append(gallery)
const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg'];
const ul = document.createElement('ul');
gallery.append(ul);
images.forEach(i =>
{
    let li = document.createElement('li');
    let img = document.createElement("img");
    img.setAttribute('src', i);
    img.setAttribute('alt', 'picture' + i)
    li.append(img);
    ul.append(li);
});
const arrows = ['❰', '❱']
const arrowLeft = document.createElement('button')
arrowLeft.className = 'previous arrow no-display'
arrowLeft.textContent = arrows[0]
const arrowRight = document.createElement('button')
arrowRight.className = 'next arrow'
arrowRight.textContent = arrows[1]
container.append(arrowLeft);
container.append(arrowRight);
let width = 1080;
let count = 1;
const catalogue = document.querySelector('ul');
const listElements = document.querySelectorAll('li');
let position = 0;
arrowLeft.addEventListener('click', () =>
{
    position += width * count;
    position = Math.min(position, 0)
    catalogue.style.marginLeft = position + 'px';
    if (position == 0)
    {
        arrowLeft.classList.add('no-display')
    }
    else if (position < 0)
    {
        arrowRight.classList.remove('no-display')
    }
})
arrowRight.addEventListener('click', () =>
{
    position -= width * count;
    position = Math.max(position, -width * (listElements.length - count));
    catalogue.style.marginLeft = position + 'px';
    if (position == (-5400))
    {
        arrowRight.classList.add('no-display')
    }
    else if (position > (-5400))
    {
        arrowLeft.classList.remove('no-display')
    }
});