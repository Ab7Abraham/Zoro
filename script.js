document.getElementById('meet-team-button').addEventListener('click', function(){
  const teamSection = document.querySelector('.team-section')
  teamSection.style.display = 'flex'
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  })
})