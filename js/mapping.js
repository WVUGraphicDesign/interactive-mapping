var markers = document.querySelectorAll('.marker');

markers.forEach(function(marker) {
    marker.addEventListener('click', function() {
        var location = marker.getAttribute('data-location');
        var contentToToggle = document.querySelector('.loc-content[data-location="' + location + '"]');

        if (contentToToggle) {
            var isActive = contentToToggle.classList.contains('active');
            var locContents = document.querySelectorAll('.loc-content');
            locContents.forEach(function(content) {
                content.classList.remove('active');
            });

            markers.forEach(function(mrk) {
                mrk.classList.remove('active-marker');
            });
            if (!isActive) {
                contentToToggle.classList.add('active');
                marker.classList.add('active-marker');
            }
        }
    });
});