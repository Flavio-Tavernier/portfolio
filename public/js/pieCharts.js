function initializeFrameworksChart() {
    var ctx = document.getElementById('frameworks-chart').getContext('2d');

    const segmentImage = {
        id: 'segmentImage',
        afterDatasetDraw(chart, args, plugins) {
          const {ctx, data} = chart; 
    
          const angle = Math.PI / 180;
          const width = 50;
    
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

      const frameworksChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Symfony', 'SpringBoot'],
            datasets: [{
                data: [80, 20],
                label: "% maitrise",
                borderWidth: 3,
                cutout: '0%',
                hoverOffset: 30,
                backgroundColor: ['#f4a261', '#e9c46a'],
                image : ['style/logosFrameworks/logoSymfony.svg',
                    'style/logosFrameworks/logoSpringboot.png']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: 15
            }
        },
        plugins: [segmentImage]
    });
}

function initializeDatabasesChart() {
    var ctx = document.getElementById('databases-chart').getContext('2d');

    const segmentImage = {
        id: 'segmentImage',
        afterDatasetDraw(chart, args, plugins) {
          const {ctx, data} = chart; 
    
          const angle = Math.PI / 180;
          const width = 50;
    
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

      const databasesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['MySQL', 'Oracle'],
            datasets: [{
                data: [60, 40],
                label: "% maitrise",
                borderWidth: 3,
                cutout: '0%',
                hoverOffset: 30,
                backgroundColor: ['#f4a261', '#e9c46a'], // Couleurs complémentaires
                image : ['style/logosBdd/logoMysql.png', 'style/logosBdd/logoOracle.png']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: 15
            }
        },
        plugins: [segmentImage]
    });
}