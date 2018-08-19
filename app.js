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


/**
 * 
 *      for me its is best api for zip code  
 * 
 * http://maps.googleapis.com/maps/api/geocode/json?address=201307&sensor=true
 */



// creating single obje

//$(

//     ()=>{

//         $.getJSON(
//             'http://maps.googleapis.com/maps/api/geocode/json?address=201307&sensor=true'
//             ,{
//                 //optional settings 
//             }
//         ).done(
//             (res)=>{
//                 i = 0 
//                 console.log(res);
//                 res.items.forEach(e => {
                    
//                     console.log( e.media.m);
//                     li = document.createElement('li');
//                     img = document.createElement('img');
//                     li.appendChild(img);
//                     document.querySelector('.img').appendChild(li);
//                     $('img')[i].src = e.media.m;
//                     i++;
//                 });
//                 // here success code
//             }

//         ).fail(
//             (failres)=>{
//                 console.log(failres);
//                 console.log('here something going wrong');
//                  // some failed code   
//             }
//         )

//     }

// )



/**
 * 
 *  Google Zip code Api Test 
 * 
 * 
 */

$(
    ()=>{
        $("#zip").change(
            (eve)=>{
                let url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+$('#zip').val()+'&sensor=true';
                console.log(url);
                $.getJSON(
                    url,
                    {

                    }
                ).done((res)=>{
                    console.log(res);
                    if (res.results.length>0){ 
                        $('span').css('display', 'none');   
                        let add =  res.results[0].address_components;
                        console.log(add.status);
                        add.forEach(add => {

                            add.types.forEach((type)=>{
                                if (type == 'administrative_area_level_2'){
                                    $('#ct').val(add.long_name);
                                }
                                if (type == 'administrative_area_level_1'){
                                    $('#st').val(add.long_name);

                                } 
                                if (type == 'country' ){
                                    $('#con').val(add.long_name);
                                }

                            })


                        });
                    } else {
                        $('span').css('display','inline');    
                        $('#ct').val('');
                    
                    
                        $('#st').val('');

                    
                    
                        $('#con').val('');


                    }

                    
        
                }).fail((res)=>{
                    console.log(res);
                    
                    console.log('net Error');

                })

            }

        )
    }
);