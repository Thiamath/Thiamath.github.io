
Chart.defaults.global.labels = {
    fontSize: 18,
    fontColor: 'lightgray',
};

Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0,
        max: 100,
        callback: function(value, index, values) {
            switch (value) {
                case 0: return 'n00b';
                case 20: return 'novice';
                case 40: return 'adept';
                case 60: return 'proficient';
                case 80: return 'advanced';
                case 100: return 'expert';
                default: return '';
            }
        },
    }
});

const languagesChart = {
    data: {
        labels: ['Java', 'Kotlin', 'Groovy', 'Golang', 'Python', 'Javascript', 'Bash'],
        datasets: [{
            data: [90, 80, 70, 70, 60, 60, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        layout: {
            padding: 0,
        },
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                showLabelBackdrop: false,
                backdropPaddingX: 100,
                callback: function(value, index, values) {
                    switch (value) {
                        case 0: return 'n00b';
                        case 20: return 'novice';
                        // case 40: return 'adept';
                        // case 60: return 'proficient';
                        // case 80: return 'advanced';
                        case 100: return 'expert';
                        default: return '';
                    }
                },
            },
            pointLabels: {
                fontSize: 14,
                fontColor: 'lightgray',
            },
            angleLines: {
                color: 'lightgray',
            },
            gridLines: {
                color: 'darkslategray',
            }
        },
        legend: {
            display: false,
            labels: {
                fontSize: 18,
                fontColor: 'lightgray',
            },
        },
    },
    /**
     * @param {string} elementId
     */
    create(elementId) {
        new Chart(document.getElementById(elementId), {
            type: 'radar',
            data: this.data,
            options: this.options,
        });
    },
}

const frameworksChart = {
    data: {
        labels: ['Spring', 'Spring Boot', 'KTor', 'Python', 'Javascript', 'Bash'],
        datasets: [{
            data: [90, 80, 70, 60, 60, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    // type: 'categoryPercentage',
                    beginAtZero: true,
                    // labels: ['n00b', 'interm', 'expert'],
                },
            }],
        }
    },
    create(elementId) {
        new Chart(document.getElementById(elementId), {
            type: 'horizontalBar',
            data: this.data,
            options: this.options,
        });
    }
}

languagesChart.create('languageChart');
frameworksChart.create('frameworksChart');
