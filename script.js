const app = angular.module("portfolioApp", []);
app.controller("PortfolioController", function ($scope, $http) {
    // Portfolio data
    $scope.about = "I am a passionate Computer Science student...";
    $scope.skills = ["Python", "Java", "HTML", "CSS", "JavaScript"];
    $scope.projects = [
        { title: "PhishDetect", description: "Phishing detection system..." },
        { title: "Credit Card Fraud Detection", description: "Real-time fraud detection app..." },
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
