let app = angular.module('app', []);

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
            profilename: "Kevin",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        },
        {
            class: "post yellow",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Ved",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        },
        {
            class: "post purple",
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            profilename: "Smit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veritatis recusandae harum, eius illo sapiente! Nesciunt harum impedit, eius molestias, beatae, explicabo doloribus aperiam incidunt consequuntur vel sint dolor corporis!",
            name: "heart-outline"
        }
    ]

    
    $scope.liked = function(post)
    {
        console.log(1);
        post.name = "heart";
    }

    $scope.newpeps = 
    [
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Pranshav"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Ahan"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Uday"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Naitik"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Yuvraj"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Vyom"
        },
        {
            profileimg: "SocialX-Logo\\profile-photo.jpg",
            name: "Krishna"
        }
    ]





    $scope.chat =
    [
        {
            text: "Hii!",
            class: "left"
        }, 
        {
            text: "Hello!",
            class: "right"
        }, 
        {
            text: "How are you?",
            class: "left"
        }, 
        {
            text: "I'm fine, what's going on?",
            class: "right"
        }, 
        {
            text: "Well, I'm going to India!!!",
            class: "left"
        }, 
        {
            text: "Oh Great!",
            class: "right"
        }, 
        {
            text: "Wanna come?",
            class: "left"
        }, 
        {
            text: "Yeah, let's catch up...",
            class: "right"
        }, 
    ]

    $scope.add_msg = function(message)
    {
        let msg = {
            text: message,
            class: "right"
        }

        $scope.chat.push(msg);   
    }



});