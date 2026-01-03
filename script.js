
(function(){
  emailjs.init("01Au14_DTO1Xkt7Ns");
})();

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  const roles = ["Java Full Stack Developer","Java Backend Developer","Problem Solver"];
  let i=0,j=0,del=false;
  setInterval(()=>{
    const el=document.querySelector('.typing');
    el.textContent = roles[i].slice(0,j);
    if(!del && j++===roles[i].length) del=true;
    if(del && j--===0){del=false;i=(i+1)%roles.length}
  },120);

  $(window).on('scroll', function () {
    $('.reveal').each(function () {
      if ($(this).offset().top < window.scrollY + window.innerHeight - 120) {
        $(this).addClass('active');
      }
    });
    $('section').each(function(){
      if(window.scrollY >= $(this).offset().top - 150){
        const id = $(this).attr('id');
        $('nav a').removeClass('active');
        $('nav a[href="#'+id+'"]').addClass('active');
      }
    })
  });

let certIndex = 0;
const certWidth = 280;
const totalCerts = $('.cert-card').length;

$('#certNext').on('click', function () {
  certIndex++;
  if (certIndex >= totalCerts) {
    certIndex = 0;
  }
  $('.cert-track').css('transform', `translateX(-${certIndex * certWidth}px)`);
});

$('#certPrev').on('click', function () {
  certIndex--;
  if (certIndex < 0) {
    certIndex = totalCerts - 1;
  }
  $('.cert-track').css('transform', `translateX(-${certIndex * certWidth}px)`);
});

const revealItems = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_uje915d',
    'template_1eyi2th',
    this
  )
  .then(() => {
    alert('Message sent successfully!');
    this.reset();
  }, (error) => {
    alert('Failed to send message. Try again.');
    console.error(error);
  });
});

document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
  video.addEventListener("contextmenu", e => e.preventDefault());
});
