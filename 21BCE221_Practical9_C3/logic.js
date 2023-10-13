let app = angular.module('app',[]);

app.controller('ctrl',function($scope)
{
    

    $scope.shoes = 
    [
        {
            src: "images/shoes1.jpg",
            title: "Running Shoes",
            price : 99,
            desc: " Designed for running with flexible soles and lightweight breathable upper, providing cushioning and support for high-impact activities.",
            line: "description card1",
            btn: "btn1 buy",
            id: "Shoes1"
        },
        {
            src: "images/shoes2.jpg",
            title: "Basketball Shoes",
            price : 149,
            desc: "Designed for basketball players with high-top design providing ankle support and soles with good grip for traction on the court.",
            line: "description card2",
            btn: "btn2 buy",
            id: "Shoes2"
        },
        {
            src: "images/shoes3.jpg",
            title: "Cross-Training Shoes",
            price : 199,
            desc: "Designed for a variety of activities, including weightlifting and aerobics, with a balance of support, cushioning, and flexibility.",
            line: "description card3",
            btn: "btn3 buy",
            id: "Shoes3"
        },
        {
            src: "images/shoes4.jpg",
            title: "Soccer Cleats",
            price : 179,
            desc: "Designed for soccer players with cleats on the sole for traction on grass or turf and a lightweight, breathable upper for quick movements on the field.",
            line: "description card4",
            btn: "btn4 buy",
            id: "Shoes4"
        },
    ]

    $scope.earbuds = 
    [
        {
            src: "images/earbuds1.jpg",
            title: "Apple TWS",
            price : 999,
            desc: "Apple's true wireless earbuds, the AirPods, offer easy and seamless pairing with Apple devices via their H1 chip. They have a comfortable, one-size-fits-all design and offer up to 5 hours of listening time on a single charge, with an additional 24 hours available from the charging case. They also feature touch controls and voice-activated access to Siri.",
            line: "description card2",
            btn: "btn2 buy",
            id: "earbuds1"
        },
        {
            src: "images/earbuds2.jpg",
            title: "Boat TWS",
            price : 99,
            desc: "Boat True Wireless Stereo (TWS) earbuds are a type of wireless earbuds manufactured by the Indian consumer electronics company Boat. They are designed to provide a high-quality audio experience without the hassle of wires. Boat TWS earbuds come with features such as Bluetooth connectivity, touch controls, and noise cancellation. They are popular among people who want to enjoy music, podcasts, and phone calls on the go.",
            line: "description card3",
            btn: "btn3 buy",
            id: "earbuds2"
        },
        {
            src: "images/earbuds3.jpg",
            title: "Leaf TWS",
            price : 499,
            desc: "Leaf True Wireless Stereo (TWS) is a type of earbuds that provides a wireless audio experience with high-quality sound. They offer a secure and comfortable fit with no cords or wires, allowing for complete freedom of movement. Leaf TWS also comes with a charging case that provides extended battery life, making them ideal for on-the-go use.",
            line: "description card4",
            btn: "btn4 buy",
            id: "earbuds3"
        },
        {
            src: "images/earbuds4.png",
            title: "Beats TWS",
            price : 459,
            desc: "Beats True Wireless Stereo (TWS) earbuds are a type of wireless earbuds that offer a high-quality audio experience without the hassle of wires. They are designed to fit comfortably in the ear and offer a secure fit to prevent falling out during physical activities. The earbuds come with a charging case that provides extra battery life on the go. Beats TWS earbuds are compatible with most Bluetooth-enabled devices.",
            line: "description card1",
            btn: "btn1 buy",
            id: "earbuds4"
        }
    ]
    
    
    $scope.watch = 
    [
        {
            src: "images/watch1.jpg",
            title: "Apple Smart Watch",
            price : 999,
            desc: "Developed by Apple, it is one of the most popular smartwatches with a range of features including health and fitness tracking, Siri voice assistant, and cellular connectivity.",
            line: "description card4",
            btn: "btn4 buy",
            id: "watch1"
        },
        {
            src: "images/watch2.jpg",
            title: "Samsung Galaxy Watch",
            price : 499,
            desc: "Manufactured by Samsung, this smartwatch runs on Samsung's Tizen operating system and features GPS, heart rate monitoring, and access to a variety of apps.",
            line: "description card2",
            btn: "btn2 buy",
            id: "watch2"
        },
        {
            src: "images/watch3.jpg",
            title: "Fitbit Versa",
            price : 599,
            desc: "Made by Fitbit, this smartwatch is designed for fitness enthusiasts with features such as heart rate tracking, sleep monitoring, and a variety of exercise modes.",
            line: "description card1",
            btn: "btn1 buy",
            id: "watch3"
        },
        {
            src: "images/watch4.jpg",
            title: "Garmin Forerunner",
            price : 399,
            desc: "Designed for athletes, this smartwatch by Garmin features GPS, advanced training metrics, and a long battery life. It is geared towards runners, cyclists, and swimmers.",
            line: "description card3",
            btn: "btn3 buy",
            id: "watch4"
        }
    ]

    $scope.phones = 
    [
        {
            src: "images/phone1.jpeg",
            title: "Apple iPhone 13 Pro",
            price : 1999,
            desc: "The iPhone 13 Pro is the latest flagship smartphone from Apple. It features a 6.1-inch Super Retina XDR display with ProMotion technology for smoother scrolling and adaptive refresh rates. The phone is powered by the A15 Bionic chip for fast and efficient performance, and it comes with a triple-camera system that includes an ultra-wide lens, a wide lens, and a telephoto lens. The iPhone 13 Pro is also equipped with 5G connectivity and a longer-lasting battery.",
            line: "description card3",
            btn: "btn3 buy",
            id: "phone1"
        },
        {
            src: "images/phone2.jpg",
            title: "Samsung Galaxy S21",
            price : 1599,
            desc: "The Samsung Galaxy S21 is a high-end smartphone with a 6.2-inch dynamic AMOLED display and a resolution of 1080 x 2400 pixels. It is powered by a 5nm Exynos 2100 processor and runs on Android 11. The phone features a triple-lens rear camera with 64 MP, 12 MP, and 12 MP lenses, as well as a 10 MP front-facing camera. It is available in various storage options and colors.",
            line: "description card2",
            btn: "btn2 buy",
            id: "phone2"
        },
        {
            src: "images/phone3.jpg",
            title: "Samsung Galaxy Z Fold 3",
            price : 1399,
            desc: "The Samsung Galaxy Z Fold 3 is a foldable smartphone with a 7.6-inch Dynamic AMOLED 2X display that can fold in half. It features a triple rear camera system, a 10MP front-facing camera, and a 4MP under-display camera. The device is powered by a Snapdragon 888 processor, has 12GB of RAM, and runs on the Android 11 operating system. It also supports 5G connectivity and comes with a stylus pen.",
            line: "description card1",
            btn: "btn1 buy",
            id: "phone3"
        },
        {
            src: "images/phone4.jpg",
            title: "Apple iPhoneX",
            price : 1899,
            desc: "The iPhone X is a smartphone developed and produced by Apple Inc. It was released in 2017 and features a 5.8-inch Super Retina OLED display, Face ID facial recognition technology, and a dual-lens rear camera system. It is powered by Apple's A11 Bionic chip and runs on iOS, Apple's mobile operating system.",
            line: "description card4",
            btn: "btn4 buy",
            id: "phone4"
        }
    ]

    $scope.cart = [];
    $scope.total_amount = 0;
    $scope.total_product = 0;

    $scope.add_to_cart = function(item)
    {
        $cart_on = 1;
        
        $scope.total_amount = $scope.total_amount + item.price;
        // console.log($scope.cart);

        let index = $scope.cart.findIndex(function(product)
        {
            return item.id === product.id
        })

        $scope.select_color = Math.floor(Math.random() * 4) + 1;
        $scope.sel_line = "description card" + $scope.select_color; 
        // console.log($scope.sel_line)
        $scope.sel_btn = "buy btn" + $scope.select_color; 
        
        if(index == -1)
        {
            $scope.cart.push
            ({
                src: item.src,
                title: item.title,
                price: item.price,
                desc: item.desc,
                line: $scope.sel_line,
                btn: $scope.sel_btn,
                id: item.id,
                quantity: 1
            })
            
        }else
        {
            $scope.cart[index].quantity++;
        }
        
        // console.log($scope.cart)
        $scope.total_product++;
    }
    
    $scope.remove_from_cart = (item)=>{
        // alert("Are you sure want to remove "+item.title+" from your cart");
        $scope.total_amount = $scope.total_amount - (item.price*item.quantity);
        $scope.total_product -= item.quantity;
        let index = $scope.cart.indexOf(item);
        // console.log($scope.index);
        console.log(index);
        $scope.cart.splice(index,1);
        // console.log($scope.cart);

    }

    $scope.add_one = function(item)
    {
        $scope.total_amount = $scope.total_amount + item.price;
        // console.log($scope.cart);

        let index = $scope.cart.findIndex(function(product)
        {
            return item.id === product.id
        })

        $scope.cart[index].quantity++;
        $scope.total_product++;
    }
    
    $scope.remove_one = function(item)
    {

        let index = $scope.cart.findIndex(function(product)
        {
            return item.id === product.id
        })

        if(item.quantity == 1)
        {
            $scope.total_amount = $scope.total_amount - (item.price*item.quantity);
            $scope.cart[index].quantity--;
            $scope.total_product--;
            $scope.remove_from_cart(item);
            return ;
        }

        $scope.total_amount = $scope.total_amount - item.price;
        // console.log($scope.cart);

        $scope.cart[index].quantity--;
        $scope.total_product--;
    }

});
