function initializeBarChart() {
    const ctx = document.getElementById('os-chart').getContext('2d');

    const osImages = {
        id: 'osImages',
        beforeDatasetsDraw(chart, args, plugins) {
            const {ctx, data, scales: {y}} = chart;

            ctx.save();
            const imageSize = 30; // Set the size of the images

            data.datasets[0].images.forEach((imageLink, index) => {
                const logo = new Image();
                logo.src = imageLink;
                const yPos = y.getPixelForValue(index) - imageSize / 2;
                const xPos = y.left - imageSize - 10;
                ctx.drawImage(logo, xPos, yPos, imageSize, imageSize);
            });
        }
    };

    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Windows', 'macOS', 'Linux'],
            datasets: [{
                label: '% maitrise',
                data: [80, 60, 50],
                backgroundColor: [
                    '#e76f51',
                    '#f4a261',
                    '#e9c46a'
                ],
                borderRadius: 5,
                images: [
                    'style/logosOs/logoWindows.png',
                    'style/logosOs/logoApple.png',
                    'style/logosOs/logoLinux.png'
                ]
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
            layout: {
                padding: {
                    left: 50
                }
            },
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false // Hide the axis line
                    },
                    ticks: {
                        display: false
                    }    
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
        plugins: [osImages]
    });
}

function initializeToolsChart() {
    const ctx = document.getElementById('tools-chart').getContext('2d');

    const toolsImages = {
        id: 'toolsImages',
        beforeDatasetsDraw(chart, args, plugins) {
            const {ctx, data, scales: {x}} = chart;

            ctx.save();
            const imageSize = 30; // Set the size of the images

            data.datasets[0].images.forEach((imageLink, index) => {
                const logo = new Image();
                logo.src = imageLink;
                const xPos = x.getPixelForValue(index) - imageSize / 2;
                const yPos = x.bottom + 10; // Adjust the position as needed
                ctx.drawImage(logo, xPos, yPos, imageSize, imageSize);
            });
        }
    };

    const myToolsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['VS Code','Eclipse', 'Visual Studio', 'Intellij', 'DBeaver', 'MySQL Workbench', 'Figma'],
            datasets: [{
                label: '% maitrise',
                data: [80, 70, 50, 50, 70, 60, 40],
                backgroundColor: [
                    '#e76f51',
                    '#f4a261',
                    '#e9c46a',
                    '#2a9d8f',
                    '#264653',
                    '#6a4c93',
                    '#ff6f61'
                ],
                borderRadius: 5,
                images: [
                    'style/logosLogiciels/logoVscode.png',
                    'style/logosLogiciels/logoEclipse.svg',
                    'style/logosLogiciels/logoVs.png',
                    'style/logosLogiciels/logoIntellij.png',
                    'style/logosLogiciels/logoDbeaver.png',
                    'style/logosLogiciels/logoMysqlWorkbench.png',
                    'style/logosLogiciels/logoVbox.png',
                    'style/logosLogiciels/logoFigma.png'
                ]
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
            layout: {
                padding: {
                    bottom: 50 // Adjust the padding to make space for the images
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false // Hide the tick labels
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        display: false // Hide the default labels
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
        plugins: [toolsImages]
    });
}