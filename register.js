$(document).ready(function(){
    $("#registerForm").validate({
        rules:{
            username:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
                
            },
            place:{
                required:true

            },
            gender:{
                required:true
            },
            contact:{
                required:true,
                digits:true
            },
            education:{
                required:true
            },
            graduation:{
                required:true
            },
            about:{
                required:true,
                minlength:10,
                maxlength:50
                
            },
            join:{
                required:true,


            },
            motivate:{
                required:true,
                minlength:5,
                maxlength:50

            },
            checkBox:{
                required:true
            },
            Learn:{
                required:true
            },
            Employment:{
                required:true
            },
            nameCollage:{
                required:true
                

            }
        }
    })
})