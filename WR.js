 window.onresize = function() {
    Plotly.Plots.resize();
    var window_height = window.innerHeight;
    var window_width = window.innerWidth;
    var content_div_height = document.getElementById('content').offsetHeight;
    // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
    if (content_div_height > (window_height - 40)) {
      var svg_container = document.getElementById('content').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
      svg_container.style.height = (window_height - 40) + 'px';
      svg_container.style.width = (window_width - 10) + 'px';
      Plotly.Plots.resize();
    }
  };

