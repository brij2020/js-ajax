// function readFile(inp){

//     if(inp.files && inp.files[0]){

//         fileReader = new FileReader();
//         fileReader.onload = function(eve) {

//             img = document.getElementById('img');
//             img.src = eve.target.result;
//             img.style.display = 'block';
//         }
//     }
//     fileReader.readAsDataURL(inp.files[0]); // event tigger when file is readed and ready to use 

// }


// creating single obje

$(

    ()=>{

        $.getJSON(
            'http://api.flickr.com/services/feeds/photos_public.gne?id=32612727@N07&lang=en-us&format=json&jsoncallback=?'
            ,{
                //optional settings 
            }
        ).done(
            (res)=>{
                console.log(res);
                // here success code
            }
        ).fail(
            (failres)=>{
                console.log(failres);
                console.log('here something going wrong');
                 // some failed code   
            }
        )

    }

)