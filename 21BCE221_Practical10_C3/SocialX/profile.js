// let app = angular.module('app', []);

app.controller('ctrl', function($scope) 
{
    $scope.posts =
    [
        {
            class: "post purple",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Urvish",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        }, 
        {
            class: "post red",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Urvish",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        },
        {
            class: "post yellow",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Urvish",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        },
        {
            class: "post purple",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Urvish",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        }
    ]

    $scope.liked = function(post)
    {
        // console.log(1);
        post.name = "heart";
    }

    // $scope.profile_name_here = localStorage.getItem("current_user_name");
});