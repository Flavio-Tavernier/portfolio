function initializeRadarChart() {
    const CHART = $("#radar-chart");



    const data = {
        labels: [
          'HTML',
          'CSS',
          'JavaScript',
          'PHP',
          'Java',
          'C#',
          'Python'
        ],
        datasets: [{
          label: 'Maîtrise langages',
          data: [9.5, 9.5, 9.5, 9.5, 8.5, 7.5, 8.5],
          fill: true,
          backgroundColor: 'rgba(255, 222, 89, 0.2)',
          borderColor: '#dfc24d',
          pointBackgroundColor: '#dfc24d',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#dfc24d',
          icons: ['style/logosLangages/logoHtml.png', 'style/logosLangages/logoCss.png', 'style/logosLangages/logoJs.png', 'style/logosLangages/logoPhp.png', 'style/logosLangages/logoJava.png', 'style/logosLangages/logoCsharp.png', 'style/logosLangages/logoPython.png',]
        }]


      };


    const radarIcons = {
        id: 'radarIcons',
        beforeDatasetsDraw(chart, args, plugin) {
            const {ctx, data, scales: {r}} = chart;

            const xCenter = r.xCenter;
            const yCenter = r.yCenter;
            const drawingArea = r.drawingArea;
            const angleLines = data.datasets[0].icons.length;
            const angle = (360 / angleLines);

            function degreesToRadians(degrees) {
                return degrees * (Math.PI / 180);
            }
            
            data.datasets[0].icons.forEach((icon, index) => {
                ctx.save();

                const degrees = angle * index;
                const radians = degreesToRadians(degrees);
                const xCoor = Math.cos(radians);
                const yCoor = - drawingArea + Math.sin(radians);
    
    
                ctx.translate(xCenter, yCenter);
                ctx.rotate(radians);
    
                const image = new Image();
                image.src = data.datasets[0].icons[index];

                ctx.drawImage(image, xCoor - 20, yCoor - 50, 40, 40)
                ctx.restore();
            });

            
        }
    }


    const radarChart = new Chart(CHART, {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
            },
            layout: {
                padding: 50
            }, 
            scales: {
                r: {
                    pointLabels: {
                        display: false
                    },
                    ticks: {
                        display: false,
                    },
                    suggestedMax: 10,
                    suggestedMin: 6
                }
            }
        },
        plugins: [radarIcons]
    });
}
  