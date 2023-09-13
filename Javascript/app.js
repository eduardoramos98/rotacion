function one() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var data = [100];
    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: data,
          backgroundColor: ['#47f1b6'],
        }],
      
      },
      options: {
        responsive: true
      }
    };
    var myChart = new Chart(ctx, config);
    console.log("one")
  };
  
   function dos(){
    var ctx = document.getElementById('myChart2').getContext('2d');
    var data = [300, 500, , 200];
    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: data,
          backgroundColor: ['#ff6384', '#ffffff', '#ffffff', '#ffffff']
        }],
      
      },
      options: {
        responsive: true
      }
    };
    var myChart2 = new Chart(ctx, config);
    console.log("dos")
  };

  function tres(){
    var ctx = document.getElementById('myChart3').getContext('2d');
    var data = [300, 500, , 200];
    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: data,
          backgroundColor: ['#ff6384', '#ffffff', '#ffffff', '#ffffff']
        }],
      
      },
      options: {
        responsive: true
      }
    };
    var myChart3 = new Chart(ctx, config);
    console.log("tres")
  };

  window.onload = function(){
    console.log(one())
    console.log(dos())
    console.log(tres())
  }

