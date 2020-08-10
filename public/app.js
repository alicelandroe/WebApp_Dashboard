// Remove the alert message by clicking X 

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', (e) => {
    const alertMessage = document.querySelector('.alert');
    alertMessage.style.display = 'none';
})

// TRAFFIC GRAPH
const trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
const myChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: [
                'rgba(127,134,202, 0.5)'
            ],
            borderColor: [
                'rgba(127,134,202, 1)'
            ],
            borderWidth: 1,
            pointRadius: 5,
            pointBorderWidth: 2,
            pointBorderColor: 'rgba(127,134,202, 1)',
            pointBackgroundColor: 'rgb(255,255,255)',
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
            },
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// DAILY TRAFFIC CHART

const dailyCanvas = document.getElementById('dailyCanvas').getContext('2d');
const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
            }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    });

// MOBILE USERS CHART

const mobileUsers = document.getElementById('mobile-users').getContext('2d');
const mobileChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels:  ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'right',
         },
        title: {
            display: false,
        },
    }
});

const user = document.querySelector('.message-user__searchbox');
const message = document.querySelector('.message-user__textbox');
const send = document.querySelector('.send-button');


send.addEventListener('click', (e) => {
    if (user.value === "" && message.value === "") {
         alert("Please choose a recipient, and write a message! :)");
     } 
    else if (user.value === "" && message.value !== "") {
        alert("Please choose a recipient! :)");
    } 
    else if (user.value !== "" && message.value === "") {
        alert("Please write a message! :)");
    } 
    else {
        alert(`Your message was sent to ${user.value}! :)`);
    }
})


