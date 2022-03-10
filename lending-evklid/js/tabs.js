document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.section-work-list__item__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-work-content').forEach(function(tabContent) {
        tabContent.classList.remove('section-work-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work-content-active')
    })

  })
})