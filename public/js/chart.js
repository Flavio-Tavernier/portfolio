$(function () {
    const ctx = document.getElementById("chart");

    const segmentImage = {
      id: 'segmentImage',
      afterDatasetDraw(chart, args, plugins) {
        const {ctx, data} = chart; 
  
        const angle = Math.PI / 180;
        const width = 70;
  
        ctx.save();
  
        chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
          const image = new Image();
          image.src = data.datasets[0].image[index];
          
          const x = chart.getDatasetMeta(0).data[index].tooltipPosition().x ;
          const y = chart.getDatasetMeta(0).data[index].tooltipPosition().y;
  
          ctx.drawImage(image, x - (width / 2) , y - (width / 2), width, width)
        })
      }
    }
  
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["html/css", "javascript", "java", "php", "python"],
        datasets: [
          {
            label: "% maitrise",
            data: [100, 100, 70, 50, 50],
            backgroundimage: [
              'C:\Users\flaga\Pictures',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
  
            borderWidth: 0,
            cutout: '30%',
            image : ['https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
              'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', 
              'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg', 
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'],
            hoverOffset: 30,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
              display: false
          },
          tooltip: {
            enabled: false 
          },
        },
        layout: {
          padding: 10
        }
      },
  
      plugins: [segmentImage]
  
  
    });





    chart.setActiveElements([
      {datasetIndex: 0, index: 0},
    ]);

    chart.update();



    $(".btn-rotated").click(function () {
        changeChartHighlight($(this).attr("id"));
    })


    function changeChartHighlight(idOfbutton) {
      let segmentIds = ['html-css-php', 'java', 'csharp', 'python'];
      idOfbutton = idOfbutton.slice(4);
      let segmentId = segmentIds.indexOf(idOfbutton);

      
      chart.setActiveElements([
          {datasetIndex: 0, index: segmentId},
      ]);
  
      chart.update();
    }


  });


  