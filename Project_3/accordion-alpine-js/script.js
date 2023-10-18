const accordion = document.getElementsByClassName("label");
const container = document.getElementsByClassName("container");

for (let i = 0; i < accordion.length; i++)
{
    accordion[i].addEventListener('click', function()
    {
        accordion[i].classList.toggle("active");
        container[i].classList.toggle("active");
    });
}