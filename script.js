const app = angular.module("portfolioApp", []);
app.controller("PortfolioController", function ($scope, $http) {
    // Portfolio data
    $scope.about = "I am a passionate Computer Science student specializing in Full Stack Development and technologies such as Artificial Intelligence and Machine Learning. I am driven by the desire to solve complex real-world problems and continuously expand my technical expertise. My focus on full-stack development equips me to contribute effectively at any phase of a project. I am eager to take on challenging projects that push my capabilities, with the ultimate goal of contributing to innovative initiatives that can transform the world through AI.";
    $scope.skills = ["Python", "Java", "HTML", "CSS", "JavaScript","Angular","Node.js","MongoDB"];
    $scope.projects = [
        { title: "PhishDetect", description: "•	Designed and developed a phishing website detection system that leverages machine learning algorithms and integrates with VirusTotal API to accurately classify websites as safe or malicious, providing users with a secure browsing experience.•	Built a full-stack web application using Flask, featuring a user-friendly interface, backend API integration, and data storage capabilities, to handle user input, store contact information, and display results in a seamless and efficient manner." },
        { title: "Credit Card Fraud Detection", description: "•	Developed  web-based application using Streamlit that performs real-time credit card fraud detection using their report.•Integrated ML model using Streamlit and Provide a user interface which can be interactive and user friendly." },
    ];

    // Chat feature
    $scope.messages = [];
    $scope.newMessage = { name: "", text: "" };

    // Load messages
    $http.get("/api/messages").then((response) => {
        $scope.messages = response.data;
    });

    // Send message
    $scope.sendMessage = function () {
        $http.post("/api/messages", $scope.newMessage).then((response) => {
            $scope.messages.push(response.data);
            $scope.newMessage = { name: "", text: "" };
        });
    };
});
