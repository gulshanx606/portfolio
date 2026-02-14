// Leaflet Map Initialization
(function() {
  'use strict';
  
  function initMap() {
    try {
      // Wait for DOM to be fully ready
      if (document.readyState !== 'complete') {
        setTimeout(initMap, 100);
        return;
      }
      
      var mapBox = document.getElementById('mapBox');
      
      if (!mapBox) {
        console.error('✗ mapBox container not found');
        return;
      }
      
      if (!window.L) {
        console.error('✗ Leaflet library not loaded');
        return;
      }
      
      // Remove any existing map instance
      if (mapBox._leaflet_id) {
        console.log('Removing existing map instance');
        mapBox._leaflet_id = undefined;
        mapBox.innerHTML = '';
      }
      
      console.log('✓ Initializing map...');
      
      // Create map with custom options
      var map = L.map('mapBox', {
        center: [19.0760, 72.8777],
        zoom: 12,
        scrollWheelZoom: false,
        zoomControl: true
      });
      
      console.log('✓ Map instance created');
      
      // Add Stadia AlidadeSmooth Dark tile layer - dark theme with blue ocean
      L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/" style="color: #00ff9d;">Stadia Maps</a>',
        maxZoom: 20
      }).addTo(map);
      
      console.log('✓ Dark theme tile layer added');
      
      // Custom marker icon with bright green color
      var customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: linear-gradient(135deg, #00ff9d 0%, #00d97e 100%); width: 38px; height: 38px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 4px solid #ffffff; box-shadow: 0 5px 15px rgba(0, 255, 157, 0.8), 0 0 0 4px rgba(0, 255, 157, 0.2);"><div style="position: absolute; width: 16px; height: 16px; background: #ffffff; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"></div></div>',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });
      
      // Add marker with custom icon
      var marker = L.marker([19.0760, 72.8777], { icon: customIcon }).addTo(map);
      
      // Custom popup styling
      var popupContent = '<div style="color: #1a1a1a; font-family: Roboto, sans-serif; text-align: center; padding: 10px;">' +
        '<strong style="color: #00ff9d; font-size: 18px; display: block; margin-bottom: 5px;">📍 Mumbai</strong>' +
        '<span style="color: #666; font-size: 14px; display: block;">Maharashtra, India</span>' +
        '</div>';
      
      marker.bindPopup(popupContent, {
        className: 'custom-popup',
        closeButton: true,
        maxWidth: 250
      }).openPopup();
      
      console.log('✓ Marker added');
      
      // Force resize after a short delay
      setTimeout(function() {
        map.invalidateSize();
        console.log('✓ Map fully initialized');
      }, 250);
      
    } catch (error) {
      console.error('✗ Map initialization error:', error);
      var mapBox = document.getElementById('mapBox');
      if (mapBox) {
        mapBox.innerHTML = '<div style="padding: 20px; text-align: center; color: #ff4444;">' +
          '<strong>Map Error:</strong> ' + error.message + '</div>';
      }
    }
  }
  
  // Start initialization when window loads
  if (document.readyState === 'complete') {
    initMap();
  } else {
    window.addEventListener('load', initMap);
  }
  
})();
