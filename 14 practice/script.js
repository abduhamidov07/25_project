let typed = new Typed(".auto-type", {
  strings: ['', `Kodlashni o'rganishning eng yaxshi usuli`],
  typeSpeed: 130,
  backSpeed: 50,
  loop: true,
});

$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let btn = document.querySelector('.slick-prev');
btn.classList.add('btn', 'btn-outline-dark')
let btn2 = document.querySelector('.slick-next');
btn2.classList.add('btn', 'btn-outline-dark')

let enterEl = document.querySelector('#enter')
let signEl = document.querySelector('#sign-up')

enterEl.addEventListener('click', function () {
  const { value: email } = Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address'
  })
  
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }
})